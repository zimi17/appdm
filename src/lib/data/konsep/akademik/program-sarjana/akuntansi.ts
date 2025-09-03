export const akuntansiPageConfig = {
  title: "Program Studi Akuntansi",
  description: "Program studi yang menghasilkan akuntan profesional dengan keahlian dalam pelaporan keuangan dan audit",
  
  topper: {
    type: "hero",
    variant: "program",
    backgroundImage: "/images/accounting-hero.jpg",
    overlay: true
  },

  blocks: [
    {
      type: "hero",
      title: "Program Studi Akuntansi",
      subtitle: "Membentuk Akuntan Profesional Terpercaya",
      description: "Program studi yang menghasilkan akuntan profesional dengan keahlian dalam pelaporan keuangan, audit, dan sistem informasi akuntansi yang sesuai dengan standar nasional dan internasional",
      cta: {
        primary: { text: "Daftar Program Akuntansi", href: "/pendaftaran" },
        secondary: { text: "Download Brosur", href: "/docs/brosur-akuntansi.pdf" }
      }
    },
    {
      type: "content",
      title: "Visi & Misi Program Studi",
      content: [
        {
          subtitle: "Visi",
          text: "Menjadi Program Studi yang Berdaya Saing dan Berkontribusi bagi perkembangan ilmu akuntansi di Indonesia Tahun 2026."
        },
        {
          subtitle: "Misi",
          text: "Melaksanakan pembelajaran, penelitian, pengabdian, dan kemitraan di bidang akuntansi untuk mendukung daya saing lulusan dan pengembangan usaha/publik."
        }
      ]
    },
    {
      type: "features",
      title: "Keunggulan Program",
      items: [
        {
          title: "Praktik Akuntansi",
          description: "Pembelajaran praktis dengan kasus nyata perusahaan dan organisasi",
          icon: "practice"
        },
        {
          title: "Software Akuntansi",
          description: "Penguasaan software akuntansi modern seperti MYOB, Accurate, dan SAP",
          icon: "software"
        },
        {
          title: "Magang Industri",
          description: "Program magang di perusahaan dan kantor akuntan publik terkemuka",
          icon: "internship"
        },
        {
          title: "Sertifikasi Profesi",
          description: "Persiapan sertifikasi akuntan profesional dan brevet pajak",
          icon: "certification"
        }
      ]
    },
    {
      type: "stats",
      title: "Profil Lulusan",
      items: [
        { value: "92", label: "Tingkat Kelulusan Tepat Waktu", suffix: "%" },
        { value: "88", label: "Lulusan Bekerja dalam 6 Bulan", suffix: "%" },
        { value: "4.1", label: "IPK Rata-rata Lulusan", suffix: "" },
        { value: "20", label: "Mitra KAP dan Perusahaan", suffix: "+" }
      ]
    },
    {
      type: "content",
      title: "Kompetensi Lulusan",
      description: "Lulusan Program Studi Akuntansi memiliki kompetensi sesuai standar profesi akuntan",
      content: [
        {
          subtitle: "Kompetensi Utama",
          text: "Menguasai prinsip dan standar akuntansi, mampu menyusun laporan keuangan, dan melakukan analisis keuangan perusahaan."
        },
        {
          subtitle: "Kompetensi Pendukung",
          text: "Keahlian sistem informasi akuntansi, perpajakan, audit internal, dan teknologi finansial (fintech)."
        },
        {
          subtitle: "Kompetensi Khusus",
          text: "Spesialisasi dalam akuntansi keuangan, akuntansi manajemen, akuntansi sektor publik, dan akuntansi syariah."
        }
      ]
    },
    {
      type: "content",
      title: "Prospek Karir",
      description: "Lulusan memiliki peluang karir yang luas di berbagai sektor",
      content: [
        {
          subtitle: "Sektor Swasta",
          text: "Akuntan perusahaan, auditor internal, analis keuangan, konsultan pajak, dan manajer keuangan."
        },
        {
          subtitle: "Sektor Publik",
          text: "Auditor pemerintah, akuntan pemerintah, dan pegawai di lembaga keuangan negara."
        },
        {
          subtitle: "Profesi Independen",
          text: "Akuntan publik, konsultan keuangan, dan wirausaha di bidang jasa keuangan."
        }
      ]
    },
    {
      type: "cta",
      title: "Bergabung dengan Program Studi Akuntansi",
      description: "Wujudkan karir sebagai akuntan profesional bersama STIE Dwimulya",
      primaryCta: { text: "Daftar Sekarang", href: "/pendaftaran" },
      secondaryCta: { text: "Konsultasi Program", href: "/layanan/layanan-mahasiswa/cdc" }
    }
  ]
};
