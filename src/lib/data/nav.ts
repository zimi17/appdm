
export const navLinks = [
  {
    title: "Akademik",
    description: "Belajar di STIE Dwimulya dapat terjadi untuk setiap jenis pembelajar, pada setiap fase kehidupan.",
    href: "/akademik",
    sublinks: [
      {
        title: "Program Studi",
        description: "Telusuri semua konsentrasi sarjana dan pascasarjana kami.",
        href: "/akademik/program-studi",
        sublinks: [
          { title: "S1 Manajemen", href: "/akademik/program-studi/s1-manajemen" },
          { title: "S1 Akuntansi", href: "/akademik/program-studi/s1-akuntansi" }
        ]
      },
      { title: "Penelitian", href: "/akademik/penelitian" },
      { title: "Kalender Akademik", href: "/akademik/kalender-akademik" },
      { 
        title: "Pendidikan",
        href: "/akademik/pendidikan",
        description: "Kurikulum, kewirausahaan, dan beasiswa di STIE Dwimulya.",
        sublinks: [
          { title: "Kurikulum", href: "/akademik/pendidikan/kurikulum" },
          { title: "Kewirausahaan", href: "/akademik/pendidikan/kewirausahaan" },
          { title: "Beasiswa", href: "/akademik/pendidikan/beasiswa" }
        ]
      }
    ]
  },
  {
    title: "Tentang",
    description: "Pelajari bagaimana STIE Dwimulya terstruktur, jelajahi sejarah panjang kami, dan temukan komunitas kami yang luas.",
    href: "/tentang",
    sublinks: [
      { title: "Sejarah STIE Dwimulya", href: "/tentang/sejarah" },
      { title: "Pimpinan & Struktur", href: "/tentang/pimpinan-struktur" },
      { title: "Visi & Misi", href: "/tentang/visi-misi" },
      { title: "Kerjasama", href: "/tentang/kerjasama" }
    ]
  },
  {
    title: "Layanan",
    description: "Layanan yang ditawarkan untuk menunjang kebutuhan mahasiswa dan alumni STIE Dwimulya.",
    href: "/layanan",
    sublinks: [
      { title: "BAAK", href: "/layanan/baak" },
      { title: "BAUK", href: "/layanan/bauk" },
      {
        title: "CDU",
        href: "/layanan/cdu",
        description: "Career Development Unit untuk lowongan kerja, magang, dan pelatihan.",
        sublinks: [
          { title: "Lowongan Kerja", href: "/layanan/cdu/lowongan-kerja" },
          { title: "Magang", href: "/layanan/cdu/magang" },
          { title: "Pelatihan", href: "/layanan/cdu/pelatihan" }
        ]
      }
    ]
  },
  {
    title: "Pendaftaran",
    description: "Informasi mengenai proses pendaftaran di STIE Dwimulya.",
    href: "/pendaftaran"
  },
  {
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

export const footerSections = [
    {
      title: "Jelajahi",
      links: [
        { label: "Program Studi", href: "/akademik" },
        { label: "Penerimaan", href: "/pendaftaran" },
        { label: "Kehidupan Kampus", href: "/campus-life" },
      ],
    },
    {
      title: "Tentang Kami",
      links: [
        { label: "Sejarah", href: "/about" },
        { label: "Visi & Misi", href: "/about" },
        { label: "Kontak", href: "/contact" },
      ],
    },
    {
      title: "Terhubung",
      links: [
        { label: "Berita & Acara", href: "/berita-dan-acara" },
        { label: "Pusat Karir", href: "/career-center" },
        { label: "Alumni", href: "/alumni" },
      ],
    },
  ];

  export const quickLinks = [
    { label: "Peta Kampus", href: "#" },
    { label: "Direktori", href: "#" },
    { label: "Berita", href: "/berita-dan-acara" },
    { label: "Karir", href: "#" },
    { label: "Alumni", href: "#" },
    { label: "Donasi", href: "#" },
    { label: "Layanan Darurat", href: "#" },
  ];
