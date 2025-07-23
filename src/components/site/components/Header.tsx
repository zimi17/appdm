'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, Menu, Bell, ChevronDown } from 'lucide-react'
import { STIELogo } from './STIELogo'
import { FullScreenNav } from './FullScreenNav'
import { SearchModal } from './SearchModal'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [gsapLoaded, setGsapLoaded] = useState(false)
  const headerRef = useRef<HTMLHeaderElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load GSAP
      const loadGSAP = async () => {
        if (!window.gsap) {
          await new Promise<void>((resolve) => {
            const script = document.createElement('script')
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'
            script.onload = () => resolve()
            document.head.appendChild(script)
          })
        }

        if (!window.ScrollTrigger) {
          await new Promise<void>((resolve) => {
            const script = document.createElement('script')
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'
            script.onload = () => resolve()
            document.head.appendChild(script)
          })
        }

        if (window.gsap && window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger)
          setGsapLoaded(true)
        }
      }

      loadGSAP()
    }
  }, [])

  useEffect(() => {
    if (gsapLoaded) {
      initAnimations()
    }
  }, [gsapLoaded, isScrolled])

  const initAnimations = () => {
    if (!window.gsap || !headerRef.current) return

    const gsap = window.gsap

    // Header scroll animation
    gsap.to(headerRef.current, {
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: isScrolled ? 'blur(10px)' : 'blur(5px)',
      duration: 0.3,
      ease: 'power2.out'
    })

    // Logo hover animation
    if (logoRef.current) {
      const logoElement = logoRef.current
      
      const handleMouseEnter = () => {
        if (window.gsap && logoElement) {
          gsap.to(logoElement, { scale: 1.05, duration: 0.3, ease: 'power2.out' })
        }
      }
      
      const handleMouseLeave = () => {
        if (window.gsap && logoElement) {
          gsap.to(logoElement, { scale: 1, duration: 0.3, ease: 'power2.out' })
        }
      }

      logoElement.addEventListener('mouseenter', handleMouseEnter)
      logoElement.addEventListener('mouseleave', handleMouseLeave)

      // Cleanup
      return () => {
        logoElement.removeEventListener('mouseenter', handleMouseEnter)
        logoElement.removeEventListener('mouseleave', handleMouseLeave)
      }
    }

    // Navigation items animation
    if (navRef.current) {
      const navItems = navRef.current.querySelectorAll('a')
      navItems.forEach((item, index) => {
        if (item) {
          gsap.fromTo(item, 
            { opacity: 0, y: -20 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.5, 
              delay: index * 0.1,
              ease: 'power2.out'
            }
          )
        }
      })
    }
  }

  // 3 main navigation items with dropdowns
  const mainNavItems = [
    {
      title: "Program Studi",
      href: "#program",
      dropdown: [
        { title: "Manajemen Bisnis", href: "#manajemen" },
        { title: "Akuntansi", href: "#akuntansi" },
        { title: "Ekonomi Pembangunan", href: "#ekonomi" },
        { title: "Keuangan", href: "#keuangan" }
      ]
    },
    {
      title: "Pendaftaran",
      href: "#pendaftaran",
      dropdown: [
        { title: "Jalur Reguler", href: "#reguler" },
        { title: "Jalur Prestasi", href: "#prestasi" },
        { title: "Beasiswa", href: "#beasiswa" },
        { title: "Persyaratan", href: "#persyaratan" }
      ]
    },
    {
      title: "Tentang",
      href: "#tentang",
      dropdown: [
        { title: "Visi & Misi", href: "#visi-misi" },
        { title: "Sejarah", href: "#sejarah" },
        { title: "Fakultas", href: "#fakultas" },
        { title: "Fasilitas", href: "#fasilitas" }
      ]
    }
  ]

  return (
    <>
      <header 
        ref={headerRef}
        className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div ref={logoRef} className="flex items-center cursor-pointer flex-shrink-0">
              <STIELogo className="w-10 h-10 mr-3" />
              <div>
                <span className="text-lg font-medium text-black">STIE Dwimulya</span>
                <div className="text-xs text-gray-500">Sekolah Tinggi Ilmu Ekonomi</div>
              </div>
            </div>

            {/* Hot Links / Notice - 40% space */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-6 text-sm max-w-md">
                <div className="flex items-center space-x-2 bg-yellow-50 text-yellow-800 px-4 py-2 rounded-full">
                  <Bell size={14} />
                  <span>Pendaftaran 2025 Dibuka!</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 cursor-pointer">
                  <span>Portal Mahasiswa</span>
                  <ChevronDown size={14} />
                </div>
                <div className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 cursor-pointer">
                  <span>E-Learning</span>
                  <ChevronDown size={14} />
                </div>
              </div>
            </div>

            {/* Desktop Navigation - 3 main items with dropdowns */}
            <nav ref={navRef} className="hidden xl:flex items-center space-x-8 mr-8">
              {mainNavItems.map((item, index) => (
                <div 
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a 
                    href={item.href}
                    className="flex items-center space-x-1 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                  >
                    <span>{item.title}</span>
                    <ChevronDown size={14} />
                  </a>
                  
                  {/* Dropdown */}
                  {activeDropdown === item.title && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                        >
                          {dropdownItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side actions - CTA, Search, Hamburger */}
            <div className="flex items-center space-x-4">
              {/* CTA Button */}
              <button className="hidden md:block bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors">
                Daftar
              </button>

              {/* Search Button */}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              {/* Hamburger Button */}
              <button 
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Open navigation"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Hot Links */}
          <div className="lg:hidden border-t border-gray-200 py-3">
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 bg-yellow-50 text-yellow-800 px-3 py-1 rounded-full">
                <Bell size={12} />
                <span>Pendaftaran 2025</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <span>Portal</span>
                <ChevronDown size={12} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Navigation */}
      <FullScreenNav 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />

      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  )
}