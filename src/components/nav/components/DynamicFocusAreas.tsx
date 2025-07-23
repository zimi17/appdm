import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function DynamicFocusAreas() {
  const sectionRef = useRef<HTMLElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const focusAreas = [
    "Manajemen Keuangan",
    "Kewirausahaan Digital", 
    "Ekonomi Syariah",
    "Pemasaran Inovatif",
    "Akuntansi Forensik",
    "Business Analytics",
    "Ekonomi Berkelanjutan",
    "Fintech & Blockchain"
  ];

  useEffect(() => {
    if (!tickerRef.current || !contentRef.current) return;

    // Content animation on scroll
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Infinite ticker animation
    const tickerWidth = tickerRef.current.scrollWidth;
    const containerWidth = tickerRef.current.parentElement?.offsetWidth || 0;
    
    gsap.set(tickerRef.current, { x: containerWidth });
    
    gsap.to(tickerRef.current, {
      x: -tickerWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-8">
        {/* Section Content */}
        <div ref={contentRef} className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
            <h2 className="text-title font-merriweather text-oxford-blue mb-6 heading-block">
              Fokus Studi & Dampak
            </h2>
            <p className="text-body-large font-montserrat text-brand-black reading-text max-w-3xl mx-auto">
              Kurikulum STIE Dwimulya dirancang untuk menghadapi tantangan ekonomi 
              modern dengan fokus pada bidang studi yang relevan dan berdampak nyata 
              bagi masa depan bisnis Indonesia.
            </p>
          </div>
        </div>

        {/* Animated Ticker */}
        <div className="relative mb-16">
          <div className="overflow-hidden">
            <div 
              ref={tickerRef}
              className="flex items-center gap-16 whitespace-nowrap"
            >
              {/* Duplicate the array to create seamless loop */}
              {[...focusAreas, ...focusAreas].map((area, index) => (
                <span 
                  key={index}
                  className="text-6xl lg:text-8xl font-montserrat font-bold text-slate-grey/20 select-none"
                  style={{ fontWeight: 800 }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>

        {/* Detailed Focus Areas Grid */}
        <div className="grid grid-cols-12 gap-6">
          {focusAreas.slice(0, 6).map((area, index) => (
            <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="bg-light-grey rounded-xl p-6 h-full card-micro group hover:bg-oxford-blue transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-brand-gold rounded-full mr-3 group-hover:bg-sky-blue transition-colors duration-300" />
                  <span className="text-overline font-montserrat text-slate-grey group-hover:text-sky-blue transition-colors duration-300">
                    Bidang Fokus
                  </span>
                </div>
                
                <h3 className="text-subtitle font-merriweather text-oxford-blue mb-3 heading-block group-hover:text-white transition-colors duration-300">
                  {area}
                </h3>
                
                <p className="text-body font-montserrat text-brand-black reading-text group-hover:text-sky-blue transition-colors duration-300">
                  Program studi yang mengintegrasikan teori dan praktik terkini 
                  untuk mempersiapkan lulusan yang kompeten di era digital.
                </p>

                <div className="mt-6 flex items-center text-oxford-blue group-hover:text-brand-gold transition-colors duration-300">
                  <span className="text-caption font-montserrat font-bold">Pelajari lebih lanjut</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="grid grid-cols-12 gap-8 mt-16">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="bg-gradient-to-r from-oxford-blue/5 to-sky-blue/5 rounded-2xl p-8 text-center border border-oxford-blue/10">
              <h3 className="text-subtitle font-merriweather text-oxford-blue mb-4 heading-block">
                Siap Mengembangkan Keahlian di Bidang Pilihan Anda?
              </h3>
              <p className="text-body font-montserrat text-brand-black mb-6 reading-text max-w-2xl mx-auto">
                Konsultasikan dengan tim akademik kami untuk menemukan konsentrasi 
                studi yang sesuai dengan minat dan tujuan karir Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-micro btn-primary">
                  Konsultasi Akademik
                </button>
                <button className="btn-micro btn-outline">
                  Download Kurikulum
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}