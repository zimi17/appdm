export const kipKuliahPageConfig = {
  title: "Beasiswa KIP Kuliah",
  description: "Program beasiswa pemerintah untuk mahasiswa kurang mampu berprestasi",
  
  topper: {
    type: "hero",
    variant: "scholarship",
    backgroundImage: "/images/kip-kuliah-hero.jpg",
    overlay: true
  },

  blocks: [
    {
      type: "hero",
      title: "Beasiswa KIP Kuliah",
      subtitle: "Kartu Indonesia Pintar Kuliah",
      description: "Program beasiswa pemerintah untuk mahasiswa kurang mampu berprestasi yang ingin melanjutkan pendidikan tinggi di STIE Dwimulya",
      cta: {
        primary: { text: "Daftar KIP Kuliah", href: "https://kip-kuliah.kemdikbud.go.id" },
        secondary: { text: "Panduan Pendaftaran", href: "#panduan-kip" }
      }
    },
    {
      type: "content",
      title: "Tentang KIP Kuliah",
      description: "Program bantuan biaya pendidikan dari pemerintah untuk mahasiswa kurang mampu",
      content: [
        {
          subtitle: "Apa itu KIP Kuliah?",
          text: "KIP Kuliah adalah bantuan biaya pendidikan dari pemerintah bagi lulusan SMA/SMK/MA atau sederajat yang memiliki potensi akademik baik tetapi memiliki keterbatasan ekonomi."
        },
        {
          subtitle: "Tujuan Program",
          text: "Memberikan kesempatan kepada siswa kurang mampu dan berprestasi untuk dapat menempuh pendidikan sampai lulus di perguruan tinggi."
        }
      ]
    },
    {
      type: "stats",
      title: "Manfaat KIP Kuliah",
      items: [
        { value: "100", label: "Biaya Kuliah Ditanggung", suffix: "%" },
        { value: "700", label: "Biaya Hidup per Bulan", suffix: "rb" },
        { value: "4", label: "Tahun Masa Studi", suffix: "" },
        { value: "0", label: "Biaya Pendaftaran", suffix: "" }
      ]
    },
    {
      type: "features",
      title: "Keunggulan KIP Kuliah di STIE Dwimulya",
      items: [
        {
          title: "Bebas Biaya Kuliah",
          description: "Seluruh biaya kuliah ditanggung pemerintah sampai lulus",
          icon: "free-tuition"
        },
        {
          title: "Bantuan Biaya Hidup",
          description: "Bantuan biaya hidup bulanan untuk kebutuhan sehari-hari",
          icon: "living-cost"
        },
        {
          title: "Pendampingan Akademik",
          description: "Bimbingan khusus untuk memastikan kesuksesan studi",
          icon: "mentoring"
        },
        {
          title: "Pengembangan Soft Skills",
          description: "Program pengembangan karakter dan kepemimpinan",
          icon: "soft-skills"
        }
      ]
    },
    {
      type: "content",
      title: "Syarat dan Ketentuan",
      description: "Persyaratan untuk mendapatkan beasiswa KIP Kuliah",
      content: [
        {
          subtitle: "Syarat Ekonomi",
          text: "Berasal dari keluarga kurang mampu dengan pendapatan kotor gabungan orang tua/wali maksimal Rp 4.000.000 per bulan atau pendapatan kotor gabungan orang tua/wali dibagi jumlah anggota keluarga maksimal Rp 750.000."
        },
        {
          subtitle: "Syarat Akademik",
          text: "Memiliki potensi akademik baik berdasarkan rekomendasi objektif dan akurat dari Kepala Sekolah atau memiliki prestasi di bidang ko-kurikuler atau ekstrakurikuler."
        },
        {
          subtitle: "Syarat Administrasi",
          text: "Lulus seleksi penerimaan mahasiswa baru di STIE Dwimulya dan memenuhi persyaratan yang ditetapkan oleh masing-masing perguruan tinggi."
        }
      ]
    },
    {
      type: "content",
      title: "Cara Mendaftar",
      description: "Langkah-langkah mendaftar KIP Kuliah",
      content: [
        {
          subtitle: "Langkah 1: Registrasi Akun",
          text: "Daftar akun di website resmi KIP Kuliah dengan menggunakan NISN, NPSN, dan NIK yang valid."
        },
        {
          subtitle: "Langkah 2: Verifikasi Data",
          text: "Lengkapi dan verifikasi data diri, data keluarga, dan unggah dokumen yang diperlukan."
        },
        {
          subtitle: "Langkah 3: Pilih Perguruan Tinggi",
          text: "Pilih STIE Dwimulya sebagai pilihan perguruan tinggi dan program studi yang diminati."
        },
        {
          subtitle: "Langkah 4: Finalisasi",
          text: "Pastikan semua data sudah benar dan lengkap, kemudian submit aplikasi sebelum batas waktu."
        }
      ]
    },
    {
      type: "cta",
      title: "Raih Kesempatan Kuliah Gratis",
      description: "Jangan sia-siakan kesempatan mendapatkan pendidikan tinggi berkualitas dengan beasiswa KIP Kuliah",
      primaryCta: { text: "Daftar KIP Kuliah", href: "https://kip-kuliah.kemdikbud.go.id" },
      secondaryCta: { text: "Konsultasi", href: "tel:+6287773927456" }
    }
  ]
};
