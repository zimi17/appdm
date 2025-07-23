export const quizQuestions = [
  {
    question: 'Mata pelajaran apa yang paling Anda nikmati di sekolah?',
    options: [
      { text: 'Matematika dan Ekonomi', value: 'accounting' },
      { text: 'Bisnis dan Organisasi', value: 'management' },
      { text: 'Seni dan Kreativitas', value: 'neutral' },
    ],
  },
  {
    question: 'Jenis tugas apa yang paling Anda sukai?',
    options: [
      { text: 'Menganalisis angka dan data keuangan', value: 'accounting' },
      { text: 'Merencanakan strategi dan memimpin tim', value: 'management' },
      { text: 'Berinteraksi dengan banyak orang', value: 'neutral' },
    ],
  },
  {
    question: 'Apa tujuan karir Anda di masa depan?',
    options: [
      { text: 'Menjadi ahli keuangan atau auditor', value: 'accounting' },
      { text: 'Menjadi pemimpin bisnis atau manajer', value: 'management' },
      { text: 'Membangun usaha sendiri', value: 'neutral' },
    ],
  },
  {
    question: 'Bagaimana Anda menghadapi masalah?',
    options: [
      { text: 'Mencari solusi berdasarkan data dan fakta', value: 'accounting' },
      { text: 'Mengorganisir tim untuk menemukan solusi', value: 'management' },
      { text: 'Berpikir out-of-the-box', value: 'neutral' },
    ],
  },
];

export const quizResults = {
  accounting: {
    title: 'Program Studi Akuntansi',
    description: 'Berdasarkan jawaban Anda, Program Studi Akuntansi mungkin cocok untuk Anda. Anda memiliki minat pada analisis angka, data keuangan, dan karir di bidang keuangan atau auditing.',
    link: '/program-studi/akuntansi',
  },
  management: {
    title: 'Program Studi Manajemen',
    description: 'Berdasarkan jawaban Anda, Program Studi Manajemen mungkin cocok untuk Anda. Anda tertarik pada perencanaan strategi, kepemimpinan, dan karir di bidang manajemen atau kewirausahaan.',
    link: '/program-studi/manajemen',
  },
  neutral: {
    title: 'Jelajahi Kedua Program Studi',
    description: 'Pilihan Anda menunjukkan minat yang seimbang. Kami sarankan Anda menjelajahi lebih lanjut Program Studi Akuntansi dan Manajemen untuk menemukan yang paling sesuai dengan passion Anda.',
    link: '/program-studi',
  },
};
