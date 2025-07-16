export const navData = [
  { label: "Beranda", href: "/" },
  {
    label: "Tentang Kami",
    href: "/about",
    description: "Profil, sejarah, visi & misi, dan nilai-nilai STIE Dwimulya.",
    children: [
      { label: "Profil", href: "/about/profil" },
      { label: "Sejarah", href: "/about/sejarah" },
      { label: "Visi & Misi", href: "/about/visi-misi" },
      { label: "Struktur Organisasi", href: "/about/struktur-organisasi" },
      { label: "Dosen & Staf", href: "/about/dosen-staf" }
    ]
  },
  {
    label: "Akademik",
    href: "/akademik",
    description: "Informasi program studi, kurikulum, dan kalender akademik.",
    children: [
      {
        label: "Program Studi",
        href: "/akademik/program-studi",
        children: [
          { label: "S1 Akuntansi", href: "/akademik/program-studi/akuntansi" },
          { label: "S1 Manajemen", href: "/akademik/program-studi/manajemen" },
          { label: "S1 Keuangan", href: "/akademik/program-studi/keuangan" }
        ]
      },
      { label: "Kurikulum", href: "/akademik/kurikulum" },
      { label: "Kalender Akademik", href: "/akademik/kalender" },
      { label: "Fasilitas", href: "/akademik/fasilitas" }
    ]
  },
  {
    label: "Penerimaan Mahasiswa",
    href: "/penerimaan",
    description: "Informasi pendaftaran, syarat, dan beasiswa.",
    children: [
      { label: "Jalur Pendaftaran", href: "/penerimaan/jalur" },
      { label: "Syarat & Prosedur", href: "/penerimaan/syarat" },
      { label: "Beasiswa", href: "/penerimaan/beasiswa" },
      { label: "FAQ", href: "/penerimaan/faq" }
    ]
  },
  {
    label: "Penelitian & Pengabdian",
    href: "/penelitian",
    description: "Kegiatan riset, publikasi, dan pengabdian masyarakat.",
    children: [
      { label: "Pusat Penelitian", href: "/penelitian/pusat" },
      { label: "Publikasi", href: "/penelitian/publikasi" },
      { label: "Pengabdian Masyarakat", href: "/penelitian/pengabdian" }
    ]
  },
  {
    label: "Kehidupan Kampus",
    href: "/kehidupan-kampus",
    description: "Kegiatan mahasiswa, organisasi, dan fasilitas kampus.",
    children: [
      { label: "Organisasi Mahasiswa", href: "/kehidupan-kampus/organisasi" },
      { label: "Kegiatan & Event", href: "/kehidupan-kampus/event" },
      { label: "Fasilitas Kampus", href: "/kehidupan-kampus/fasilitas" }
    ]
  },
  {
    label: "Berita & Acara",
    href: "/news",
    description: "Informasi terkini, pengumuman, dan agenda acara.",
    children: [
      { label: "Berita", href: "/news/berita" },
      { label: "Pengumuman", href: "/news/pengumuman" },
      { label: "Agenda Acara", href: "/news/agenda" }
    ]
  },
  {
    label: "Alumni",
    href: "/alumni",
    description: "Jaringan alumni, testimoni, dan kontribusi alumni.",
    children: [
      { label: "Profil Alumni", href: "/alumni/profil" },
      { label: "Testimoni", href: "/alumni/testimoni" },
      { label: "Kontribusi Alumni", href: "/alumni/kontribusi" }
    ]
  },
  {
    label: "Kontak",
    href: "/contact",
    description: "Hubungi STIE Dwimulya untuk informasi lebih lanjut."
  },
  {
    label: "Pendaftaran",
    href: "/pendaftaran",
    cta: true,
    description: "Formulir pendaftaran online mahasiswa baru."
  }
];
