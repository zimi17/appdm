import { ImageWithFallback } from './figma/ImageWithFallback'

export function DistinctiveSection() {
  const features = [
    {
      title: "Kurikulum Berbasis Industri",
      description: "Program studi yang dirancang bersama praktisi industri untuk memastikan relevansi dengan kebutuhan pasar kerja."
    },
    {
      title: "Fakultas Berpengalaman",
      description: "Dosen-dosen dengan pengalaman praktis di industri dan latar belakang akademis yang kuat."
    },
    {
      title: "Fasilitas Modern",
      description: "Laboratorium komputer, ruang diskusi, dan perpustakaan digital yang mendukung proses pembelajaran."
    },
    {
      title: "Jaringan Alumni",
      description: "Komunitas alumni yang kuat di berbagai sektor industri, memberikan peluang networking dan karir."
    }
  ]

  return (
    <section id="tentang" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl mb-8 font-serif">
              Apa yang membuat STIE Dwimulya istimewa?
            </h2>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="border-l-2 border-gray-300 pl-6">
                  <h3 className="text-lg mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>

          {/* Images */}
          <div className="space-y-6">
            <div className="aspect-[4/3] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=450&fit=crop"
                alt="Ruang kelas modern STIE Dwimulya"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=300&h=300&fit=crop"
                  alt="Mahasiswa belajar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&h=300&fit=crop"
                  alt="Laboratorium komputer"
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