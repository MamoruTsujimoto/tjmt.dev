import styled from '@emotion/styled'
import dayjs from 'dayjs'
import Link from 'next/link'
import { FC } from 'react'
import Category from 'components/Category'
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
        <A>
          {/* <ArticleItemName>
            <div>[ category ]</div>
            <div>[ date ]</div>
            <div>[ title ]</div>
          </ArticleItemName> */}
          <ArticleWrapper>
            <Category cat={post.category} />
            <H4>{dayjs(post.date).format('MMM DD, YYYY')}</H4>
            <H2>{post.title}</H2>
          </ArticleWrapper>
        </A>
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

  &:hover {
    div,
    h4,
    h2 {
      background-color: #000;
    }
    * {
      color: #fff;
    }
  }

  &:last-of-type {
    margin: 0;
    border-bottom: 1px solid ${styles.colors.secondary};
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

const H4 = styled.h4`
  padding: 8px 15px 7px;
  ${styles.mixins.fontSize(30, 35)}
  background: ${styles.colors.primary};
`

const A = styled.a`
  /* & * {
    transition: background-color 0.3s ease;
  }

  &:hover * {
    color: ${styles.colors.primary};
    background-color: ${styles.colors.secondary};
  } */
`

const ArticleItemName = styled.div`
  display: grid;
  grid-template-columns: 8% 23% 1fr;
  align-items: center;
  margin: 0 0 5px;

  div {
    background: ${styles.colors.primary};
  }
`

const ArticleWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: 50px;
  gap: 1px;
  align-items: center;
`

export default Articles
