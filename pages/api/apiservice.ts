import { NextResponse } from "next/server";

export async function generateAudioAPI(texto: string, velocidade: string, voz: string) {
  try {
    const response = await fetch("https://api-genaudio.dirrocha.com/gerar-audio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        modo: "download",
        texto: texto,
        velocidade: velocidade,
        voz: voz,
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro ao gerar o áudio. Código: ${response.status}`);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "audio_gerado.mp3"; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    return { success: true };
  } catch (error) {
    console.error("Erro ao gerar o áudio:", error);
    return { success: false };
  }
}

export async function getSpeedsAPI() {
  try {
    const response = await fetch("https://api-genaudio.dirrocha.com/listar-velocidades");
    const data = await response.json();

    console.log("Resposta da API de velocidades:", data);

    if (!data || !Array.isArray(data.velocidades)) {
      throw new Error("A API não retornou um array de velocidades válido.");
    }

    return { speeds: data.velocidades }; 
  } catch (error) {
    console.error("Erro ao buscar as velocidades:", error);
    return { speeds: [] };
  }
}

export async function getVoicesAPI() {
  try {
    const response = await fetch("https://api-genaudio.dirrocha.com/listar-vozes");
    const data = await response.json();

    console.log("Resposta da API de vozes:", data);

    if (!data || typeof data.vozes !== "object") {
      throw new Error("A API não retornou um objeto de vozes válido.");
    }

    const voiceNames = Object.keys(data.vozes);

    return { voices: voiceNames }; 
  } catch (error) {
    console.error("Erro ao buscar as vozes:", error);
    return { voices: [] };
  }
}
