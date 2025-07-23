import { ImageWithFallback } from './figma/ImageWithFallback'

export function HeroSection() {
  return (
    <section id="beranda" className="pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 font-serif">
                Kami mendidik pemimpin yang membuat perbedaan di dunia.
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Pendidikan dinamis dan inovatif untuk pemimpin di setiap tingkat. 
                STIE Dwimulya menyiapkan mahasiswa untuk menghadapi tantangan bisnis modern 
                dengan pendekatan yang komprehensif dan praktis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors">
                  Daftar Sekarang
                </button>
                <button className="border border-gray-300 px-8 py-3 hover:bg-gray-50 transition-colors">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop"
                  alt="Kampus STIE Dwimulya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}