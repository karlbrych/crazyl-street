import Link from "next/link";
import { notFound } from "next/navigation";
import { graffitiPosts } from "../../utils/posts";
import Image from "next/image";
import Mimino from "../../components/Mimino";
interface Post {
  id: number;
  title: string;
  text: string;
  content: string;
  author: string;
  date: string;
}

interface Params {
  params: { id: string };
}

export default function Detail({ params }: Params) {
  const post = graffitiPosts.find(
  (p): p is Post => typeof p.content === 'string' && p.id === parseInt(params.id)
);

  if (!post) return notFound();

  return (
    <main className="p-6 text-white">
      <h1 className="text-3xl font-bold text-purple-400">{post.title}</h1>
      <p className="text-sm text-blue-400 mb-4">
        {post.date} • {post.author}
      </p>
      <p className="mt-4 whitespace-pre-line">{post.content}</p>
      <Link
        href="/crew-feed"
        className="inline-block mt-6 text-blue-400 hover:text-purple-400 underline"
      >
        <span className="text-2xl mr-2">←</span>
        <span className="underline">Zpět na Crew Feed</span>
      </Link>
      <Mimino></Mimino>
       <div className="overflow-hidden p-8 bg-black">
      <Image
        src="/nigger.png"
        alt="PIXEL GOBLIN CORE VIBE"
        width={96}
        height={96}
          className="relative z-10 
                   w-24 h-24 
                   rounded-[40%] 
                   scale-75 
                   animate-zoom-freakout 
                   skew-x-6 skew-y-6 
                   rotate-[360deg] 
                   contrast-[300%] brightness-[190%] hue-rotate-[220deg] saturate-[600%] 
                   border-[5px] border-dashed border-fuchsia-500 
                   ring-4 ring-cyan-300 ring-offset-2 
                   shadow-[0_0_40px_10px_rgba(255,0,255,0.8)] 
                   mix-blend-difference 
                   transition-all duration-300 ease-in-out 
                   group-hover:scale-[3] 
                   group-hover:rotate-[1440deg] 
                   group-hover:blur-sm 
                   group-hover:sepia 
                   motion-safe:animate-glitch"
                   
      />
    </div>
    </main>
  );
}


