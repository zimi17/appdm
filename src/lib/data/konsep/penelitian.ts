export const penelitianPageConfig = {
  title: "Penelitian & Pengabdian",
  description: "Kontribusi STIE Dwimulya dalam pengembangan ilmu pengetahuan dan pemberdayaan masyarakat",
  
  topper: {
    type: "hero",
    variant: "research",
    backgroundImage: "/images/research-hero.jpg",
    overlay: true
  },

  blocks: [
    {
      type: "hero",
      title: "Penelitian & Pengabdian Masyarakat",
      subtitle: "Kontribusi Nyata untuk Bangsa",
      description: "Kontribusi STIE Dwimulya dalam pengembangan ilmu pengetahuan dan pemberdayaan masyarakat melalui penelitian berkualitas dan pengabdian yang berdampak",
      cta: {
        primary: { text: "Lihat Penelitian Kami", href: "#pusat-penelitian" },
        secondary: { text: "Program Pengabdian", href: "#pengabdian-masyarakat" }
      }
    },
    {
      type: "content",
      title: "Visi & Misi LPPM",
      description: "Lembaga Penelitian dan Pengabdian kepada Masyarakat STIE Dwimulya",
      content: [
        {
          subtitle: "Visi LPPM",
          text: "Menjadi lembaga yang berdaya saing dan berperan aktif dalam pembangunan bangsa."
        },
        {
          subtitle: "Misi LPPM",
          text: "Mengembangkan budaya meneliti, aktivitas pengabdian yang bermanfaat, dan kerjasama kemitraan."
        }
      ]
    },
    {
      type: "stats",
      title: "Capaian Penelitian & Pengabdian",
      items: [
        { value: "25", label: "Penelitian per Tahun", suffix: "+" },
        { value: "15", label: "Program Pengabdian", suffix: "+" },
        { value: "10", label: "Publikasi Ilmiah", suffix: "+" },
        { value: "5", label: "Mitra Kerjasama", suffix: "+" }
      ]
    },
    {
      type: "features",
      title: "Pusat Penelitian",
      description: "Kegiatan penelitian yang berkaitan dengan penerapan ilmu ekonomi sebagai bentuk kontribusi terhadap pemberdayaan ekonomi masyarakat",
      items: [
        {
          title: "Fokus Penelitian",
          description: "Penelitian terapan di bidang ekonomi, manajemen, dan akuntansi",
          icon: "focus",
          href: "/penelitian/pusat-penelitian/fokus",
          features: ["Ekonomi Kerakyatan", "UMKM", "Keuangan Syariah"]
        },
        {
          title: "Publikasi Ilmiah",
          description: "Publikasi hasil penelitian di jurnal nasional dan internasional",
          icon: "publication",
          href: "/penelitian/pusat-penelitian/publikasi",
          features: ["Jurnal Terakreditasi", "Prosiding Seminar", "Buku Referensi"]
        },
        {
          title: "Kerja Sama Penelitian",
          description: "Kolaborasi penelitian dengan institusi dalam dan luar negeri",
          icon: "collaboration",
          href: "/penelitian/pusat-penelitian/kerjasama",
          features: ["Universitas Mitra", "Lembaga Riset", "Industri"]
        }
      ]
    },
    {
      type: "features",
      title: "Pengabdian Masyarakat",
      description: "Program pemberdayaan masyarakat sebagai bentuk kontribusi perguruan tinggi dalam bidang ilmu ekonomi",
      items: [
        {
          title: "Program Pemberdayaan",
          description: "Program pemberdayaan ekonomi masyarakat berbasis ilmu ekonomi",
          icon: "empowerment",
          href: "/penelitian/pengabdian-masyarakat/pemberdayaan",
          features: ["Koperasi", "Ekonomi Kreatif", "Literasi Keuangan"]
        },
        {
          title: "Pelatihan UMKM",
          description: "Pelatihan manajemen dan keuangan untuk pelaku UMKM",
          icon: "training",
          href: "/penelitian/pengabdian-masyarakat/umkm",
          features: ["Manajemen Usaha", "Pembukuan", "Digital Marketing"]
        },
        {
          title: "Klinik Konsultasi",
          description: "Layanan konsultasi gratis untuk masyarakat dan UMKM",
          icon: "consultation",
          href: "/penelitian/pengabdian-masyarakat/konsultasi",
          features: ["Konsultasi Bisnis", "Perencanaan Keuangan", "Pajak"]
        }
      ]
    },
    {
      type: "content",
      title: "Dampak Penelitian & Pengabdian",
      description: "Kontribusi nyata STIE Dwimulya untuk masyarakat dan pengembangan ilmu pengetahuan",
      content: [
        {
          subtitle: "Pemberdayaan Ekonomi",
          text: "Membantu meningkatkan kapasitas UMKM dan masyarakat dalam mengelola usaha dan keuangan."
        },
        {
          subtitle: "Pengembangan Ilmu",
          text: "Berkontribusi dalam pengembangan ilmu ekonomi, manajemen, dan akuntansi melalui penelitian berkualitas."
        },
        {
          subtitle: "Kemitraan Strategis",
          text: "Membangun kerjasama dengan berbagai pihak untuk meningkatkan dampak penelitian dan pengabdian."
        }
      ]
    },
    {
      type: "cta",
      title: "Bergabung dalam Penelitian & Pengabdian",
      description: "Mari bersama-sama berkontribusi untuk kemajuan ilmu pengetahuan dan kesejahteraan masyarakat",
      primaryCta: { text: "Daftar Sekarang", href: "/pendaftaran" },
      secondaryCta: { text: "Kerjasama Penelitian", href: "/tentang/kerjasama" }
    }
  ]
};
