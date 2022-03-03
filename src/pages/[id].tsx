import Prism from 'prismjs'
import React from 'react'
export const databaseId = process.env.NOTION_DATABASE_ID

const Post = () => {
  React.useEffect(() => {
    Prism.highlightAll()
  }, [])

  return <>Single</>
}

export default Post
