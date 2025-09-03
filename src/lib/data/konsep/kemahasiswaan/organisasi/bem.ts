export const bemPageConfig = {
  title: "Badan Eksekutif Mahasiswa",
  description: "Organisasi tertinggi mahasiswa yang mengkoordinir seluruh kegiatan kemahasiswaan",
  
  topper: {
    type: "hero",
    variant: "student",
    backgroundImage: "/images/bem-hero.jpg",
    overlay: true
  },

  blocks: [
    {
      type: "hero",
      title: "Badan Eksekutif Mahasiswa",
      subtitle: "Suara Mahasiswa, Aksi Nyata",
      description: "Organisasi tertinggi mahasiswa STIE Dwimulya yang mengkoordinir seluruh kegiatan kemahasiswaan dan menjadi jembatan aspirasi mahasiswa",
      cta: {
        primary: { text: "Bergabung dengan BEM", href: "#bergabung" },
        secondary: { text: "Lihat Program Kerja", href: "#program-kerja" }
      }
    },
    {
      type: "content",
      title: "Tentang BEM STIE Dwimulya",
      description: "Organisasi mahasiswa yang berperan sebagai eksekutif dalam menjalankan kegiatan kemahasiswaan",
      content: [
        {
          subtitle: "Visi BEM",
          text: "Menjadi organisasi mahasiswa yang mampu mewadahi aspirasi, mengembangkan potensi, dan membangun karakter mahasiswa STIE Dwimulya."
        },
        {
          subtitle: "Misi BEM",
          text: "1. Menyalurkan aspirasi dan kepentingan mahasiswa\n2. Mengkoordinir kegiatan kemahasiswaan\n3. Mengembangkan soft skills dan leadership mahasiswa\n4. Membangun kerjasama dengan berbagai pihak"
        }
      ]
    },
    {
      type: "features",
      title: "Struktur Organisasi BEM",
      items: [
        {
          title: "Presiden Mahasiswa",
          description: "Pemimpin tertinggi BEM yang bertanggung jawab atas jalannya organisasi",
          icon: "president"
        },
        {
          title: "Wakil Presiden",
          description: "Membantu presiden dalam menjalankan tugas dan fungsi organisasi",
          icon: "vice-president"
        },
        {
          title: "Sekretaris Jenderal",
          description: "Mengelola administrasi dan dokumentasi organisasi",
          icon: "secretary"
        },
        {
          title: "Bendahara Umum",
          description: "Mengelola keuangan dan aset organisasi",
          icon: "treasurer"
        },
        {
          title: "Kementerian",
          description: "Berbagai kementerian sesuai bidang kegiatan",
          icon: "ministry"
        }
      ]
    },
    {
      type: "features",
      title: "Program Kerja BEM",
      items: [
        {
          title: "Advokasi Mahasiswa",
          description: "Menyuarakan aspirasi dan kepentingan mahasiswa kepada pihak kampus",
          icon: "advocacy"
        },
        {
          title: "Pengembangan SDM",
          description: "Program pelatihan dan pengembangan soft skills mahasiswa",
          icon: "development"
        },
        {
          title: "Kegiatan Sosial",
          description: "Program bakti sosial dan kepedulian terhadap masyarakat",
          icon: "social"
        },
        {
          title: "Event Kampus",
          description: "Menyelenggarakan berbagai acara dan kegiatan kampus",
          icon: "event"
        }
      ]
    },
    {
      type: "content",
      title: "Manfaat Bergabung dengan BEM",
      description: "Keuntungan yang diperoleh mahasiswa yang aktif di BEM",
      content: [
        {
          subtitle: "Pengembangan Leadership",
          text: "Kesempatan untuk mengembangkan jiwa kepemimpinan melalui berbagai posisi dan tanggung jawab."
        },
        {
          subtitle: "Networking",
          text: "Membangun jaringan dengan mahasiswa, alumni, dan berbagai pihak eksternal."
        },
        {
          subtitle: "Soft Skills",
          text: "Mengasah kemampuan komunikasi, organisasi, dan manajemen melalui kegiatan nyata."
        },
        {
          subtitle: "Pengalaman Berorganisasi",
          text: "Mendapatkan pengalaman berharga dalam mengelola organisasi dan menjalankan program kerja."
        }
      ]
    },
    {
      type: "cta",
      title: "Bergabung dan Berkarya Bersama BEM",
      description: "Jadilah bagian dari perubahan positif di kampus melalui BEM STIE Dwimulya",
      primaryCta: { text: "Daftar Sekarang", href: "/pendaftaran" },
      secondaryCta: { text: "Info Kemahasiswaan", href: "/kemahasiswaan" }
    }
  ]
};
