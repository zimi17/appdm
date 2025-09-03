export const layananPageConfig = {
  title: "Fasilitas & Layanan",
  description: "Fasilitas dan layanan penunjang untuk menunjang kebutuhan akademik dan non-akademik mahasiswa",
  
  topper: {
    type: "hero",
    variant: "facilities",
    backgroundImage: "/images/facilities-hero.jpg",
    overlay: true
  },

  blocks: [
    {
      type: "hero",
      title: "Fasilitas & Layanan STIE Dwimulya",
      subtitle: "Mendukung Kesuksesan Akademik Anda",
      description: "Fasilitas dan layanan penunjang yang lengkap untuk menunjang kebutuhan akademik dan non-akademik mahasiswa dalam mencapai prestasi terbaik",
      cta: {
        primary: { text: "Jelajahi Fasilitas", href: "#fasilitas-akademik" },
        secondary: { text: "Hubungi Layanan", href: "/layanan/layanan-mahasiswa/baa" }
      }
    },
    {
      type: "stats",
      title: "Fasilitas Unggulan",
      items: [
        { value: "15", label: "Ruang Kelas Modern", suffix: "+" },
        { value: "2", label: "Laboratorium Komputer", suffix: "" },
        { value: "1", label: "Perpustakaan Digital", suffix: "" },
        { value: "24", label: "Jam Layanan", suffix: "/7" }
      ]
    },
    {
      type: "features",
      title: "Fasilitas Akademik",
      description: "Fasilitas penunjang proses pembelajaran dan pengembangan kompetensi",
      items: [
        {
          title: "Perpustakaan",
          description: "Perpustakaan modern dengan koleksi buku, jurnal, dan akses database digital",
          icon: "library",
          href: "/layanan/fasilitas-akademik/perpustakaan",
          features: ["Koleksi Digital", "Ruang Baca", "Akses Online 24/7"]
        },
        {
          title: "Laboratorium Komputer",
          description: "Lab komputer dengan software terkini untuk praktikum dan penelitian",
          icon: "computer",
          href: "/layanan/fasilitas-akademik/laboratorium-komputer",
          features: ["Software Akuntansi", "Internet Cepat", "AC & Proyektor"]
        },
        {
          title: "Ruang Kelas",
          description: "Ruang kelas nyaman dengan fasilitas multimedia dan AC",
          icon: "classroom",
          href: "/layanan/fasilitas-akademik/ruang-kelas",
          features: ["Proyektor LCD", "AC", "Kapasitas 40 Mahasiswa"]
        }
      ]
    },
    {
      type: "features",
      title: "Layanan Mahasiswa",
      description: "Layanan pendukung untuk kenyamanan dan kemudahan mahasiswa selama menempuh pendidikan",
      items: [
        {
          title: "Biro Administrasi Akademik",
          description: "Layanan administrasi akademik untuk kemudahan mahasiswa",
          icon: "academic",
          href: "/layanan/layanan-mahasiswa/baa",
          features: ["Registrasi", "Transkrip", "Surat Keterangan"]
        },
        {
          title: "Biro Administrasi Umum & Keuangan",
          description: "Layanan administrasi keuangan dan umum",
          icon: "finance",
          href: "/layanan/layanan-mahasiswa/bauk",
          features: ["Pembayaran", "Beasiswa", "Surat Menyurat"]
        },
        {
          title: "Pusat Pengembangan Karir",
          description: "Bimbingan karir dan penempatan kerja lulusan",
          icon: "career",
          href: "/layanan/layanan-mahasiswa/cdc",
          features: ["Job Fair", "Konseling Karir", "Pelatihan Soft Skills"]
        }
      ]
    },
    {
      type: "features",
      title: "Fasilitas Penunjang",
      description: "Fasilitas pendukung untuk kenyamanan dan kesejahteraan mahasiswa",
      items: [
        {
          title: "Musholla",
          description: "Tempat ibadah yang nyaman untuk kegiatan keagamaan",
          icon: "mosque",
          href: "/layanan/fasilitas-penunjang/musholla"
        },
        {
          title: "Area Parkir",
          description: "Area parkir yang luas dan aman untuk kendaraan mahasiswa",
          icon: "parking",
          href: "/layanan/fasilitas-penunjang/area-parkir"
        },
        {
          title: "Kantin",
          description: "Kantin dengan menu makanan sehat dan harga terjangkau",
          icon: "cafeteria",
          href: "/layanan/fasilitas-penunjang/kantin"
        }
      ]
    },
    {
      type: "cta",
      title: "Nikmati Fasilitas Terbaik di STIE Dwimulya",
      description: "Bergabunglah dengan kami dan rasakan pengalaman belajar yang nyaman dengan fasilitas lengkap",
      primaryCta: { text: "Daftar Sekarang", href: "/pendaftaran" },
      secondaryCta: { text: "Kunjungi Kampus", href: "/tentang#lokasi" }
    }
  ]
};
