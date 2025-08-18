

import * as z from "zod";


export const navLinks = [
    {
    title: "Akademik",
    description: "Belajar di STIE Dwimulya dapat terjadi untuk setiap jenis pembelajar, pada setiap fase kehidupan.",
    href: "/academics",
    sublinks: [
      {
        title: "Program Studi",
        description: "Telusuri semua konsentrasi sarjana dan pascasarjana kami.",
        href: "/academics",
        sublinks: [
          { title: "Manajemen (S1)", href: "/academics" },
          { title: "Akuntansi (S1)", href: "/academics" },
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
        href: "/about",
      },
      {
        title: "Pimpinan & Struktur",
        description: "Kenali Pimpinan Kami",
        href: "/about",
      },
      { title: "Visi & Misi", href: "/about" },
      { title: "Kerjasama", href: "/about" },
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
        { label: "Sejarah", href: "/about" },
        { label: "Visi & Misi", href: "/about" },
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

export const academicsPage = {
    hero: {
      title: "Pendidikan untuk Setiap Pembelajar",
      description: "Temukan semangat Anda, jelajahi dunia, dan mulailah perjalanan penemuan tanpa akhir. Pendidikan di STIE Dwimulya melampaui batas-batas ruang kelas, memberdayakan mahasiswa untuk membentuk hasrat mereka, mengejar pengetahuan, dan membuat dampak yang berarti di dunia.",
      imageUrl: "https://www.hbs.edu/about/PublishingImages/campus-and-culture/hbs-campus-1400x650.jpg",
      imageHint: "students library"
    },
    twoColumnContent: {
      title: "Program Akademik yang Menginspirasi",
      paragraphs: [
        "Di STIE Dwimulya, kami percaya pada kekuatan transformatif pendidikan. Kurikulum kami yang ketat, anggota fakultas yang terkenal di dunia, dan lingkungan belajar yang dinamis berkumpul untuk menciptakan pengalaman pendidikan yang tak tertandingi. Kami menawarkan beragam program sarjana, pascasarjana, dan profesional yang dirancang untuk menantang dan menginspirasi mahasiswa dari semua latar belakang.",
        "Baik Anda memulai perjalanan akademis Anda atau berusaha untuk memajukan karir Anda, STIE Dwimulya menyediakan alat, sumber daya, dan dukungan yang Anda butuhkan untuk berhasil. Program kami dibangun di atas landasan pemikiran kritis, penyelidikan intelektual, dan komitmen terhadap keunggulan. Mahasiswa didorong untuk menjelajahi minat mereka, terlibat dalam penelitian inovatif, dan berkolaborasi dalam proyek interdisipliner yang mengatasi tantangan dunia nyata."
      ]
    },
    degreePrograms: {
      title: "Program Gelar Unggulan",
      items: [
        { image: "https://placehold.co/768x576.png", hint: "business meeting", title: "Manajemen (S1)", description: "Program Manajemen kami membekali mahasiswa dengan keterampilan kepemimpinan dan strategis yang dibutuhkan untuk sukses di dunia bisnis yang dinamis. Dari keuangan hingga pemasaran, kurikulum kami mencakup semua aspek manajemen modern.", href: "/academics", linkText: "Jelajahi Manajemen" },
        { image: "https://placehold.co/768x576.png", hint: "accounting calculator", title: "Akuntansi (S1)", description: "Program Akuntansi kami memberikan landasan yang kuat dalam prinsip-prinsip akuntansi keuangan dan manajerial, audit, dan perpajakan, mempersiapkan mahasiswa untuk karir di bidang keuangan dan akuntansi.", href: "/academics", linkText: "Jelajahi Akuntansi" },
      ]
    },
    promoBar: {
      title: "Siap untuk Mengambil Langkah Berikutnya?",
      description: "Jelajahi proses penerimaan kami dan temukan bagaimana Anda bisa menjadi bagian dari komunitas STIE Dwimulya. Kami di sini untuk memandu Anda di setiap langkah.",
      linkHref: "/admissions",
      linkText: "Pelajari Tentang Penerimaan"
    }
}

export const kurikulumData = {
    title: "Kurikulum Tahun Pertama",
    items: [
      { id: "item-1", title: "Keuangan", description: "Deskripsi singkat tentang mata kuliah Keuangan...", credits: "3 SKS" },
      { id: "item-2", title: "Pemasaran", description: "Deskripsi singkat tentang mata kuliah Pemasaran...", credits: "3 SKS" },
      { id: "item-3", title: "Operasi", description: "Deskripsi singkat tentang mata kuliah Operasi...", credits: "3 SKS" },
      { id: "item-4", title: "Strategi", description: "Deskripsi singkat tentang mata kuliah Strategi...", credits: "3 SKS" },
    ],
    linkText: "Lihat Kurikulum Lengkap",
    linkHref: "/academics/curriculum"
  }

export const infoCards = [
    { title: "Manajemen (S1)", description: "Program Sarjana Manajemen berfokus pada pengembangan pemimpin bisnis masa depan.", href: "/academics", linkText: "" },
    { title: "Akuntansi (S1)", description: "Program Sarjana Akuntansi mempersiapkan mahasiswa untuk karir di bidang akuntansi publik dan perusahaan.", href: "/academics", linkText: "" },
    { title: "Magister Manajemen (S2)", description: "Program pascasarjana untuk para profesional yang ingin meningkatkan keterampilan manajerial mereka.", href: "#", linkText: "" },
    { title: "Pendidikan Jarak Jauh", description: "Kursus online yang dipimpin oleh fakultas pemenang penghargaan untuk membantu Anda menguasai konsep bisnis penting.", href: "#", linkText: "" },
]

export const missionTopperData = {
    titleParts: [
        { text: "Kami mendidik ", isButton: false },
        { text: "pemimpin", isButton: true },
        { text: " yang membuat ", isButton: false },
        { text: "perbedaan", isButton: true },
        { text: " di ", isButton: false },
        { text: "dunia", isButton: true },
        { text: ".", isButton: false },
    ],
    slides: [
      {
        title: "Pemimpin yang Berintegritas",
        description: "Program MBA dua tahun, penuh waktu, residensial dengan fokus pada praktik dunia nyata.",
        linkText: "Jelajahi Program MBA",
        linkHref: "/academics/s1-manajemen",
        imageUrl: "https://www.hbs.edu/about/PublishingImages/campus-and-culture/hbs-campus-1400x650.jpg",
        imageHint: "leader integrity"
      },
      {
        title: "Membuat Perbedaan Positif",
        description: "Tujuh program penuh waktu yang mengarah ke gelar PhD untuk para sarjana yang tertarik pada penelitian akademis.",
        linkText: "Lihat Program Doktoral",
        linkHref: "/academics/s1-akuntansi",
        imageUrl: "https://www.hbs.edu/Style%20Guide/feature/PublishingImages/arts-and-culture-1400x650.jpg",
        imageHint: "positive difference"
      },
      {
        title: "Dampak di Seluruh Dunia",
        description: "Kursus online yang dipimpin oleh fakultas pemenang penghargaan untuk membantu Anda menguasai konsep bisnis penting.",
        linkText: "Lihat Kursus Online",
        linkHref: "#",
        imageUrl: "https://www.hbs.edu/about/PublishingImages/campus-and-culture/global-reach-1400x650.jpg",
        imageHint: "global impact"
      },
    ],
  };

  export const heroStatementData = {
    title: "Pemikir Berani, Pembelajar Kolaboratif",
    description: "STIE Dwimulya adalah salah satu sumber pendidikan manajemen dan kepemimpinan pemikiran yang paling terpercaya di dunia. Ini adalah ekosistem dinamis dari penelitian, pembelajaran, dan kewirausahaan yang memperkuat dirinya sendiri saat Sekolah dan fakultas kami berinteraksi dengan organisasi, praktisi, sarjana, dan pemimpin global baru.",
    imageUrl: "https://placehold.co/1400x933.png",
    imageHint: "social enterprise",
    links: [
        { href: "/faculty-research", text: "Jelajahi Fakultas & Penelitian" },
        { href: "/initiatives", text: "Jelajahi Inisiatif & Proyek" },
    ]
  }

  export const admissionFormSchema = z.object({
    firstName: z.string().min(2, { message: "Nama depan harus memiliki setidaknya 2 karakter." }),
    lastName: z.string().min(2, { message: "Nama belakang harus memiliki setidaknya 2 karakter." }),
    dob: z.date({ required_error: "Tanggal lahir diperlukan." }),
    email: z.string().email({ message: "Alamat email tidak valid." }),
    phone: z.string().optional(),
    country: z.string().min(2),
    city: z.string().min(2),
    postalCode: z.string().min(5).optional(),
    firstGen: z.enum(["yes", "no"], { required_error: "Anda harus memilih salah satu opsi." }),
    ugProgram: z.string().optional(),
    ugYear: z.string().min(4, { message: "Tahun kelulusan diperlukan." }),
    industry: z.string().min(2, { message: "Industri diperlukan." }),
    jointDegree: z.array(z.string()).optional(),
    careerInterest: z.array(z.string()).optional(),
  });

  export const ugPrograms = [
    "Akuntansi", "Antropologi", "Arsitektur", "Ilmu Biologi", "Kimia", "Ilmu Komputer",
    "Ekonomi", "Pendidikan", "Teknik", "Bahasa Inggris", "Keuangan", "Seni Rupa",
    "Bahasa Asing", "Pemerintahan", "Sejarah", "Administrasi Perhotelan", "Hubungan Industrial",
    "Sistem Informasi", "Bisnis Internasional", "Hukum", "Manajemen", "Pemasaran",
    "Matematika", "Manajemen Operasi", "Filsafat", "Fisika", "Ilmu Politik",
    "Psikologi", "Sosiologi", "Statistika", "Bisnis atau Perdagangan Lainnya",
    "Humaniora Lainnya", "Ilmu Pengetahuan Lainnya", "Ilmu Sosial Lainnya"
  ];
  
  export const ugYears = Array.from({ length: 79 }, (_, i) => new Date().getFullYear() + 4 - i);
  
  export const industries = [
    "Konsultasi", "Produk Konsumen / Ritel / E-Commerce", "Jasa Keuangan",
    "Kesehatan / Bioteknologi", "Manufaktur / Industri / Energi", "Media / Hiburan / Perjalanan",
    "Militer", "Nirlaba / Pemerintah / Pendidikan", "Teknologi",
    "Modal Ventura / Ekuitas Swasta", "Lainnya / Saat Ini Tidak Bekerja", "Mahasiswa Penuh Waktu"
  ];
  

