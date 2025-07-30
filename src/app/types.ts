import type { StaticImageData } from 'next/image'

export type HeroSwiperType = {
  title: string
  description: string
}

export type PortfolioSlideType = {
  title: string
  subTitle: string
  image: StaticImageData
}

export type TestimonialSliderType = {
  name: string
  description: string
  image: StaticImageData
  position?: string
}

export type FaqType = {
  title: string
  description: string
}

export type BlogType = {
  title: string
  description: string
  image: StaticImageData
}

export type WorkType = {
  title: string
  description: string
  image: any
  date: string
  category: string[]
}

export type ReviewType = {
  name: string
  review: string
  rating: number
  image: any
}

export type PricingType = {
  name: string
  price: string
  day: string
  features: string[]
}

export type ResourceType = {
  name: string
  icon: any
  percentage: number
}

export type AccoladeType = {
  title: string
  subTitle: string
  divider?: boolean
}

export type ExpertType = {
  name: string
  position: string
  description: string
  image: any
}

export type CourseType = {
  courseName: string
  name: string
  date: string
  image: any
  icons: any[]
}

export type TestimonialType = {
  name: string
  position: string
  description: string
  image: any
}

export type AssetType = {
  title: string
  description: string
  image: any
}
