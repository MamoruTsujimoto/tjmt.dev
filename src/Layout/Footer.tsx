import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Link from 'next/link'

import config from 'utils/config'
import styles from 'utils/styles'

const Footer: NextPage = () => {
  return (
    <Root>
      <Copyright>{config.info.copyright}</Copyright>
    </Root>
  )
}

const Root = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 82px;
  margin: 0 60px;
  border-top: 1px solid #121b22;

  @media (max-width: ${styles.sizes.breakpoint.small}) {
    margin: 0 30px;
    justify-content: center;
  }
`

const Copyright = styled.p`
  color: #bdcbd2;
  letter-spacing: 0.15em;
  ${styles.mixins.fontSize(12, 12)}
`

export default Footer
