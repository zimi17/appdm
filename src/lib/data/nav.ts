

export const navLinks = [
  {
    id: 'akademik',
    title: "Akademik",
    description: "Belajar di STIE Dwimulya dapat terjadi untuk setiap jenis pembelajar, pada setiap fase kehidupan.",
    href: "/akademik",
    sublinks: [
      {
        id: 'program-studi',
        title: "Program Studi",
        description: "Telusuri semua konsentrasi sarjana dan pascasarjana kami.",
        href: "/akademik/program-studi",
        sublinks: [
          { id: 's1-manajemen', title: "S1 Manajemen", href: "/akademik/program-studi/s1-manajemen" },
          { id: 's1-akuntansi', title: "S1 Akuntansi", href: "/akademik/program-studi/s1-akuntansi" }
        ]
      },
      { id: 'penelitian', title: "Penelitian", href: "/akademik/penelitian" },
      { id: 'kalender-akademik', title: "Kalender Akademik", href: "/akademik/kalender-akademik" },
      { 
        id: 'pendidikan',
        title: "Pendidikan",
        href: "/akademik/pendidikan",
        description: "Kurikulum, kewirausahaan, dan beasiswa di STIE Dwimulya.",
        sublinks: [
          { id: 'kurikulum', title: "Kurikulum", href: "/akademik/pendidikan/kurikulum" },
          { id: 'kewirausahaan', title: "Kewirausahaan", href: "/akademik/pendidikan/kewirausahaan" },
          { id: 'beasiswa', title: "Beasiswa", href: "/akademik/pendidikan/beasiswa" }
        ]
      }
    ]
  },
  {
    id: 'tentang',
    title: "Tentang",
    description: "Pelajari bagaimana STIE Dwimulya terstruktur, jelajahi sejarah panjang kami, dan temukan komunitas kami yang luas.",
    href: "/tentang",
    sublinks: [
      { id: 'sejarah', title: "Sejarah STIE Dwimulya", href: "/tentang/sejarah" },
      { id: 'pimpinan-struktur', title: "Pimpinan & Struktur", href: "/tentang/pimpinan-struktur" },
      { id: 'visi-misi', title: "Visi & Misi", href: "/tentang/visi-misi" },
      { id: 'kerjasama', title: "Kerjasama", href: "/tentang/kerjasama" }
    ]
  },
  {
    id: 'layanan',
    title: "Layanan",
    description: "Layanan yang ditawarkan untuk menunjang kebutuhan mahasiswa dan alumni STIE Dwimulya.",
    href: "/layanan",
    sublinks: [
      { id: 'baak', title: "BAAK", href: "/layanan/baak" },
      { id: 'bauk', title: "BAUK", href: "/layanan/bauk" },
      {
        id: 'cdu',
        title: "Pusat Karir",
        href: "/pusat-karir",
        description: "Career Development Unit untuk lowongan kerja, magang, dan pelatihan.",
        sublinks: [
          { id: 'lowongan-kerja', title: "Lowongan Kerja", href: "/pusat-karir/lowongan-kerja" },
          { id: 'magang', title: "Magang", href: "/pusat-karir/magang" },
          { id: 'pelatihan', title: "Pelatihan", href: "/pusat-karir/pelatihan" }
        ]
      }
    ]
  },
  {
    id: 'pendaftaran',
    title: "Pendaftaran",
    description: "Informasi mengenai proses pendaftaran di STIE Dwimulya.",
    href: "/pendaftaran"
  },
  {
    id: 'kontak',
    title: "Kontak",
    description: "Hubungi kami untuk informasi lebih lanjut.",
    href: "/kontak"
  }
];


export const hotLinks = [
  {
    href: "/pendaftaran",
    text: "Penerimaan Mahasiswa Baru",
  },
];

export const footerBlocks = [
    {
      title: 'Tentang Kami',
      items: [
        { children: "Sejarah", href: "/tentang/sejarah" },
        { children: "Visi & Misi", href: "/tentang/visi-misi" },
      ]
    },
    {
      title: 'Kontak',
      items: [
        {
          children: "Hubungi Kami",
          href: "/kontak"
        },
        {
            children: "Peta & Arah",
            href: "/kontak"
        }
      ]
    },
];

  export const footerLegalItems = [
    {
      children: 'Peta Situs',
      href: '#'
    },
    {
      children: 'Karir',
      href: '/pusat-karir'
    },
    {
      children: 'Merek Dagang',
      href: '#'
    },
    {
      children: 'Kebijakan',
      href: '#'
    },
    {
      children: 'Aksesibilitas',
      href: '#'
    },
    {
      children: 'Aksesibilitas Digital',
      href: '#'
    }
  ]

  export const quickLinks = [
    { label: "Peta Kampus", href: "#" },
    { label: "Direktori", href: "/direktori" },
    { label: "Berita", href: "/berita-dan-acara" },
    { label: "Karir", href: "/pusat-karir" },
    { label: "Alumni", href: "/alumni" },
  ];
