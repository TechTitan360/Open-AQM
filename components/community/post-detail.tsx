"use client"

import { useState } from "react"
import { formatDistanceToNow } from "date-fns"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
import { MessageSquare, MoreVertical, ThumbsUp, Trash, Edit } from "lucide-react"
import { useAuth } from "@/lib/firebase/auth-context"
import { useRouter } from "next/navigation"
import { deletePost, likePost, unlikePost } from "@/lib/firebase/posts"
import type { Post } from "@/lib/types"

export function PostDetail({ post }: { post: Post }) {
  const { user } = useAuth()
  const router = useRouter()
  const [isLiked, setIsLiked] = useState(post.likedBy?.includes(user?.uid || "") || false)
  const [likeCount, setLikeCount] = useState(post.likes || 0)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const isAuthor = user?.uid === post.author.uid

  const handleLikeToggle = async () => {
    if (!user) return

    if (isLiked) {
      await unlikePost(post.id, user.uid)
      setIsLiked(false)
      setLikeCount((prev) => prev - 1)
    } else {
      await likePost(post.id, user.uid)
      setIsLiked(true)
      setLikeCount((prev) => prev + 1)
    }
  }

  const handleDelete = async () => {
    if (!isAuthor) return

    await deletePost(post.id)
    router.push("/community")
  }

  return (
    <>
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl">{post.title}</CardTitle>
              <div className="mt-2 flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.author.photoURL || ""} alt={post.author.displayName} />
                  <AvatarFallback>{post.author.displayName.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{post.author.displayName}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">
                  {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                </span>
              </div>
            </div>
            {isAuthor && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                    <span className="sr-only">More options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <a href={`/community/edit/${post.id}`} className="flex items-center gap-2">
                      <Edit className="h-4 w-4" />
                      Edit Post
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-destructive focus:text-destructive"
                    onClick={() => setIsDeleteDialogOpen(true)}
                  >
                    <Trash className="mr-2 h-4 w-4" />
                    Delete Post
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="outline">{post.category}</Badge>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t p-4">
          <div className="flex gap-4">
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
            <div className="flex items-center gap-1 text-muted-foreground">
              <MessageSquare className="h-4 w-4" />
              <span>{post.commentCount || 0}</span>
            </div>
          </div>
        </CardFooter>
      </Card>

      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your post and all associated comments.
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
