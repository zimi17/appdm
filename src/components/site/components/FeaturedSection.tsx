import { ImageWithFallback } from './figma/ImageWithFallback'

export function FeaturedSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
              alt="Mahasiswa STIE Dwimulya berdiskusi"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl mb-6 font-serif">
              Pemikir yang berani, pembelajar yang kolaboratif
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Mahasiswa STIE Dwimulya mengembangkan kemampuan berpikir kritis dan inovatif 
              melalui pembelajaran yang interaktif dan berbasis pada kasus nyata di dunia bisnis. 
              Dengan dukungan fakultas berpengalaman, mahasiswa dipersiapkan untuk menjadi 
              pemimpin masa depan.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Program kami menggabungkan teori akademis yang solid dengan praktik bisnis yang relevan, 
              memastikan lulusan siap menghadapi tantangan dunia kerja modern.
            </p>
          </div>
        </div>

        {/* Research Areas */}
        <div className="border-t border-gray-200 pt-16">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            <div>
              <h3 className="text-sm mb-2 text-gray-500">EMERGING MARKETS</h3>
              <p className="text-xs text-gray-400">Riset Pasar Berkembang</p>
            </div>
            <div>
              <h3 className="text-sm mb-2 text-gray-500">DIGITAL BUSINESS</h3>
              <p className="text-xs text-gray-400">Transformasi Digital</p>
            </div>
            <div>
              <h3 className="text-sm mb-2 text-gray-500">SUSTAINABILITY</h3>
              <p className="text-xs text-gray-400">Bisnis Berkelanjutan</p>
            </div>
            <div>
              <h3 className="text-sm mb-2 text-gray-500">FINTECH</h3>
              <p className="text-xs text-gray-400">Teknologi Keuangan</p>
            </div>
            <div>
              <h3 className="text-sm mb-2 text-gray-500">STRATEGY</h3>
              <p className="text-xs text-gray-400">Strategi Bisnis</p>
            </div>
            <div>
              <h3 className="text-sm mb-2 text-gray-500">INNOVATION</h3>
              <p className="text-xs text-gray-400">Inovasi Produk</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}