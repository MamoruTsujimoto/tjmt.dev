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

const Root = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 82px;
  margin: 0 60px;
  border-bottom: 1px solid #121b22;

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    margin: 0 30px;

    a {
      width: 100%;
    }
  }
`
const H1 = styled.h1`
  ${styles.mixins.fontSize(35, 35)}

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    text-align: center;
  }
`

export default Header
