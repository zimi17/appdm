export const kemahasiswaanPageConfig = {
  title: "Kemahasiswaan",
  description: "Kegiatan dan pengembangan soft skills mahasiswa STIE Dwimulya",
  
  topper: {
    type: "hero",
    variant: "student",
    backgroundImage: "/images/student-activities-hero.jpg",
    overlay: true
  },

  blocks: [
    {
      type: "hero",
      title: "Kemahasiswaan STIE Dwimulya",
      subtitle: "Mengembangkan Potensi, Membangun Karakter",
      description: "Kegiatan dan pengembangan soft skills mahasiswa STIE Dwimulya melalui berbagai organisasi, kegiatan, dan program pengembangan diri yang komprehensif",
      cta: {
        primary: { text: "Bergabung dengan Organisasi", href: "#organisasi-mahasiswa" },
        secondary: { text: "Lihat Kegiatan", href: "#kegiatan-mahasiswa" }
      }
    },
    {
      type: "stats",
      title: "Kehidupan Mahasiswa",
      items: [
        { value: "10", label: "Organisasi Mahasiswa", suffix: "+" },
        { value: "50", label: "Kegiatan per Tahun", suffix: "+" },
        { value: "85", label: "Partisipasi Mahasiswa", suffix: "%" },
        { value: "25", label: "Prestasi Mahasiswa", suffix: "+" }
      ]
    },
    {
      type: "features",
      title: "Organisasi Mahasiswa",
      description: "Wadah pengembangan leadership dan soft skills mahasiswa",
      items: [
        {
          title: "Badan Eksekutif Mahasiswa",
          description: "Organisasi tertinggi mahasiswa yang mengkoordinir seluruh kegiatan kemahasiswaan",
          icon: "bem",
          href: "/kemahasiswaan/organisasi/bem",
          features: ["Kepemimpinan", "Advokasi", "Koordinasi Kegiatan"]
        },
        {
          title: "Himpunan Mahasiswa",
          description: "Organisasi mahasiswa per program studi untuk pengembangan akademik",
          icon: "hima",
          href: "/kemahasiswaan/organisasi/hima",
          features: ["HIMA Manajemen", "HIMA Akuntansi", "Kegiatan Akademik"]
        },
        {
          title: "Unit Kegiatan Mahasiswa",
          description: "Wadah pengembangan minat, bakat, dan hobi mahasiswa",
          icon: "ukm",
          href: "/kemahasiswaan/organisasi/ukm",
          features: ["Olahraga", "Seni & Budaya", "Keagamaan"]
        }
      ]
    },
    {
      type: "features",
      title: "Kegiatan Mahasiswa",
      description: "Beragam kegiatan untuk pengembangan karakter dan soft skills mahasiswa",
      items: [
        {
          title: "Pengenalan Kehidupan Kampus",
          description: "Program orientasi untuk mahasiswa baru mengenal lingkungan kampus",
          icon: "orientation",
          href: "/kemahasiswaan/kegiatan/pkkmb",
          features: ["Orientasi Akademik", "Pengenalan Budaya", "Team Building"]
        },
        {
          title: "Pelatihan Kepemimpinan",
          description: "Program pengembangan jiwa kepemimpinan mahasiswa",
          icon: "leadership",
          href: "/kemahasiswaan/kegiatan/ldkm",
          features: ["Leadership Skills", "Public Speaking", "Manajemen Organisasi"]
        },
        {
          title: "Kegiatan Sosial",
          description: "Program pengabdian dan kepedulian sosial mahasiswa",
          icon: "social",
          href: "/kemahasiswaan/kegiatan/sosial",
          features: ["Bakti Sosial", "Donor Darah", "Lingkungan Hidup"]
        }
      ]
    },
    {
      type: "content",
      title: "Pengembangan Soft Skills",
      description: "Program komprehensif untuk mengembangkan kemampuan non-teknis mahasiswa",
      content: [
        {
          subtitle: "Leadership Development",
          text: "Program pelatihan kepemimpinan melalui organisasi mahasiswa dan kegiatan ekstrakurikuler."
        },
        {
          subtitle: "Communication Skills",
          text: "Pengembangan kemampuan komunikasi melalui diskusi, presentasi, dan kegiatan public speaking."
        },
        {
          subtitle: "Teamwork & Collaboration",
          text: "Pembelajaran kerja tim melalui proyek bersama dan kegiatan organisasi."
        },
        {
          subtitle: "Social Responsibility",
          text: "Penanaman nilai-nilai sosial melalui kegiatan pengabdian masyarakat dan bakti sosial."
        }
      ]
    },
    {
      type: "content",
      title: "Prestasi Mahasiswa",
      description: "Pencapaian membanggakan mahasiswa STIE Dwimulya di berbagai bidang",
      content: [
        {
          subtitle: "Prestasi Akademik",
          text: "Mahasiswa berprestasi dalam kompetisi akademik tingkat regional dan nasional."
        },
        {
          subtitle: "Prestasi Non-Akademik",
          text: "Pencapaian di bidang olahraga, seni, dan kegiatan sosial kemasyarakatan."
        },
        {
          subtitle: "Kewirausahaan",
          text: "Mahasiswa yang berhasil mengembangkan usaha dan menjadi entrepreneur muda."
        }
      ],
      cta: { text: "Lihat Prestasi Lengkap", href: "/kemahasiswaan/prestasi" }
    },
    {
      type: "cta",
      title: "Bergabung dan Kembangkan Potensi Anda",
      description: "Jadilah bagian dari komunitas mahasiswa STIE Dwimulya yang aktif dan berprestasi",
      primaryCta: { text: "Daftar Sekarang", href: "/pendaftaran" },
      secondaryCta: { text: "Info Organisasi", href: "/kemahasiswaan/organisasi" }
    }
  ]
};
