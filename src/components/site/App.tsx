'use client'

import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { AnimatedHeroSection } from './components/AnimatedHeroSection'
import { ProgramSection } from './components/ProgramSection'
import { FeaturedSection } from './components/FeaturedSection'
import { InsightsSection } from './components/InsightsSection'
import { DistinctiveSection } from './components/DistinctiveSection'
import { AdmissionSection } from './components/AdmissionSection'
import { Footer } from './components/Footer'

export default function App() {
  const [gsapLoaded, setGsapLoaded] = useState(false)

  useEffect(() => {
    // Global GSAP setup and smooth scrolling
    if (typeof window !== 'undefined') {
      const loadGSAPPlugins = async () => {
        try {
          // Load GSAP core
          if (!window.gsap) {
            await new Promise<void>((resolve, reject) => {
              const script = document.createElement('script')
              script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'
              script.onload = () => resolve()
              script.onerror = reject
              document.head.appendChild(script)
            })
          }

          // Load ScrollTrigger
          if (!window.ScrollTrigger) {
            await new Promise<void>((resolve, reject) => {
              const script = document.createElement('script')
              script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'
              script.onload = () => resolve()
              script.onerror = reject
              document.head.appendChild(script)
            })
          }

          // Initialize global animations
          if (window.gsap && window.ScrollTrigger) {
            window.gsap.registerPlugin(window.ScrollTrigger)
            setGsapLoaded(true)
          }
        } catch (error) {
          console.error('Failed to load GSAP plugins:', error)
        }
      }

      loadGSAPPlugins()
    }
  }, [])

  useEffect(() => {
    if (gsapLoaded && window.gsap && window.ScrollTrigger) {
      // Initialize smooth scroll and global animations
      initGlobalAnimations()
    }
  }, [gsapLoaded])

  const initGlobalAnimations = () => {
    if (!window.gsap || !window.ScrollTrigger) return

    const gsap = window.gsap
    const ScrollTrigger = window.ScrollTrigger

    // Global fade-in animations for sections
    setTimeout(() => {
      const sections = document.querySelectorAll('section')
      sections.forEach((section, index) => {
        if (index > 0 && section) { // Skip hero section as it has custom animation
          gsap.fromTo(section,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            }
          )
        }
      })
    }, 500) // Delay to ensure all sections are rendered

    // Smooth scroll setup
    const initSmoothScroll = () => {
      if (typeof window !== 'undefined') {
        let rafId: number
        let isScrolling = false

        const smoothScroll = () => {
          if (!isScrolling) {
            isScrolling = true
            rafId = requestAnimationFrame(() => {
              if (window.ScrollTrigger) {
                window.ScrollTrigger.update()
              }
              isScrolling = false
            })
          }
        }

        window.addEventListener('scroll', smoothScroll, { passive: true })
        
        return () => {
          if (rafId) {
            cancelAnimationFrame(rafId)
          }
          window.removeEventListener('scroll', smoothScroll)
        }
      }
    }

    initSmoothScroll()
    ScrollTrigger.refresh()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AnimatedHeroSection />
        <ProgramSection />
        <FeaturedSection />
        <InsightsSection />
        <DistinctiveSection />
        <AdmissionSection />
      </main>
      <Footer />
    </div>
  )
}

// Extend window interface for GSAP
declare global {
  interface Window {
    gsap: any
    ScrollTrigger: any
  }
}