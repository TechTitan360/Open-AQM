"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/lib/firebase/auth-context"
import { getComments, addComment, subscribeToComments } from "@/lib/firebase/comments"
import type { Comment } from "@/lib/types"
import { CommentForm } from "@/components/community/comment-form"
import { CommentItem } from "@/components/community/comment-item"
import { LoginButton } from "@/components/auth/login-button"
import { Button } from "@/components/ui/button"

export function CommentSection({ postId }: { postId: string }) {
  const { user } = useAuth()
  const [comments, setComments] = useState<Comment[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadComments = async () => {
      setIsLoading(true)
      const fetchedComments = await getComments(postId)
      setComments(fetchedComments)
      setIsLoading(false)
    }

    loadComments()

    // Subscribe to real-time updates
    const unsubscribe = subscribeToComments(postId, (updatedComments) => {
      setComments(updatedComments)
    })

    return () => unsubscribe()
  }, [postId])

  const handleAddComment = async (content: string) => {
    if (!user) return

    await addComment(postId, {
      content,
      author: {
        uid: user.uid,
        displayName: user.displayName || "Anonymous",
        photoURL: user.photoURL || null,
      },
      createdAt: new Date().toISOString(),
    })
  }

  return (
    <div className="mt-8">
      <h2 className="mb-6 text-2xl font-bold">Comments</h2>

      {user ? (
        <CommentForm onSubmit={handleAddComment} />
      ) : (
        <div className="mb-8 rounded-lg border p-4 text-center">
          <p className="mb-4 text-muted-foreground">Sign in to join the conversation</p>
          <LoginButton>
            <Button variant="outline">Sign in</Button>
          </LoginButton>
        </div>
      )}

      {isLoading ? (
        <p className="text-center text-muted-foreground">Loading comments...</p>
      ) : comments.length > 0 ? (
        <div className="space-y-4">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} postId={postId} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No comments yet. Be the first to comment!</p>
      )}
    </div>
  )
}
