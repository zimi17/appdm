import { IconType } from 'react-icons'
import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter } from 'react-icons/lu'

export type FooterLink = {
  title: string
  items: {
    name: string
    link?: string
    icon?: IconType
  }[]
}

export type LandingPage = {
  name: string
  link: string
}

export const footerLinks: FooterLink[] = [
  {
    title: 'Company',
    items: [
      {
        name: 'About',
      },
      {
        name: 'Services',
      },
      {
        name: 'Portfolio',
      },
      {
        name: 'Blog',
      },
      {
        name: 'Contact',
      },
    ],
  },
  {
    title: 'Social Media',
    items: [
      {
        name: 'Facebook',
        icon: LuFacebook,
      },
      {
        name: 'Instagram',
        icon: LuInstagram,
      },
      {
        name: 'Twitter',
        icon: LuTwitter,
      },
      {
        name: 'Linkedin',
        icon: LuLinkedin,
      },
    ],
  },
  {
    title: 'Legal & Press',
    items: [
      {
        name: 'Privacy Policy',
      },
      {
        name: 'Terms & Conditions',
      },
      {
        name: 'Presskit',
      },
    ],
  },
]

// Landing pages removed - these routes don't exist in current project
export const landingPages: LandingPage[] = []
