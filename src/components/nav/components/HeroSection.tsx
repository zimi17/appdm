import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { Button } from './Button';
import { ChevronRight, Users, Award, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export function HeroSection({ onExploreClick }: HeroSectionProps) {
  const heroRef = useRef<HTMLElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!taglineRef.current || !subtitleRef.current) return;

    // Split text animations
    const taglineSplit = new SplitText(taglineRef.current, { type: "chars" });
    const subtitleSplit = new SplitText(subtitleRef.current, { type: "words" });

    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      taglineSplit.chars,
      { opacity: 0, y: 100, rotationZ: 5 },
      {
        opacity: 1,
        y: 0,
        rotationZ: 0,
        duration: 0.8,
        stagger: 0.03,
        ease: "back.out(1.7)",
      }
    ).fromTo(
      subtitleSplit.words,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
      },
      "-=0.4"
    ).fromTo(
      statsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.2"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-white overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="STIE Dwimulya Campus Life"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-oxford-blue/90 via-oxford-blue/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Text Content - 7 columns */}
            <div className="col-span-12 lg:col-span-7">
              <div className="max-w-4xl">
                {/* Tagline */}
                <h1 
                  ref={taglineRef}
                  className="text-display font-merriweather text-white mb-6 leading-tight"
                >
                  Mencetak Pemimpin Ekonomi yang Berdampak
                </h1>
                
                {/* Subtitle */}
                <p 
                  ref={subtitleRef}
                  className="text-body-large font-montserrat text-sky-blue mb-8 leading-relaxed max-w-2xl"
                >
                  Sekolah Tinggi Ilmu Ekonomi Dwimulya menghadirkan pendidikan 
                  berkualitas tinggi dengan standar internasional, menciptakan 
                  lulusan yang siap menghadapi tantangan ekonomi global.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button
                    variant="accent"
                    size="lg"
                    icon={<ChevronRight />}
                    onClick={onExploreClick}
                    className="text-oxford-blue hover:text-oxford-blue"
                  >
                    Jelajahi Program Kami
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-oxford-blue"
                  >
                    Pelajari Lebih Lanjut
                  </Button>
                </div>

                {/* Quick Stats */}
                <div 
                  ref={statsRef}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                >
                  <div className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start mb-2">
                      <Users className="w-6 h-6 text-brand-gold mr-2" />
                      <span className="text-title font-merriweather text-white">2500+</span>
                    </div>
                    <p className="text-caption font-montserrat text-sky-blue">Mahasiswa Aktif</p>
                  </div>
                  
                  <div className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start mb-2">
                      <Award className="w-6 h-6 text-brand-gold mr-2" />
                      <span className="text-title font-merriweather text-white">50+</span>
                    </div>
                    <p className="text-caption font-montserrat text-sky-blue">Dosen Berpengalaman</p>
                  </div>
                  
                  <div className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start mb-2">
                      <BookOpen className="w-6 h-6 text-brand-gold mr-2" />
                      <span className="text-title font-merriweather text-white">25</span>
                    </div>
                    <p className="text-caption font-montserrat text-sky-blue">Tahun Pengalaman</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element - 5 columns */}
            <div className="col-span-12 lg:col-span-5">
              <div className="relative">
                {/* Abstract decorative element */}
                <div className="hidden lg:block">
                  <div className="w-96 h-96 rounded-full bg-gradient-to-br from-brand-gold/20 to-sky-blue/20 backdrop-blur-sm border border-white/10" />
                  <div className="absolute top-8 left-8 w-80 h-80 rounded-full bg-gradient-to-br from-sky-blue/10 to-brand-gold/10 backdrop-blur-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center animate-bounce">
          <p className="text-caption font-montserrat text-sky-blue mb-2">Scroll untuk melihat lebih banyak</p>
          <ChevronRight className="w-6 h-6 text-brand-gold transform rotate-90" />
        </div>
      </div>
    </section>
  );
}