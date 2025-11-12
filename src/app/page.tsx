import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-cols-1 md:grid-cols-2 items-center justify-center">
      <div className="flex justify-center">
        <Image
          src="/img/dada-AI.png"
          alt="vue de profil d'un jeune homme réalisé par AI"
          width={550}
          height={550}
        ></Image>
      </div>
      <section className="flex flex-col justify-center gap-2 md:ml-10">
        <h1 className="text-6xl font-semibold font-mont">
          Turning Vision Into <hr /> Reality With Code <hr /> And Design.
        </h1>
        <p>
          As a skilled full-stack developer, I am dedicated to turning ideas
          into
        </p>
        <p>
          innovative web applications. Explore my latest projects and articles,
        </p>
        <p>showcasing my expertise in React.js and web development.</p>
        <div className="flex gap-6 items-center m-4">
          <button className="px-8 py-3 bg-dark text-light text-md font-semibold rounded-lg">
            Resume
          </button>
          <Link className="underline hover:no-underline" href="">
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
