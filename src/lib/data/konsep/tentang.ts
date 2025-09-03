export const tentangPageConfig = {
  title: "Tentang Kami",
  description: "Kampus Rakyat, Kampus Perubahan - Berlandaskan Pancasila dan Undang-Undang Dasar 1945",
  
  topper: {
    type: "hero",
    variant: "about",
    backgroundImage: "/images/about-hero.jpg",
    overlay: true
  },

  blocks: [
    {
      type: "hero",
      title: "STIE Dwimulya",
      subtitle: "Kampus Rakyat, Kampus Perubahan",
      description: "Sekolah Tinggi Ilmu Ekonomi yang berlandaskan Pancasila dan Undang-Undang Dasar 1945, berkomitmen memberikan pendidikan berkualitas untuk seluruh lapisan masyarakat",
      cta: {
        primary: { text: "Pelajari Sejarah Kami", href: "/tentang/sejarah" },
        secondary: { text: "Lihat Visi Misi", href: "/tentang/visi-misi" }
      }
    },
    {
      type: "content",
      title: "Tentang STIE Dwimulya",
      description: "Perguruan tinggi yang berkomitmen pada pendidikan berkualitas dan terjangkau",
      content: [
        {
          subtitle: "Filosofi Kampus Rakyat",
          text: "STIE Dwimulya hadir sebagai 'Kampus Rakyat' yang berkomitmen meringankan beban biaya pendidikan dan membantu masyarakat tidak mampu untuk mendapatkan pendidikan tinggi berkualitas."
        },
        {
          subtitle: "Kampus Perubahan",
          text: "Sebagai 'Kampus Perubahan', kami berperan aktif dalam menghasilkan lulusan yang mampu membawa perubahan positif bagi masyarakat dan bangsa."
        },
        {
          subtitle: "Lokasi Strategis",
          text: "Berlokasi di kawasan pemerintahan dan pusat kota Serang, Provinsi Banten, dengan akses yang mudah dan lingkungan yang kondusif untuk belajar."
        }
      ]
    },
    {
      type: "stats",
      title: "STIE Dwimulya dalam Angka",
      items: [
        { value: "2", label: "Program Studi Terakreditasi", suffix: "" },
        { value: "1000", label: "Alumni", suffix: "+" },
        { value: "500", label: "Mahasiswa Aktif", suffix: "+" },
        { value: "25", label: "Dosen Berkualitas", suffix: "+" }
      ]
    },
    {
      type: "features",
      title: "Keunggulan STIE Dwimulya",
      items: [
        {
          title: "Akses Pendidikan Luas",
          description: "Berbagai jalur penerimaan dan program beasiswa untuk seluruh lapisan masyarakat",
          icon: "access",
          features: ["Beasiswa KIP Kuliah", "Beasiswa Prestasi", "Beasiswa Yatim Piatu"]
        },
        {
          title: "Kualitas Pendidikan",
          description: "Kurikulum berkualitas standar nasional dengan dosen berpendidikan minimal magister",
          icon: "quality",
          features: ["Kurikulum KKNI", "Dosen S2/S3", "Fasilitas Modern"]
        },
        {
          title: "Lokasi Strategis",
          description: "Berada di pusat kota Serang dengan akses transportasi yang mudah",
          icon: "location",
          features: ["Pusat Kota", "Transportasi Mudah", "Lingkungan Kondusif"]
        },
        {
          title: "Tridharma PT",
          description: "Fokus pada pendidikan, penelitian, dan pengabdian masyarakat",
          icon: "tridharma",
          features: ["Pendidikan Berkualitas", "Penelitian Terapan", "Pengabdian Masyarakat"]
        }
      ]
    },
    {
      type: "content",
      title: "Komitmen Kami",
      description: "Dedikasi STIE Dwimulya untuk pendidikan dan masyarakat",
      content: [
        {
          subtitle: "Pendidikan Berkualitas",
          text: "Menyelenggarakan pendidikan tinggi ilmu ekonomi berkualitas standar nasional dengan biaya terjangkau."
        },
        {
          subtitle: "Pemberdayaan Masyarakat",
          text: "Melakukan penelitian dan pengabdian yang berkontribusi pada pemberdayaan ekonomi masyarakat."
        },
        {
          subtitle: "Kerjasama Strategis",
          text: "Melaksanakan kerja sama dengan para pemangku kepentingan untuk meningkatkan kualitas pendidikan."
        }
      ]
    },
    {
      type: "cta",
      title: "Bergabunglah dengan STIE Dwimulya",
      description: "Wujudkan impian pendidikan tinggi berkualitas bersama Kampus Rakyat, Kampus Perubahan",
      primaryCta: { text: "Daftar Sekarang", href: "/pendaftaran" },
      secondaryCta: { text: "Kunjungi Kampus", href: "/layanan" }
    }
  ]
};
