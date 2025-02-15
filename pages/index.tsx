import {default as ImageNext} from "next/image";
import { useRouter } from "next/navigation";

import localFont from "next/font/local";
import UserShowElement from "@/components/userShowElement";
import { Button, Image, image } from "@heroui/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const router = useRouter();
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid min-h-screen py-3 pb-20 gap-16 sm:px-10  font-[family-name:var(--font-geist-sans)]`}
    >
        <div className="flex flex-col max-w-[1000px] smi:px-10 smi:mt-[-40px]">
          <img src="/promo/logo.png" alt="" className="w-[350px] m-auto mdi:w-[300px]"/>
        <h1 className="m-auto mt-[10px] text-[7mm] font-semibold text-[#8287eb] smi:text-[6mm]">Dê vida aos seus textos</h1>
        <h1 className="m-auto mt-[0] text-[10mm] font-semibold text-black text-center smi:text-[8mm]">Em poucos cliques crie audios facilmente </h1>
        <span className="m-auto mt-[10px] text-lg font-normal opacity-65 text-black text-justify">Você pode usar nosso gerador de audios personalizados de maneira facil. Vamos lá!</span>
        <div className="flex flex-row m-auto mt-8 gap-3">
          <Button
            color="primary"
            variant="shadow"
            className="w-[250px] h-[60px] lgi:w-[190px] lgi:h-[60px]"
            onClick={() => router.push("/produto")}
          >
            Comece gratuitamente
          </Button>
          <Button onClick={() => router.push("/sobre")}
            color="primary" variant="ghost" className="w-[250px] h-[60px] lgi:w-[190px] lgi:h-[60px]">
            Saiba mais
          </Button>
        </div>
        <div className="flex flex-row gap-8 mt-16 mdi:flex-col">
          <div className="w-[50%] mdi:w-[100%]">
          <p className="text-lg text-justify">
        Desde o início, nossa missão tem sido simplificar a criação de áudios personalizados, tornando essa tecnologia acessível para todos. Com apenas alguns cliques, você pode transformar qualquer texto em uma narração profissional, sem complicações.

Nosso gerador de áudio foi projetado para ser intuitivo, ágil e eficiente, permitindo que você crie conteúdos sonoros com naturalidade e qualidade impressionante. Seja para vídeos, apresentações, acessibilidade ou qualquer outra necessidade, estamos aqui para tornar esse processo simples e envolvente.

Vamos começar? Transforme suas palavras em voz agora mesmo! 🚀🎙️
        </p>
          </div>
          <div className="m-auto">
            <Image
              isBlurred
              alt="HeroUI Fruit Image with Zoom"
              src="/promo/promoinicio.png"
              className="w-auto h-[350px] m-auto mr-0 lgi:h-[450px]"
            />
          </div>
        </div>

        <div className="h-5"></div>
        <h1 className="m-auto ml-0 mt-[10px] text-[7mm] font-semibold text-[#8287eb] smi:text-[6mm]">Criadores do GENAudio</h1>
        <div className="h-2"></div>
        <div className="flex flex-wrap flex-row gap-3">
        <UserShowElement url="https://github.com/marco0antonio0" name="Marco Antonio" username="marco0antonio0" src="https://github.com/marco0antonio0.png?size=100px" text="Entusiasta da tecnologia e inovação, sempre em busca de soluções eficientes e criativas no desenvolvimento de software."/>
        <UserShowElement url="https://github.com/EliasPacheco" name="Elias Pacheco" username="EliasPacheco" src="https://github.com/EliasPacheco.png?size=100px" text="Desenvolvedor de software focado em criar experiências digitais inteligentes e impactantes, unindo tecnologia e criatividade. 🚀"/>
        </div>
        <p className="text-lg text-justify mt-10">
        A acessibilidade e a inovação caminham juntas no GENAudio. Transforme qualquer texto em narrações envolventes e naturais com apenas alguns cliques.

Crie áudios para treinamentos, vídeos explicativos, conteúdos educacionais ou qualquer outra necessidade. Com nossa plataforma, a sua voz ganha vida de forma simples e intuitiva. Comece agora mesmo! 🎧✨
        </p>
        </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImageNext
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Fale conosco
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImageNext
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Criadores
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImageNext
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Veja mais →
        </a>
      </footer>
    </div>
  );
}