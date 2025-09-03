export const akademikPageConfig = {
  title: "Program Akademik",
  description: "Program pendidikan tinggi di bidang ilmu ekonomi yang berkualitas standar nasional untuk mempersiapkan mahasiswa memasuki dunia bisnis",
  
  topper: {
    _type: "simple-page-topper",
    title: "Program Akademik STIE Dwimulya",
    description: "Program pendidikan tinggi di bidang ilmu ekonomi yang berkualitas standar nasional untuk mempersiapkan mahasiswa memasuki dunia bisnis",
    intro: "Kampus Rakyat, Kampus Perubahan",
    cta: {
      text: "Daftar Sekarang",
      href: "/pendaftaran"
    }
  },

  blocks: [
    {
      _type: "hero",
      _key: "hero-akademik",
      title: "Program Akademik STIE Dwimulya",
      description: "Program pendidikan tinggi di bidang ilmu ekonomi yang berkualitas standar nasional untuk mempersiapkan mahasiswa memasuki dunia bisnis",
      imageUrl: "/images/academic-hero.jpg"
    },
    {
      _type: "cardGrid",
      _key: "program-sarjana",
      title: "Program Sarjana",
      description: "Program Strata 1 yang menghasilkan lulusan unggul dan berdaya saing di bidang ilmu ekonomi",
      items: [
        {
          _key: "manajemen",
          title: "Manajemen",
          description: "Program studi yang mempersiapkan mahasiswa menjadi manajer profesional dengan kemampuan analitis dan kepemimpinan yang kuat",
          href: "/akademik/program-sarjana/manajemen"
        },
        {
          _key: "akuntansi",
          title: "Akuntansi", 
          description: "Program studi yang menghasilkan akuntan profesional dengan keahlian dalam pelaporan keuangan dan audit",
          href: "/akademik/program-sarjana/akuntansi"
        }
      ]
    },
    {
      _type: "twoColumnContent",
      _key: "kurikulum-info",
      title: "Kurikulum Pendidikan",
      description: "Kurikulum berbasis KKNI dan Merdeka Belajar Kampus Merdeka yang relevan dengan industri 4.0. Implementasi kebijakan Merdeka Belajar Kampus Merdeka yang memberikan kebebasan kepada mahasiswa untuk mengambil mata kuliah di luar program studi dan melakukan kegiatan pembelajaran di luar kampus."
    },
    {
      _type: "promoBar",
      _key: "cta-daftar",
      title: "Siap Bergabung dengan STIE Dwimulya?",
      description: "Dapatkan pendidikan berkualitas dengan biaya terjangkau dan berbagai program beasiswa"
    }
  ]
};
