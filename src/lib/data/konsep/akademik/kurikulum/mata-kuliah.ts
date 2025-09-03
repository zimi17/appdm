export const mataKuliahPageConfig = {
  title: "Mata Kuliah",
  description: "Daftar mata kuliah yang diajarkan di STIE Dwimulya untuk program studi Manajemen dan Akuntansi",
  
  topper: {
    type: "hero",
    variant: "academic",
    backgroundImage: "/images/courses-hero.jpg",
    overlay: true
  },

  blocks: [
    {
      type: "hero",
      title: "Mata Kuliah STIE Dwimulya",
      subtitle: "Kurikulum Komprehensif untuk Masa Depan",
      description: "Daftar mata kuliah yang diajarkan di STIE Dwimulya untuk program studi Manajemen dan Akuntansi, dirancang sesuai kebutuhan industri dan standar nasional",
      cta: {
        primary: { text: "Lihat Program Studi", href: "/akademik/program-sarjana" },
        secondary: { text: "Download Kurikulum", href: "/docs/kurikulum-lengkap.pdf" }
      }
    },
    {
      type: "stats",
      title: "Struktur Mata Kuliah",
      items: [
        { value: "144", label: "Total SKS", suffix: "" },
        { value: "8", label: "Semester", suffix: "" },
        { value: "12", label: "MK Wajib Nasional", suffix: "" },
        { value: "40", label: "MK Inti Program Studi", suffix: "+" }
      ]
    },
    {
      type: "features",
      title: "Kategori Mata Kuliah",
      items: [
        {
          title: "Mata Kuliah Wajib Nasional",
          description: "Mata kuliah yang diwajibkan oleh pemerintah untuk semua program studi",
          icon: "national",
          features: ["Pancasila", "Kewarganegaraan", "Bahasa Indonesia", "Agama"]
        },
        {
          title: "Mata Kuliah Inti",
          description: "Mata kuliah spesifik sesuai bidang ilmu program studi",
          icon: "core",
          features: ["Teori Ekonomi", "Manajemen", "Akuntansi", "Statistik"]
        },
        {
          title: "Mata Kuliah Pilihan",
          description: "Mata kuliah sesuai minat dan spesialisasi mahasiswa",
          icon: "elective",
          features: ["Konsentrasi", "Minat Khusus", "Pengembangan Diri"]
        },
        {
          title: "Praktikum & Magang",
          description: "Kegiatan praktis untuk pengalaman langsung",
          icon: "practical",
          features: ["Lab Komputer", "Magang Industri", "Proyek Akhir"]
        }
      ]
    },
    {
      type: "content",
      title: "Mata Kuliah Program Studi Manajemen",
      description: "Mata kuliah yang diajarkan di Program Studi Manajemen",
      content: [
        {
          subtitle: "Semester 1-2 (Dasar)",
          text: "Pengantar Manajemen, Pengantar Ekonomi Mikro/Makro, Matematika Bisnis, Bahasa Inggris Bisnis, Akuntansi Pengantar."
        },
        {
          subtitle: "Semester 3-4 (Menengah)",
          text: "Manajemen Keuangan, Manajemen Pemasaran, Manajemen SDM, Manajemen Operasional, Statistik Bisnis."
        },
        {
          subtitle: "Semester 5-6 (Lanjut)",
          text: "Manajemen Strategis, Kewirausahaan, Sistem Informasi Manajemen, Perilaku Organisasi, Etika Bisnis."
        },
        {
          subtitle: "Semester 7-8 (Spesialisasi)",
          text: "Mata kuliah pilihan sesuai konsentrasi, Magang Industri, Skripsi/Tugas Akhir."
        }
      ]
    },
    {
      type: "content",
      title: "Mata Kuliah Program Studi Akuntansi",
      description: "Mata kuliah yang diajarkan di Program Studi Akuntansi",
      content: [
        {
          subtitle: "Semester 1-2 (Dasar)",
          text: "Pengantar Akuntansi, Pengantar Ekonomi, Matematika Bisnis, Bahasa Inggris, Pengantar Manajemen."
        },
        {
          subtitle: "Semester 3-4 (Menengah)",
          text: "Akuntansi Keuangan Menengah, Akuntansi Biaya, Akuntansi Manajemen, Perpajakan, Statistik."
        },
        {
          subtitle: "Semester 5-6 (Lanjut)",
          text: "Akuntansi Keuangan Lanjutan, Auditing, Sistem Informasi Akuntansi, Akuntansi Sektor Publik."
        },
        {
          subtitle: "Semester 7-8 (Spesialisasi)",
          text: "Mata kuliah pilihan konsentrasi, Magang di KAP/Perusahaan, Skripsi/Tugas Akhir."
        }
      ]
    },
    {
      type: "cta",
      title: "Siap Menempuh Mata Kuliah Berkualitas?",
      description: "Bergabunglah dengan STIE Dwimulya dan nikmati pembelajaran dengan kurikulum yang relevan dan up-to-date",
      primaryCta: { text: "Daftar Sekarang", href: "/pendaftaran" },
      secondaryCta: { text: "Konsultasi Akademik", href: "/layanan/layanan-mahasiswa/baa" }
    }
  ]
};
