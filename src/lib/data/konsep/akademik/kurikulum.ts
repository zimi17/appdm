export const kurikulumPageConfig = {
  title: "Kurikulum Pendidikan",
  description: "Kurikulum berbasis KKNI dan Merdeka Belajar Kampus Merdeka yang relevan dengan industri 4.0",
  
  topper: {
    type: "hero",
    variant: "academic",
    backgroundImage: "/images/curriculum-hero.jpg",
    overlay: true
  },

  blocks: [
    {
      type: "hero",
      title: "Kurikulum Pendidikan STIE Dwimulya",
      subtitle: "Inovasi Pembelajaran untuk Masa Depan",
      description: "Kurikulum berbasis KKNI dan Merdeka Belajar Kampus Merdeka yang relevan dengan industri 4.0 dan kebutuhan dunia kerja modern",
      cta: {
        primary: { text: "Lihat Detail Kurikulum", href: "#kurikulum-detail" },
        secondary: { text: "Download Panduan", href: "/docs/panduan-kurikulum.pdf" }
      }
    },
    {
      type: "stats",
      title: "Komposisi Kurikulum",
      items: [
        { value: "75", label: "Standar Nasional", suffix: "%" },
        { value: "25", label: "Kebutuhan Lokal", suffix: "%" },
        { value: "144", label: "Total SKS", suffix: "" },
        { value: "8", label: "Semester", suffix: "" }
      ]
    },
    {
      type: "features",
      title: "Keunggulan Kurikulum",
      items: [
        {
          title: "Kurikulum Merdeka Belajar",
          description: "Implementasi kebijakan MBKM yang memberikan kebebasan mahasiswa mengambil mata kuliah lintas program studi",
          icon: "freedom",
          href: "/akademik/kurikulum/merdeka-belajar"
        },
        {
          title: "Berbasis KKNI",
          description: "Kurikulum disusun berdasarkan Kerangka Kualifikasi Nasional Indonesia level 6 untuk program sarjana",
          icon: "framework"
        },
        {
          title: "Student-Centered Learning",
          description: "Pendekatan pembelajaran yang berpusat pada mahasiswa dengan metode aktif dan kolaboratif",
          icon: "student"
        },
        {
          title: "HOTS Integration",
          description: "Integrasi Higher Order Thinking Skills untuk mengembangkan kemampuan berpikir kritis mahasiswa",
          icon: "thinking"
        }
      ]
    },
    {
      type: "content",
      title: "Struktur Kurikulum",
      description: "Kurikulum dirancang untuk menghasilkan lulusan yang kompeten dan siap kerja",
      content: [
        {
          subtitle: "Mata Kuliah Wajib Nasional",
          text: "Pancasila, Kewarganegaraan, Bahasa Indonesia, dan Agama sebagai fondasi karakter bangsa."
        },
        {
          subtitle: "Mata Kuliah Inti Program Studi",
          text: "Mata kuliah spesifik sesuai bidang ilmu Manajemen dan Akuntansi dengan bobot 75% dari total SKS."
        },
        {
          subtitle: "Mata Kuliah Pilihan",
          text: "Mata kuliah pilihan sesuai minat dan bakat mahasiswa untuk pengembangan kompetensi khusus."
        },
        {
          subtitle: "Praktikum dan Magang",
          text: "Kegiatan praktikum laboratorium dan magang industri untuk pengalaman praktis."
        }
      ]
    },
    {
      type: "content",
      title: "Metode Pembelajaran",
      description: "Pendekatan pembelajaran modern yang mengintegrasikan teori dan praktik",
      content: [
        {
          subtitle: "Pembelajaran Aktif",
          text: "Diskusi kelompok, presentasi, studi kasus, dan project-based learning untuk mengembangkan kemampuan analitis."
        },
        {
          subtitle: "Teknologi Pembelajaran",
          text: "Pemanfaatan Learning Management System (LMS) dan multimedia untuk mendukung proses pembelajaran."
        },
        {
          subtitle: "Praktikum Industri",
          text: "Kerja sama dengan industri untuk memberikan pengalaman nyata dunia kerja kepada mahasiswa."
        }
      ]
    },
    {
      type: "cta",
      title: "Siap Belajar dengan Kurikulum Terdepan?",
      description: "Bergabunglah dengan STIE Dwimulya dan rasakan pengalaman belajar yang relevan dengan kebutuhan industri",
      primaryCta: { text: "Daftar Sekarang", href: "/pendaftaran" },
      secondaryCta: { text: "Konsultasi Akademik", href: "/layanan/layanan-mahasiswa/baa" }
    }
  ]
};
