"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, PenSquare, ThumbsUp } from "lucide-react"

const posts = [
  {
    id: 1,
    title: "Air Quality Concerns in Downtown Area",
    content:
      "I've noticed the air quality has been deteriorating in the downtown area over the past few weeks. Has anyone else experienced this? What could be the potential causes?",
    author: {
      name: "Alex Johnson",
      avatar: "AJ",
    },
    date: "2 days ago",
    likes: 24,
    comments: 8,
    tags: ["pollution", "downtown", "concerns"],
  },
  {
    id: 2,
    title: "New Community Air Quality Sensor Installation",
    content:
      "We're planning to install a new community air quality sensor in the park. If you're interested in helping with the installation or have suggestions for the best location, please comment below!",
    author: {
      name: "Sam Rivera",
      avatar: "SR",
    },
    date: "1 week ago",
    likes: 42,
    comments: 15,
    tags: ["community", "sensors", "installation"],
  },
  {
    id: 3,
    title: "Air Quality Improvement Initiatives",
    content:
      "I'm researching effective initiatives that have improved air quality in other cities. If you know of any successful programs or have ideas, I'd love to hear them!",
    author: {
      name: "Taylor Kim",
      avatar: "TK",
    },
    date: "2 weeks ago",
    likes: 36,
    comments: 21,
    tags: ["solutions", "initiatives", "research"],
  },
]

export function CommunityTalks() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Search discussions..." />
          <Button type="submit">Search</Button>
        </div>
        <Button className="gap-2">
          <PenSquare className="h-4 w-4" />
          New Post
        </Button>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 sm:w-auto sm:grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pollution">Pollution</TabsTrigger>
          <TabsTrigger value="solutions">Solutions</TabsTrigger>
          <TabsTrigger value="awareness">Awareness</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <div className="grid gap-6">
            {posts
              .filter((post) => activeTab === "all" || post.tags.includes(activeTab))
              .map((post) => (
                <Card key={post.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{post.title}</CardTitle>
                        <CardDescription className="mt-1 flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="/placeholder.svg" alt={post.author.name} />
                            <AvatarFallback>{post.author.avatar}</AvatarFallback>
                          </Avatar>
                          <span>{post.author.name}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.content}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t p-4">
                    <div className="flex gap-4">
                      <Button variant="ghost" size="sm" className="gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
