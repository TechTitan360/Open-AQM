import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  onSnapshot,
  increment,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore"
import { db } from "./firebase"
import type { Comment } from "@/lib/types"
import { incrementCommentCount, decrementCommentCount } from "./posts"

// Get comments for a post
export async function getComments(postId: string): Promise<Comment[]> {
  const commentsCollection = collection(db, "posts", postId, "comments")
  const q = query(commentsCollection, orderBy("createdAt", "asc"))
  const snapshot = await getDocs(q)

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Comment[]
}

// Subscribe to comments for a post
export function subscribeToComments(postId: string, callback: (comments: Comment[]) => void): () => void {
  const commentsCollection = collection(db, "posts", postId, "comments")
  const q = query(commentsCollection, orderBy("createdAt", "asc"))

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const comments = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Comment[]

    callback(comments)
  })

  return unsubscribe
}

// Add a comment to a post
export async function addComment(postId: string, comment: Omit<Comment, "id">): Promise<string> {
  const commentsCollection = collection(db, "posts", postId, "comments")
  const docRef = await addDoc(commentsCollection, comment)

  // Increment the comment count on the post
  await incrementCommentCount(postId)

  return docRef.id
}

// Delete a comment
export async function deleteComment(postId: string, commentId: string): Promise<void> {
  const commentRef = doc(db, "posts", postId, "comments", commentId)
  await deleteDoc(commentRef)

  // Decrement the comment count on the post
  await decrementCommentCount(postId)
}

// Like a comment
export async function likeComment(postId: string, commentId: string, userId: string): Promise<void> {
  const commentRef = doc(db, "posts", postId, "comments", commentId)
  await updateDoc(commentRef, {
    likes: increment(1),
    likedBy: arrayUnion(userId),
  })
}

// Unlike a comment
export async function unlikeComment(postId: string, commentId: string, userId: string): Promise<void> {
  const commentRef = doc(db, "posts", postId, "comments", commentId)
  await updateDoc(commentRef, {
    likes: increment(-1),
    likedBy: arrayRemove(userId),
  })
}
