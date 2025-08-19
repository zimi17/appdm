
export const newsPageData = {
    hero: {
      title: "Berita & Acara",
      description: "Tetap terinformasi dengan berita terbaru, acara mendatang, dan pengumuman penting dari komunitas STIE Dwimulya.",
      imageUrl: "https://placehold.co/2000x1333.png",
      imageHint: "community event"
    },
    facets: {
      title: "Filter Berdasarkan",
      items: [
        { name: "Semua", value: "all", number: "300" },
        { name: "Berita Kampus", value: "campus-news", number: "120" },
        { 
          name: "Acara", 
          value: "events", 
          number: "80",
          items: [
            { name: "Seminar", value: "seminar", number: "30" },
            { name: "Workshop", value: "workshop", number: "25" },
            { name: "Webinar", value: "webinar", number: "25" },
          ]
        },
        { name: "Prestasi Mahasiswa", value: "student-achievements", number: "50" },
        { name: "Penelitian", value: "research", number: "50" },
      ]
    }
  }

export const mockNews = [
    { id: 1, title: "Acara Donor Darah", description: "Acara donor darah tahunan kembali diadakan di kampus STIE Dwimulya.", image: "https://placehold.co/400x300.png", imageHint: "blood drive", category: "Acara" },
    { id: 2, title: "Prestasi Mahasiswa di Lomba Debat Nasional", description: "Tim debat STIE Dwimulya berhasil meraih juara kedua dalam kompetisi debat tingkat nasional.", image: "https://placehold.co/400x300.png", imageHint: "debate competition", category: "Prestasi Mahasiswa" },
    { id: 3, title: "Penelitian Baru Tentang Ekonomi Digital", description: "Dosen STIE Dwimulya mempublikasikan penelitian terbaru mengenai dampak ekonomi digital di Indonesia.", image: "https://placehold.co/400x300.png", imageHint: "digital economy", category: "Penelitian" },
    { id: 4, title: "Seminar Kewirausahaan untuk Mahasiswa", description: "STIE Dwimulya mengadakan seminar kewirausahaan dengan menghadirkan para pengusaha sukses.", image: "https://placehold.co/400x300.png", imageHint: "entrepreneurship seminar", category: "Acara" },
    { id: 5, title: "Pembaruan Fasilitas Kampus", description: "Kampus STIE Dwimulya kini dilengkapi dengan laboratorium komputer terbaru.", image: "https://placehold.co/400x300.png", imageHint: "computer lab", category: "Berita Kampus" },
    { id: 6, title: "Program Pertukaran Pelajar dengan Universitas Luar Negeri", description: "STIE Dwimulya menjalin kerjasama baru untuk program pertukaran pelajar.", image: "https://placehold.co/400x300.png", imageHint: "student exchange", category: "Berita Kampus" },
    { id: 7, title: "Mahasiswa Manajemen Memenangkan Business Case Competition", description: "Mahasiswa dari prodi Manajemen berhasil menjadi juara pertama.", image: "https://placehold.co/400x300.png", imageHint: "business competition", category: "Prestasi Mahasiswa" },
    { id: 8, title: "Workshop Penulisan Karya Ilmiah", description: "Tingkatkan kemampuan menulis karya ilmiah dengan workshop dari para ahli.", image: "https://placehold.co/400x300.png", imageHint: "writing workshop", category: "Acara" },
    { id: 9, title: "Rektor STIE Dwimulya Menerima Penghargaan", description: "Rektor kami menerima penghargaan atas dedikasinya di dunia pendidikan.", image: "https://placehold.co/400x300.png", imageHint: "award ceremony", category: "Berita Kampus" },
    { id: 10, title: "Studi Banding ke Bursa Efek Indonesia", description: "Mahasiswa akuntansi melakukan studi banding untuk memahami pasar modal.", image: "https://placehold.co/400x300.png", imageHint: "stock exchange", category: "Acara" },
     { id: 11, title: "Acara Donor Darah", description: "Acara donor darah tahunan kembali diadakan di kampus STIE Dwimulya.", image: "https://placehold.co/400x300.png", imageHint: "blood drive", category: "Acara" },
    { id: 12, title: "Prestasi Mahasiswa di Lomba Debat Nasional", description: "Tim debat STIE Dwimulya berhasil meraih juara kedua dalam kompetisi debat tingkat nasional.", image: "https://placehold.co/400x300.png", imageHint: "debate competition", category: "Prestasi Mahasiswa" },
    { id: 13, title: "Penelitian Baru Tentang Ekonomi Digital", description: "Dosen STIE Dwimulya mempublikasikan penelitian terbaru mengenai dampak ekonomi digital di Indonesia.", image: "https://placehold.co/400x300.png", imageHint: "digital economy", category: "Penelitian" },
    { id: 14, title: "Seminar Kewirausahaan untuk Mahasiswa", description: "STIE Dwimulya mengadakan seminar kewirausahaan dengan menghadirkan para pengusaha sukses.", image: "https://placehold.co/400x300.png", imageHint: "entrepreneurship seminar", category: "Acara" },
    { id: 15, title: "Pembaruan Fasilitas Kampus", description: "Kampus STIE Dwimulya kini dilengkapi dengan laboratorium komputer terbaru.", image: "https://placehold.co/400x300.png", imageHint: "computer lab", category: "Berita Kampus" },
    { id: 16, title: "Program Pertukaran Pelajar dengan Universitas Luar Negeri", description: "STIE Dwimulya menjalin kerjasama baru untuk program pertukaran pelajar.", image: "https://placehold.co/400x300.png", imageHint: "student exchange", category: "Berita Kampus" },
    { id: 17, title: "Mahasiswa Manajemen Memenangkan Business Case Competition", description: "Mahasiswa dari prodi Manajemen berhasil menjadi juara pertama.", image: "https://placehold.co/400x300.png", imageHint: "business competition", category: "Prestasi Mahasiswa" },
    { id: 18, title: "Workshop Penulisan Karya Ilmiah", description: "Tingkatkan kemampuan menulis karya ilmiah dengan workshop dari para ahli.", image: "https://placehold.co/400x300.png", imageHint: "writing workshop", category: "Acara" },
    { id: 19, title: "Rektor STIE Dwimulya Menerima Penghargaan", description: "Rektor kami menerima penghargaan atas dedikasinya di dunia pendidikan.", image: "https://placehold.co/400x300.png", imageHint: "award ceremony", category: "Berita Kampus" },
    { id: 20, title: "Studi Banding ke Bursa Efek Indonesia", description: "Mahasiswa akuntansi melakukan studi banding untuk memahami pasar modal.", image: "https://placehold.co/400x300.png", imageHint: "stock exchange", category: "Acara" },
];
