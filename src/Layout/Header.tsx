import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Link from 'next/link'

import config from 'utils/config'
import styles from 'utils/styles'

const Header: NextPage = () => {
  return (
    <Root>
      <Link href='/'>
        <a>
          <H1>{config.info.siteName}</H1>
        </a>
      </Link>
    </Root>
  )
}

const Root = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: 1fr;
  position: sticky;
  top: 18px;
  background: ${styles.colors.secondary};
  z-index: 3;

  a {
    display: block;
    padding: 2px;
  }

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    margin: 0;

    a {
      width: 100%;
    }
  }
`
const H1 = styled.h1`
  padding: 8px;
  background: ${styles.colors.primary};
  ${styles.mixins.fontSize(35, 35)}

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    text-align: center;
  }
`

export default Header
