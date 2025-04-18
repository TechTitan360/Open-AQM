"use client"

import { useState } from "react"
import { formatDistanceToNow } from "date-fns"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { MoreVertical, ThumbsUp, Trash } from "lucide-react"
import { useAuth } from "@/lib/firebase/auth-context"
import { deleteComment, likeComment, unlikeComment } from "@/lib/firebase/comments"
import type { Comment } from "@/lib/types"

export function CommentItem({ comment, postId }: { comment: Comment; postId: string }) {
  const { user } = useAuth()
  const [isLiked, setIsLiked] = useState(comment.likedBy?.includes(user?.uid || "") || false)
  const [likeCount, setLikeCount] = useState(comment.likes || 0)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const isAuthor = user?.uid === comment.author.uid

  const handleLikeToggle = async () => {
    if (!user) return

    if (isLiked) {
      await unlikeComment(postId, comment.id, user.uid)
      setIsLiked(false)
      setLikeCount((prev) => prev - 1)
    } else {
      await likeComment(postId, comment.id, user.uid)
      setIsLiked(true)
      setLikeCount((prev) => prev + 1)
    }
  }

  const handleDelete = async () => {
    if (!isAuthor) return

    await deleteComment(postId, comment.id)
  }

  return (
    <>
      <Card>
        <CardContent className="p-4">
          <div className="flex items-start gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={comment.author.photoURL || ""} alt={comment.author.displayName} />
              <AvatarFallback>{comment.author.displayName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{comment.author.displayName}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                  </p>
                </div>
                {isAuthor && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                        <span className="sr-only">More options</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        className="text-destructive focus:text-destructive"
                        onClick={() => setIsDeleteDialogOpen(true)}
                      >
                        <Trash className="mr-2 h-4 w-4" />
                        Delete Comment
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
              <div className="mt-2">{comment.content}</div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t p-2 px-4">
          <Button
            variant="ghost"
            size="sm"
            className={`flex items-center gap-1 ${isLiked ? "text-primary" : ""}`}
            onClick={handleLikeToggle}
            disabled={!user}
          >
            <ThumbsUp className="h-4 w-4" />
            <span>{likeCount}</span>
          </Button>
        </CardFooter>
      </Card>

      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your comment.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
