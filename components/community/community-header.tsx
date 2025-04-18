"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PenSquare, Search } from "lucide-react"
import { useAuth } from "@/lib/firebase/auth-context"
import { LoginButton } from "@/components/auth/login-button"

export function CommunityHeader() {
  const { user } = useAuth()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/community?search=${encodeURIComponent(searchQuery)}`)
    } else {
      router.push("/community")
    }
  }

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">Community Talks</h1>
          <p className="text-muted-foreground">
            Join the conversation about air quality monitoring and environmental awareness
          </p>
        </div>
        {user ? (
          <Button asChild>
            <Link href="/community/new" className="flex items-center gap-2">
              <PenSquare className="h-4 w-4" />
              New Post
            </Link>
          </Button>
        ) : (
          <LoginButton>
            <Button variant="outline" className="flex items-center gap-2">
              Sign in to post
            </Button>
          </LoginButton>
        )}
      </div>
      <form onSubmit={handleSearch} className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="search"
          placeholder="Search discussions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />
        <Button type="submit" size="icon">
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </form>
    </div>
  )
}
