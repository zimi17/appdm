'use client'

import { useEffect, useRef, useState } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function AnimatedHeroSection() {
  const [gsapLoaded, setGsapLoaded] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load GSAP and plugins
      const loadGSAP = async () => {
        try {
          // Load main GSAP
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

          // Initialize GSAP
          if (window.gsap && window.ScrollTrigger) {
            window.gsap.registerPlugin(window.ScrollTrigger)
            setGsapLoaded(true)
          }
        } catch (error) {
          console.error('Failed to load GSAP:', error)
        }
      }

      loadGSAP()
    }
  }, [])

  useEffect(() => {
    if (gsapLoaded) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        initAnimations()
      }, 100)
      
      return () => clearTimeout(timer)
    }
  }, [gsapLoaded])

  const initAnimations = () => {
    if (!window.gsap || !window.ScrollTrigger) return
    
    const gsap = window.gsap
    const ScrollTrigger = window.ScrollTrigger

    // Split text animation simulation (since we don't have the full SplitText plugin)
    const splitTextAnimation = (element: HTMLElement | null) => {
      if (!element) return

      const text = element.textContent || ''
      const words = text.split(' ')
      element.innerHTML = words.map(word => `<span class="word" style="display: inline-block; overflow: hidden;"><span style="display: inline-block;">${word}</span></span>`).join(' ')
      
      const wordSpans = element.querySelectorAll('.word span')
      
      if (wordSpans.length > 0) {
        gsap.fromTo(wordSpans, 
          { y: '100%', opacity: 0 },
          { 
            y: '0%', 
            opacity: 1, 
            duration: 0.8,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }
    }

    // Title animation
    if (titleRef.current) {
      splitTextAnimation(titleRef.current)
    }

    // Subtitle animation
    if (subtitleRef.current) {
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    // Buttons animation
    if (buttonsRef.current) {
      const buttons = buttonsRef.current.querySelectorAll('button')
      if (buttons.length > 0) {
        gsap.fromTo(buttons,
          { opacity: 0, y: 20, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: 1,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: buttonsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }
    }

    // Image animation with parallax effect
    if (imageRef.current) {
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 1.1, x: 50 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Parallax scroll effect
      if (heroRef.current) {
        gsap.to(imageRef.current, {
          y: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })
      }
    }

    // Refresh ScrollTrigger
    ScrollTrigger.refresh()
  }

  return (
    <section id="beranda" className="pt-16" ref={heroRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h1 
                ref={titleRef}
                className="text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 font-serif"
              >
                Kami mendidik pemimpin yang membuat perbedaan di dunia.
              </h1>
              <p 
                ref={subtitleRef}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                Pendidikan dinamis dan inovatif untuk pemimpin di setiap tingkat. 
                STIE Dwimulya menyiapkan mahasiswa untuk menghadapi tantangan bisnis modern 
                dengan pendekatan yang komprehensif dan praktis.
              </p>
              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Daftar Sekarang
                </button>
                <button className="border border-gray-300 px-8 py-3 hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-md">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div ref={imageRef} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop"
                  alt="Kampus STIE Dwimulya"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}