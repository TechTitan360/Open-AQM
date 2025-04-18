export interface Post {
  id: string
  title: string
  content: string
  category: string
  author: {
    uid: string
    displayName: string
    photoURL: string | null
  }
  createdAt: string
  likes?: number
  likedBy?: string[]
  commentCount?: number
}

export interface Comment {
  id: string
  content: string
  author: {
    uid: string
    displayName: string
    photoURL: string | null
  }
  createdAt: string
  likes?: number
  likedBy?: string[]
}
