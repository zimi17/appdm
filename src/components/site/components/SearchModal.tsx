'use client'

import { useEffect, useRef, useState } from 'react'
import { Search, X, Clock, TrendingUp } from 'lucide-react'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const modalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const recentSearches = [
    "Pendaftaran mahasiswa baru",
    "Program studi manajemen",
    "Biaya kuliah",
    "Jadwal kuliah"
  ]

  const trendingSearches = [
    "Beasiswa 2025",
    "Kurikulum terbaru",
    "Dosen pembimbing",
    "Praktek kerja lapangan"
  ]

  const searchResults = [
    {
      title: "Program Studi Manajemen Bisnis",
      description: "Informasi lengkap tentang program studi manajemen bisnis, kurikulum, dan prospek karir.",
      category: "Akademik"
    },
    {
      title: "Pendaftaran Mahasiswa Baru 2025",
      description: "Panduan lengkap pendaftaran, persyaratan, dan jadwal penting untuk calon mahasiswa baru.",
      category: "Penerimaan"
    },
    {
      title: "Beasiswa Prestasi STIE Dwimulya",
      description: "Informasi program beasiswa untuk mahasiswa berprestasi dan kurang mampu.",
      category: "Beasiswa"
    }
  ]

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap) {
      const gsap = window.gsap
      
      if (isOpen) {
        gsap.set(modalRef.current, { display: 'flex' })
        gsap.fromTo(modalRef.current, 
          { opacity: 0, scale: 0.9 }, 
          { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
        )
        setTimeout(() => inputRef.current?.focus(), 100)
      } else {
        gsap.to(modalRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: () => {
            gsap.set(modalRef.current, { display: 'none' })
            setQuery('')
          }
        })
      }
    }
  }, [isOpen])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm hidden items-start justify-center p-4 pt-20"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg w-full max-w-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center p-6 border-b border-gray-200">
          <Search size={20} className="text-gray-400 mr-4" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Cari program studi, informasi, atau konten..."
            className="flex-1 text-lg outline-none"
          />
          <button 
            onClick={onClose}
            className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Search Content */}
        <div className="max-h-96 overflow-y-auto">
          {!query ? (
            <div className="p-6 space-y-6">
              {/* Recent Searches */}
              <div>
                <h3 className="flex items-center text-sm font-medium text-gray-500 mb-3">
                  <Clock size={16} className="mr-2" />
                  Pencarian Terbaru
                </h3>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => setQuery(search)}
                      className="block w-full text-left p-2 hover:bg-gray-50 rounded text-gray-700 hover:text-black transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trending Searches */}
              <div>
                <h3 className="flex items-center text-sm font-medium text-gray-500 mb-3">
                  <TrendingUp size={16} className="mr-2" />
                  Pencarian Populer
                </h3>
                <div className="space-y-2">
                  {trendingSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => setQuery(search)}
                      className="block w-full text-left p-2 hover:bg-gray-50 rounded text-gray-700 hover:text-black transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6">
              <h3 className="text-sm text-gray-500 mb-4">
                Hasil pencarian untuk "{query}"
              </h3>
              <div className="space-y-4">
                {searchResults.map((result, index) => (
                  <div 
                    key={index}
                    className="p-4 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                    onClick={onClose}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{result.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{result.description}</p>
                        <span className="inline-block px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">
                          {result.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}