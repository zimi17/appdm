export const pendaftaranPageConfig = {
  title: "Admisi",
  description: "Bergabunglah dengan STIE Dwimulya - Kampus Rakyat, Kampus Perubahan",
  
  topper: {
    _type: "simple-page-topper",
    title: "Penerimaan Mahasiswa Baru",
    description: "Bergabunglah dengan STIE Dwimulya - Kampus Rakyat, Kampus Perubahan",
    intro: "Wujudkan Impian Pendidikan Tinggi Anda",
    cta: {
      text: "Daftar Sekarang",
      href: "/pendaftaran"
    }
  },

  blocks: [
    {
      _type: "hero",
      _key: "hero-pendaftaran",
      title: "Penerimaan Mahasiswa Baru STIE Dwimulya",
      description: "Dapatkan pendidikan berkualitas dengan biaya terjangkau dan berbagai program beasiswa",
      imageUrl: "/images/admission-hero.jpg"
    },
    {
      _type: "cardGrid",
      _key: "jalur-pendaftaran",
      title: "Jalur Pendaftaran",
      description: "Berbagai jalur pendaftaran untuk menjadi mahasiswa STIE Dwimulya",
      items: [
        {
          _key: "pmdk",
          title: "Jalur PMDK",
          description: "Penelusuran Minat & Kemampuan berdasarkan prestasi akademik dan non-akademik",
          href: "/pendaftaran/jalur/pmdk"
        },
        {
          _key: "usm",
          title: "Jalur USM",
          description: "Ujian Saringan Masuk melalui ujian tertulis dan wawancara",
          href: "/pendaftaran/jalur/usm"
        },
        {
          _key: "tahfidz",
          title: "Jalur Beasiswa Tahfidz",
          description: "Jalur khusus untuk penghafal Al-Quran minimal 3 juz",
          href: "/pendaftaran/jalur/tahfidz"
        }
      ]
    },
    {
      _type: "cardGrid",
      _key: "program-beasiswa",
      title: "Program Beasiswa",
      description: "Beasiswa bagi mahasiswa berprestasi dan kurang mampu",
      items: [
        {
          _key: "kip-kuliah",
          title: "Beasiswa KIP Kuliah",
          description: "Program beasiswa pemerintah untuk mahasiswa kurang mampu berprestasi",
          href: "/pendaftaran/program-beasiswa/kip-kuliah"
        },
        {
          _key: "prestasi",
          title: "Beasiswa Prestasi",
          description: "Beasiswa untuk mahasiswa dengan prestasi akademik dan non-akademik",
          href: "/pendaftaran/program-beasiswa/prestasi"
        },
        {
          _key: "yatim-piatu",
          title: "Beasiswa Yatim Piatu",
          description: "Beasiswa penuh untuk mahasiswa yatim piatu dari keluarga kurang mampu",
          href: "/pendaftaran/program-beasiswa/yatim-piatu"
        }
      ]
    },
    {
      _type: "promoBar",
      _key: "cta-daftar",
      title: "Siap Memulai Perjalanan Pendidikan?",
      description: "Jangan lewatkan kesempatan bergabung dengan STIE Dwimulya. Daftar sekarang dan wujudkan impian pendidikan tinggi Anda!"
    }
  ]
};
