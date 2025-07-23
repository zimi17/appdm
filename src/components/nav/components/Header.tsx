import React, { useEffect, useRef } from 'react';
import { Menu, Search } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Logo } from './Logo';

gsap.registerPlugin(ScrollTrigger);

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    // Animasi scroll untuk header
    gsap.fromTo(headerRef.current, 
      { 
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(0px)"
      },
      {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        scrollTrigger: {
          trigger: "body",
          start: "top -50px",
          end: "bottom top",
          scrub: true,
        }
      }
    );

    // Animasi masuk untuk elemen header
    const tl = gsap.timeline();
    tl.from(logoRef.current, {
      scale: 0,
      rotation: 180,
      duration: 0.6,
      ease: "back.out(1.7)"
    })
    .from(brandRef.current, {
      x: -30,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3")
    .from(buttonsRef.current, {
      x: 30,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3");

  }, []);

  return (
    <header 
      ref={headerRef}
      className="bg-white/90 backdrop-blur-sm border-b border-oxford-blue/20 px-8 py-6 sticky top-0 z-40 transition-all duration-300"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <div 
            ref={logoRef}
            className="transform hover:scale-105 transition-transform duration-200"
          >
            <Logo size="lg" variant="light" />
          </div>
          <div ref={brandRef}>
            <div className="nav-title text-oxford-blue font-montserrat">STIE Dwimulya</div>
            <div className="text-caption text-slate-grey mt-1 font-montserrat">Sekolah Tinggi Ilmu Ekonomi</div>
          </div>
        </div>

        <div ref={buttonsRef} className="flex items-center space-x-6">
          <button 
            className="text-slate-grey hover:text-oxford-blue p-3 rounded-lg hover:bg-sky-blue/10 transition-all duration-200 transform hover:scale-105 nav-text font-montserrat"
            aria-label="Pencarian"
          >
            <Search size={22} />
          </button>
          <button 
            onClick={onMenuClick}
            className="text-slate-grey hover:text-oxford-blue p-3 rounded-lg hover:bg-sky-blue/10 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-oxford-blue focus:ring-offset-2 nav-text font-montserrat"
            aria-label="Buka menu navigasi"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}