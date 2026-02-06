
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Technologies from "@/components/ui/Technologies";
import Head  from "next/head";
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
          <h1 className="text-2xl font-bold">Daniel Solís Alfonso</h1>
          <h2 className="text-lg font-semibold text-white-100 mt-1">
            Programador, Desarrollador de Software
          </h2>
          <p className="text-sm text-gray-400 mt-1">🌍 Sevilla</p>

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="bg-green-700 text-white text-sm px-3 py-1 rounded-full">
              danielsolisalf@gmail.com
            </span>
            <a
              title="Curriculum"
              href="/documento/CV_Daniel_Solis_Alfonso.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-500 text-green-400 rounded-full px-3 py-1 text-sm hover:bg-green-800"
            >
              📄 CV
            </a>
            <a
              title="Github"
              href="https://github.com/danirb21"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-500 text-green-400 rounded-full px-3 py-1 text-sm hover:bg-green-800"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              title="Linkedin"
              href="https://www.linkedin.com/in/daniel-sol%C3%ADs-alfonso-10723333a/"
              target="_blank"
              className="border border-green-500 text-green-400 rounded-full px-3 py-1 text-sm hover:bg-green-800"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </section>

      {/* 🔽 Nueva sección: Sobre mí */}
      <section className="max-w-3xl mx-auto text-left">
        <h2 className="text-3xl font-bold text-green-300 mb-1">Sobre mí</h2>
        <p className="text-gray-300 text-base leading-relaxed">
          Apasionado por la programación y el desarrollo de software, he tenido la oportunidad de participar en proyectos reales durante mis prácticas en Guadaltech (Odoo) y Edahula (Oracle Apex), a lo largo de mi formación y en mis propios proyectos. 
          Tengo varios Proyectos Personales en mi cuenta de Github.
          <br></br>Como proyecto final de mi formación desarrollé una aplicación completa de gestión de bibliotecas en android. 
          Me implico al máximo en lo que hago, con iniciativa, capacidad de adaptación y muchas ganas de seguir creciendo profesionalmente y aportar desde el primer día.
        </p>
      </section>
      <section className="max-w-3xl mx-auto text-left">
        <Technologies />
      </section>
      <hr className="h-px my-4 border-gray-500 dark:border-neutral-500"></hr>
      {/*
      <section className="max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-bold text-green-300 mt-4">Experiencia Laboral</h2>
        <h3 className="text-1xl font-bold text-white mt-2">Mantenimiento y Desarrollo en Odoo </h3>
        <p className="text-sm text-gray-300 mt-1">Practicas Realizadas en Guadaltech, encargado de soporte, mantenimiento y desarrollo en Odoo</p>
        <p className="text-xl text-white mt-2 font-bold">Tecnologias utilizadas</p>
        <p className="text-1g text-rose-600 font-bold text-right">ABR.2024 -JUN.2024</p>
      </section>
     */}
      <section className="max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-bold text-green-300 mt-8">Experiencia Laboral</h2>
        {/* Título y fecha en la misma línea */}
        <div className="flex justify-between items-center mt-2">
          <h3 className="text-lg font-bold text-white">Mantenimiento y Desarrollo en Odoo</h3>
          <span className="text-sm text-rose-500 font-semibold">ABR.2024 – JUN.2024</span>
        </div>
        <p className="text-sm text-gray-300 mt-1">
          Prácticas realizadas en Guadaltech, encargado de soporte, mantenimiento y desarrollo en Odoo.
        </p>
        <div className="flex items-baseline gap-2 mt-2">
          <h3 className="text-1g font-bold text-white">Tecnologías usadas:</h3>
          <p className="text-sm text-gray-300">Python, Odoo</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h3 className="text-lg font-bold text-white">Desarrollo Web con la tecnologia Oracle Apex</h3>
          <span className="text-sm text-rose-500 font-semibold">ABR.2022 - JUN.2022</span>
        </div>
        <p className="text-sm text-gray-300 mt-1">
          Prácticas realizadas en Edahula, encargado de desarrollar webs, utilizando Oracle Apex
        </p>
        <div className="flex items-baseline gap-2 mt-2">
          <h3 className="text-1g font-bold text-white">Tecnologías usadas:</h3>
          <p className="text-sm text-gray-300">Oracle Apex, SQL, PL/SQL, Javascript</p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-bold text-green-300 mt-3">Formacion</h2>
        <div className="flex justify-between items-center mt-2">
          <h3 className="text-xl font-bold text-white mt-1">Tecnico Superior de Desarrollo de Aplicaciones Web</h3>
          <span className="text-sm text-rose-500 font-semibold mt-1">NOV. 2025</span>
        </div>
        <h4 className="text-1g text-gray-300 mt-1">Centro educativo: IES Jacaranda (Brenes)</h4>
        <div className="flex justify-between items-center mt-2">
          <h3 className="text-xl font-bold text-white mt-1">Tecnico Superior de Desarrollo de Aplicaciones Multiplataforma</h3>
          <span className="text-sm text-rose-500 font-semibold mt-1">SEPT.2022 - JUN.2024</span>
        </div>
        <h4 className="text-1g text-gray-300 mt-1">Centro educativo: Campus Camara FP Sevilla</h4>
        <div className="flex justify-between items-center mt-2">
          <h3 className="text-xl font-bold text-white mt-1">Tecnico Sistemas MicroInformatico y Redes</h3>
          <span className="text-sm text-rose-500 font-semibold mt-1">SEPT.2020 - JUN.2022</span>
        </div>
        <h4 className="text-1g text-gray-300 mt-1">Centro educativo: IES Cantillana</h4>
      </section>
      <section className="max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-bold text-green-300 mt-2">Formacion Complementaria</h2>
        <div className="flex justify-between items-center mt-1">
          <h3 className="text-xl font-bold text-white mt-1">Curso Inteligencia Artificial</h3>
          <span className="text-sm text-rose-500 font-semibold mt-1">ABR.2025 - MAY.2025</span>
        </div>
        <h4 className="text-1g text-gray-300 mt-1">Andalucia Emplea+</h4>
        <div className="flex justify-between items-center mt-1">
          <h3 className="text-xl font-bold text-white mt-1">Curso Creacion y Publicacion Webs</h3>
          <span className="text-sm text-rose-500 font-semibold mt-1">ABR.2025 - JUN.2025</span>
        </div>
        <h4 className="text-1g text-gray-300 mt-1">MainJobs</h4>
      </section>
      <hr className="h-px my-4 border-gray-500 dark:border-neutral-500"></hr>
      <section className="max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-bold text-green-300 mt-3">Proyectos</h2>
        <h3 className="text-xl font-bold text-white mt-5">1. AppBiblioteca</h3>
        {/* Aqui iria la descripcion del proyecto */}
        <p className="text-sm text-gray-300 mt-2">AppBiblioteca es una aplicacion de movil encargada de gestionar una biblioteca con funcionalidades como buscar, borrar, editar libros. 
          Tambien permite gestionar citas con los clientes manejando la fecha y los libros a devolver. </p>
         <div className="mt-5">
          <a
            title="Repositorio App"
            href="https://github.com/danirb21/AppBiblioteca"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-green-500 text-green-400 rounded-full px-3 py-1 text-sm hover:bg-green-800"
          >
            Repositorio
          </a>
          </div>
        {/* <h4 className="text-lg font-bold text-gray-300 whitespace-nowrap mt-3">Tecnologías Usadas:</h4> */}
        <div className="flex items-center gap-3 flex-wrap mt-6">
          <Badge
            title="Java"
            className="rounded-full px-3 py-1 flex items-center gap-2 bg-white"
          >
            <Image src="/java.png" alt="java" width={35} height={35} />
          </Badge>

          <Badge
            title="Android Studio"
            className="rounded-full px-3 py-1 flex items-center gap-2 bg-green-400"
          >
            <Image src="/androidstudio.svg" alt="Android Studio" width={35} height={35} />
          </Badge>
          <Badge
            title="Firebase"
            className="rounded-full px-3 py-1 flex items-center gap-2 bg-yellow-700"
          >
            <Image src="/Firebase.svg" alt="Firebase" width={80} height={80} />
          </Badge>
        </div>
        <div className="flex items-center gap-3 mt-10">
          <h3 className="text-xl font-bold text-white">2. Advent Of Code </h3>
          <Image
            title="Advent of Code 2024"
            src="/aoc.png"
            alt="Advent of Code"
            width={45}
            height={45}
          />
        </div>
        <p className="text-sm text-gray-300 mt-1">Advent of Code es un calendario de Adviento de pequeños rompecabezas de programación
          para una variedad de niveles de habilidad que se pueden resolver en cualquier lenguaje de programación que desees.</p>
         <div className="mt-5">
          <a
            title="Repositorio Aoc"
            href="https://github.com/danirb21/AdventOfCode"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-green-500 text-green-400 rounded-full px-3 py-1 text-sm hover:bg-green-800"
          >
            Repositorio
          </a>
        </div>
        {/* <h4 className="text-lg font-bold text-gray-300 whitespace-nowrap mt-3">Tecnologías Usadas:</h4> */}
        <div className="flex items-center gap-3 flex-wrap mt-6">
          <Badge
            title="Java"
            className="rounded-full px-3 py-1 flex items-center gap-2 bg-white"
          >
            <Image src="/java.png" alt="java" width={35} height={35} />
          </Badge>
        </div>   
        <h3 className="text-xl font-bold text-white mt-5">3. ProjectCs</h3>
        <p className="text-sm text-gray-200 mt-1">Proyecto basado en el juego Counter-Strike 2 y en su sistema de ranking llamado VRS (valve ranking) en su mundo competitivo (e-sports).</p>
        {/* <h4 className="text-lg font-bold text-gray-300 whitespace-nowrap mt-3">Tecnologías Usadas:</h4> */}
        <div className="mt-5">
          <a
            title="Repositorio ProjectCs"
            href="https://github.com/danirb21/ProjectCs"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-green-500 text-green-400 rounded-full px-3 py-1 text-sm hover:bg-green-800"
          >
            Repositorio
          </a>
        </div>
        <div className="flex items-center gap-3 flex-wrap mt-6">
          <Badge
            title="JavaScript"
            className="rounded-full px-3 py-1 flex items-center gap-2 bg-white"
          >
            <Image src="/javascript.svg" alt="javascript" width={35} height={35} />
          </Badge>
          <Badge
            title="React Frontend"
            className="rounded-full px-3 py-1 flex items-center gap-2 bg-white"
          >
            <Image src="/react.svg" alt="React" width={35} height={35} />
          </Badge>
          <Badge
            title="Node.js backend"
            className="rounded-full px-3 py-1 flex items-center gap-2 bg-white"
          >
            <Image src="/nodejs.svg" alt="NodeJs" width={40} height={40} />
          </Badge>
          <Badge
            title="mysql"
            className="rounded-full px-3 py-1 flex items-center gap-2 bg-white"
          >
            <Image src="/mysql.svg" alt="mysql" width={50} height={50} />
          </Badge>
        </div>
          <h3 className="text-xl font-bold text-white mt-5">4. Ahorcado</h3>
          <p className="text-sm text-gray-200 mt-1">Proyecto basado en un juego clásico reinventado (Ahorcado) con modo competitivo, login de usuarios y modo invitado.
            Gana puntos, compite en la leaderboard global y mejora tu ranking con cada partida.
              Preparado para futura version web</p>
           <div className="mt-5">
            <a
              title="Repositorio Ahorcado"
              href="https://github.com/danirb21/Ahorcado"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-500 text-green-400 rounded-full px-3 py-1 text-sm hover:bg-green-800"
            > 
            Repositorio</a>
          </div>
          <div className="flex items-center gap-3 flex-wrap mt-6">
            <Badge
            title="Python"
            className="rounded-full px-3 py-1 flex items-center gap-2 bg-white"
            >
            <Image src="/python.svg" alt="python" width={35} height={35} />
          </Badge>
            <Badge
            title="Flask"
            className="rounded-full px-3 py-1 flex items-center gap-2 bg-white"
            >
            <Image src="/flask_letras.svg" alt="Flask" width={50} height={50} />
          </Badge>
          <Badge
            title="Sqlite"
            className="rounded-full px-3 py-1 flex items-center gap-2 bg-white"
            >
            <Image src="/sqlite.svg" alt="Sqlite" width={55} height={55} />
          </Badge>
          </div>
        </section>
    </main>
  );
}
