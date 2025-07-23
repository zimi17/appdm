import { ImageWithFallback } from './figma/ImageWithFallback'

export function InsightsSection() {
  const insights = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      title: "Riset Terbaru: Ekonomi Digital Indonesia dan Dampaknya",
      category: "Penelitian",
      date: "15 Juli 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
      title: "Workshop Kewirausahaan: Membangun Startup di Era Digital",
      category: "Event",
      date: "12 Juli 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      title: "Kolaborasi Industri: Partnership dengan Perusahaan Fintech",
      category: "Kemitraan",
      date: "10 Juli 2025"
    }
  ]

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4 font-serif">
            Insights
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl">
            Temukan berita terbaru, riset unggulan, dan wawasan mendalam dari 
            STIE Dwimulya tentang dunia bisnis dan ekonomi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((item, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="aspect-[4/3] mb-6 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-400">
                  <span>{item.category}</span>
                  <span className="mx-2">•</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-lg leading-tight group-hover:text-gray-300 transition-colors">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-colors">
            Lihat Semua Insights
          </button>
        </div>
      </div>
    </section>
  )
}