"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Bell, Mail, Coffee, Search, Menu } from "lucide-react"

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
    "read_more": "Baca Selengkapnya →",
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
    "read_more": "Waos Liyane →",
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
    "read_more": "Baca Salanjuiknyo →",
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
    "read_more": "Baca Selanjutnyo →",
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
    "read_more": "Baca Selanjutnya →",
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
    "footer_copyright_bottom": "© 2024 STIE Dwimulya. Hak cipta terpelihara.",
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

    const langTransitionTimer = setInterval(() => {
      setCurrentLangIndex((prevIndex) => (prevIndex + 1) % langKeys.length);
    }, 3000); // Change language every 3 seconds

    // Animate progress bar on load
    const progressFill = document.querySelector('.progress-fill') as HTMLElement;
    if (progressFill) {
      setTimeout(() => {
        progressFill.style.width = '65%';
      }, 500);
    }

    return () => {
      clearInterval(timer);
      clearInterval(langTransitionTimer);
    };
  }, []);

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
    const number = document.querySelector('.error-code') as HTMLElement;
    if (number) {
      number.style.transform = 'scale(1.2) rotate(5deg)';
      number.style.color = 'rgba(255, 255, 255, 0.8)';
      setTimeout(() => {
        number.style.transform = 'scale(1) rotate(0deg)';
        number.style.color = 'white';
      }, 300);
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
            <div className="error-code" onClick={animateNumber}>418</div>
            <h1 className="main-heading">{currentCopy.main_heading}</h1>
            <div className="subtitle">{currentCopy.subtitle_system_status}</div>
            <p className="description">
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
      <section className="cards-section">
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
      <section className="progress-section">
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

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background: #e8e8e8;
            color: #1a1a1a;
            overflow-x: hidden;
        }
        
        .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            position: relative;
        }
        
        /* Header */
        header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: #c5534a;
            padding: 1rem 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .header-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-family: 'Inter', sans-serif;
            font-size: 1.125rem;
            font-weight: 700;
            color: white;
            text-decoration: none;
            letter-spacing: 0.02em;
            text-transform: uppercase;
        }
        
        .nav-links {
            display: flex;
            gap: 2rem;
            align-items: center;
        }
        
        .nav-links a {
            color: white;
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 500;
            transition: opacity 0.3s ease;
        }
        
        .nav-links a:hover {
            opacity: 0.8;
        }
        
        .header-actions {
            display: flex;
            gap: 1rem;
            align-items: center;
        }
        
        .header-icon {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            cursor: pointer;
            transition: background 0.3s ease;
        }
        
        .header-icon:hover {
            background: rgba(255, 255, 255, 0.3);
        }
        
        .menu-toggle {
            width: 32px;
            height: 32px;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 3px;
            cursor: pointer;
        }
        
        .menu-toggle span {
            width: 16px;
            height: 2px;
            background: white;
            transition: all 0.3s ease;
        }
        
        /* Main Content */
        main {
            flex: 1;
            background: #c5534a;
            padding: 8rem 2rem 2rem;
            position: relative;
            overflow: hidden;
        }
        
        .content-wrapper {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
            min-height: 60vh;
        }
        
        .left-content {
            color: white;
        }
        
        .error-code {
            font-family: 'Inter', sans-serif;
            font-size: 8rem;
            font-weight: 300;
            color: white;
            line-height: 0.8;
            margin-bottom: 2rem;
            cursor: pointer;
            transition: all 0.3s ease;
            letter-spacing: -0.02em;
        }
        
        .error-code:hover {
            transform: scale(1.05);
        }
        
        .main-heading {
            font-family: 'Inter', sans-serif;
            font-size: 4rem;
            font-weight: 300;
            color: white;
            line-height: 1.1;
            margin-bottom: 2rem;
            letter-spacing: -0.02em;
        }
        
        .subtitle {
            font-size: 1.125rem;
            font-weight: 500;
            color: white;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        
        .description {
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.9);
            line-height: 1.6;
            margin-bottom: 2rem;
            max-width: 400px;
        }
        
        .cta-button {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 0;
            color: white;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            transition: all 0.3s ease;
        }
        
        .cta-button:hover {
            border-bottom-color: white;
            transform: translateX(5px);
        }
        
        .right-content {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        /* Geometric Elements */
        .geometric-cross {
            width: 200px;
            height: 200px;
            position: relative;
            border: 2px solid rgba(255, 255, 255, 0.3);
            background: transparent;
        }
        
        .geometric-cross::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 60px;
            height: 60px;
            background: transparent;
            border: 2px solid rgba(255, 255, 255, 0.3);
            transform: translate(-50%, -50%);
        }
        
        .geometric-circle {
            position: absolute;
            width: 300px;
            height: 300px;
            border: 2px dashed rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            bottom: -50px;
            right: -50px;
            animation: rotate 20s linear infinite;
        }
        
        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Interactive Cards Section */
        .cards-section {
            background: #e8e8e8;
            padding: 4rem 2rem;
        }
        
        .cards-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .interactive-card {
            background: white;
            padding: 2rem;
            border-radius: 0;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
        
        .interactive-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: #c5534a;
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }
        
        .interactive-card:hover::before {
            transform: scaleX(1);
        }
        
        .interactive-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }
        
        .card-icon {
            width: 48px;
            height: 48px;
            background: #c5534a;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            transition: all 0.3s ease;
        }
        
        .card-icon svg {
            width: 24px;
            height: 24px;
            fill: white;
        }
        
        .card-title {
            font-family: 'Inter', sans-serif;
            font-size: 1.125rem;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.02em;
        }
        
        .card-description {
            font-size: 0.9rem;
            color: #666;
            line-height: 1.6;
        }
        
        /* Progress Section */
        .progress-section {
            background: #c5534a;
            padding: 3rem 2rem;
            color: white;
        }
        
        .progress-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 4rem;
            align-items: center;
        }
        
        .progress-info h2 {
            font-family: 'Inter', sans-serif;
            font-size: 2.5rem;
            font-weight: 300;
            margin-bottom: 1rem;
            letter-spacing: -0.02em;
        }
        
        .progress-details {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .progress-bar {
            width: 100%;
            height: 4px;
            background: rgba(255, 255, 255, 0.2);
            overflow: hidden;
            margin-bottom: 1rem;
        }
        
        .progress-fill {
            height: 100%;
            background: white;
            width: 0%;
            transition: width 2s ease;
            animation: progressAnimation 3s ease-in-out;
        }
        
        @keyframes progressAnimation {
            0% { width: 0%; }
            100% { width: 65%; }
        }
        
        .progress-text {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.9);
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        
        /* Footer */
        footer {
            background: #1a1a1a;
            color: white;
            padding: 3rem 2rem 2rem;
        }
        
        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }
        
        .footer-section h3 {
            font-family: 'Inter', sans-serif;
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #c5534a;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        
        .footer-section p, .footer-section a {
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            line-height: 1.6;
            font-size: 0.9rem;
        }
        
        .footer-section a:hover {
            color: #c5534a;
        }
        
        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid #333;
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .content-wrapper {
                grid-template-columns: 1fr;
                gap: 2rem;
                text-align: center;
            }
            
            .error-code {
                font-size: 6rem;
            }
            
            .main-heading {
                font-size: 2.5rem;
            }
            
            .progress-container {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            
            .nav-links {
                display: none;
            }
            
            .geometric-circle {
                width: 200px;
                height: 200px;
            }
        }
        
        /* Notification Toast */
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #c5534a;
            color: white;
            padding: 1rem 2rem;
            border-radius: 0;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            transform: translateX(400px);
            transition: all 0.3s ease;
            z-index: 1001;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.02em;
        }
        
        .notification.show {
            transform: translateX(0);
        }
      `}</style>
    </div>
  );
}
