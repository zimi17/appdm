export const sejarahPageConfig = {
  title: "Sejarah & Identitas",
  description: "Perjalanan panjang STIE Dwimulya dalam dunia pendidikan tinggi",
  
  topper: {
    type: "hero",
    variant: "history",
    backgroundImage: "/images/history-hero.jpg",
    overlay: true
  },

  blocks: [
    {
      type: "hero",
      title: "Sejarah & Identitas STIE Dwimulya",
      subtitle: "Perjalanan Membangun Pendidikan Berkualitas",
      description: "Perjalanan panjang STIE Dwimulya dalam dunia pendidikan tinggi, dari awal berdiri hingga menjadi institusi pendidikan yang dipercaya masyarakat",
      cta: {
        primary: { text: "Pelajari Sejarah", href: "#sejarah-berdiri" },
        secondary: { text: "Lihat Identitas", href: "#logo-dan-makna" }
      }
    },
    {
      type: "content",
      title: "Sejarah Berdiri",
      description: "Latar belakang pendirian STIE Dwimulya",
      content: [
        {
          subtitle: "Awal Mula",
          text: "STIE Dwimulya didirikan dengan visi menjadi 'Kampus Rakyat, Kampus Perubahan' yang berkomitmen memberikan akses pendidikan tinggi berkualitas bagi seluruh lapisan masyarakat."
        },
        {
          subtitle: "Filosofi Nama",
          text: "Nama 'Dwimulya' berasal dari bahasa Sanskerta yang berarti 'dua kemuliaan', mencerminkan komitmen untuk menghasilkan lulusan yang mulia dalam ilmu pengetahuan dan akhlak."
        },
        {
          subtitle: "Perkembangan",
          text: "Dari awal berdiri, STIE Dwimulya terus berkembang dengan menambah program studi dan meningkatkan kualitas pendidikan sesuai kebutuhan zaman."
        }
      ]
    },
    {
      type: "stats",
      title: "Pencapaian Historis",
      items: [
        { value: "20", label: "Tahun Pengalaman", suffix: "+" },
        { value: "1000", label: "Alumni", suffix: "+" },
        { value: "2", label: "Program Studi", suffix: "" },
        { value: "100", label: "Mitra Industri", suffix: "%" }
      ]
    },
    {
      type: "content",
      title: "Logo & Makna",
      description: "Identitas visual STIE Dwimulya dan filosofinya",
      content: [
        {
          subtitle: "Desain Logo",
          text: "Logo STIE Dwimulya menggambarkan semangat pendidikan yang dinamis dengan elemen-elemen yang mencerminkan nilai-nilai institusi."
        },
        {
          subtitle: "Makna Simbolis",
          text: "Setiap elemen dalam logo memiliki makna filosofis yang mendalam, mencerminkan visi misi dan nilai-nilai yang dijunjung tinggi."
        },
        {
          subtitle: "Warna Institusi",
          text: "Pemilihan warna dalam identitas visual STIE Dwimulya mencerminkan karakter institusi yang profesional namun tetap hangat dan terbuka."
        }
      ]
    },
    {
      type: "content",
      title: "Nilai-Nilai STIE Dwimulya",
      description: "Nilai-nilai fundamental yang menjadi landasan institusi",
      content: [
        {
          subtitle: "Integritas",
          text: "Menjunjung tinggi kejujuran, transparansi, dan akuntabilitas dalam setiap aspek penyelenggaraan pendidikan."
        },
        {
          subtitle: "Keunggulan",
          text: "Berkomitmen untuk selalu memberikan yang terbaik dalam pendidikan, penelitian, dan pengabdian masyarakat."
        },
        {
          subtitle: "Inklusivitas",
          text: "Membuka akses pendidikan bagi semua kalangan tanpa membedakan latar belakang ekonomi dan sosial."
        },
        {
          subtitle: "Inovasi",
          text: "Terus berinovasi dalam metode pembelajaran dan pengembangan kurikulum sesuai perkembangan zaman."
        }
      ]
    },
    {
      type: "features",
      title: "Tonggak Sejarah Penting",
      items: [
        {
          title: "Pendirian",
          description: "Pendirian STIE Dwimulya sebagai institusi pendidikan tinggi",
          icon: "foundation"
        },
        {
          title: "Akreditasi Pertama",
          description: "Memperoleh akreditasi pertama dari BAN-PT",
          icon: "accreditation"
        },
        {
          title: "Pengembangan Program",
          description: "Penambahan program studi sesuai kebutuhan industri",
          icon: "development"
        },
        {
          title: "Kerjasama Strategis",
          description: "Membangun kerjasama dengan berbagai institusi",
          icon: "partnership"
        }
      ]
    },
    {
      type: "cta",
      title: "Bergabung dengan Sejarah STIE Dwimulya",
      description: "Jadilah bagian dari perjalanan sejarah STIE Dwimulya dalam membangun masa depan bangsa",
      primaryCta: { text: "Daftar Sekarang", href: "/pendaftaran" },
      secondaryCta: { text: "Pelajari Lebih Lanjut", href: "/tentang" }
    }
  ]
};
