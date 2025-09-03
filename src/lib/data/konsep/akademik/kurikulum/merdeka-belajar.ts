export const merdekaBelajarPageConfig = {
  title: "Kurikulum Merdeka Belajar",
  description: "Implementasi kebijakan Merdeka Belajar Kampus Merdeka yang memberikan kebebasan kepada mahasiswa untuk mengambil mata kuliah di luar program studi",
  
  topper: {
    type: "hero",
    variant: "academic",
    backgroundImage: "/images/merdeka-belajar-hero.jpg",
    overlay: true
  },

  blocks: [
    {
      type: "hero",
      title: "Kurikulum Merdeka Belajar",
      subtitle: "Kebebasan Belajar untuk Masa Depan Cerah",
      description: "Implementasi kebijakan Merdeka Belajar Kampus Merdeka yang memberikan kebebasan kepada mahasiswa untuk mengambil mata kuliah di luar program studi dan melakukan kegiatan pembelajaran di luar kampus",
      cta: {
        primary: { text: "Pelajari Program MBKM", href: "#program-mbkm" },
        secondary: { text: "Konsultasi Akademik", href: "/layanan/layanan-mahasiswa/baa" }
      }
    },
    {
      type: "content",
      title: "Tentang Merdeka Belajar Kampus Merdeka",
      description: "Program yang memberikan kesempatan kepada mahasiswa untuk mengembangkan kompetensi sesuai passion dan minat",
      content: [
        {
          subtitle: "Filosofi MBKM",
          text: "Memberikan kebebasan kepada mahasiswa untuk belajar di luar program studi selama maksimal 2 semester atau setara 40 SKS."
        },
        {
          subtitle: "Tujuan Program",
          text: "Meningkatkan kompetensi lulusan, mempersiapkan mahasiswa memasuki dunia kerja, dan memberikan pengalaman belajar yang lebih luas."
        }
      ]
    },
    {
      type: "features",
      title: "Program MBKM di STIE Dwimulya",
      items: [
        {
          title: "Pertukaran Pelajar",
          description: "Kesempatan belajar di perguruan tinggi lain untuk memperluas wawasan akademik",
          icon: "exchange"
        },
        {
          title: "Magang/Praktik Kerja",
          description: "Program magang di perusahaan atau instansi untuk pengalaman kerja nyata",
          icon: "internship"
        },
        {
          title: "Proyek Kemanusiaan",
          description: "Keterlibatan dalam proyek sosial dan kemanusiaan untuk mengembangkan empati",
          icon: "humanity"
        },
        {
          title: "Wirausaha",
          description: "Program pengembangan jiwa kewirausahaan melalui praktik bisnis nyata",
          icon: "entrepreneurship"
        },
        {
          title: "Penelitian/Riset",
          description: "Kesempatan terlibat dalam penelitian untuk mengembangkan kemampuan riset",
          icon: "research"
        },
        {
          title: "Proyek Independen",
          description: "Proyek mandiri sesuai minat dan bakat mahasiswa dengan bimbingan dosen",
          icon: "independent"
        }
      ]
    },
    {
      type: "stats",
      title: "Capaian Program MBKM",
      items: [
        { value: "40", label: "Maksimal SKS MBKM", suffix: "" },
        { value: "2", label: "Maksimal Semester", suffix: "" },
        { value: "15", label: "Mitra Industri", suffix: "+" },
        { value: "5", label: "Perguruan Tinggi Mitra", suffix: "+" }
      ]
    },
    {
      type: "content",
      title: "Manfaat Program MBKM",
      description: "Keuntungan yang diperoleh mahasiswa melalui program Merdeka Belajar Kampus Merdeka",
      content: [
        {
          subtitle: "Pengembangan Soft Skills",
          text: "Meningkatkan kemampuan komunikasi, kerja tim, kepemimpinan, dan adaptabilitas melalui pengalaman di luar kampus."
        },
        {
          subtitle: "Networking dan Koneksi",
          text: "Membangun jaringan profesional dengan industri, akademisi, dan praktisi di berbagai bidang."
        },
        {
          subtitle: "Kesiapan Kerja",
          text: "Memberikan pengalaman praktis yang meningkatkan daya saing lulusan di pasar kerja."
        },
        {
          subtitle: "Pengembangan Karakter",
          text: "Membentuk karakter yang tangguh, mandiri, dan memiliki jiwa sosial yang tinggi."
        }
      ]
    },
    {
      type: "cta",
      title: "Siap Merasakan Kebebasan Belajar?",
      description: "Bergabunglah dengan program MBKM STIE Dwimulya dan kembangkan potensi diri secara maksimal",
      primaryCta: { text: "Daftar Program MBKM", href: "/pendaftaran" },
      secondaryCta: { text: "Info Lebih Lanjut", href: "/layanan/layanan-mahasiswa/baa" }
    }
  ]
};
