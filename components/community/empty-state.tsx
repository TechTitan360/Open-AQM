"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquareOff, PenSquare } from "lucide-react"
import { useAuth } from "@/lib/firebase/auth-context"
import { LoginButton } from "@/components/auth/login-button"

export function EmptyState({ search, category }: { search: string; category: string }) {
  const { user } = useAuth()

  let title = "No posts found"
  let description = "Be the first to start a discussion in this category."

  if (search) {
    title = "No matching posts"
    description = `We couldn't find any posts matching "${search}".`
  } else if (category !== "all") {
    description = `Be the first to start a discussion in the ${category} category.`
  }

  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
      <MessageSquareOff className="mb-4 h-12 w-12 text-muted-foreground" />
      <h3 className="mb-2 text-xl font-medium">{title}</h3>
      <p className="mb-6 max-w-md text-muted-foreground">{description}</p>
      {user ? (
        <Button asChild>
          <Link href="/community/new" className="flex items-center gap-2">
            <PenSquare className="h-4 w-4" />
            Create New Post
          </Link>
        </Button>
      ) : (
        <LoginButton>
          <Button variant="outline">Sign in to post</Button>
        </LoginButton>
      )}
    </div>
  )
}
