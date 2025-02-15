import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@heroui/react";
import prodImage from "@/public/produto/prod.png";
import { generateAudioAPI, getSpeedsAPI, getVoicesAPI } from "@/pages/api/apiservice";

const Produto: React.FC = () => {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState("");
  const [speed, setSpeed] = useState("");
  const [voices, setVoices] = useState([]);
  const [speeds, setSpeeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ text?: string; voice?: string; speed?: string }>({});

  useEffect(() => {
    async function fetchVoices() {
      const { voices } = await getVoicesAPI();
      setVoices(voices.map((voice) => ({ key: voice, label: voice.charAt(0).toUpperCase() + voice.slice(1) })));
    }
    fetchVoices();
  }, []);

  useEffect(() => {
    async function fetchSpeeds() {
      const { speeds } = await getSpeedsAPI();
      setSpeeds(speeds.map((speed) => ({ key: speed, label: `${speed}` })));
    }
    fetchSpeeds();
  }, []);

  const handleGenerate = async () => {
    let newErrors: { text?: string; voice?: string; speed?: string } = {};

    if (!text.trim()) newErrors.text = "Digite um texto para narrar.";
    if (!voice) newErrors.voice = "Selecione uma voz.";
    if (!speed) newErrors.speed = "Selecione a velocidade.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);

    try {
      const requestBody = {
        modo: "download",
        texto: text,
        velocidade: speed,
        voz: voice,
      };

      console.log("📡 Enviando para API:", requestBody);

      const result = await generateAudioAPI(requestBody.texto, requestBody.velocidade, requestBody.voz);

      if (!result.success) {
        setErrors((prev) => ({ ...prev, api: "❌ Erro ao gerar o áudio. Tente novamente." }));
      }
    } catch (error) {
      console.error("⚠️ Erro ao processar requisição:", error);
      setErrors((prev) => ({ ...prev, api: "Ocorreu um erro inesperado. Tente novamente." }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-50 items-center justify-center">
      <div className="flex w-full max-w-6xl items-center gap-8">
        <div className="flex-shrink-0 w-1/3">
          <Image src={prodImage} alt="Headphones" layout="responsive" />
        </div>

        <div className="flex flex-col w-2/3 space-y-2">
          <Input
            type="text"
            placeholder="Digite o texto que deseja narrar"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              if (errors.text) setErrors((prev) => ({ ...prev, text: undefined }));
            }}
            className="p-3 border rounded-lg w-full h-52 text-lg"
          />
          {errors.text && <p className="text-red-500 text-sm mt-1">{errors.text}</p>}

          <div className="flex items-center gap-4">
            <div>
              <Select
                className="max-w-xs w-40"
                items={voices}
                label="Escolher Voz"
                placeholder="Selecione uma voz"
                selectedKey={voice}
                onSelectionChange={(key) => {
                  if (typeof key === "string") {
                    setVoice(key);
                  } else if (key instanceof Set) {
                    setVoice(Array.from(key)[0] || "");
                  }
                  if (errors.voice) setErrors((prev) => ({ ...prev, voice: undefined }));
                }}
              >
              {voices.map(({ key, label }) => (
                <SelectItem key={key} value={key}>{label}</SelectItem>
              ))}
              </Select>
              {errors.voice && <p className="text-red-500 text-sm mt-1">{errors.voice}</p>}
            </div>

            <div>
              <Select
                className="max-w-xs w-40"
                items={speeds}
                label="Velocidade"
                placeholder="Selecione a velocidade"
                selectedKey={speed}
                onSelectionChange={(key) => {
                  if (typeof key === "string") {
                    setSpeed(key);
                  } else if (key instanceof Set) {
                    setSpeed(Array.from(key)[0] || "");
                  }
                  if (errors.speed) setErrors((prev) => ({ ...prev, speed: undefined }));
                }}
              >
                {speeds.map(({ key, label }) => (
                <SelectItem key={key} value={key}>{label}</SelectItem>
              ))}
              </Select>
              {errors.speed && <p className="text-red-500 text-sm mt-1">{errors.speed}</p>}
            </div>

            <Button onClick={handleGenerate} disabled={loading}>
              {loading ? "Gerando..." : "Gerar"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produto;
