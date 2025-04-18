"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { signInWithGoogle } from "@/lib/firebase/auth"
import { useToast } from "@/components/ui/use-toast"

export function LoginButton({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
      setIsOpen(false)
      toast({
        title: "Signed in successfully",
        description: "Welcome to the community!",
      })
    } catch (error) {
      console.error("Error signing in:", error)
      toast({
        title: "Sign in failed",
        description: "There was an error signing in. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign in to Community Talks</DialogTitle>
          <DialogDescription>
            Join the conversation about air quality monitoring and environmental awareness.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button onClick={handleGoogleSignIn} className="w-full">
            Sign in with Google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
