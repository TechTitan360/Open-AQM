"use client"

import { useEffect, useState } from "react"
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
import { auth } from "@/lib/firebase/firebase"

export default function TestAuthPage() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

    return () => unsubscribe()
  }, [])

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  }

  const handleLogout = async () => {
    await signOut(auth)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🔥 Firebase Auth Test</h1>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded mt-2">Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">Login with Google</button>
      )}
    </div>
  )
}
