import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "./firebase"

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  return signInWithPopup(auth, provider)
}

export const signOutUser = async () => {
  return signOut(auth)
}
