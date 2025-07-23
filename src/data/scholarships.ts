export const scholarships = [
  {
    category: 'Beasiswa dari Pemerintah',
    programs: [
      {
        title: 'KIP Kuliah Merdeka (Bidikmisi Sebelumnya)',
        description: 'Ditujukan untuk mahasiswa berprestasi dari keluarga miskin/rentan miskin. Manfaat: Pembebasan biaya pendidikan sesuai akreditasi program studi, bantuan biaya hidup bulanan, serta pembebasan biaya pendaftaran seleksi masuk.',
        eligibility: [
          'Mahasiswa berprestasi dari keluarga miskin/rentan miskin',
          'Lulusan SMA/sederajat dalam tiga tahun terakhir',
          'Memiliki potensi akademik yang baik',
          'Bukti kondisi ekonomi seperti KIP Pendidikan Menengah, DTKS, bantuan sosial, atau SKTM',
        ],
        application: 'Pendaftaran daring melalui situs resmi KIP Kuliah Kemendikbudristek. Calon mahasiswa kemudian memilih jalur seleksi mandiri di STIE Dwimulya. Pihak perguruan tinggi selanjutnya akan melakukan verifikasi dan validasi data sebelum mengusulkan nama calon penerima ke Puslapdik.',
        duration: 'Maksimal 8 semester untuk S1/D4, 6 semester D3, 4 semester D2.',
      },
      {
        title: 'Beasiswa Peningkatan Prestasi Akademik (PPA)',
        description: 'Untuk mahasiswa dengan IPK minimal 3.75, berprestasi akademik dan aktif ekstrakurikuler. Diberikan oleh Direktorat Jenderal Pendidikan Tinggi (DIKTI).',
        eligibility: [
          'Mahasiswa aktif STIE Dwimulya',
          'IPK minimal 3.75',
          'Berprestasi akademik dan aktif ekstrakurikuler',
        ],
        application: 'Hubungi bagian kemahasiswaan STIE Dwimulya untuk prosedur pendaftaran dan persyaratan detail.',
      },
      {
        title: 'Beasiswa Bantuan Biaya Pendidikan (BBP)',
        description: 'Untuk mahasiswa kurang mampu dengan prestasi bidang ko-kurikuler atau ekstrakurikuler. IPK minimal 3.00.',
        eligibility: [
          'Mahasiswa aktif STIE Dwimulya',
          'Kurang mampu secara ekonomi',
          'IPK minimal 3.00',
          'Memiliki prestasi bidang ko-kurikuler atau ekstrakurikuler',
        ],
        application: 'Hubungi bagian kemahasiswaan STIE Dwimulya untuk prosedur pendaftaran dan persyaratan detail.',
      },
      {
        title: 'Beasiswa Pemda',
        description: 'Program hibah dari pemerintah daerah untuk mendukung pendidikan mahasiswa PTS sesuai ketentuan pemda.',
        eligibility: [
          'Mahasiswa aktif STIE Dwimulya',
          'Memenuhi ketentuan pemerintah daerah terkait',
        ],
        application: 'Hubungi bagian kemahasiswaan STIE Dwimulya untuk prosedur pendaftaran dan persyaratan detail.',
      },
    ],
  },
  {
    category: 'Beasiswa dari Yayasan/STIE Dwimulya',
    programs: [
      {
        title: 'Beasiswa Penuh Yayasan Dwimulya',
        description: 'Diberikan kepada calon mahasiswa berprestasi akademik SMA (peringkat 1 & 2), dan yang memiliki prestasi non-akademik (seperti juara MTQ, OS2N, Try Out STIE Dwimulya). Meliputi pembebasan biaya kuliah penuh.',
        eligibility: [
          'Calon mahasiswa STIE Dwimulya',
          'Berprestasi akademik SMA (peringkat 1 & 2) atau prestasi non-akademik (juara MTQ, OS2N, Try Out STIE Dwimulya)',
        ],
        application: 'Hubungi bagian kemahasiswaan STIE Dwimulya untuk prosedur pendaftaran dan persyaratan detail.',
      },
      {
        title: 'Beasiswa Prestasi',
        description: 'Diberikan pada mahasiswa berprestasi di MTQ, keagamaan, olahraga, lomba akademik dan kreativitas. Manfaat berupa potongan SPP dengan durasi dan jumlah tergantung tingkat dan peringkat juara (internasional, nasional, daerah).',
        eligibility: [
          'Mahasiswa aktif STIE Dwimulya',
          'Meraih prestasi di bidang MTQ, keagamaan, olahraga, lomba akademik dan kreativitas',
        ],
        application: 'Hubungi bagian kemahasiswaan STIE Dwimulya untuk prosedur pendaftaran dan persyaratan detail.',
      },
      {
        title: 'Beasiswa Tahfidz Quran',
        description: 'Diperuntukkan bagi mahasiswa yang memiliki kemampuan menghafal Al-Quran, khususnya hafalan minimal 5 juz.',
        eligibility: [
          'Mahasiswa aktif STIE Dwimulya',
          'Calon Muslim, usia maksimal 20 tahun',
          'Lolos seleksi penerimaan mahasiswa baru',
          'Memiliki kemampuan menghafal Al-Quran (minimal 5 juz)',
        ],
        application: 'Hubungi bagian kemahasiswaan STIE Dwimulya untuk prosedur pendaftaran dan persyaratan detail.',
      },
      {
        title: 'Voucher Beasiswa SPP Gratis',
        description: 'Untuk 100 siswa berprestasi tahun 2024, dialokasikan masing-masing 50 di jurusan Manajemen dan Akuntansi. Voucher ini membebaskan biaya SPP sampai lulus.',
        eligibility: [
          'Siswa berprestasi tahun 2024',
          'Dialokasikan 50 di jurusan Manajemen dan 50 di jurusan Akuntansi',
        ],
        application: 'Hubungi bagian kemahasiswaan STIE Dwimulya untuk prosedur pendaftaran dan persyaratan detail.',
      },
    ],
  },
];

export const generalRequirements = [
  'Lulusan SMA/sederajat tiga tahun terakhir (atau calon mahasiswa baru untuk beberapa beasiswa).',
  'Potensi akademik baik dan, untuk jalur KIP Kuliah, dibuktikan kondisi ekonomi.',
  'Warga Negara Indonesia, berkelakuan baik, tekun, religius, dan aktif.',
  'Tidak sedang menerima beasiswa dari pihak lain (kecuali untuk beasiswa calon mahasiswa baru).',
  'Mengikuti kegiatan pengenalan kampus (Moska).',
];

export const requiredDocuments = [
  'Fotocopy ijazah dan transkrip nilai (legalisir).',
  'Bukti kondisi ekonomi (KIP, KKS, SKTM, kartu keluarga).',
  'Sertifikat tahfidz untuk beasiswa Tahfidz Quran.',
  'Bukti prestasi akademik atau non-akademik sesuai jenis beasiswa.',
];

export const applicationProcedure = [
  'Pendaftaran via website STIE Dwimulya atau portal KIP Kuliah.',
  'Verifikasi dan seleksi oleh bagian kemahasiswaan dan tim seleksi.',
  'Pengumuman hasil seleksi dan penetapan penerima beasiswa melalui Surat Keputusan Ketua.',
  'Penandatanganan kontrak atau perjanjian beasiswa dengan Wakil Ketua Bidang Kemahasiswaan.',
];

export const scholarshipTermination = [
  'Melebihi masa studi',
  'IPK turun di bawah standar (3.25 untuk KIP Kuliah selama 3 semester beruntun)',
  'Cuti/keluar',
  'Melanggar kontrak',
  'Terlibat tindak pidana/narkoba',
  'Melanggar norma agama/sosial',
  'Menikah',
  'Menerima sanksi akademik',
  'Memberikan data palsu',
  'Meninggal dunia',
];

export const recipientObligations = [
  'Mematuhi kontrak dan peraturan kampus.',
  'Aktif dalam Unit Kegiatan Mahasiswa (UKM), mengikuti arahan orang tua asuh kampus, dan berpartisipasi dalam kegiatan kemahasiswaan seperti PKM atau pengabdian masyarakat.',
  'Minimal merekomendasikan membawa satu mahasiswa baru setiap tahun selama menerima beasiswa.',
];