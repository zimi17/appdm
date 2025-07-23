import React, { useState, useEffect, useRef } from 'react';
import { X, Search, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { Logo } from './Logo';

gsap.registerPlugin(Flip, SplitText, DrawSVGPlugin);

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FullScreenNavigation({ isOpen, onClose }: NavigationProps) {
  const [activeSection, setActiveSection] = useState('Program Akademik');
  const overlayRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftNavRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const navigationSections = [
    {
      title: 'Program Akademik',
      content: {
        title: 'Program Akademik',
        description: 'Menggabungkan ide-ide inovatif, pedagogi yang kuat, dan pembelajaran berbasis kohort kolaboratif untuk memberikan pendidikan ekonomi dan bisnis yang tak tertandingi.',
        programs: [
          { name: 'Program S1 Manajemen', url: '#' },
          { name: 'Program S1 Akuntansi', url: '#' },
          { name: 'Program S2 Magister Manajemen', url: '#' },
          { name: 'Program Ekstensi', url: '#' }
        ]
      }
    },
    {
      title: 'Dosen & Penelitian',
      content: {
        title: 'Dosen & Penelitian',
        description: 'Dosen berkualitas tinggi yang melakukan penelitian mutakhir di semua bidang ekonomi dan bisnis, mendukung kemajuan ilmu pengetahuan.',
        programs: [
          { name: 'Direktori Dosen', url: '#' },
          { name: 'Pusat Penelitian', url: '#' },
          { name: 'Jurnal Ilmiah', url: '#' },
          { name: 'Studi Kasus', url: '#' }
        ]
      }
    },
    {
      title: 'Alumni',
      content: {
        title: 'Alumni',
        description: 'Jaringan global para pemimpin yang membuat perbedaan dalam dunia bisnis dan masyarakat, menjadi kebanggaan STIE Dwimulya.',
        programs: [
          { name: 'Direktori Alumni', url: '#' },
          { name: 'Acara Alumni', url: '#' },
          { name: 'Layanan Karir', url: '#' },
          { name: 'Donasi & Beasiswa', url: '#' }
        ]
      }
    },
    {
      title: 'Tentang Kami',
      content: {
        title: 'Tentang Kami',
        description: 'Pelajari tentang visi, misi, sejarah, dan komitmen kami dalam mengembangkan para pemimpin masa depan di bidang ekonomi dan bisnis.',
        programs: [
          { name: 'Visi & Misi', url: '#' },
          { name: 'Pimpinan', url: '#' },
          { name: 'Kampus & Fasilitas', url: '#' },
          { name: 'Berita & Artikel', url: '#' }
        ]
      }
    },
    {
      title: 'Penelitian',
      content: {
        title: 'Penelitian',
        description: 'Wawasan berbasis penelitian tentang tren bisnis dan kepemimpinan yang relevan dengan perkembangan ekonomi Indonesia.',
        programs: [
          { name: 'Jurnal STIE Dwimulya', url: '#' },
          { name: 'Publikasi Ilmiah', url: '#' },
          { name: 'Seminar Nasional', url: '#' },
          { name: 'Working Papers', url: '#' }
        ]
      }
    },
    {
      title: 'Kerjasama',
      content: {
        title: 'Kerjasama',
        description: 'Terhubung dengan mahasiswa dan alumni berbakat kami untuk organisasi Anda, membangun sinergi antara akademisi dan industri.',
        programs: [
          { name: 'Rekrutmen Mahasiswa', url: '#' },
          { name: 'Magang Industri', url: '#' },
          { name: 'Job Fair', url: '#' },
          { name: 'Kemitraan Perusahaan', url: '#' }
        ]
      }
    },
    {
      title: 'Perpustakaan',
      content: {
        title: 'Perpustakaan',
        description: 'Perpustakaan dengan koleksi lengkap untuk mendukung pembelajaran dan penelitian di bidang ekonomi dan bisnis.',
        programs: [
          { name: 'Katalog Online', url: '#' },
          { name: 'E-Book & E-Journal', url: '#' },
          { name: 'Ruang Belajar', url: '#' },
          { name: 'Layanan Referensi', url: '#' }
        ]
      }
    },
    {
      title: 'Kemahasiswaan',
      content: {
        title: 'Kemahasiswaan',
        description: 'Program dan kegiatan khusus yang mendorong inovasi dalam pendidikan bisnis dan pengembangan soft skills mahasiswa.',
        programs: [
          { name: 'Organisasi Mahasiswa', url: '#' },
          { name: 'Kompetisi Bisnis', url: '#' },
          { name: 'Beasiswa', url: '#' },
          { name: 'Kegiatan Ekstrakurikuler', url: '#' }
        ]
      }
    }
  ];

  const s1Programs = [
    'Program Studi Manajemen',
    'Program Studi Akuntansi',
    'Kurikulum Terbaru',
    'Praktik Industri',
    'Skripsi & Tugas Akhir',
    'Penerimaan Mahasiswa Baru',
    'Wisuda',
    'Bantuan Keuangan'
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'FB', url: '#' },
    { name: 'LinkedIn', icon: 'LI', url: '#' },
    { name: 'Instagram', icon: 'IG', url: '#' },
    { name: 'YouTube', icon: 'YT', url: '#' },
    { name: 'TikTok', icon: 'TT', url: '#' },
    { name: 'WhatsApp', icon: 'WA', url: '#' }
  ];

  useEffect(() => {
    if (isOpen && overlayRef.current) {
      // Animasi buka menu
      timelineRef.current = gsap.timeline();
      
      gsap.set(overlayRef.current, { display: 'block' });
      
      timelineRef.current
        .fromTo(overlayRef.current, 
          { opacity: 0 },
          { opacity: 1, duration: 0.4, ease: "power2.out" }
        )
        .fromTo(headerRef.current,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.2"
        )
        .fromTo(leftNavRef.current,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(rightContentRef.current,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.5"
        );

      // Animasi staggered untuk menu items
      gsap.fromTo(".nav-item", 
        { x: -30, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.4, 
          stagger: 0.1, 
          ease: "power2.out",
          delay: 0.3
        }
      );

      // Animasi social links
      gsap.fromTo(socialLinksRef.current?.children || [], 
        { scale: 0, rotation: 180 },
        { 
          scale: 1, 
          rotation: 0, 
          duration: 0.5, 
          stagger: 0.1, 
          ease: "back.out(1.7)",
          delay: 0.8
        }
      );

    } else if (!isOpen && timelineRef.current) {
      // Animasi tutup menu
      timelineRef.current.reverse();
      timelineRef.current.eventCallback("onReverseComplete", () => {
        if (overlayRef.current) {
          gsap.set(overlayRef.current, { display: 'none' });
        }
      });
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [isOpen]);

  // Animasi saat ganti section
  useEffect(() => {
    if (isOpen) {
      const contentElements = document.querySelectorAll('.content-section');
      gsap.fromTo(contentElements, 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.1, 
          ease: "power2.out" 
        }
      );

      // Split text animation untuk judul
      const titles = document.querySelectorAll('.section-title');
      titles.forEach(title => {
        const split = new SplitText(title, { type: "chars" });
        gsap.fromTo(split.chars, 
          { opacity: 0, y: 20 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.05, 
            stagger: 0.02, 
            ease: "power2.out" 
          }
        );
      });
    }
  }, [activeSection, isOpen]);

  const handleClose = () => {
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 bg-oxford-blue/96 backdrop-blur-sm z-50 overflow-hidden font-montserrat"
      style={{ display: 'none' }}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="h-full flex flex-col">
        {/* Header - Brand Colors */}
        <div 
          ref={headerRef}
          className="flex items-center justify-between px-8 py-6 border-b border-white/20"
        >
          <div className="flex items-center space-x-4">
            <Logo size="xl" variant="dark" />
            <div className="text-white">
              <div className="nav-title text-white font-montserrat">STIE Dwimulya</div>
              <div className="text-caption opacity-80 mt-1 font-montserrat">Sekolah Tinggi Ilmu Ekonomi</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              className="text-white hover:text-brand-gold p-3 rounded-lg hover:bg-white/10 transition-all duration-200 nav-text control-text font-montserrat"
              aria-label="Pencarian"
            >
              <Search size={22} />
            </button>
            <button 
              onClick={handleClose}
              className="text-white hover:text-brand-gold p-3 rounded-lg hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 nav-text control-text font-montserrat"
              aria-label="Tutup navigasi"
            >
              <X size={26} />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Navigation - Brand Typography */}
          <div 
            ref={leftNavRef}
            className="w-2/5 px-8 py-8 border-r border-white/20 overflow-y-auto"
          >
            <nav className="space-y-2 font-montserrat" role="navigation" aria-label="Menu utama">
              {navigationSections.map((section, index) => (
                <button
                  key={section.title}
                  onClick={() => setActiveSection(section.title)}
                  className={`nav-item block w-full text-left py-4 px-6 rounded-lg transition-all duration-300 group nav-text font-montserrat ${
                    activeSection === section.title 
                      ? 'text-white bg-brand-gold/20 border-l-4 border-brand-gold' 
                      : 'text-sky-blue hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={activeSection === section.title ? 'page' : undefined}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-body-bold font-montserrat safe-text">{section.title}</span>
                    <ChevronRight 
                      size={18} 
                      className={`transition-transform duration-300 ${
                        activeSection === section.title ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`}
                    />
                  </div>
                </button>
              ))}
            </nav>

            {/* Social Links - Brand Colors */}
            <div 
              ref={socialLinksRef}
              className="mt-16 pt-8 border-t border-white/20"
            >
              <div className="text-overline text-sky-blue mb-4 font-montserrat safe-text">Ikuti Kami</div>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 bg-white/10 text-white flex items-center justify-center rounded-lg hover:bg-brand-gold transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-gold nav-text font-montserrat safe-text"
                    aria-label={`Kunjungi ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Brand Typography */}
          <div 
            ref={rightContentRef}
            className="w-3/5 px-8 py-8 overflow-y-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Active Section Content */}
              {navigationSections.map((section) => {
                if (section.title !== activeSection) return null;
                return (
                  <div key={section.title} className="content-section">
                    <h2 className="section-title text-subtitle text-white mb-6 font-merriweather heading-block">{section.content.title}</h2>
                    <p className="text-body-large text-sky-blue mb-8 font-montserrat reading-text">
                      {section.content.description}
                    </p>
                    <nav className="space-y-4 font-montserrat" role="navigation" aria-label={`Menu ${section.content.title}`}>
                      {section.content.programs.map((program, index) => (
                        <a
                          key={program.name}
                          href={program.url}
                          className="program-link block text-sky-blue hover:text-white transition-all duration-300 text-body-bold group nav-text font-montserrat safe-text"
                          style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                        >
                          <div className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-white/5">
                            <span className="text-left">{program.name}</span>
                            <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                          </div>
                        </a>
                      ))}
                    </nav>
                  </div>
                );
              })}

              {/* S1 Program Section */}
              {activeSection === 'Program Akademik' && (
                <div className="content-section">
                  <h2 className="section-title text-subtitle text-white mb-6 font-merriweather heading-block">Program Sarjana</h2>
                  <nav className="space-y-4 font-montserrat" role="navigation" aria-label="Program Sarjana">
                    {s1Programs.map((program, index) => (
                      <a
                        key={program}
                        href="#"
                        className="program-link block text-sky-blue hover:text-white transition-all duration-300 text-body-bold group nav-text font-montserrat safe-text"
                        style={{ '--delay': `${(index + 4) * 0.1}s` } as React.CSSProperties}
                      >
                        <div className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-white/5">
                          <span className="text-left">{program}</span>
                          <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}