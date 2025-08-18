import * as z from "zod";

export const admissionFormSchema = z.object({
    firstName: z.string().min(2, { message: "Nama depan harus memiliki setidaknya 2 karakter." }),
    lastName: z.string().min(2, { message: "Nama belakang harus memiliki setidaknya 2 karakter." }),
    dob: z.date({ required_error: "Tanggal lahir diperlukan." }),
    email: z.string().email({ message: "Alamat email tidak valid." }),
    phone: z.string().optional(),
    country: z.string().min(2),
    city: z.string().min(2),
    postalCode: z.string().min(5).optional(),
    firstGen: z.enum(["yes", "no"], { required_error: "Anda harus memilih salah satu opsi." }),
    ugProgram: z.string().optional(),
    ugYear: z.string().min(4, { message: "Tahun kelulusan diperlukan." }),
    industry: z.string().min(2, { message: "Industri diperlukan." }),
    jointDegree: z.array(z.string()).optional(),
    careerInterest: z.array(z.string()).optional(),
  });

  export const ugPrograms = [
    "Akuntansi", "Antropologi", "Arsitektur", "Ilmu Biologi", "Kimia", "Ilmu Komputer",
    "Ekonomi", "Pendidikan", "Teknik", "Bahasa Inggris", "Keuangan", "Seni Rupa",
    "Bahasa Asing", "Pemerintahan", "Sejarah", "Administrasi Perhotelan", "Hubungan Industrial",
    "Sistem Informasi", "Bisnis Internasional", "Hukum", "Manajemen", "Pemasaran",
    "Matematika", "Manajemen Operasi", "Filsafat", "Fisika", "Ilmu Politik",
    "Psikologi", "Sosiologi", "Statistika", "Bisnis atau Perdagangan Lainnya",
    "Humaniora Lainnya", "Ilmu Pengetahuan Lainnya", "Ilmu Sosial Lainnya"
  ];
  
  export const ugYears = Array.from({ length: 79 }, (_, i) => new Date().getFullYear() + 4 - i);
  
  export const industries = [
    "Konsultasi", "Produk Konsumen / Ritel / E-Commerce", "Jasa Keuangan",
    "Kesehatan / Bioteknologi", "Manufaktur / Industri / Energi", "Media / Hiburan / Perjalanan",
    "Militer", "Nirlaba / Pemerintah / Pendidikan", "Teknologi",
    "Modal Ventura / Ekuitas Swasta", "Lainnya / Saat Ini Tidak Bekerja", "Mahasiswa Penuh Waktu"
  ];
