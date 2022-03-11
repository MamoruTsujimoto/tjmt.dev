import styled from '@emotion/styled'
import dayjs from 'dayjs'
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
        <PostData>{dayjs(post.date).format('MMM DD, YYYY')}</PostData>
        <ArticleBody>
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                const codeString = String(children).replace(/\n$/, '')
                return !inline && match ? (
                  <SyntaxHighlighter style={nord} language={match[1]} wrapLongLines='pre-wrap' PreTag='div' {...props}>
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
  margin: 30px 0 10px;
  text-align: center;

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    margin: 30px 0 25px;
  }
`

const PostData = styled.div`
  text-align: center;

  ${styles.mixins.fontSize(12, 12)}
`

const ArticleBody = styled.div`
  width: 800px;
  margin: 50px auto 0;

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

  code {
    @media (max-width: ${styles.sizes.breakpoint.small}) {
      white-space: pre-wrap;
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
