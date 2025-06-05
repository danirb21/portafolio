import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AlignJustifyIcon } from "lucide-react";

export default function Home() {
  return (
    /*<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.js
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
  */
<main className="bg-neutral-800 text-white px-4 py-8">
  {/* Bloque actual: tu presentación */}
  <section className="max-w-4xl mx-auto mb-12 p-6 rounded-xl flex items-center gap-6 shadow-lg">
    {/* Imagen */}
    <img
      src="/mi_foto.jpg"
      alt="foto"
      className="w-28 h-28 rounded-full object-cover"
    />

    {/* Info */}
    <div>
      <h1 className="text-2xl font-bold">Daniel Solis Alfonso (DanielSama)</h1>
      <h2 className="text-lg font-semibold text-white-100 mt-1">
        Programador, Desarrollador de Software
      </h2>
      <p className="text-sm text-gray-400 mt-1">🌍 Sevilla</p>

      <div className="flex flex-wrap items-center gap-3 mt-4">
        <span className="bg-green-700 text-white text-sm px-3 py-1 rounded-full">
          danielsolisalf@gmail.com
        </span>
        <a
          href="#"
          className="border border-green-500 text-green-400 rounded-full px-3 py-1 text-sm hover:bg-green-800"
        >
          📄 CV
        </a>
        <a
          href="#"
          className="border border-green-500 text-green-400 rounded-full px-3 py-1 text-sm hover:bg-green-800"
        >
          🐱 GitHub
        </a>
        <a
          href="#"
          className="border border-green-500 text-green-400 rounded-full px-3 py-1 text-sm hover:bg-green-800"
        >
          💼 LinkedIn
        </a>
      </div>
    </div>
  </section>

  {/* 🔽 Nueva sección: Sobre mí */}
  <section className="max-w-3xl mx-auto text-left">
    <h2 className="text-3xl font-bold text-green-300 mb-4">Sobre mí</h2>
    <p className="text-gray-300 text-base leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id felis ut velit sollicitudin
      facilisis. Curabitur in nisi at metus tempus fermentum. Integer vel lacus nec ligula tempor
      tincidunt. Suspendisse at elit nec augue imperdiet accumsan.
    </p>
  </section>
<section className="max-w-3xl mx-auto text-left">
  <h2 className="text-2xl font-bold text-green-300 mb-4 mt-5">Tecnologías</h2>
  <p></p>
</section>
</main>
  );
}
