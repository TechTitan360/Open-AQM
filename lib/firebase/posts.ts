import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  where,
  orderBy,
  increment,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore"
import { db } from "./firebase"
import type { Post } from "@/lib/types"

// Collection reference
const postsCollection = collection(db, "posts")

// Get all posts with optional category filter
export async function getPosts(category?: string, search?: string): Promise<Post[]> {
  let q = query(postsCollection, orderBy("createdAt", "desc"))

  if (category) {
    q = query(postsCollection, where("category", "==", category), orderBy("createdAt", "desc"))
  }

  const snapshot = await getDocs(q)
  const posts = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Post[]

  // Client-side search filtering if search term is provided
  if (search) {
    const searchLower = search.toLowerCase()
    return posts.filter(
      (post) => post.title.toLowerCase().includes(searchLower) || post.content.toLowerCase().includes(searchLower),
    )
  }

  return posts
}

// Get a single post by ID
export async function getPostById(id: string): Promise<Post | null> {
  const docRef = doc(db, "posts", id)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) {
    return null
  }

  return {
    id: docSnap.id,
    ...docSnap.data(),
  } as Post
}

// Create a new post
export async function createPost(post: Omit<Post, "id">): Promise<string> {
  const docRef = await addDoc(postsCollection, post)
  return docRef.id
}

// Update a post
export async function updatePost(id: string, data: Partial<Post>): Promise<void> {
  const docRef = doc(db, "posts", id)
  await updateDoc(docRef, data)
}

// Delete a post
export async function deletePost(id: string): Promise<void> {
  const docRef = doc(db, "posts", id)
  await deleteDoc(docRef)
}

// Like a post
export async function likePost(id: string, userId: string): Promise<void> {
  const docRef = doc(db, "posts", id)
  await updateDoc(docRef, {
    likes: increment(1),
    likedBy: arrayUnion(userId),
  })
}

// Unlike a post
export async function unlikePost(id: string, userId: string): Promise<void> {
  const docRef = doc(db, "posts", id)
  await updateDoc(docRef, {
    likes: increment(-1),
    likedBy: arrayRemove(userId),
  })
}

// Increment comment count
export async function incrementCommentCount(id: string): Promise<void> {
  const docRef = doc(db, "posts", id)
  await updateDoc(docRef, {
    commentCount: increment(1),
  })
}

// Decrement comment count
export async function decrementCommentCount(id: string): Promise<void> {
  const docRef = doc(db, "posts", id)
  await updateDoc(docRef, {
    commentCount: increment(-1),
  })
}
