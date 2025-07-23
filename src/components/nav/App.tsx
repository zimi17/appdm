import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { LoadingScreen } from "./components/LoadingScreen";
import { Header } from "./components/Header";
import { FullScreenNavigation } from "./components/FullScreenNavigation";
import { HeroSection } from "./components/HeroSection";
import { KeyActionCards } from "./components/KeyActionCards";
import { FeaturedInsights } from "./components/FeaturedInsights";
import { DynamicFocusAreas } from "./components/DynamicFocusAreas";
import { Footer } from "./components/Footer";
import { NotificationProvider, useNotification } from "./components/Notification";

gsap.registerPlugin(ScrollTrigger, SplitText);

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  
  const { showSuccess, showInfo } = useNotification();

  const openNavigation = () => setIsNavigationOpen(true);
  const closeNavigation = () => setIsNavigationOpen(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Show welcome notification after loading
    setTimeout(() => {
      showSuccess("Selamat Datang!", "Selamat datang di website STIE Dwimulya yang baru.");
    }, 1000);
  };

  const handleExploreClick = () => {
    // Smooth scroll to key action cards
    const element = document.querySelector('#key-actions');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleProgramClick = () => {
    showInfo("Program Akademik", "Informasi detail program akan segera tersedia.");
  };

  const handleAdmissionClick = () => {
    showInfo("Pendaftaran", "Portal pendaftaran online akan segera dibuka.");
  };

  const handleCampusClick = () => {
    showInfo("Kehidupan Kampus", "Eksplorasi kehidupan kampus STIE Dwimulya.");
  };

  // Reset ScrollTrigger when loading completes
  useEffect(() => {
    if (!isLoading) {
      ScrollTrigger.refresh();
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={openNavigation} />

      <main className="relative">
        {/* Hero Section - White Background */}
        <HeroSection onExploreClick={handleExploreClick} />

        {/* Key Action Cards - Light Grey Background */}
        <div id="key-actions">
          <KeyActionCards 
            onProgramClick={handleProgramClick}
            onAdmissionClick={handleAdmissionClick}
            onCampusClick={handleCampusClick}
          />
        </div>

        {/* Featured Insights - Brand Black Background */}
        <FeaturedInsights />

        {/* Dynamic Focus Areas - White Background */}
        <DynamicFocusAreas />

        {/* Additional Content Blocks following Harvard rhythm */}
        
        {/* Statistics & Achievements - Light Grey Background */}
        <section className="py-24 bg-light-grey">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
                <h2 className="text-title font-merriweather text-oxford-blue mb-6 heading-block">
                  Pencapaian & Prestasi
                </h2>
                <p className="text-body-large font-montserrat text-brand-black reading-text max-w-3xl mx-auto mb-12">
                  STIE Dwimulya bangga dengan pencapaian luar biasa dari mahasiswa, 
                  alumni, dan fakultas yang terus berkontribusi pada kemajuan pendidikan 
                  ekonomi di Indonesia.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              {[
                { number: "2500+", label: "Mahasiswa Aktif", description: "Mahasiswa dari berbagai daerah di Indonesia" },
                { number: "5000+", label: "Alumni Sukses", description: "Tersebar di perusahaan terkemuka Indonesia" },
                { number: "50+", label: "Dosen Berpengalaman", description: "Praktisi dan akademisi profesional" },
                { number: "25", label: "Tahun Pengalaman", description: "Dalam pendidikan ekonomi berkualitas" },
                { number: "100+", label: "Perusahaan Mitra", description: "Kerjasama industri dan magang" },
                { number: "95%", label: "Tingkat Kelulusan", description: "Lulusan tepat waktu dengan IPK tinggi" }
              ].map((stat, index) => (
                <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <div className="bg-white rounded-xl p-8 text-center card-micro brand-shadow">
                    <div className="text-display font-merriweather text-oxford-blue mb-2">
                      {stat.number}
                    </div>
                    <h3 className="text-subtitle font-merriweather text-oxford-blue mb-3 heading-block">
                      {stat.label}
                    </h3>
                    <p className="text-body font-montserrat text-brand-black reading-text">
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - White Background */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center mb-16">
                <h2 className="text-title font-merriweather text-oxford-blue mb-6 heading-block">
                  Kata Alumni & Mitra
                </h2>
                <p className="text-body-large font-montserrat text-brand-black reading-text">
                  Mendengar langsung dari mereka yang telah merasakan 
                  kualitas pendidikan STIE Dwimulya.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-8">
              {[
                {
                  quote: "STIE Dwimulya memberikan fondasi yang kuat dalam bidang ekonomi dan bisnis. Pendidikan yang saya terima sangat aplikatif dan relevan dengan kebutuhan industri.",
                  name: "Sarah Wijaya, S.E.",
                  position: "Finance Manager, PT. Global Solutions",
                  year: "Alumni 2019"
                },
                {
                  quote: "Program magang dan kerjasama industri di STIE Dwimulya sangat membantu mahasiswa untuk mendapatkan pengalaman praktis yang berharga sebelum lulus.",
                  name: "Dr. Michael Chen",
                  position: "CEO, Tech Innovation Corp",
                  year: "Mitra Industri"
                },
                {
                  quote: "Dosen-dosen di STIE Dwimulya tidak hanya berkualitas secara akademis, tetapi juga memiliki pengalaman praktis yang luas di dunia bisnis.",
                  name: "Ahmad Rahmanto, M.M.",
                  position: "Senior Consultant, Business Advisory",
                  year: "Alumni 2020"
                }
              ].map((testimonial, index) => (
                <div key={index} className="col-span-12 lg:col-span-4">
                  <div className="bg-light-grey rounded-xl p-8 h-full card-micro">
                    <div className="mb-6">
                      <div className="text-6xl font-merriweather text-oxford-blue/20 leading-none">"</div>
                      <p className="text-body font-montserrat text-brand-black reading-text italic">
                        {testimonial.quote}
                      </p>
                    </div>
                    
                    <div className="border-t border-oxford-blue/10 pt-6">
                      <h4 className="text-body-bold font-montserrat text-oxford-blue mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-caption font-montserrat text-slate-grey">
                        {testimonial.position}
                      </p>
                      <p className="text-caption font-montserrat text-brand-gold font-bold">
                        {testimonial.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Light Grey Background */}
        <section className="py-24 bg-light-grey">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-8 lg:col-start-3">
                <div className="bg-oxford-blue rounded-2xl p-12 text-center relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold rounded-full transform translate-x-32 -translate-y-32" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-blue rounded-full transform -translate-x-24 translate-y-24" />
                  </div>

                  <div className="relative z-10">
                    <h2 className="text-title font-merriweather text-white mb-6 heading-block">
                      Siap Memulai Perjalanan Akademik Anda?
                    </h2>
                    <p className="text-body-large font-montserrat text-sky-blue mb-8 reading-text max-w-2xl mx-auto">
                      Bergabunglah dengan ribuan mahasiswa yang telah memilih STIE Dwimulya 
                      sebagai tempat mengembangkan potensi di bidang ekonomi dan bisnis.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button 
                        className="btn-micro btn-accent px-8 py-4"
                        onClick={handleAdmissionClick}
                      >
                        Daftar Sekarang
                      </button>
                      <button className="btn-micro btn-outline border-white text-white hover:bg-white hover:text-oxford-blue px-8 py-4">
                        Hubungi Kami
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Brand Black Background */}
      <Footer />

      <FullScreenNavigation
        isOpen={isNavigationOpen}
        onClose={closeNavigation}
      />
    </div>
  );
}

export default function App() {
  return (
    <NotificationProvider>
      <AppContent />
    </NotificationProvider>
  );
}