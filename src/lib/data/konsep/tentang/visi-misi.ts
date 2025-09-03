export const visiMisiPageConfig = {
  title: "Visi & Misi",
  description: "Visi dan Misi Institusi, Program Studi, dan Lembaga Penelitian dan Pengabdian Masyarakat",
  
  topper: {
    type: "hero",
    variant: "vision",
    backgroundImage: "/images/vision-mission-hero.jpg",
    overlay: true
  },

  blocks: [
    {
      type: "hero",
      title: "Visi & Misi STIE Dwimulya",
      subtitle: "Arah dan Tujuan Institusi",
      description: "Visi dan Misi yang menjadi pedoman dalam menyelenggarakan pendidikan tinggi berkualitas dan berkontribusi bagi pembangunan bangsa",
      cta: {
        primary: { text: "Pelajari Lebih Lanjut", href: "#visi-misi-institusi" },
        secondary: { text: "Lihat Program Studi", href: "/akademik" }
      }
    },
    {
      type: "content",
      title: "Visi & Misi Institusi",
      description: "Visi dan Misi STIE Dwimulya sebagai institusi pendidikan tinggi",
      content: [
        {
          subtitle: "Visi STIE Dwimulya",
          text: "Menjadi perguruan tinggi yang menghasilkan lulusan yang unggul di bidang ilmu ekonomi di Indonesia tahun 2026."
        },
        {
          subtitle: "Misi STIE Dwimulya",
          text: "1. Menyelenggarakan pendidikan tinggi ilmu ekonomi berkualitas standar nasional.\n2. Melakukan penelitian yang berkontribusi pada pemberdayaan ekonomi masyarakat.\n3. Melakukan pengabdian kepada masyarakat di bidang ilmu ekonomi.\n4. Melaksanakan kerja sama dengan para pemangku kepentingan."
        }
      ]
    },
    {
      type: "features",
      title: "Visi & Misi Program Studi",
      description: "Visi dan Misi masing-masing Program Studi di STIE Dwimulya",
      items: [
        {
          title: "Program Studi Manajemen",
          description: "Visi dan Misi Program Studi Manajemen",
          icon: "management",
          href: "/tentang/visi-misi/manajemen",
          features: ["Lulusan Unggul", "Skala Nasional", "Tahun 2026"]
        },
        {
          title: "Program Studi Akuntansi",
          description: "Visi dan Misi Program Studi Akuntansi",
          icon: "accounting",
          href: "/tentang/visi-misi/akuntansi",
          features: ["Berdaya Saing", "Ilmu Akuntansi", "Indonesia 2026"]
        }
      ]
    },
    {
      type: "content",
      title: "Visi & Misi Program Studi Manajemen",
      content: [
        {
          subtitle: "Visi Prodi Manajemen",
          text: "Mewujudkan Program Studi Manajemen yang menghasilkan mutu lulusan yang unggul dan bermanfaat bagi perkembangan ilmu Manajemen berskala nasional tahun 2026."
        },
        {
          subtitle: "Misi Prodi Manajemen",
          text: "Melaksanakan pembelajaran, penelitian, pengabdian, dan kemitraan di bidang manajemen untuk mendukung daya saing lulusan dan pengembangan usaha/publik."
        }
      ]
    },
    {
      type: "content",
      title: "Visi & Misi Program Studi Akuntansi",
      content: [
        {
          subtitle: "Visi Prodi Akuntansi",
          text: "Menjadi Program Studi yang Berdaya Saing dan Berkontribusi bagi perkembangan ilmu akuntansi di Indonesia Tahun 2026."
        },
        {
          subtitle: "Misi Prodi Akuntansi",
          text: "Melaksanakan pembelajaran, penelitian, pengabdian, dan kemitraan di bidang akuntansi untuk mendukung daya saing lulusan dan pengembangan usaha/publik."
        }
      ]
    },
    {
      type: "content",
      title: "Visi & Misi LPPM",
      description: "Visi dan Misi Lembaga Penelitian dan Pengabdian kepada Masyarakat",
      content: [
        {
          subtitle: "Visi LPPM",
          text: "Menjadi lembaga yang berdaya saing dan berperan aktif dalam pembangunan bangsa."
        },
        {
          subtitle: "Misi LPPM",
          text: "Mengembangkan budaya meneliti, aktivitas pengabdian yang bermanfaat, dan kerjasama kemitraan."
        }
      ]
    },
    {
      type: "cta",
      title: "Bergabung Mewujudkan Visi Bersama",
      description: "Mari bersama-sama mewujudkan visi STIE Dwimulya menjadi perguruan tinggi unggul di bidang ilmu ekonomi",
      primaryCta: { text: "Daftar Sekarang", href: "/pendaftaran" },
      secondaryCta: { text: "Pelajari Program", href: "/akademik" }
    }
  ]
};
