import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="bg-black text-white py-4 px-6 flex items-center justify-between">
      <Link href="/">
        <Image
          src="/crazyl_street.png"
          alt="Crazyl Street logo"
          width={160}
          height={40}
          className="h-10 w-auto"
        />
      </Link>

      <ul className="flex space-x-6 text-lg">
        <li>
          <Link href="/" className="text-blue-400 hover:text-purple-400 transition">
            Domů
          </Link>
        </li>
        <li>
          <Link href="/o-scene" className="text-blue-400 hover:text-purple-400 transition">
            O scéně
          </Link>
        </li>
        <li>
          <Link href="/crew-feed" className="text-blue-400 hover:text-purple-400 transition">
            Crew Feed
          </Link>
        </li>
        <li>
          <Link href="/kontakt" className="text-blue-400 hover:text-purple-400 transition">
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}

