import { Suspense } from "react"
import type { Metadata } from "next"
import { CommunityHeader } from "@/components/community/community-header"
import { PostsList } from "@/components/community/posts-list"
import { PostsListSkeleton } from "@/components/community/posts-list-skeleton"
import { CategoryFilter } from "@/components/community/category-filter"

export const metadata: Metadata = {
  title: "Community Talks | Open AQM",
  description: "Join the conversation about air quality monitoring and environmental awareness",
}

export default function CommunityPage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string }
}) {
  const category = searchParams.category || "all"
  const search = searchParams.search || ""

  return (
    <div className="container mx-auto px-4 py-8">
      <CommunityHeader />
      <div className="mb-8">
        <CategoryFilter activeCategory={category} />
      </div>
      <Suspense fallback={<PostsListSkeleton />}>
        <PostsList category={category} search={search} />
      </Suspense>
    </div>
  )
}
