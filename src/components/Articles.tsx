import styled from '@emotion/styled'
import dayjs from 'dayjs'
import Link from 'next/link'
import { FC } from 'react'
import { BlogPost } from 'types/notion'
import styles from 'utils/styles'

type BlogCardProps = {
  post: BlogPost
}
const localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

const Articles: FC<BlogCardProps> = ({ post }) => {
  return (
    <Article key={post.title}>
      <Link href={`/post/${post.slug}`} passHref>
        <a>
          <ArticleBody>
            <PostData dateTime={post.date}>{dayjs(post.date).format('MMM DD, YYYY')}</PostData>
            <H2>
              <Category>[ {post.category.name} ]</Category>
              {post.title}
            </H2>
          </ArticleBody>
        </a>
      </Link>
    </Article>
  )
}

const Article = styled.article`
  margin: 0;
  padding: 0;
  background: ${styles.colors.secondary};

  * {
    transition: background-color 0.8s ease;
  }

  &:last-of-type {
    margin: 0;
    border-bottom: 1px solid ${styles.colors.secondary};

    h2 {
      margin: 0;
    }
  }

  &:hover {
    time,
    h2 {
      background-color: #000;
      color: #fff;
    }
  }
`

const H2 = styled.h2`
  margin: 0;
  padding: 8px 15px 7px;
  ${styles.mixins.fontSize(30, 35)}
  background: ${styles.colors.primary};

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    margin: 0 0 5px;
    ${styles.mixins.fontSize(20, 35)}
  }
`

const Category = styled.span`
  display: block;
  margin: 0 0 3px;
  font-weight: normal;
  ${styles.mixins.fontSize(11, 11)}
`

const PostData = styled.time`
  padding: 22px;
  ${styles.mixins.fontSize(20, 20)}
  background: ${styles.colors.primary};

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    display: block;
    padding: 10px;
    ${styles.mixins.fontSize(15, 15)}
  }
`

const ArticleBody = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1px;
  align-items: center;

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    display: block;
  }
`

export default Articles
