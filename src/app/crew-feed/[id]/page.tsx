import Link from "next/link";
import { notFound } from "next/navigation";
import { graffitiPosts } from "../../utils/posts";

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
  const post: Post | undefined = graffitiPosts.find(
    (p: Post) => p.id === parseInt(params.id)
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
    </main>
  );
}


