import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const config = {
  info: {
    siteName: 'TJMT.DEV',
    author: 'Tsujimoto Mamoru',
    siteDescription: '',
    siteURL: 'https://tjmt.dev',
    copyright: '© 2022 TJMT.DEV',
    ogp: {
      type: 'blog',
      image: '/ogpImage.png',
      card: 'summary',
    },
    twitter: {
      card: 'summary',
    },
    icon: {
      apple: '/apple-touch-icon.png',
      fav32: '/favicon-32x32.png',
      fav16: '/favicon-16x16.png',
    },
  },
  setting: {
    transition: {
      timeout: 500,
    },
  },
  external: {
    github: {
      link: 'https://github.com/MamoruTsujimoto',
      label: 'Github: MamoruTsujimoto',
      icon: faGithub,
    },
    twitter: {
      link: 'https://twitter.com/MamoruTsujimoto',
      label: 'Twitter: MamoruTsujimoto',
      icon: faTwitter,
    },
    instagram: {
      link: 'https://www.instagram.com/tsujimotomamoru',
      label: 'Instagram: TsujimotoMamoru',
      icon: faInstagram,
    },
  },
}
export default config
