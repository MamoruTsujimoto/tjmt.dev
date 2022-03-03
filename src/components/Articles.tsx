import styled from '@emotion/styled'
import dayjs from 'dayjs'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { BlogPost } from 'types/notion'
import config from 'utils/config'
import styles from 'utils/styles'

type BlogCardProps = {
  post: BlogPost
}
const localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

const Articles: FunctionComponent<BlogCardProps> = ({ post }) => {
  return (
    <Article>
      <Link href={`/post/${post.slug}`}>
        <a>
          <div key={post.title}>
            <div>
              <div>
                <span>
                  <h4>{dayjs(post.date).format('LL')}</h4>
                </span>
                <span>
                  <h3>{post.title}</h3>
                </span>

                <span>
                  <p>{post.description}</p>
                </span>

                <span>
                  {post.tags.map((tag) => (
                    <span key={tag.id} className='bg-green-300 text-green-800 px-2 py-1 text-xs rounded-lg'>
                      #{tag.name}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </Article>
  )
}

const Article = styled.article`
  margin: 25px 0;
`

export default Articles
