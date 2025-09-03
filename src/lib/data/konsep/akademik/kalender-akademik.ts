export const kalenderAkademikPageConfig = {
  title: "Kalender Akademik",
  description: "Jadwal kegiatan akademik STIE Dwimulya untuk tahun ajaran berjalan",
  
  topper: {
    type: "hero",
    variant: "academic",
    backgroundImage: "/images/calendar-hero.jpg",
    overlay: true
  },

  blocks: [
    {
      type: "hero",
      title: "Kalender Akademik",
      subtitle: "Jadwal Kegiatan Akademik STIE Dwimulya",
      description: "Informasi lengkap jadwal kegiatan akademik, registrasi, perkuliahan, ujian, dan kegiatan penting lainnya sepanjang tahun ajaran",
      cta: {
        primary: { text: "Download Kalender", href: "/docs/kalender-akademik.pdf" },
        secondary: { text: "Lihat Jadwal Kuliah", href: "/akademik/kurikulum/mata-kuliah" }
      }
    },
    {
      type: "content",
      title: "Tahun Ajaran 2024/2025",
      description: "Jadwal kegiatan akademik untuk tahun ajaran 2024/2025",
      content: [
        {
          subtitle: "Semester Ganjil (September 2024 - Januari 2025)",
          text: "Registrasi: 26-30 Agustus 2024\nPerkuliahan: 2 September - 21 Desember 2024\nUjian Tengah Semester: 28 Oktober - 2 November 2024\nUjian Akhir Semester: 6-14 Januari 2025"
        },
        {
          subtitle: "Semester Genap (Februari - Juni 2025)",
          text: "Registrasi: 3-7 Februari 2025\nPerkuliahan: 10 Februari - 30 Mei 2025\nUjian Tengah Semester: 31 Maret - 5 April 2025\nUjian Akhir Semester: 2-10 Juni 2025"
        }
      ]
    },
    {
      type: "features",
      title: "Kegiatan Penting",
      items: [
        {
          title: "Registrasi Mahasiswa",
          description: "Periode registrasi ulang dan pembayaran SPP",
          icon: "registration"
        },
        {
          title: "Masa Perkuliahan",
          description: "Periode kegiatan belajar mengajar reguler",
          icon: "lecture"
        },
        {
          title: "Ujian Semester",
          description: "Ujian Tengah Semester dan Ujian Akhir Semester",
          icon: "exam"
        },
        {
          title: "Libur Akademik",
          description: "Periode libur semester dan hari raya",
          icon: "holiday"
        }
      ]
    },
    {
      type: "cta",
      title: "Siap Mengikuti Kegiatan Akademik?",
      description: "Pastikan Anda selalu mengikuti jadwal akademik untuk kelancaran studi",
      primaryCta: { text: "Daftar Sekarang", href: "/pendaftaran" },
      secondaryCta: { text: "Info Akademik", href: "/layanan/layanan-mahasiswa/baa" }
    }
  ]
};
