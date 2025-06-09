import Link from "next/link";
import Image from "next/image";
import { graffitiPosts } from "./utils/posts";
import GraffitiCard from "./components/GraffitiCard";
import Mimino from "./components/Mimino";

export default function Home() {
  const latestPosts = graffitiPosts.slice(0, 4);

  return (
    <>
    <main className="p-6 text-white flex flex-col items-center text-center">
      <Image
        src="/crazyl_street.png"
        alt="Crazyl Street logo"
        width={1000}
        height={300}
        className="mb-6"
      />

      <h1 className="text-4xl font-extrabold text-purple-400 mb-4">VÍTEJ NA CRAZYL STREET</h1>
      
      <div className="max-w-2xl mb-10 space-y-4">
        <p className="text-blue-400 text-lg">
          Místo, kde sprej křičí hlasitěji než slova.
        </p>
        <p className="text-blue-400 text-lg">
          Tady píšeme, co se nevejde na stěny.
        </p>
        <p className="text-blue-400 text-lg">
          Procházej spoty, čti crew talky a nech se unést tím, co leží mezi vlakem a betonem.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-purple-300 mb-4">Nejnovější články</h2>

      <div className="w-full max-w-3xl space-y-4">
        {latestPosts.map((post) => (
          <GraffitiCard key={post.id} post={post} />
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="/crew-feed"
          className="text-blue-400 hover:text-purple-400 underline text-lg"
        >
          Zobrazit celý Crew Feed →
        </Link>
      </div>
     <Mimino></Mimino>

    </main>
    <footer className="bg-black p-10">
  <img src="footer.png" alt="GLITCH SPIN ZOOM MELT FRENZY"
    className="w-80 h-80 
           animate-wiggle 
           rotate-[30deg] skew-x-12 skew-y-6 scale-125 
           blur-[2px] contrast-[250%] brightness-[190%] saturate-[300%] 
           hue-rotate-[270deg] grayscale-0 invert 
           border-4 border-dotted border-pink-600 
           rounded-3xl 
           shadow-[0_0_25px_10px_rgba(255,0,255,0.7)] 
           ring-8 ring-offset-4 ring-cyan-400 
           bg-gradient-to-br from-yellow-500 via-red-600 to-indigo-700 
           mix-blend-screen 
           transition-all duration-500 ease-linear 
           hover:rotate-[1080deg] hover:scale-[1.4] hover:blur-none hover:sepia 
           motion-reduce:animate-none"
/>
</footer>
    </>
  );
}


