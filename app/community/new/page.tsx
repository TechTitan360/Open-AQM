import type { Metadata } from "next"
import { NewPostForm } from "@/components/community/new-post-form"
import { BackButton } from "@/components/community/back-button"

export const metadata: Metadata = {
  title: "Create New Post | Community Talks",
  description: "Share your thoughts with the community",
}

export default function NewPostPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <BackButton />
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Create New Post</h1>
        <p className="text-muted-foreground">Share your thoughts with the community</p>
      </div>
      <NewPostForm />
    </div>
  )
}
