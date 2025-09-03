export const pmdkPageConfig = {
  title: "Jalur Penelusuran Minat & Kemampuan",
  description: "Jalur seleksi berdasarkan prestasi akademik dan non-akademik",
  
  topper: {
    type: "hero",
    variant: "admission",
    backgroundImage: "/images/pmdk-hero.jpg",
    overlay: true
  },

  blocks: [
    {
      type: "hero",
      title: "Jalur PMDK",
      subtitle: "Penelusuran Minat & Kemampuan",
      description: "Jalur seleksi berdasarkan prestasi akademik dan non-akademik untuk calon mahasiswa berprestasi yang ingin bergabung dengan STIE Dwimulya",
      cta: {
        primary: { text: "Daftar PMDK", href: "#persyaratan" },
        secondary: { text: "Download Panduan", href: "/docs/panduan-pmdk.pdf" }
      }
    },
    {
      type: "content",
      title: "Tentang Jalur PMDK",
      description: "Jalur penerimaan mahasiswa berdasarkan prestasi dan potensi",
      content: [
        {
          subtitle: "Apa itu PMDK?",
          text: "Penelusuran Minat dan Kemampuan adalah jalur seleksi yang mengutamakan prestasi akademik dan non-akademik siswa selama di SMA/SMK/MA."
        },
        {
          subtitle: "Keunggulan Jalur PMDK",
          text: "Tidak memerlukan tes tulis, seleksi berdasarkan portofolio prestasi, dan kesempatan mendapat beasiswa prestasi."
        }
      ]
    },
    {
      type: "stats",
      title: "Keunggulan PMDK",
      items: [
        { value: "0", label: "Tes Tulis", suffix: "" },
        { value: "100", label: "Berdasarkan Prestasi", suffix: "%" },
        { value: "30", label: "Kuota Tersedia", suffix: "%" },
        { value: "50", label: "Potongan Biaya", suffix: "%" }
      ]
    },
    {
      type: "features",
      title: "Kriteria Penilaian",
      items: [
        {
          title: "Prestasi Akademik",
          description: "Nilai rapor semester 1-5 dengan rata-rata minimal 8.0",
          icon: "academic"
        },
        {
          title: "Prestasi Non-Akademik",
          description: "Prestasi di bidang olahraga, seni, atau kegiatan ekstrakurikuler",
          icon: "non-academic"
        },
        {
          title: "Kepemimpinan",
          description: "Pengalaman menjadi ketua kelas, OSIS, atau organisasi lainnya",
          icon: "leadership"
        },
        {
          title: "Karya Ilmiah",
          description: "Karya tulis ilmiah atau penelitian yang pernah dibuat",
          icon: "research"
        }
      ]
    },
    {
      type: "content",
      title: "Persyaratan PMDK",
      description: "Syarat-syarat yang harus dipenuhi untuk mendaftar jalur PMDK",
      content: [
        {
          subtitle: "Persyaratan Akademik",
          text: "Lulusan SMA/SMK/MA tahun 2023 atau 2024 dengan nilai rata-rata rapor minimal 8.0 dan tidak ada nilai di bawah 7.0."
        },
        {
          subtitle: "Persyaratan Prestasi",
          text: "Memiliki minimal satu prestasi akademik atau non-akademik tingkat sekolah, kecamatan, atau lebih tinggi."
        },
        {
          subtitle: "Persyaratan Administrasi",
          text: "Melengkapi formulir pendaftaran, fotokopi rapor yang dilegalisir, sertifikat prestasi, dan surat rekomendasi dari kepala sekolah."
        }
      ]
    },
    {
      type: "content",
      title: "Tahapan Seleksi",
      description: "Proses seleksi jalur PMDK",
      content: [
        {
          subtitle: "Tahap 1: Seleksi Administrasi",
          text: "Verifikasi kelengkapan dokumen dan pemenuhan persyaratan dasar."
        },
        {
          subtitle: "Tahap 2: Penilaian Portofolio",
          text: "Penilaian prestasi akademik dan non-akademik berdasarkan dokumen yang diserahkan."
        },
        {
          subtitle: "Tahap 3: Wawancara",
          text: "Wawancara untuk menilai motivasi, kepribadian, dan kesesuaian dengan program studi."
        },
        {
          subtitle: "Tahap 4: Pengumuman",
          text: "Pengumuman hasil seleksi dan proses registrasi ulang bagi yang diterima."
        }
      ]
    },
    {
      type: "cta",
      title: "Raih Kesempatan Kuliah Melalui Prestasi",
      description: "Manfaatkan prestasi Anda untuk bergabung dengan STIE Dwimulya melalui jalur PMDK",
      primaryCta: { text: "Daftar PMDK", href: "/pendaftaran" },
      secondaryCta: { text: "Konsultasi", href: "tel:+6287773927456" }
    }
  ]
};
