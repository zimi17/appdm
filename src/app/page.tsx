import ServicesMarquee from '@/components/ServicesMarquee'
import TopNavBar from '@/components/TopNavBar'
import type { Metadata } from 'next'
import Blogs from './components/Blogs'
import FAQs from './components/FAQs'
import Features from './components/Features'
import HeroSwiper from './components/HeroSwiper'
import ProjectSlider from './components/ProjectSlider'
import Services from './components/Services'
import TestimonialSlider from './components/TestimonialSlider'

export const metadata: Metadata = {
  title: 'Creative',
}

const Creative = () => {
  return (
    <>
      <TopNavBar
        menuItems={[
          'home',
          'about-us',
          's1-akuntansi',
          's1-manajemen',
          'admissions',
          'news',
          'contact',
        ]}
        position="sticky"
        hasDownloadButton
      />

      <HeroSwiper />

      <section>
        <ServicesMarquee />
      </section>

      {/* Academic Programs (Features + Services) */}
      <Features />
      <Services />

      {/* Program Initiatives */}
      <ProjectSlider />

      {/* Program Testimonials */}
      <TestimonialSlider />

      {/* FAQs */}
      <FAQs />

      {/* Alumni Success Stories */}
      <Blogs />
    </>
  )
}

export default Creative
