import styled from '@emotion/styled'
import { useContext, useEffect } from 'react'

import Footer from 'Layout/Footer'
import Header from 'Layout/Header'
import styles from 'utils/styles'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Root>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Root>
  )
}

const Root = styled.div`
  display: grid;
  grid:
    'header' auto
    'main' 1fr
    'footer' auto
    / 1fr;
  gap: 8px;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: rgb(18, 27, 34);
  background: linear-gradient(0deg, rgba(18, 27, 34, 0.9374124649859944) 0%, rgba(32, 66, 84, 0.819765406162465) 100%);
  z-index: 1;

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    width: 100%;
  }
`

const Main = styled.main`
  grid-area: main;
  position: relative;
  margin: 0 60px;
  padding: 50px 0;
  @media (max-width: ${styles.sizes.breakpoint.small}) {
    max-width: 100%;
    margin: 0 30px;
    padding: 30px 0;
  }
`

export default Layout
