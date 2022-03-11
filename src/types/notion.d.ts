export type CategoryType = {
  id: string
  color: string
  name: string
}

export type TagType = {
  id: string
  color: string
  name: string
}

export type BlogPost = {
  id: string
  slug: string
  cover: string
  title: string
  category: CategoryType
  tags?: Tag[]
  description: string
  date: string
}

export type PostPage = {
  post: BlogPost
  markdown: string
}
