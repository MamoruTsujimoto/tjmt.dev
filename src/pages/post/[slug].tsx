import styled from '@emotion/styled'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Layout from 'Layout/Layout'
import NotionService from 'services/notion-service'
import styles from 'utils/styles'

export const getStaticProps: GetStaticProps = async (context) => {
  const notionService = new NotionService()

  // @ts-ignore
  const params = await notionService.getSingleBlogPost(context.params?.slug)

  if (!params) {
    throw ''
  }

  return {
    props: {
      markdown: params.markdown,
      post: params.post,
    },
  }
}

export async function getStaticPaths() {
  const notionService = new NotionService()

  const posts = await notionService.getPublishedBlogPosts()

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
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                const codeString = String(children).replace(/\n$/, '')
                return !inline && match ? (
                  <SyntaxHighlighter style={nord} language={match[1]} PreTag='div' {...props}>
                    {codeString}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              },
            }}
          >
            {markdown}
          </ReactMarkdown>
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
