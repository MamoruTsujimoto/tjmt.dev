import styled from '@emotion/styled'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import Layout from 'Layout/Layout'
import NotionService from 'services/notion-service'
import config from 'utils/config'
import styles from 'utils/styles'

export const getStaticProps: GetStaticProps = async (context) => {
  const notionService = new NotionService()

  // @ts-ignore
  const p = await notionService.getSingleBlogPost(context.params?.slug)

  if (!p) {
    throw ''
  }

  return {
    props: {
      markdown: p.markdown,
      post: p.post,
    },
  }
}

export async function getStaticPaths() {
  const notionService = new NotionService()

  const posts = await notionService.getPublishedBlogPosts()

  // Because we are generating static paths, you will have to redeploy your site whenever
  // you make a change in Notion.
  const paths = posts.map((post) => {
    return `/post/${post.slug}`
  })

  return {
    paths,
    fallback: false,
  }
}

const Post = ({ markdown, post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name={'description'} title={'description'} content={post.description} />
        <meta name={'og:title'} title={'og:title'} content={post.title} />
        <meta name={'og:description'} title={'og:description'} content={post.description} />
        <meta name={'og:image'} title={'og:image'} content={post.cover} />
      </Head>

      <Layout>
        <H1>{post.title}</H1>
        <ArticleBody>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </ArticleBody>
      </Layout>
    </>
  )
}

const H1 = styled.h1`
  margin: 0 0 50px;
  text-align: center;
`

const ArticleBody = styled.div`
  width: 800px;
  margin: 0 auto;

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    width: 100%;
  }

  p {
    margin: 0 0 30px;
  }

  ul {
    margin: 0 0 30px;

    li {
      p {
        &:last-child {
          margin: 0;
        }
      }
    }
  }

  pre {
    margin: 30px 0;
    padding: 30px;
    background-color: #000;
    color: #fff;
    white-space: pre-wrap;
    @media (max-width: ${styles.sizes.breakpoint.small}) {
      width: 100%;
    }
  }

  hr {
    margin: 30px 0;
    border-color: #000;
  }

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    img {
      width: 100%;
    }
  }
`

export default Post
