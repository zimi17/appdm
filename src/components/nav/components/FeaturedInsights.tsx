import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './Button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Eye,
  TrendingUp,
  Globe,
  Target
} from 'lucide-react';

export function FeaturedInsights() {
  const sectionRef = useRef<HTMLElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainContentRef.current || !sidebarRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 40%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(
      mainContentRef.current,
      { opacity: 0, x: -60 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
    ).fromTo(
      sidebarRef.current,
      { opacity: 0, x: 60 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const insights = [
    {
      title: "Transformasi Digital dalam Pendidikan Ekonomi",
      category: "Digital Innovation",
      date: "15 Januari 2025",
      author: "Dr. Ahmad Santoso, M.M.",
      excerpt: "Bagaimana teknologi mengubah cara kita memahami dan mengajarkan ilmu ekonomi di era modern.",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      title: "Startup Ekonomi Kreatif: Peluang Generasi Z",
      category: "Entrepreneurship",
      date: "12 Januari 2025",
      author: "Prof. Dr. Siti Nurhaliza, S.E., M.Ak.",
      readTime: "3 min"
    },
    {
      title: "Analisis Pasar Modal Indonesia 2025",
      category: "Financial Analysis", 
      date: "10 Januari 2025",
      author: "Dr. Budi Prasetyo, M.Si.",
      readTime: "7 min"
    },
    {
      title: "Sustainable Business: Masa Depan Korporasi",
      category: "Sustainability",
      date: "8 Januari 2025", 
      author: "Dr. Maria Kusuma, M.B.A.",
      readTime: "4 min"
    }
  ];

  const quickLinks = [
    { 
      title: "Penelitian Mahasiswa",
      description: "Karya ilmiah terbaik dari mahasiswa STIE Dwimulya",
      icon: Target,
      link: "#"
    },
    {
      title: "Kolaborasi Industri", 
      description: "Partnership dengan perusahaan terkemuka",
      icon: Globe,
      link: "#"
    },
    {
      title: "Tren Ekonomi Global",
      description: "Analisis perkembangan ekonomi dunia",
      icon: TrendingUp, 
      link: "#"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-brand-black">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content - 8 columns */}
          <div ref={mainContentRef} className="col-span-12 lg:col-span-8">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-title font-merriweather text-white mb-4 heading-block">
                Wawasan & Penelitian
              </h2>
              <p className="text-body-large font-montserrat text-sky-blue reading-text max-w-2xl">
                Temukan riset terdepan, analisis mendalam, dan perspektif inovatif 
                dari fakultas dan mahasiswa STIE Dwimulya.
              </p>
            </div>

            {/* Featured Article */}
            {insights.filter(insight => insight.featured).map((insight, index) => (
              <article key={index} className="mb-12">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 card-micro">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 lg:h-full">
                      <ImageWithFallback
                        src={insight.image!}
                        alt={insight.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-brand-gold text-oxford-blue px-3 py-1 rounded-full text-caption font-montserrat font-bold">
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-brand-gold text-caption font-montserrat font-bold uppercase tracking-wide">
                            {insight.category}
                          </span>
                          <div className="flex items-center text-sky-blue text-caption font-montserrat">
                            <Calendar className="w-4 h-4 mr-1" />
                            {insight.date}
                          </div>
                        </div>

                        <h3 className="text-subtitle font-merriweather text-white mb-4 heading-block">
                          {insight.title}
                        </h3>

                        <p className="text-body font-montserrat text-white/80 mb-6 reading-text">
                          {insight.excerpt}
                        </p>

                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center text-sky-blue text-caption font-montserrat">
                            <User className="w-4 h-4 mr-2" />
                            {insight.author}
                          </div>
                          <div className="flex items-center text-sky-blue text-caption font-montserrat">
                            <Eye className="w-4 h-4 mr-1" />
                            {insight.readTime} baca
                          </div>
                        </div>
                      </div>

                      <Button 
                        variant="accent" 
                        icon={<ArrowRight />}
                        className="self-start"
                      >
                        Baca Selengkapnya
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {/* Other Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {insights.filter(insight => !insight.featured).map((insight, index) => (
                <article key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 card-micro">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-brand-gold text-caption font-montserrat font-bold uppercase tracking-wide">
                      {insight.category}
                    </span>
                    <div className="flex items-center text-sky-blue text-caption font-montserrat">
                      <Eye className="w-3 h-3 mr-1" />
                      {insight.readTime}
                    </div>
                  </div>

                  <h4 className="text-body-bold font-merriweather text-white mb-3 heading-block leading-tight">
                    {insight.title}
                  </h4>

                  <div className="flex items-center justify-between text-caption font-montserrat text-sky-blue mb-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      <span className="truncate">{insight.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {insight.date}
                    </div>
                  </div>

                  <Button variant="ghost" size="sm" className="text-sky-blue hover:text-white p-0">
                    Baca artikel →
                  </Button>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar - 4 columns */}
          <aside ref={sidebarRef} className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-8 space-y-8">
              {/* Quick Links */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-subtitle font-merriweather text-white mb-6 heading-block">
                  Jelajahi Lebih Lanjut
                </h3>
                
                <div className="space-y-4">
                  {quickLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <a 
                        key={index}
                        href={link.link}
                        className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200 card-micro group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-brand-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-4 h-4 text-brand-gold" />
                          </div>
                          <div>
                            <h4 className="text-body-bold font-montserrat text-white mb-1 group-hover:text-brand-gold transition-colors">
                              {link.title}
                            </h4>
                            <p className="text-caption font-montserrat text-sky-blue">
                              {link.description}
                            </p>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-brand-gold/10 to-sky-blue/10 backdrop-blur-sm rounded-xl p-6 border border-brand-gold/20">
                <h3 className="text-subtitle font-merriweather text-white mb-4 heading-block">
                  Newsletter STIE Dwimulya
                </h3>
                <p className="text-body font-montserrat text-sky-blue mb-6 reading-text">
                  Dapatkan update terbaru tentang riset, acara, dan insight 
                  ekonomi langsung di inbox Anda.
                </p>
                
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email Anda"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-sky-blue focus:outline-none focus:border-brand-gold font-montserrat"
                  />
                  <Button variant="accent" className="w-full">
                    Berlangganan
                  </Button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-subtitle font-merriweather text-white mb-4 heading-block">
                  Hubungi Peneliti
                </h3>
                <p className="text-body font-montserrat text-sky-blue mb-4 reading-text">
                  Tertarik berkolaborasi dalam penelitian? Tim akademik kami 
                  terbuka untuk diskusi dan kerjasama.
                </p>
                <Button variant="outline" size="sm" className="border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-oxford-blue">
                  Kontak Tim Peneliti
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}