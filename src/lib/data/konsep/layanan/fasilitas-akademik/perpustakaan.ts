export const perpustakaanPageConfig = {
  title: "Perpustakaan",
  description: "Perpustakaan modern dengan koleksi buku, jurnal, dan akses database digital",
  
  topper: {
    type: "hero",
    variant: "facilities",
    backgroundImage: "/images/library-hero.jpg",
    overlay: true
  },

  blocks: [
    {
      type: "hero",
      title: "Perpustakaan STIE Dwimulya",
      subtitle: "Pusat Sumber Belajar Modern",
      description: "Perpustakaan modern dengan koleksi buku, jurnal, dan akses database digital yang mendukung kegiatan akademik mahasiswa dan dosen",
      cta: {
        primary: { text: "Kunjungi Perpustakaan", href: "#fasilitas" },
        secondary: { text: "Akses Digital", href: "#koleksi-digital" }
      }
    },
    {
      type: "stats",
      title: "Koleksi Perpustakaan",
      items: [
        { value: "5000", label: "Koleksi Buku", suffix: "+" },
        { value: "100", label: "Jurnal Ilmiah", suffix: "+" },
        { value: "50", label: "Database Digital", suffix: "+" },
        { value: "100", label: "Kapasitas Ruang Baca", suffix: "" }
      ]
    },
    {
      type: "features",
      title: "Fasilitas Perpustakaan",
      items: [
        {
          title: "Koleksi Digital",
          description: "Akses ke database jurnal internasional dan e-book",
          icon: "digital"
        },
        {
          title: "Ruang Baca Nyaman",
          description: "Ruang baca ber-AC dengan meja dan kursi ergonomis",
          icon: "reading-room"
        },
        {
          title: "Akses Internet",
          description: "WiFi gratis untuk akses informasi online",
          icon: "wifi"
        },
        {
          title: "Layanan Referensi",
          description: "Bantuan pustakawan dalam pencarian informasi",
          icon: "reference"
        }
      ]
    },
    {
      type: "content",
      title: "Layanan Perpustakaan",
      description: "Berbagai layanan untuk mendukung kegiatan akademik",
      content: [
        {
          subtitle: "Peminjaman Buku",
          text: "Layanan peminjaman buku dengan sistem otomatis dan periode peminjaman yang fleksibel."
        },
        {
          subtitle: "Akses Database Online",
          text: "Akses ke database jurnal internasional seperti ProQuest, EBSCO, dan database lokal."
        },
        {
          subtitle: "Bimbingan Literasi Informasi",
          text: "Pelatihan cara mencari, mengevaluasi, dan menggunakan informasi secara efektif."
        }
      ]
    },
    {
      type: "cta",
      title: "Manfaatkan Fasilitas Perpustakaan",
      description: "Kunjungi perpustakaan dan manfaatkan semua fasilitas untuk mendukung studi Anda",
      primaryCta: { text: "Daftar Sekarang", href: "/pendaftaran" },
      secondaryCta: { text: "Info Layanan", href: "/layanan" }
    }
  ]
};
