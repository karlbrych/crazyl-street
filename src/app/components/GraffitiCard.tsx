import Link from "next/link";

export interface Post {
  id: number;
  title: string;
  text: string;
  author: string;
  date: string;
}

interface Props {
  post: Post;
}

export default function GraffitiCard({ post }: Props) {
  return (
    <div className="bg-zinc-900 p-4 rounded border-l-4 border-blue-400 shadow hover:shadow-lg transition">
      <Link href={`/crew-feed/${post.id}`}>
        <h2 className="text-xl font-bold text-purple-400 hover:underline cursor-pointer">
          {post.title}
        </h2>
      </Link>
      <p className="text-sm text-blue-400">{post.date} • {post.author}</p>
      <p className="mt-2">{post.text}</p>
    </div>
  );
}