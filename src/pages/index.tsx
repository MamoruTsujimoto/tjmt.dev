import styled from '@emotion/styled'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from 'Layout/Layout'
import Articles from 'components/Articles'
import NotionService from 'services/notion-service'
import { BlogPost } from 'types/notion'
import config from 'utils/config'
import styles from 'utils/styles'

export const getStaticProps: GetStaticProps = async () => {
  const notionService = new NotionService()
  const posts = await notionService.getPublishedBlogPosts()

  return {
    props: {
      posts,
    },
    revalidate: 60,
  }
}

const Home: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title></title>
        {/* <meta name={'description'} title={'description'} content={} />
        <meta name={'og:title'} title={'og:title'} content= />
        <meta name={'og:description'} title={'og:description'} content= /> */}
      </Head>

      <Layout>
        <Root>
          {posts.map((post: BlogPost) => (
            <Articles key={post.id} post={post} />
          ))}
        </Root>
      </Layout>
    </>
  )
}

const Root = styled.section``

export default Home
