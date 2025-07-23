'use client'

import { useEffect, useRef, useState } from 'react'
import { X, ChevronRight, ArrowLeft } from 'lucide-react'

interface FullScreenNavProps {
  isOpen: boolean
  onClose: () => void
}

export function FullScreenNav({ isOpen, onClose }: FullScreenNavProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const [currentLevel, setCurrentLevel] = useState<'core' | 'mid' | 'atomic'>('core')
  const [selectedCore, setSelectedCore] = useState(0)
  const [selectedMid, setSelectedMid] = useState(0)
  const [gsapLoaded, setGsapLoaded] = useState(false)

  const coreNavItems = [
    {
      title: "Akademik",
      description: "Program studi dan kurikulum",
      mid: [
        {
          title: "Program Studi",
          atomic: ["Manajemen Bisnis", "Akuntansi", "Ekonomi Pembangunan", "Keuangan"]
        },
        {
          title: "Kurikulum",
          atomic: ["Kurikulum 2024", "Mata Kuliah Wajib", "Mata Kuliah Pilihan", "Magang"]
        },
        {
          title: "Fakultas",
          atomic: ["Dosen Tetap", "Dosen Tamu", "Penelitian", "Publikasi"]
        }
      ]
    },
    {
      title: "Penerimaan",
      description: "Informasi pendaftaran mahasiswa baru",
      mid: [
        {
          title: "Pendaftaran",
          atomic: ["Jalur Reguler", "Jalur Prestasi", "Jalur Transfer", "Beasiswa"]
        },
        {
          title: "Persyaratan",
          atomic: ["Dokumen", "Tes Masuk", "Wawancara", "Biaya"]
        },
        {
          title: "Informasi",
          atomic: ["Jadwal Penting", "FAQ", "Kontak Admisi", "Virtual Tour"]
        }
      ]
    },
    {
      title: "Kampus",
      description: "Fasilitas dan kehidupan kampus",
      mid: [
        {
          title: "Fasilitas",
          atomic: ["Perpustakaan", "Laboratorium", "Ruang Kelas", "Kantin"]
        },
        {
          title: "Kehidupan Kampus",
          atomic: ["Organisasi Mahasiswa", "Event", "Olahraga", "Kesenian"]
        },
        {
          title: "Layanan",
          atomic: ["Portal Mahasiswa", "Konseling", "Karir", "Alumni"]
        }
      ]
    },
    {
      title: "Penelitian",
      description: "Riset dan publikasi ilmiah",
      mid: [
        {
          title: "Pusat Penelitian",
          atomic: ["Ekonomi Digital", "Kewirausahaan", "Pasar Modal", "Manajemen Strategis"]
        },
        {
          title: "Publikasi",
          atomic: ["Jurnal Ilmiah", "Prosiding", "Buku", "Working Paper"]
        },
        {
          title: "Kerjasama",
          atomic: ["Industri", "Perguruan Tinggi", "Pemerintah", "Internasional"]
        }
      ]
    }
  ]

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkGSAP = () => {
        if (window.gsap) {
          setGsapLoaded(true)
        } else {
          setTimeout(checkGSAP, 100)
        }
      }
      checkGSAP()
    }
  }, [])

  useEffect(() => {
    if (gsapLoaded && window.gsap) {
      const gsap = window.gsap
      
      if (isOpen) {
        if (menuRef.current) {
          gsap.set(menuRef.current, { display: 'flex' })
        }
        
        if (overlayRef.current) {
          gsap.fromTo(overlayRef.current, 
            { opacity: 0 }, 
            { opacity: 1, duration: 0.4, ease: 'power2.out' }
          )
        }
        
        const menuContent = menuRef.current?.querySelector('.menu-content')
        if (menuContent) {
          gsap.fromTo(menuContent, 
            { x: '100%' }, 
            { x: '0%', duration: 0.6, ease: 'power3.out' }
          )
        }
        
        // Animate menu items
        setTimeout(() => {
          const menuItems = menuRef.current?.querySelectorAll('.menu-item')
          if (menuItems && menuItems.length > 0) {
            menuItems.forEach((item, index) => {
              gsap.fromTo(item,
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 0.5, delay: index * 0.1, ease: 'power2.out' }
              )
            })
          }
        }, 300)
      } else {
        if (overlayRef.current) {
          gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 })
        }
        
        const menuContent = menuRef.current?.querySelector('.menu-content')
        if (menuContent) {
          gsap.to(menuContent, {
            x: '100%',
            duration: 0.5,
            ease: 'power3.in',
            onComplete: () => {
              if (menuRef.current) {
                gsap.set(menuRef.current, { display: 'none' })
              }
              setCurrentLevel('core')
              setSelectedCore(0)
              setSelectedMid(0)
            }
          })
        }
      }
    }
  }, [isOpen, gsapLoaded])

  const handleCoreClick = (index: number) => {
    setSelectedCore(index)
    setCurrentLevel('mid')
  }

  const handleMidClick = (index: number) => {
    setSelectedMid(index)
    setCurrentLevel('atomic')
  }

  const handleBack = () => {
    if (currentLevel === 'atomic') {
      setCurrentLevel('mid')
    } else if (currentLevel === 'mid') {
      setCurrentLevel('core')
    }
  }

  if (!isOpen) return null

  return (
    <div 
      ref={menuRef}
      className="fixed inset-0 z-50 hidden"
    >
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="menu-content absolute right-0 top-0 h-full w-full max-w-5xl bg-white shadow-2xl">
        <div className="flex h-full">
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 border-b border-gray-200 bg-white z-10">
            <div className="flex items-center space-x-4">
              {currentLevel !== 'core' && (
                <button
                  onClick={handleBack}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft size={20} />
                  <span>Kembali</span>
                </button>
              )}
              <h2 className="text-2xl font-serif">
                {currentLevel === 'core' ? 'Menu Utama' : 
                 currentLevel === 'mid' ? coreNavItems[selectedCore].title : 
                 coreNavItems[selectedCore].mid[selectedMid].title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="w-full pt-20 overflow-y-auto">
            {currentLevel === 'core' && (
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {coreNavItems.map((item, index) => (
                    <div 
                      key={index}
                      className="menu-item group cursor-pointer"
                      onClick={() => handleCoreClick(index)}
                    >
                      <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-medium">{item.title}</h3>
                          <ChevronRight size={20} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentLevel === 'mid' && (
              <div className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {coreNavItems[selectedCore].mid.map((item, index) => (
                    <div 
                      key={index}
                      className="menu-item group cursor-pointer"
                      onClick={() => handleMidClick(index)}
                    >
                      <div className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{item.title}</h4>
                          <ChevronRight size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentLevel === 'atomic' && (
              <div className="p-8">
                <div className="space-y-2">
                  {coreNavItems[selectedCore].mid[selectedMid].atomic.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="menu-item block p-4 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 hover:text-black"
                      onClick={onClose}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}