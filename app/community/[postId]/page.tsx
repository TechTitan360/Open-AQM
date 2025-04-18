import { Suspense } from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPostById } from "@/lib/firebase/posts"
import { PostDetail } from "@/components/community/post-detail"
import { CommentSection } from "@/components/community/comment-section"
import { CommentsSkeleton } from "@/components/community/comments-skeleton"
import { BackButton } from "@/components/community/back-button"

export async function generateMetadata({ params }: { params: { postId: string } }): Promise<Metadata> {
  const post = await getPostById(params.postId)

  if (!post) {
    return {
      title: "Post Not Found | Community Talks",
    }
  }

  return {
    title: `${post.title} | Community Talks`,
    description: post.content.substring(0, 160),
  }
}

export default async function PostPage({ params }: { params: { postId: string } }) {
  const post = await getPostById(params.postId)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BackButton />
      <PostDetail post={post} />
      <Suspense fallback={<CommentsSkeleton />}>
        <CommentSection postId={params.postId} />
      </Suspense>
    </div>
  )
}
