export type Blog = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  image: {
    url: string
    height: number
    width: number
  }
  description: string
}
