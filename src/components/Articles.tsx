import styled from '@emotion/styled'
import dayjs from 'dayjs'
import Link from 'next/link'
import { FunctionComponent, FC } from 'react'
import Tags from 'components/Tags'
import { BlogPost } from 'types/notion'
import config from 'utils/config'
import styles from 'utils/styles'

type BlogCardProps = {
  post: BlogPost
}
const localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

const Articles: FC<BlogCardProps> = ({ post }) => {
  console.log(post)
  return (
    <Article key={post.title}>
      <Link href={`/post/${post.slug}`} passHref>
        <A>
          <H2>{post.title}</H2>
          <ArticleWrapper>
            <Tags tags={post.tags} />
            <H4>{dayjs(post.date).format('LL')}</H4>
          </ArticleWrapper>
        </A>
      </Link>
    </Article>
  )
}

const Article = styled.article`
  margin: 25px 0;

  &:first-of-type {
    margin: 0 0 25px;
  }
`

const H2 = styled.h2`
  margin: 0 0 10px;
  ${styles.mixins.fontSize(30, 35)}

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    margin: 0 0 5px;
    ${styles.mixins.fontSize(20, 35)}
  }
`

const H4 = styled.h4``

const A = styled.a``

const ArticleWrapper = styled.div`
  display: flex;
  align-items: center;
`

export default Articles
