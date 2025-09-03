export const manajemenPageConfig = {
  title: "Program Studi Manajemen",
  description: "Program studi yang mempersiapkan mahasiswa menjadi manajer profesional dengan kemampuan analitis dan kepemimpinan yang kuat",
  
  topper: {
    type: "hero",
    variant: "program",
    backgroundImage: "/images/management-hero.jpg",
    overlay: true
  },

  blocks: [
    {
      type: "hero",
      title: "Program Studi Manajemen",
      subtitle: "Mewujudkan Manajer Profesional Masa Depan",
      description: "Program studi yang mempersiapkan mahasiswa menjadi manajer profesional dengan kemampuan analitis dan kepemimpinan yang kuat dalam menghadapi tantangan bisnis modern",
      cta: {
        primary: { text: "Daftar Program Manajemen", href: "/pendaftaran" },
        secondary: { text: "Download Brosur", href: "/docs/brosur-manajemen.pdf" }
      }
    },
    {
      type: "content",
      title: "Visi & Misi Program Studi",
      content: [
        {
          subtitle: "Visi",
          text: "Mewujudkan Program Studi Manajemen yang menghasilkan mutu lulusan yang unggul dan bermanfaat bagi perkembangan ilmu Manajemen berskala nasional tahun 2026."
        },
        {
          subtitle: "Misi",
          text: "Melaksanakan pembelajaran, penelitian, pengabdian, dan kemitraan di bidang manajemen untuk mendukung daya saing lulusan dan pengembangan usaha/publik."
        }
      ]
    },
    {
      type: "features",
      title: "Keunggulan Program",
      items: [
        {
          title: "Kurikulum KKNI",
          description: "Kurikulum berbasis Kerangka Kualifikasi Nasional Indonesia yang selaras dengan kebutuhan industri",
          icon: "curriculum"
        },
        {
          title: "Praktikum Industri",
          description: "Pembelajaran praktis langsung dengan industri untuk pengalaman nyata dunia kerja",
          icon: "industry"
        },
        {
          title: "Sertifikasi Profesi",
          description: "Program sertifikasi profesi untuk meningkatkan daya saing lulusan di pasar kerja",
          icon: "certification"
        },
        {
          title: "Dosen Berkualitas",
          description: "Dosen berpendidikan minimal magister dengan pengalaman praktis di bidang manajemen",
          icon: "faculty"
        }
      ]
    },
    {
      type: "stats",
      title: "Profil Lulusan",
      items: [
        { value: "95", label: "Tingkat Kelulusan Tepat Waktu", suffix: "%" },
        { value: "85", label: "Lulusan Bekerja dalam 6 Bulan", suffix: "%" },
        { value: "4.2", label: "IPK Rata-rata Lulusan", suffix: "" },
        { value: "15", label: "Mitra Industri", suffix: "+" }
      ]
    },
    {
      type: "content",
      title: "Kompetensi Lulusan",
      description: "Lulusan Program Studi Manajemen memiliki kompetensi yang dibutuhkan dunia kerja modern",
      content: [
        {
          subtitle: "Kompetensi Utama",
          text: "Menguasai konsep dan teori manajemen, mampu menganalisis masalah bisnis, dan memiliki kemampuan kepemimpinan yang kuat."
        },
        {
          subtitle: "Kompetensi Pendukung",
          text: "Keahlian teknologi informasi, bahasa asing, komunikasi bisnis, dan kemampuan beradaptasi dengan perubahan lingkungan bisnis."
        },
        {
          subtitle: "Kompetensi Khusus",
          text: "Spesialisasi dalam bidang manajemen pemasaran, manajemen keuangan, manajemen operasional, dan manajemen sumber daya manusia."
        }
      ]
    },
    {
      type: "cta",
      title: "Bergabung dengan Program Studi Manajemen",
      description: "Wujudkan impian menjadi manajer profesional bersama STIE Dwimulya",
      primaryCta: { text: "Daftar Sekarang", href: "/pendaftaran" },
      secondaryCta: { text: "Konsultasi Program", href: "/layanan/layanan-mahasiswa/cdc" }
    }
  ]
};
