import React, { useState, useEffect, useRef } from "react"
import { ExternalLink, Bell, Mail, Coffee, Search, Menu } from "lucide-react"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Flip } from "gsap/Flip";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, Flip, SplitText);

// Import the new CSS file
import "./MaintenancePage.css";

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const copyData = {
  "sunda": {
    "judul": "STIE Dwimulya",
    "status": "Website keur diperbaiki",
    "deskripsi": "Kami nuju nyiapkeun tampilan jeung fitur anyar nu leuwih matak resep. Sabar heula nya, sebentar deui anjeun bakal meunang pangalaman nu leuwih asyik jeung gampang.",
    "peluncuran": "31 Poé · 10 Jam · 18 Menit · 30 Detik",
    "akses": "Perlu aksés ka sistem akademik ayeuna? Pencét Portal SIAKAD",
    "ucapan": "Hatur nuhun pikeun kasabaran anjeun. Kami komit pikeun terus ngaronjatkeun kualitas layanan.",
    "copyright": "© 2025 STIE Dwimulya — Sadaya hak dilindungi",
    "target": "Target Peluncuran: 17 Agustus 2025 — Poé Kamerdikaan Indonesia",
    "main_heading": "Website Sedang Dalam Perbaikan",
    "subtitle_system_status": "Status Sistem",
    "read_more": "Baca Selengkapnya &rarr;",
    "card_stay_updated_title": "Tetap Terhubung",
    "card_stay_updated_desc": "Dapatkan pemberitahuan saat kami kembali online dengan fitur yang ditingkatkan dan kinerja yang lebih baik.",
    "card_need_help_title": "Butuh Bantuan?",
    "card_need_help_desc": "Hubungi tim dukungan kami untuk bantuan selama periode pemeliharaan.",
    "card_brewing_status_title": "Status Pengerjaan",
    "card_brewing_status_desc": "Lihat kemajuan pengerjaan saat ini dan perkiraan waktu penyelesaian.",
    "progress_section_title": "Progres Pengerjaan",
    "progress_text": "65% Selesai - Masih dalam pengerjaan...",
    "footer_about_title": "Tentang STIE Dwimulya",
    "footer_about_desc": "Institusi pendidikan bisnis terkemuka yang berkomitmen pada keunggulan dalam pengembangan akademik dan profesional.",
    "footer_quick_links_title": "Tautan Cepat",
    "footer_academic_programs": "Program Akademik",
    "footer_student_portal": "Portal Mahasiswa",
    "footer_faculty": "Dosen",
    "footer_contact": "Kontak",
    "footer_contact_info_title": "Informasi Kontak",
    "footer_address_line1": "Jl. Pendidikan No. 123",
    "footer_address_line2": "Jakarta, Indonesia",
    "footer_phone": "Telepon: +62 21 1234567",
    "footer_email": "Email: info@stiedwimulya.ac.id",
    "footer_copyright_bottom": "© 2024 STIE Dwimulya. Semua hak dilindungi.",
    "notification_updates_soon": "Pembaruan akan segera diumumkan",
    "notification_social_media": "Pembaruan akan diumumkan di saluran media sosial kami",
    "notification_emergency_contact": "Kontak darurat: admin@stiedwimulya.ac.id",
    "notification_brewing_status": "Pengerjaan dimulai pukul 02:00 pagi, diperkirakan selesai pukul 08:00 pagi",
    "notification_menu_functionality": "Fungsionalitas menu akan diimplementasikan di sini",
  },
  "jawa": {
    "judul": "STIE Dwimulya",
    "status": "Website Sedang Diperbaiki",
    "deskripsi": "Kita lagi nyiapake pengalaman anyar sing luwih apik kanggo panjenengan. Monggo sabar sithik—sebentar maneh situs bakal bali online karo fitur anyar sing luwih menarik.",
    "peluncuran": "31 Dina · 10 Jam · 18 Menit · 30 Detik",
    "akses": "Butuh akses sistem akademik saiki? Klik Portal SIAKAD",
    "ucapan": "Matur nuwun sanget atas kesabaran panjenengan. Kita tansah komit ngapikake layanan.",
    "copyright": "© 2025 STIE Dwimulya — Kabeh hak dilindhungi",
    "target": "Target Peluncuran: 17 Agustus 2025 — Dina Kamardikan Indonesia",
    "main_heading": "Website Sedang Dalam Perbaikan",
    "subtitle_system_status": "Status Sistem",
    "read_more": "Waos Liyane &rarr;",
    "card_stay_updated_title": "Tetep Nyambung",
    "card_stay_updated_desc": "Entuk kabar nalika kita bali online kanthi fitur sing luwih apik lan kinerja sing luwih cepet.",
    "card_need_help_title": "Butuh Pitulung?",
    "card_need_help_desc": "Hubungi tim dhukungan kita kanggo pitulungan sajrone periode pangopènan.",
    "card_brewing_status_title": "Status Pengerjaan",
    "card_brewing_status_desc": "Deleng kemajuan pengerjaan saiki lan perkiraan wektu rampung.",
    "progress_section_title": "Progres Pengerjaan",
    "progress_text": "65% Rampung - Isih ing pengerjaan...",
    "footer_about_title": "Babagan STIE Dwimulya",
    "footer_about_desc": "Institusi pendidikan bisnis terkemuka sing setya marang keunggulan ing pengembangan akademik lan profesional.",
    "footer_quick_links_title": "Tautan Cepet",
    "footer_academic_programs": "Program Akademik",
    "footer_student_portal": "Portal Mahasiswa",
    "footer_faculty": "Dosen",
    "footer_contact": "Kontak",
    "footer_contact_info_title": "Informasi Kontak",
    "footer_address_line1": "Jl. Pendidikan No. 123",
    "footer_address_line2": "Jakarta, Indonesia",
    "footer_phone": "Telepon: +62 21 1234567",
    "footer_email": "Email: info@stiedwimulya.ac.id",
    "footer_copyright_bottom": "© 2024 STIE Dwimulya. Kabeh hak dilindhungi.",
    "notification_updates_soon": "Pembaruan bakal enggal diumumake",
    "notification_social_media": "Pembaruan bakal diumumake ing saluran media sosial kita",
    "notification_emergency_contact": "Kontak darurat: admin@stiedwimulya.ac.id",
    "notification_brewing_status": "Pengerjaan diwiwiti jam 02:00 esuk, diperkirakan rampung jam 08:00 esuk",
    "notification_menu_functionality": "Fungsionalitas menu bakal diimplementasikake ing kene",
  },
  "minang": {
    "judul": "STIE Dwimulya",
    "status": "Website lagi dibenahi",
    "deskripsi": "Kami lagi usaha keras untuak manyadioan tampilan baru yang labiah manarik. Sabar dulu yaa—sabanta lai website bisa diakses baliak.",
    "peluncuran": "31 Hari · 10 Jam · 18 Menit · 30 Detik",
    "akses": "Paralu akses sistem akademik kini? Klik Portal SIAKAD",
    "ucapan": "Tarimo kasih banyak ateh kasabaran dek awak. Kami komit untuak taruih maningkatkan kualitas layanan.",
    "copyright": "© 2025 STIE Dwimulya — Hak cipta dilindungi",
    "target": "Target Peluncuran: 17 Agustus 2025 — Hari Kemerdekaan Indonesia",
    "main_heading": "Website Sedang Dalam Perbaikan",
    "subtitle_system_status": "Status Sistem",
    "read_more": "Baca Salanjuiknyo &rarr;",
    "card_stay_updated_title": "Tetap Terhubung",
    "card_stay_updated_desc": "Dapatkan pemberitahuan saat kami kembali online dengan fitur yang ditingkatkan dan kinerja yang lebih baik.",
    "card_need_help_title": "Butuh Bantuan?",
    "card_need_help_desc": "Hubungi tim dukungan kami untuk bantuan selama periode pemeliharaan.",
    "card_brewing_status_title": "Status Pengerjaan",
    "card_brewing_status_desc": "Lihat kemajuan pengerjaan saat ini dan perkiraan waktu penyelesaian.",
    "progress_section_title": "Progres Pengerjaan",
    "progress_text": "65% Selesai - Masih dalam pengerjaan...",
    "footer_about_title": "Tentang STIE Dwimulya",
    "footer_about_desc": "Institusi pendidikan bisnis terkemuka yang berkomitmen pada keunggulan dalam pengembangan akademik dan profesional.",
    "footer_quick_links_title": "Tautan Cepat",
    "footer_academic_programs": "Program Akademik",
    "footer_student_portal": "Portal Mahasiswa",
    "footer_faculty": "Dosen",
    "footer_contact": "Kontak",
    "footer_contact_info_title": "Informasi Kontak",
    "footer_address_line1": "Jl. Pendidikan No. 123",
    "footer_address_line2": "Jakarta, Indonesia",
    "footer_phone": "Telepon: +62 21 1234567",
    "footer_email": "Email: info@stiedwimulya.ac.id",
    "notification_updates_soon": "Pembaruan akan segera diumumkan",
    "notification_social_media": "Pembaruan akan diumumkan di saluran media sosial kami",
    "notification_emergency_contact": "Kontak darurat: admin@stiedwimulya.ac.id",
    "notification_brewing_status": "Pengerjaan dimulai pukul 02:00 pagi, diperkirakan selesai pukul 08:00 pagi",
    "notification_menu_functionality": "Fungsionalitas menu akan diimplementasikan di sini",
  },
  "palembang": {
    "judul": "STIE Dwimulya",
    "status": "Website lagi diperbaiki",
    "deskripsi": "Kite lagi nyiapin tampilan baru yang lebih kece dan gampang digunain. Tunggu bentar, bentar lagi bisa dipake lagi.",
    "peluncuran": "31 Hari · 10 Jam · 18 Menit · 30 Detik",
    "akses": "Perlu akses ke sistem akademik sekarang? Klik Portal SIAKAD",
    "ucapan": "Terima kasih banyak atas kesabaran kamu. Kite komit buat terus ningkatin layanan.",
    "copyright": "© 2025 STIE Dwimulya — Semua hak dilindungi",
    "target": "Target Peluncuran: 17 Agustus 2025 — Hari Kemerdekaan Indonesia",
    "main_heading": "Website Sedang Dalam Perbaikan",
    "subtitle_system_status": "Status Sistem",
    "read_more": "Baca Selanjutnyo &rarr;",
    "card_stay_updated_title": "Tetap Terhubung",
    "card_stay_updated_desc": "Dapatkan pemberitahuan saat kami kembali online dengan fitur yang ditingkatkan dan kinerja yang lebih baik.",
    "card_need_help_title": "Butuh Bantuan?",
    "card_need_help_desc": "Hubungi tim dukungan kami untuk bantuan selama periode pemeliharaan.",
    "card_brewing_status_title": "Status Pengerjaan",
    "card_brewing_status_desc": "Lihat kemajuan pengerjaan saat ini dan perkiraan waktu penyelesaian.",
    "progress_section_title": "Progres Pengerjaan",
    "progress_text": "65% Selesai - Masih dalam pengerjaan...",
    "footer_about_title": "Tentang STIE Dwimulya",
    "footer_about_desc": "Institusi pendidikan bisnis terkemuka yang berkomitmen pada keunggulan dalam pengembangan akademik dan profesional.",
    "footer_quick_links_title": "Tautan Cepat",
    "footer_academic_programs": "Program Akademik",
    "footer_student_portal": "Portal Mahasiswa",
    "footer_faculty": "Dosen",
    "footer_contact": "Kontak",
    "footer_contact_info_title": "Informasi Kontak",
    "footer_address_line1": "Jl. Pendidikan No. 123",
    "footer_address_line2": "Jakarta, Indonesia",
    "footer_phone": "Telepon: +62 21 1234567",
    "footer_email": "Email: info@stiedwimulya.ac.id",
    "notification_updates_soon": "Pembaruan akan segera diumumkan",
    "notification_social_media": "Pembaruan akan diumumkan di saluran media sosial kami",
    "notification_emergency_contact": "Kontak darurat: admin@stiedwimulya.ac.id",
    "notification_brewing_status": "Pengerjaan dimulai pukul 02:00 pagi, diperkirakan selesai pukul 08:00 pagi",
    "notification_menu_functionality": "Fungsionalitas menu akan diimplementasikan di sini",
  },
  "melayu": {
    "judul": "STIE Dwimulya",
    "status": "Laman web sedang dalam penyelenggaraan",
    "deskripsi": "Kami sedang mempersiapkan pengalaman baru yang lebih menarik untuk anda. Terima kasih kerana sabar menanti—tidak lama lagi laman kami akan beroperasi semula.",
    "peluncuran": "31 Hari · 10 Jam · 18 Minit · 30 Saat",
    "akses": "Perlukan akses ke sistem akademik kami sekarang? Klik Portal SIAKAD",
    "ucapan": "Terima kasih atas kesabaran anda. Kami berkomitmen untuk sentiasa memperbaiki mutu perkhidmatan.",
    "copyright": "© 2025 STIE Dwimulya — Semua hak terpelihara",
    "target": "Target Peluncuran: 17 Ogos 2025 — Hari Kemerdekaan Indonesia",
    "main_heading": "Laman Web Sedang Dalam Penyelenggaraan",
    "subtitle_system_status": "Status Sistem",
    "read_more": "Baca Selanjutnya &rarr;",
    "card_stay_updated_title": "Kekal Terkini",
    "card_stay_updated_desc": "Dapatkan pemberitahuan apabila kami kembali dalam talian dengan ciri-ciri yang dipertingkatkan dan prestasi yang lebih baik.",
    "card_need_help_title": "Perlukan Bantuan?",
    "card_need_help_desc": "Hubungi pasukan sokongan kami untuk bantuan semasa tempoh penyelenggaraan.",
    "card_brewing_status_title": "Status Pengerjaan",
    "card_brewing_status_desc": "Lihat kemajuan pengerjaan semasa dan anggaran masa siap.",
    "progress_section_title": "Kemajuan Pengerjaan",
    "progress_text": "65% Selesai - Masih dalam pengerjaan...",
    "footer_about_title": "Mengenai STIE Dwimulya",
    "footer_about_desc": "Institusi pendidikan perniagaan terkemuka yang komited terhadap kecemerlangan dalam pembangunan akademik dan profesional.",
    "footer_quick_links_title": "Pautan Pantas",
    "footer_academic_programs": "Program Akademik",
    "footer_student_portal": "Portal Pelajar",
    "footer_faculty": "Pensyarah",
    "footer_contact": "Hubungi",
    "footer_contact_info_title": "Maklumat Hubungan",
    "footer_address_line1": "Jl. Pendidikan No. 123",
    "footer_address_line2": "Jakarta, Indonesia",
    "footer_phone": "Telefon: +62 21 1234567",
    "footer_email": "E-mel: info@stiedwimulya.ac.id",
    "notification_updates_soon": "Kemas kini akan diumumkan tidak lama lagi",
    "notification_social_media": "Kemas kini akan diumumkan di saluran media sosial kami",
    "notification_emergency_contact": "Hubungan kecemasan: admin@stiedwimulya.ac.id",
    "notification_brewing_status": "Pengerjaan bermula pada 02:00 pagi, dijangka siap pada 08:00 pagi",
    "notification_menu_functionality": "Fungsionaliti menu akan dilaksanakan di sini",
  }
};

const langKeys = Object.keys(copyData);

export default function MaintenancePage() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentLangIndex, setCurrentLangIndex] = useState(0);
  const [showNotificationToast, setShowNotificationToast] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  // Refs for GSAP animations
  const mainHeadingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsSectionRef = useRef<HTMLElement>(null);
  const progressSectionRef = useRef<HTMLElement>(null);
  const errorNumberRef = useRef<HTMLDivElement>(null);

  // SplitText instances
  let splitMainHeading: SplitText | null = null;
  let splitDescription: SplitText | null = null;

  useEffect(() => {
    const targetDate = new Date("2025-08-17T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    // GSAP Animations
    // Initial load animation for header and main content
    gsap.from("header", { y: -100, opacity: 0, duration: 0.8, ease: "power3.out" });
    gsap.from(".left-content > *", { opacity: 0, y: 50, duration: 0.8, ease: "power3.out", stagger: 0.1, delay: 0.3 });
    gsap.from(".geometric-cross, .geometric-circle", { opacity: 0, scale: 0.5, duration: 1, ease: "elastic.out(1, 0.5)", delay: 0.5 });

    // ScrollTrigger for cards section
    if (cardsSectionRef.current) {
      gsap.from(cardsSectionRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    // ScrollTrigger for progress section
    if (progressSectionRef.current) {
      gsap.from(progressSectionRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: progressSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animate progress bar fill with ScrollTrigger
      gsap.to(".progress-fill", {
        width: "65%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".progress-bar",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    // DrawSVG for icons (assuming they are SVG paths)
    // This will target the paths inside the lucide-react SVG components
    gsap.from(".card-icon svg path", {
      drawSVG: "0%",
      duration: 1,
      stagger: 0.1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".cards-section",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      clearInterval(timer);
      // Kill all GSAP tweens and ScrollTriggers on unmount
      gsap.globalTimeline.clear();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (splitMainHeading) splitMainHeading.revert();
      if (splitDescription) splitDescription.revert();
    };
  }, []);

  // Effect for language transition with SplitText
  useEffect(() => {
    // Clean up previous SplitText instances
    if (splitMainHeading) splitMainHeading.revert();
    if (splitDescription) splitDescription.revert();

    const currentMainHeading = mainHeadingRef.current;
    const currentDescription = descriptionRef.current;

    // Ensure fonts are loaded before splitting text
    document.fonts.ready.then(() => {
      if (currentMainHeading) {
        splitMainHeading = new SplitText(currentMainHeading, { type: "words,chars" });
        gsap.from(splitMainHeading.chars, {
          opacity: 0,
          y: 20,
          rotationX: -90,
          stagger: 0.02,
          duration: 0.6,
          ease: "power2.out",
        });
      }

      if (currentDescription) {
        splitDescription = new SplitText(currentDescription, { type: "words" });
        gsap.from(splitDescription.words, {
          opacity: 0,
          y: 20,
          stagger: 0.05,
          duration: 0.5,
          ease: "power1.out",
          delay: 0.2,
        });
      }
    });

    const langTransitionTimer = setInterval(() => {
      setCurrentLangIndex((prevIndex) => (prevIndex + 1) % langKeys.length);
    }, 3000); // Change language every 3 seconds

    return () => {
      clearInterval(langTransitionTimer);
    };
  }, [currentLangIndex]); // Re-run this effect when currentLangIndex changes

  const handlePortalClick = () => {
    window.open("https://siakad.stiedwimulya.ac.id", "_blank");
  };

  const showNotification = (message: string) => {
    setNotificationMessage(message);
    setShowNotificationToast(true);
    setTimeout(() => {
      setShowNotificationToast(false);
    }, 3000);
  };

  const animateNumber = () => {
    const number = errorNumberRef.current;
    if (number) {
      gsap.to(number, {
        scale: 1.2,
        rotation: 5,
        color: "rgba(255, 255, 255, 0.8)",
        duration: 0.3,
        ease: "power1.out",
        onComplete: () => {
          gsap.to(number, {
            scale: 1,
            rotation: 0,
            color: "white",
            duration: 0.3,
            ease: "power1.out",
          });
        },
      });
    }
  };

  const currentCopy = copyData[langKeys[currentLangIndex]];

  return (
    <div className="container">
      {/* Header */}
      <header>
        <div className="header-content">
          <a href="#" className="logo">{currentCopy.judul}</a>
          <nav className="nav-links">
            <a href="#">Beranda</a>
            <a href="#">Tentang</a>
            <a href="#">Katalog</a>
            <a href="#">Kontak</a>
          </nav>
          <div className="header-actions">
            <div className="header-icon"><Search size={20} /></div>
            <div className="header-icon"><ExternalLink size={20} /></div>
            <button className="menu-toggle" onClick={() => showNotification(currentCopy.notification_menu_functionality)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className="content-wrapper">
          <div className="left-content">
            <div className="error-code" onClick={animateNumber} ref={errorNumberRef}>418</div>
            <h1 className="main-heading" ref={mainHeadingRef}>{currentCopy.main_heading}</h1>
            <div className="subtitle">{currentCopy.subtitle_system_status}</div>
            <p className="description" ref={descriptionRef}>
              {currentCopy.deskripsi}
            </p>
            <a href="#" className="cta-button" onClick={() => showNotification(currentCopy.notification_updates_soon)}>
              {currentCopy.read_more}
            </a>
          </div>

          <div className="right-content">
            <div className="geometric-cross"></div>
            <div className="geometric-circle"></div>
          </div>
        </div>
      </main>

      {/* Interactive Cards Section */}
      <section className="cards-section" ref={cardsSectionRef}>
        <div className="cards-container">
          <div className="interactive-card" onClick={() => showNotification(currentCopy.notification_social_media)}>
            <div className="card-icon">
              <Bell size={24} color="white" />
            </div>
            <div className="card-title">{currentCopy.card_stay_updated_title}</div>
            <div className="card-description">{currentCopy.card_stay_updated_desc}</div>
          </div>

          <div className="interactive-card" onClick={() => showNotification(currentCopy.notification_emergency_contact)}>
            <div className="card-icon">
              <Mail size={24} color="white" />
            </div>
            <div className="card-title">{currentCopy.card_need_help_title}</div>
            <div className="card-description">{currentCopy.card_need_help_desc}</div>
          </div>

          <div className="interactive-card" onClick={() => showNotification(currentCopy.notification_brewing_status)}>
            <div className="card-icon">
              <Coffee size={24} color="white" />
            </div>
            <div className="card-title">{currentCopy.card_brewing_status_title}</div>
            <div className="card-description">{currentCopy.card_brewing_status_desc}</div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="progress-section" ref={progressSectionRef}>
        <div className="progress-container">
          <div className="progress-info">
            <h2>{currentCopy.progress_section_title}</h2>
          </div>
          <div className="progress-details">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <div className="progress-text">{currentCopy.progress_text}</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>{currentCopy.footer_about_title}</h3>
            <p>{currentCopy.footer_about_desc}</p>
          </div>
          <div className="footer-section">
            <h3>{currentCopy.footer_quick_links_title}</h3>
            <p><a href="#">{currentCopy.footer_academic_programs}</a></p>
            <p><a href="#">{currentCopy.footer_student_portal}</a></p>
            <p><a href="#">{currentCopy.footer_faculty}</a></p>
            <p><a href="#">{currentCopy.footer_contact}</a></p>
          </div>
          <div className="footer-section">
            <h3>{currentCopy.footer_contact_info_title}</h3>
            <p>{currentCopy.footer_address_line1}</p>
            <p>{currentCopy.footer_address_line2}</p>
            <p>{currentCopy.footer_phone}</p>
            <p>{currentCopy.footer_email}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{currentCopy.footer_copyright_bottom}</p>
        </div>
      </footer>

      {/* Notification Toast */}
      <div id="notification" className={`notification ${showNotificationToast ? 'show' : ''}`}>
        <span id="notification-text">{notificationMessage}</span>
      </div>
    </div>
  );
}