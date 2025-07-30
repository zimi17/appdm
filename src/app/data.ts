import type {
  BlogType,
  FaqType,
  HeroSwiperType,
  PortfolioSlideType,
  TestimonialSliderType,
} from './types'



import company2 from '@/assets/images/landing/creative/img-2.jpg'
import company4 from '@/assets/images/landing/creative/img-4.jpg'
import company5 from '@/assets/images/landing/creative/img-5.jpg'

import avatar2 from '@/assets/images/avatars/img-2.jpg'
import avatar3 from '@/assets/images/avatars/img-3.jpg'

import creative6 from '@/assets/images/landing/creative/img-6.png'
import creative8 from '@/assets/images/landing/creative/img-8.png'

const heroSwiperSlides: HeroSwiperType[] = [
  {
    title: 'Mencetak Pemimpin Masa Depan di Bidang Akuntansi dan Manajemen.',
    description:
      'Visual: Foto kampus atau kegiatan mahasiswa di area akademik.', // Placeholder, replace with actual image import
  },
  {
    title: 'Program S1 Akuntansi yang Menyiapkan Anda untuk Karier di Dunia Keuangan.',
    description:
      'Visual: Gambar terkait laporan keuangan atau kelas akuntansi.', // Placeholder, replace with actual image import
  },
  {
    title: 'Bergabunglah dengan Program S1 Manajemen, Pelajari Kepemimpinan dan Strategi Bisnis.',
    description:
      'Visual: Gambar tim kerja atau presentasi bisnis.', // Placeholder, replace with actual image import
  },
  {
    title: 'Kegiatan Terbaru: Seminar Nasional Akuntansi dan Manajemen 2025',
    description:
      'Dwimulya baru saja menyelenggarakan seminar nasional bertema Tren Terkini dalam Akuntansi dan Manajemen Bisnis, dihadiri oleh pakar industri, alumni, dan mahasiswa. Sebuah acara penting untuk memperluas wawasan dan networking.',
  },
]

const portfolioSlides: PortfolioSlideType[] = [
  {
    title: 'S1 Akuntansi',
    subTitle: 'Studi Kasus Analisis Laporan Keuangan',
    image: company2, // Placeholder image
  },
  {
    title: 'S1 Akuntansi',
    subTitle: 'Proyek Audit Internal',
    image: company4, // Placeholder image
  },
  {
    title: 'S1 Akuntansi',
    subTitle: 'Proyek Perpajakan',
    image: company5, // Placeholder image
  },
  {
    title: 'S1 Manajemen',
    subTitle: 'Proyek Pengembangan Strategi Bisnis',
    image: company2, // Placeholder image
  },
  {
    title: 'S1 Manajemen',
    subTitle: 'Perencanaan Perusahaan',
    image: company4, // Placeholder image
  },
  {
    title: 'S1 Manajemen',
    subTitle: 'Manajemen Organisasi',
    image: company5, // Placeholder image
  },
]

const testimonialSlides: TestimonialSliderType[] = [
  {
    name: 'Alumni S1 Akuntansi',
    description:
      'Program S1 Akuntansi di Dwimulya memberikan fondasi yang kuat untuk karier saya di bidang keuangan. Kurikulumnya relevan dan dosen-dosennya sangat mendukung.',
    image: avatar3,
  },
  {
    name: 'Mahasiswa S1 Manajemen',
    description:
      'Saya sangat menikmati belajar di S1 Manajemen. Banyak proyek praktis yang membantu saya mengembangkan keterampilan kepemimpinan dan strategi bisnis.',
    image: avatar2,
  },
]

const faqContent: FaqType[] = [
  {
    title: 'Apa perbedaan antara S1 Akuntansi dan S1 Manajemen?',
    description:
      'S1 Akuntansi fokus pada pencatatan, pelaporan, dan analisis keuangan, sementara S1 Manajemen lebih berfokus pada perencanaan, pengorganisasian, pengarahan, dan pengendalian sumber daya untuk mencapai tujuan organisasi.',
  },
  {
    title: 'Apa peluang karir setelah lulus dari program S1 Akuntansi?',
    description:
      'Lulusan S1 Akuntansi dapat berkarir sebagai akuntan publik, akuntan manajemen, auditor, konsultan pajak, analis keuangan, atau bekerja di lembaga pemerintah dan swasta.',
  },
  {
    title: 'Bagaimana cara mendaftar untuk program S1 Manajemen?',
    description:
      'Informasi lengkap mengenai prosedur pendaftaran, persyaratan, dan jadwal dapat Anda temukan di halaman Penerimaan Mahasiswa Baru di website kami atau menghubungi bagian admisi.',
  },
]

const blogs: BlogType[] = [
  {
    title: 'Kisah Sukses Alumni Akuntansi: Dari Kampus Menuju Kantor Akuntan Publik Terkemuka',
    description: 'Cerita inspiratif dari alumni S1 Akuntansi yang berhasil meniti karir di salah satu kantor akuntan publik terbesar di Indonesia.',
    image: creative6,
  },
  {
    title: 'Membangun Bisnis Inovatif: Jejak Langkah Alumni Manajemen',
    description: 'Wawancara dengan alumni S1 Manajemen yang sukses mendirikan startup di bidang teknologi, berbagi tips dan pengalaman.',
    image: creative8,
  },
]
// Mock data for missing exports
const statistics = [
  { state: '150+', title: 'Mahasiswa Aktif' },
  { state: '95%', title: 'Tingkat Kelulusan' },
  { state: '20+', title: 'Dosen Berpengalaman' },
  { state: '5+', title: 'Program Unggulan' },
]

const stories = [
  {
    title: 'Kisah Sukses Alumni',
    description: 'Cerita inspiratif dari alumni yang berhasil di dunia kerja',
    image: creative6,
    date: '15 Jan 2024',
    backgroundImage: creative6,
  },
  {
    title: 'Prestasi Mahasiswa',
    description: 'Pencapaian luar biasa mahasiswa dalam berbagai kompetisi',
    image: creative8,
    date: '20 Feb 2024',
    backgroundImage: creative8,
  },
]

const clients = [
  {
    name: 'PT. Maju Bersama',
    description: 'Partner industri terpercaya dalam pengembangan kurikulum',
    image: avatar2,
  },
  {
    name: 'Bank Nasional',
    description: 'Mitra dalam program magang dan rekrutmen lulusan',
    image: avatar3,
  },
]

const valuableAssets = [
  {
    title: 'Laboratorium Akuntansi',
    description: 'Fasilitas modern untuk praktik akuntansi',
    icon: '📊',
  },
  {
    title: 'Pusat Bisnis',
    description: 'Ruang simulasi bisnis dan manajemen',
    icon: '🏢',
  },
  {
    title: 'Perpustakaan Digital',
    description: 'Akses ke ribuan jurnal dan referensi',
    icon: '📚',
  },
]

const works = [
  {
    title: 'Proyek Analisis Keuangan',
    description: 'Studi kasus analisis laporan keuangan perusahaan',
    image: company2,
    date: '15 Jan 2024',
    category: ['Web-Design'],
  },
  {
    title: 'Strategi Bisnis Digital',
    description: 'Pengembangan strategi bisnis untuk era digital',
    image: company4,
    date: '20 Feb 2024',
    category: ['Graphic-Design'],
  },
]

const allReviews = [
  {
    name: 'Sarah Johnson',
    review: 'Program S1 Akuntansi sangat membantu karier saya',
    rating: 5,
    image: avatar2,
  },
  {
    name: 'Michael Chen',
    review: 'Dosen-dosen berpengalaman dan kurikulum yang relevan',
    rating: 5,
    image: avatar3,
  },
]

const pricingPlans = [
  {
    name: 'Basic',
    price: 29,
    day: 30,
    features: ['5 Projects', '10GB Storage', 'Email Support', 'Basic Analytics'],
  },
  {
    name: 'Pro',
    price: 59,
    day: 30,
    features: ['25 Projects', '100GB Storage', 'Priority Support', 'Advanced Analytics', 'Custom Domain'],
  },
]

const projectSlides = [
  {
    title: 'Proyek Web Development',
    subTitle: 'Pengembangan website modern dengan teknologi terkini',
    image: creative6,
  },
  {
    title: 'Aplikasi Mobile',
    subTitle: 'Pembuatan aplikasi mobile untuk Android dan iOS',
    image: creative8,
  },
]

const investmentSteps = [
  {
    title: 'Analisis Pasar',
    description: 'Melakukan riset mendalam tentang kondisi pasar dan peluang investasi',
    icon: 'LuTrendingUp',
  },
  {
    title: 'Strategi Investasi',
    description: 'Menyusun strategi investasi yang sesuai dengan profil risiko',
    icon: 'LuTarget',
  },
  {
    title: 'Eksekusi & Monitoring',
    description: 'Melaksanakan rencana investasi dan memantau perkembangannya',
    icon: 'LuBarChart',
  },
]

const resources = [
  {
    name: 'Development',
    percentage: 95,
    icon: 'code',
  },
  {
    name: 'Design',
    percentage: 90,
    icon: 'palette',
  },
  {
    name: 'Marketing',
    percentage: 85,
    icon: 'trending-up',
  },
]

const allCauses = [
  {
    title: 'Program Beasiswa',
    description: 'Bantuan pendidikan untuk mahasiswa berprestasi',
    image: company2,
    raised: 75,
    goal: 100,
  },
  {
    title: 'Fasilitas Laboratorium',
    description: 'Pengembangan fasilitas praktikum modern',
    image: company4,
    raised: 60,
    goal: 100,
  },
]

const experts = [
  {
    name: 'Dr. Ahmad Santoso',
    title: 'Dosen Akuntansi',
    description: 'Ahli dalam bidang akuntansi keuangan dan audit',
    image: avatar2,
  },
  {
    name: 'Prof. Sari Wijaya',
    title: 'Dosen Manajemen',
    description: 'Spesialis manajemen strategis dan kepemimpinan',
    image: avatar3,
  },
]

export {
  heroSwiperSlides,
  portfolioSlides,
  testimonialSlides,
  faqContent,
  blogs,
  statistics,
  stories,
  clients,
  valuableAssets,
  works,
  allReviews,
  pricingPlans,
  projectSlides,
  investmentSteps,
  resources,
  allCauses,
  experts,
}
