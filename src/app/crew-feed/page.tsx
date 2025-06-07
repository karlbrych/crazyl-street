import { graffitiPosts } from "../utils/posts";
import GraffitiCard from "../components/GraffitiCard";

export default function CrewFeed() {
  return (
    <main className="p-6 text-white">
      <h1 className="text-3xl font-bold text-purple-400">Crew Feed</h1>
      <div className="mt-6 space-y-6">
        {graffitiPosts.map((post: typeof graffitiPosts[number]) => (
          <GraffitiCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}