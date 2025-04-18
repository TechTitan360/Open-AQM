import { formatDistanceToNow } from "date-fns"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, ThumbsUp } from "lucide-react"
import type { Post } from "@/lib/types"

export function PostCard({ post }: { post: Post }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="line-clamp-2 text-xl">{post.title}</CardTitle>
            <div className="mt-2 flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={post.author.photoURL || ""} alt={post.author.displayName} />
                <AvatarFallback>{post.author.displayName.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">{post.author.displayName}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">
                {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="line-clamp-3 text-muted-foreground" dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="outline">{post.category}</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-4">
        <div className="flex gap-4">
          <div className="flex items-center gap-1 text-muted-foreground">
            <ThumbsUp className="h-4 w-4" />
            <span>{post.likes || 0}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <MessageSquare className="h-4 w-4" />
            <span>{post.commentCount || 0}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
