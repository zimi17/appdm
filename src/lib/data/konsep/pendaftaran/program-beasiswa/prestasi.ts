export const beasiswaPrestasiPageConfig = {
  title: "Beasiswa Prestasi",
  description: "Beasiswa untuk mahasiswa dengan prestasi akademik dan non-akademik yang membanggakan",
  
  topper: {
    type: "hero",
    variant: "scholarship",
    backgroundImage: "/images/achievement-scholarship-hero.jpg",
    overlay: true
  },

  blocks: [
    {
      type: "hero",
      title: "Beasiswa Prestasi",
      subtitle: "Penghargaan untuk Pencapaian Terbaik",
      description: "Beasiswa untuk mahasiswa dengan prestasi akademik dan non-akademik yang membanggakan sebagai bentuk apresiasi atas dedikasi dan kerja keras",
      cta: {
        primary: { text: "Daftar Beasiswa", href: "#persyaratan" },
        secondary: { text: "Lihat Prestasi Alumni", href: "/kemahasiswaan/prestasi" }
      }
    },
    {
      type: "content",
      title: "Tentang Beasiswa Prestasi",
      description: "Program beasiswa untuk menghargai dan mendukung mahasiswa berprestasi",
      content: [
        {
          subtitle: "Tujuan Program",
          text: "Memberikan penghargaan kepada mahasiswa yang memiliki prestasi luar biasa dan memotivasi mahasiswa lain untuk berprestasi."
        },
        {
          subtitle: "Bentuk Beasiswa",
          text: "Potongan biaya kuliah, bantuan biaya hidup, dan kesempatan pengembangan diri melalui berbagai program khusus."
        }
      ]
    },
    {
      type: "stats",
      title: "Manfaat Beasiswa Prestasi",
      items: [
        { value: "25-75", label: "Potongan Biaya Kuliah", suffix: "%" },
        { value: "500", label: "Bantuan Bulanan", suffix: "rb" },
        { value: "4", label: "Tahun Masa Berlaku", suffix: "" },
        { value: "100", label: "Program Pengembangan", suffix: "%" }
      ]
    },
    {
      type: "features",
      title: "Jenis Beasiswa Prestasi",
      items: [
        {
          title: "Prestasi Akademik",
          description: "Untuk mahasiswa dengan IPK tinggi dan konsisten",
          icon: "academic-achievement",
          features: ["IPK ≥ 3.5", "Ranking Kelas", "Konsistensi Nilai"]
        },
        {
          title: "Prestasi Non-Akademik",
          description: "Untuk mahasiswa berprestasi di bidang olahraga, seni, atau organisasi",
          icon: "non-academic-achievement",
          features: ["Juara Kompetisi", "Prestasi Seni", "Leadership"]
        },
        {
          title: "Prestasi Penelitian",
          description: "Untuk mahasiswa yang aktif dalam penelitian dan publikasi",
          icon: "research-achievement",
          features: ["Publikasi Jurnal", "Penelitian Inovatif", "Karya Ilmiah"]
        },
        {
          title: "Prestasi Kewirausahaan",
          description: "Untuk mahasiswa yang berhasil mengembangkan usaha",
          icon: "entrepreneurship-achievement",
          features: ["Bisnis Sukses", "Inovasi Produk", "Dampak Sosial"]
        }
      ]
    },
    {
      type: "content",
      title: "Persyaratan Beasiswa Prestasi",
      description: "Kriteria yang harus dipenuhi untuk mendapatkan beasiswa prestasi",
      content: [
        {
          subtitle: "Prestasi Akademik",
          text: "IPK minimal 3.5 untuk mahasiswa aktif atau rata-rata nilai 8.5 untuk calon mahasiswa baru dengan prestasi konsisten."
        },
        {
          subtitle: "Prestasi Non-Akademik",
          text: "Memiliki prestasi di tingkat regional, nasional, atau internasional dalam bidang olahraga, seni, atau kegiatan ekstrakurikuler."
        },
        {
          subtitle: "Kepemimpinan",
          text: "Pengalaman menjadi pemimpin dalam organisasi sekolah, kampus, atau masyarakat dengan kontribusi yang nyata."
        },
        {
          subtitle: "Karakter",
          text: "Memiliki karakter yang baik, tidak pernah terlibat tindakan indisipliner, dan berkomitmen untuk mempertahankan prestasi."
        }
      ]
    },
    {
      type: "content",
      title: "Proses Seleksi",
      description: "Tahapan seleksi beasiswa prestasi",
      content: [
        {
          subtitle: "Pendaftaran",
          text: "Mengisi formulir pendaftaran dan melengkapi dokumen prestasi yang dimiliki."
        },
        {
          subtitle: "Verifikasi Dokumen",
          text: "Tim seleksi akan memverifikasi keaslian dan validitas dokumen prestasi yang diserahkan."
        },
        {
          subtitle: "Penilaian Prestasi",
          text: "Penilaian berdasarkan tingkat prestasi, konsistensi, dan dampak yang dihasilkan."
        },
        {
          subtitle: "Wawancara",
          text: "Wawancara untuk menilai motivasi, visi masa depan, dan komitmen untuk terus berprestasi."
        }
      ]
    },
    {
      type: "content",
      title: "Kewajiban Penerima Beasiswa",
      description: "Tanggung jawab yang harus dipenuhi penerima beasiswa prestasi",
      content: [
        {
          subtitle: "Mempertahankan Prestasi",
          text: "Menjaga IPK minimal 3.5 dan terus aktif dalam kegiatan yang mendukung prestasi."
        },
        {
          subtitle: "Menjadi Role Model",
          text: "Menjadi contoh bagi mahasiswa lain dan aktif dalam kegiatan kampus."
        },
        {
          subtitle: "Laporan Berkala",
          text: "Menyampaikan laporan perkembangan akademik dan kegiatan setiap semester."
        }
      ]
    },
    {
      type: "cta",
      title: "Raih Beasiswa untuk Prestasi Anda",
      description: "Jangan biarkan prestasi Anda sia-sia. Dapatkan beasiswa dan kembangkan potensi lebih jauh di STIE Dwimulya",
      primaryCta: { text: "Daftar Beasiswa", href: "/pendaftaran" },
      secondaryCta: { text: "Konsultasi", href: "tel:+6287773927456" }
    }
  ]
};
