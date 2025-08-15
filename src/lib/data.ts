
export const navLinks = [
    {
    title: "Akademik",
    description: "Belajar di STIE Dwimulya dapat terjadi untuk setiap jenis pembelajar, pada setiap fase kehidupan.",
    href: "/academics",
    sublinks: [
      {
        title: "Program Studi",
        description: "Telusuri semua konsentrasi sarjana dan pascasarjana kami.",
        href: "/academics/degree-programs",
        sublinks: [
          { title: "Manajemen (S1)", href: "/academics/s1-manajemen" },
          { title: "Akuntansi (S1)", href: "/academics/s1-akuntansi" },
        ]
      },
      { title: "Penerimaan", href: "/admissions" },
      { title: "Beasiswa", href: "/scholarships" },
    ]
  },
  {
    title: "Tentang",
    description: "Pelajari bagaimana STIE Dwimulya terstruktur, jelajahi sejarah panjang kami, dan temukan komunitas kami yang luas.",
    href: "/about",
    sublinks: [
      {
        title: "Sejarah STIE Dwimulya",
        description: "STIE Dwimulya mungkin paling dikenal karena sejarah inovasinya yang abadi dalam pendidikan.",
        href: "/about/history",
      },
      {
        title: "Pimpinan & Struktur",
        description: "Kenali Pimpinan Kami",
        href: "/about/leadership",
      },
      { title: "Visi & Misi", href: "/about/vision-mission" },
      { title: "Kerjasama", href: "/about/partnerships" },
    ]
  },
  {
    title: "Berita & Acara",
    description: "Berita resmi dari STIE Dwimulya tentang sains, kedokteran, seni, kehidupan kampus, isu-isu Universitas, dan keprihatinan nasional dan global yang lebih luas.",
    href: "/news-events",
  },
    {
    title: "Kontak",
    description: "Hubungi kami untuk informasi lebih lanjut.",
    href: "/contact",
  },
];

export const hotLinks = [
  {
    href: "/admissions",
    text: "Penerimaan Mahasiswa Baru",
  },
];

export const footerSections = [
    {
      title: "Jelajahi",
      links: [
        { label: "Program Studi", href: "/academics" },
        { label: "Penerimaan", href: "/admissions" },
        { label: "Kehidupan Kampus", href: "/campus-life" },
      ],
    },
    {
      title: "Tentang Kami",
      links: [
        { label: "Sejarah", href: "/about/history" },
        { label: "Visi & Misi", href: "/about/vision-mission" },
        { label: "Kontak", href: "/contact" },
      ],
    },
    {
      title: "Terhubung",
      links: [
        { label: "Berita & Acara", href: "/news-events" },
        { label: "Pusat Karir", href: "/career-center" },
        { label: "Alumni", href: "/alumni" },
      ],
    },
  ];

  export const quickLinks = [
    { label: "Peta Kampus", href: "#" },
    { label: "Direktori", href: "#" },
    { label: "Berita", href: "#" },
    { label: "Karir", href: "#" },
    { label: "Alumni", href: "#" },
    { label: "Donasi", href: "#" },
    { label: "Layanan Darurat", href: "#" },
  ];


export const mentorshipCards = [
    { image: "https://placehold.co/645x430.png", hint: "student portrait", title: "Mentorship Mendorong Ide Besar", description: "Sebagai bagian dari pasangan mentee-mentor, Olúmídé Fagboyegun dianugerahi beasiswa untuk mendukung penelitian disertasinya...", href: "#", linkText: "Selengkapnya" },
    { image: "https://placehold.co/768x576.png", hint: "women talking", title: "Mentorship Ciptakan Koneksi", description: "Jane Kim dan Sue Goldie dari Harvard Chan School berbicara tentang bagaimana bimbingan memainkan peran penting...", href: "#", linkText: "Selengkapnya" },
    { image: "https://placehold.co/768x576.png", hint: "student outside", title: "Mentorship Membuka Peluang", description: "Sufiya Hassan adalah duta mahasiswa dalam Program Bridge to Dental School dari Harvard School of Dental Medicine...", href: "#", linkText: "Selengkapnya" },
];

export const scienceCards = [
    { image: "https://placehold.co/768x576.png", hint: "researchers lab", title: "Nasihat untuk Calon Peneliti", description: "Mengetahui dampak bimbingan pada generasi ilmuwan berikutnya, anggota komunitas Wyss berbagi panduan...", href: "#", linkText: "Baca nasihat mereka" },
    { image: "https://placehold.co/640x370.png", hint: "women computer", title: "Jaringan untuk Wanita di Ilmu Komputer", description: "Program bimbingan Harvard Women in Computer Science mempertemukan mahasiswa dengan mentor dari industri teknologi...", href: "#", linkText: "Baca kisah sukses mereka" },
];

export const quote = {
    text: "Ketika Anda membimbing orang, mereka akan membimbing orang lain, lalu mereka membimbing yang lain, dan itu memiliki dampak eksponensial yang sangat besar.",
    author: "Dr. Budi Santoso",
    role: "Rektor STIE Dwimulya",
    imageUrl: "https://placehold.co/624x624.png",
    imageHint: "professional man portrait",
    linkText: "Baca lebih lanjut tentang perjalanan beliau",
    linkHref: "#"
};
