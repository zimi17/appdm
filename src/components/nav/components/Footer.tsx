import React from 'react';
import { Logo } from './Logo';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter
} from 'lucide-react';

export function Footer() {
  const footerSections = [
    {
      title: "Program Akademik",
      links: [
        { name: "S1 Manajemen", url: "#" },
        { name: "S1 Akuntansi", url: "#" },
        { name: "Program Ekstensi", url: "#" },
        { name: "Program Magister", url: "#" }
      ]
    },
    {
      title: "Kehidupan Kampus",
      links: [
        { name: "Organisasi Mahasiswa", url: "#" },
        { name: "Kegiatan Ekstrakurikuler", url: "#" },
        { name: "Beasiswa", url: "#" },
        { name: "Fasilitas Kampus", url: "#" }
      ]
    },
    {
      title: "Riset & Publikasi",
      links: [
        { name: "Jurnal Ilmiah", url: "#" },
        { name: "Pusat Penelitian", url: "#" },
        { name: "Konferensi", url: "#" },
        { name: "Working Papers", url: "#" }
      ]
    },
    {
      title: "Layanan",
      links: [
        { name: "Penerimaan Mahasiswa", url: "#" },
        { name: "Layanan Alumni", url: "#" },
        { name: "Kerjasama Industri", url: "#" },
        { name: "Konsultasi Bisnis", url: "#" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "#" },
    { name: "Instagram", icon: Instagram, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "YouTube", icon: Youtube, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jl. Raya Cikarang-Cibarusah No. 10, Bekasi, Jawa Barat 17530"
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 21 8988-1234"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@stie-dwimulya.ac.id"
    },
    {
      icon: Globe,
      title: "Website",
      content: "www.stie-dwimulya.ac.id"
    }
  ];

  return (
    <footer className="bg-brand-black py-16">
      <div className="container mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-12 gap-8 mb-12">
          {/* Brand Section - 4 columns */}
          <div className="col-span-12 lg:col-span-4">
            <div className="mb-6">
              <Logo size="lg" variant="dark" className="mb-4" />
              <h3 className="text-subtitle font-merriweather text-white mb-2 heading-block">
                STIE Dwimulya
              </h3>
              <p className="text-caption font-montserrat text-sky-blue">
                Sekolah Tinggi Ilmu Ekonomi
              </p>
            </div>
            
            <p className="text-body font-montserrat text-white/80 mb-6 reading-text">
              Mencetak pemimpin ekonomi yang berdampak melalui pendidikan 
              berkualitas tinggi, riset inovatif, dan kemitraan strategis 
              dengan industri.
            </p>

            {/* Social Media Links */}
            <div>
              <h4 className="text-body-bold font-montserrat text-white mb-4">
                Ikuti Kami
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-sky-blue hover:bg-brand-gold hover:text-oxford-blue transition-all duration-200 card-micro"
                      aria-label={`Kunjungi ${social.name}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation Links - 6 columns */}
          <div className="col-span-12 lg:col-span-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h4 className="text-body-bold font-montserrat text-white mb-4 heading-block">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.url}
                          className="text-body font-montserrat text-sky-blue hover:text-brand-gold transition-colors duration-200 block"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information - 2 columns */}
          <div className="col-span-12 lg:col-span-2">
            <h4 className="text-body-bold font-montserrat text-white mb-6 heading-block">
              Hubungi Kami
            </h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 text-brand-gold mt-1 flex-shrink-0">
                      <IconComponent className="w-full h-full" />
                    </div>
                    <div>
                      <p className="text-caption font-montserrat text-sky-blue font-bold">
                        {info.title}
                      </p>
                      <p className="text-caption font-montserrat text-white/80">
                        {info.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="grid grid-cols-12 gap-8 mb-12">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
              <h3 className="text-subtitle font-merriweather text-white mb-4 heading-block">
                Dapatkan Update Terbaru
              </h3>
              <p className="text-body font-montserrat text-sky-blue mb-6 reading-text max-w-2xl mx-auto">
                Berlangganan newsletter kami untuk mendapatkan informasi terbaru 
                tentang program akademik, riset, dan kegiatan kampus.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Alamat email Anda"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-sky-blue focus:outline-none focus:border-brand-gold font-montserrat"
                />
                <button className="btn-micro btn-accent px-8 py-3">
                  Berlangganan
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-6">
              <p className="text-caption font-montserrat text-sky-blue">
                © 2025 STIE Dwimulya. Hak cipta dilindungi undang-undang.
              </p>
            </div>
            
            <div className="col-span-12 lg:col-span-6 lg:text-right">
              <div className="flex flex-col lg:flex-row lg:justify-end gap-4 lg:gap-8">
                <a href="#" className="text-caption font-montserrat text-sky-blue hover:text-brand-gold transition-colors duration-200">
                  Kebijakan Privasi
                </a>
                <a href="#" className="text-caption font-montserrat text-sky-blue hover:text-brand-gold transition-colors duration-200">
                  Syarat dan Ketentuan
                </a>
                <a href="#" className="text-caption font-montserrat text-sky-blue hover:text-brand-gold transition-colors duration-200">
                  Peta Situs
                </a>
                <a href="#" className="text-caption font-montserrat text-sky-blue hover:text-brand-gold transition-colors duration-200">
                  Aksesibilitas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}