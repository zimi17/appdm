import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './Button';
import { 
  GraduationCap, 
  UserPlus, 
  Users, 
  ChevronRight,
  BookOpen,
  Calendar
} from 'lucide-react';

interface KeyActionCardsProps {
  onProgramClick: () => void;
  onAdmissionClick: () => void;
  onCampusClick: () => void;
}

export function KeyActionCards({ onProgramClick, onAdmissionClick, onCampusClick }: KeyActionCardsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.action-card');

    gsap.fromTo(
      cards,
      { 
        opacity: 0, 
        y: 80, 
        scale: 0.9 
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const actionCards = [
    {
      id: 'programs',
      title: 'Program Sarjana',
      subtitle: 'S1 Manajemen & Akuntansi',
      description: 'Kurikulum terkini yang mempersiapkan mahasiswa menjadi profesional ekonomi dan bisnis yang kompeten di era digital.',
      icon: GraduationCap,
      bgColor: 'bg-oxford-blue',
      textColor: 'text-white',
      accentColor: 'text-brand-gold',
      buttonVariant: 'accent' as const,
      onClick: onProgramClick,
      stats: [
        { label: 'Program Studi', value: '2' },
        { label: 'Konsentrasi', value: '6' },
        { label: 'SKS', value: '144' }
      ]
    },
    {
      id: 'admission',
      title: 'Pendaftaran Mahasiswa Baru',
      subtitle: 'Mulai Perjalanan Akademik Anda',
      description: 'Bergabunglah dengan komunitas akademik STIE Dwimulya dan wujudkan impian karir di bidang ekonomi dan bisnis.',
      icon: UserPlus,
      bgColor: 'bg-brand-gold',
      textColor: 'text-oxford-blue',
      accentColor: 'text-oxford-blue',
      buttonVariant: 'primary' as const,
      onClick: onAdmissionClick,
      stats: [
        { label: 'Jalur Masuk', value: '3' },
        { label: 'Beasiswa', value: '5' },
        { label: 'Periode', value: '2x/tahun' }
      ]
    },
    {
      id: 'campus',
      title: 'Kehidupan Kampus & Prestasi',
      subtitle: 'Pengalaman Mahasiswa yang Bermakna',
      description: 'Nikmati kehidupan kampus yang dinamis dengan berbagai kegiatan akademik, organisasi, dan pencapaian mahasiswa.',
      icon: Users,
      bgColor: 'bg-brand-black',
      textColor: 'text-white',
      accentColor: 'text-sky-blue',
      buttonVariant: 'secondary' as const,
      onClick: onCampusClick,
      stats: [
        { label: 'Organisasi', value: '15+' },
        { label: 'Kompetisi', value: '25+' },
        { label: 'Event/tahun', value: '50+' }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-light-grey">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
            <h2 className="text-title font-merriweather text-oxford-blue mb-6 heading-block">
              Mulai Perjalanan Anda di STIE Dwimulya
            </h2>
            <p className="text-body-large font-montserrat text-brand-black reading-text max-w-3xl mx-auto">
              Temukan pintu masuk menuju pendidikan ekonomi berkualitas tinggi dan 
              kehidupan kampus yang dinamis di STIE Dwimulya.
            </p>
          </div>
        </div>

        {/* Action Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-12 gap-8">
          {actionCards.map((card, index) => {
            const IconComponent = card.icon;
            
            return (
              <div 
                key={card.id}
                className="action-card col-span-12 lg:col-span-4"
              >
                <div className={`
                  ${card.bgColor} rounded-2xl p-8 h-full card-micro brand-shadow-lg
                  relative overflow-hidden micro-interaction-container
                `}>
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <IconComponent className="w-full h-full" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <IconComponent className={`w-8 h-8 ${card.accentColor}`} />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className={`text-subtitle font-merriweather ${card.textColor} mb-2 heading-block`}>
                      {card.title}
                    </h3>
                    <h4 className={`text-body-bold font-montserrat ${card.accentColor} mb-4`}>
                      {card.subtitle}
                    </h4>

                    {/* Description */}
                    <p className={`text-body font-montserrat ${card.textColor} opacity-90 mb-6 reading-text`}>
                      {card.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {card.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className={`text-body-bold font-montserrat ${card.accentColor}`}>
                            {stat.value}
                          </div>
                          <div className={`text-caption font-montserrat ${card.textColor} opacity-70`}>
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant={card.buttonVariant}
                      size="md"
                      onClick={card.onClick}
                      icon={<ChevronRight />}
                      className="w-full justify-between"
                    >
                      <span>Pelajari Lebih Lanjut</span>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="grid grid-cols-12 gap-8 mt-16">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
            <div className="bg-white rounded-2xl p-8 brand-shadow">
              <BookOpen className="w-12 h-12 text-oxford-blue mx-auto mb-4" />
              <h3 className="text-subtitle font-merriweather text-oxford-blue mb-4 heading-block">
                Butuh Bantuan Memilih Program?
              </h3>
              <p className="text-body font-montserrat text-brand-black mb-6 reading-text">
                Tim konselor akademik kami siap membantu Anda menemukan program 
                yang sesuai dengan minat dan tujuan karir Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" icon={<Calendar />}>
                  Jadwalkan Konsultasi
                </Button>
                <Button variant="outline">
                  Download Brosur
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}