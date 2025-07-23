import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer id="kontak" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg mb-6">
              Kontak
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-300">
                    Jl. Pendidikan No. 123<br />
                    Jakarta Selatan, 12345<br />
                    Indonesia
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-gray-400" />
                <p className="text-sm text-gray-300">+62 21 1234 5678</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-gray-400" />
                <p className="text-sm text-gray-300">info@stiedwimulya.ac.id</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-6">
              Program Studi
            </h3>
            <div className="space-y-3">
              <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Manajemen Bisnis
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Akuntansi
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Ekonomi Pembangunan
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Keuangan
              </a>
            </div>
          </div>

          {/* Academic */}
          <div>
            <h3 className="text-lg mb-6">
              Akademik
            </h3>
            <div className="space-y-3">
              <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Portal Mahasiswa
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Perpustakaan Digital
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Kalender Akademik
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Penelitian
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg mb-6">
              Tentang STIE Dwimulya
            </h3>
            <div className="space-y-3">
              <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Sejarah
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Visi & Misi
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Fakultas
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Karir
              </a>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white transition-colors">Ketentuan Penggunaan</a>
              <span>&copy; 2025 STIE Dwimulya. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}