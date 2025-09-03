
export const newsPageData = {
    hero: {
      title: "Berita & Acara",
      description: "Tetap terinformasi dengan berita terbaru, acara mendatang, dan pengumuman penting dari komunitas STIE Dwimulya.",
      imageUrl: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754359928/DMP_9402_kus1ih.jpg",
      imageHint: "community event"
    },
    facets: {
      title: "Filter Berdasarkan",
      items: [
        { label: "Semua", value: "all", count: 300 },
        { label: "Berita Kampus", value: "campus-news", count: 120 },
        { label: "Acara", value: "events", count: 80 },
        { label: "Prestasi Mahasiswa", value: "student-achievements", count: 50 },
        { label: "Penelitian", value: "research", count: 50 },
      ]
    }
  }

export const mockNews = [
    { id: 1, title: "Acara Donor Darah", description: "Acara donor darah tahunan kembali diadakan di kampus STIE Dwimulya.", image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg", imageHint: "blood drive", category: "Acara" },
    { id: 2, title: "Prestasi Mahasiswa di Lomba Debat Nasional", description: "Tim debat STIE Dwimulya berhasil meraih juara kedua dalam kompetisi debat tingkat nasional.", image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg", imageHint: "debate competition", category: "Prestasi Mahasiswa" },
    { id: 3, title: "Penelitian Baru Tentang Ekonomi Digital", description: "Dosen STIE Dwimulya mempublikasikan penelitian terbaru mengenai dampak ekonomi digital di Indonesia.", image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg", imageHint: "digital economy", category: "Penelitian" },
    { id: 4, title: "Seminar Kewirausahaan untuk Mahasiswa", description: "STIE Dwimulya mengadakan seminar kewirausahaan dengan menghadirkan para pengusaha sukses.", image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg", imageHint: "entrepreneurship seminar", category: "Acara" },
    { id: 5, title: "Pembaruan Fasilitas Kampus", description: "Kampus STIE Dwimulya kini dilengkapi dengan laboratorium komputer terbaru.", image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg", imageHint: "computer lab", category: "Berita Kampus" },
    { id: 6, title: "Program Pertukaran Pelajar dengan Universitas Luar Negeri", description: "STIE Dwimulya menjalin kerjasama baru untuk program pertukaran pelajar.", image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg", imageHint: "student exchange", category: "Berita Kampus" },
    { id: 7, title: "Mahasiswa Manajemen Memenangkan Business Case Competition", description: "Mahasiswa dari prodi Manajemen berhasil menjadi juara pertama.", image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg", imageHint: "business competition", category: "Prestasi Mahasiswa" },
    { id: 8, title: "Workshop Penulisan Karya Ilmiah", description: "Tingkatkan kemampuan menulis karya ilmiah dengan workshop dari para ahli.", image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg", imageHint: "writing workshop", category: "Acara" },
    { id: 9, title: "Rektor STIE Dwimulya Menerima Penghargaan", description: "Rektor kami menerima penghargaan atas dedikasinya di dunia pendidikan.", image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg", imageHint: "award ceremony", category: "Berita Kampus" },
    { id: 10, title: "Studi Banding ke Bursa Efek Indonesia", description: "Mahasiswa akuntansi melakukan studi banding untuk memahami pasar modal.", image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg", imageHint: "stock exchange", category: "Acara" },
     { id: 11, title: "Acara Donor Darah", description: "Acara donor darah tahunan kembali diadakan di kampus STIE Dwimulya.", image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg", imageHint: "blood drive", category: "Acara" },
    { id: 12, title: "Prestasi Mahasiswa di Lomba Debat Nasional", description: "Tim debat STIE Dwimulya berhasil meraih juara kedua dalam kompetisi debat tingkat nasional.", image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg", imageHint: "debate competition", category: "Prestasi Mahasiswa" },
    { id: 13, title: "Penelitian Baru Tentang Ekonomi Digital", description: "Dosen STIE Dwimulya mempublikasikan penelitian terbaru mengenai dampak ekonomi digital di Indonesia.", image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg", imageHint: "digital economy", category: "Penelitian" },
    { id: 14, title: "Seminar Kewirausahaan untuk Mahasiswa", description: "STIE Dwimulya mengadakan seminar kewirausahaan dengan menghadirkan para pengusaha sukses.", image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg", imageHint: "entrepreneurship seminar", category: "Acara" },
    { id: 15, title: "Pembaruan Fasilitas Kampus", description: "Kampus STIE Dwimulya kini dilengkapi dengan laboratorium komputer terbaru.", image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg", imageHint: "computer lab", category: "Berita Kampus" },
    { id: 16, title: "Program Pertukaran Pelajar dengan Universitas Luar Negeri", description: "STIE Dwimulya menjalin kerjasama baru untuk program pertukaran pelajar.", image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg", imageHint: "student exchange", category: "Berita Kampus" },
    { id: 17, title: "Mahasiswa Manajemen Memenangkan Business Case Competition", description: "Mahasiswa dari prodi Manajemen berhasil menjadi juara pertama.", image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg", imageHint: "business competition", category: "Prestasi Mahasiswa" },
    { id: 18, title: "Workshop Penulisan Karya Ilmiah", description: "Tingkatkan kemampuan menulis karya ilmiah dengan workshop dari para ahli.", image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg", imageHint: "writing workshop", category: "Acara" },
    { id: 19, title: "Rektor STIE Dwimulya Menerima Penghargaan", description: "Rektor kami menerima penghargaan atas dedikasinya di dunia pendidikan.", image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg", imageHint: "award ceremony", category: "Berita Kampus" },
    { id: 20, title: "Studi Banding ke Bursa Efek Indonesia", description: "Mahasiswa akuntansi melakukan studi banding untuk memahami pasar modal.", image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg", imageHint: "stock exchange", category: "Acara" },
];
