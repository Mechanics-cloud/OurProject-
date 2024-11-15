import { StaticImageData } from 'next/image'

export interface PostsLikes {
  items: ItemLikes[]
  pageSize: number
  totalCount: number
}

export interface ItemLikes {
  avatars: Avatar[]
  createdAt: string
  id: number
  isFollowedBy: boolean
  isFollowing: boolean
  userId: number
  userName: string
}

export interface Avatar {
  createdAt: string
  fileSize: number
  height: number
  url: StaticImageData | string
  width: number
}

export interface PostsComments {
  items: ItemComment[]
  page: number
  pageSize: number
  pagesCount: number
  totalCount: number
}

export interface ItemComment {
  answerCount: number
  content: string
  createdAt: string
  from: From
  id: number
  isLiked: boolean
  likeCount: number
  postId: number
}

export interface From {
  avatars: Avatar[]
  id: number
  username: string
}