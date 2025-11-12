import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <header className="w-full px-32 py-8 flex items-center justify-between relative">
      <nav className="flex gap-6 items-center text-md font-mont">
        <Link className="hover:underline" href="/">
          Home
        </Link>
        <Link className="hover:underline" href="/about">
          About
        </Link>
        <Link className="hover:underline" href="/projects">
          Projects
        </Link>
        <Link className="hover:underline" href="/articles">
          Articles
        </Link>
      </nav>

      <h2 className="p-4 rounded-[50px] font-bold text-light bg-dark absolute -translate-x-1/2 left-1/2 ">
        ND
      </h2>
      <nav className="flex gap-6 items-center">
        <Link
          href="https://www.linkedin.com/in/darren-nardol-9a6a07220/"
          target={"_blank"}
        >
          <Image src="img/linkedin.svg" alt="linkedin" width={24} height={24} />
        </Link>
        <Link href="https://github.com/Dada-nol/" target={"_blank"}>
          <Image
            src="img/logo-github.svg"
            alt="github"
            width={24}
            height={24}
          />
        </Link>
        <Link href="https://www.instagram.com/dada_nol/" target={"_blank"}>
          <Image src="img/twitter.svg" alt="instagram" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/dada_nol/" target={"_blank"}>
          <Image src="img/twitter.svg" alt="facebook" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/dada_nol/" target={"_blank"}>
          <Image src="img/twitter.svg" alt="instagram" width={24} height={24} />
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
