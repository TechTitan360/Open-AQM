import Link from "next/link"
import { getPosts } from "@/lib/firebase/posts"
import { PostCard } from "@/components/community/post-card"
import { EmptyState } from "@/components/community/empty-state"

export async function PostsList({ category, search }: { category: string; search: string }) {
  const posts = await getPosts(category === "all" ? undefined : category, search)

  if (posts.length === 0) {
    return <EmptyState search={search} category={category} />
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link key={post.id} href={`/community/${post.id}`} className="transition-transform hover:scale-[1.01]">
          <PostCard post={post} />
        </Link>
      ))}
    </div>
  )
}
