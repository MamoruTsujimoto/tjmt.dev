import { Global as GlobalStyles } from '@emotion/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

import config from 'utils/config'
import { global as globalStyles } from 'utils/styles'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='ja'>
        <Head prefix='og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#'>
          <meta name='theme-color' content='#ffffff' />
          <meta name='robots' content='noindex' />
          <link rel='apple-touch-icon' sizes='180x180' href={config.info.icon.apple} />
          <link rel='icon' type='image/png' sizes='32x32' href={config.info.icon.fav32} />
          <link rel='icon' type='image/png' sizes='16x16' href={config.info.icon.fav16} />

          <meta property='og:type' content={config.info.ogp.type} />
          <meta name='twitter:card' content={config.info.twitter.card} />
          <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
          <link
            href='https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;700&display=swap'
            rel='stylesheet'
          />
          <GlobalStyles styles={globalStyles} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
