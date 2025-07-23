Panduan Praktik Terbaik UI/UX untuk STIE Dwimulya
Berdasarkan panduan merek dan sistem desain yang telah ditetapkan, berikut adalah panduan praktik terbaik UI/UX khusus untuk website STIE Dwimulya, yang dirancang untuk memastikan pengalaman pengguna yang intuitif, dapat diakses, dan selaras dengan citra akademik institusi.

1. Prinsip Desain Utama
Harvard-Style Academic Authority
Wibawa Akademik: Gunakan layout blok berirama dengan transisi latar belakang White → Light Grey → Brand Black untuk membangun kepercayaan dan otoritas institusi.

Hierarki Visual yang Jelas: Terapkan sistem tipografi dua font (Merriweather untuk judul, Montserrat untuk isi) dengan ukuran dan bobot yang jelas untuk memandu fokus pengguna.

Fokus pada Konten: Desain harus mendukung presentasi informasi akademik secara jelas dan mudah dipahami, tanpa distraksi yang tidak perlu.

Modern & Action-Oriented Experience
Desain Berpusat pada Pengguna: Setiap elemen harus memiliki tujuan fungsional yang jelas dan memberikan nilai bagi pengguna.

CTA yang Jelas: Tombol ajakan bertindak (Call-to-Action) harus menonjol menggunakan warna Brand Gold atau Oxford Blue untuk mendorong interaksi.

Performa Utama: Implementasikan animasi yang halus (misalnya dengan GSAP) yang tidak mengorbankan kecepatan muat halaman.

2. Struktur Navigasi & Informasi
Arsitektur Informasi
Navigasi Hierarkis:

Menu Utama: Program Akademik, Fakultas & Penelitian, Kemahasiswaan, Tentang Kami.

Submenu: Sediakan submenu yang spesifik untuk detail program studi atau unit penelitian.

Breadcrumb: Tampilkan jejak navigasi (breadcrumb) untuk membantu pengguna memahami posisi mereka di dalam situs.

Fungsionalitas Pencarian:

Visibilitas: Kotak pencarian harus selalu terlihat di header.

Fitur: Sertakan auto-suggest untuk pencarian cepat dan filter berdasarkan kategori konten (misalnya: berita, program, acara).

Organisasi Konten
Bagian Program: Tampilkan program seperti MBA, Doktoral, dan Pendidikan Eksekutif menggunakan layout berbasis kartu (card-based) yang menarik.

Fakultas & Penelitian: Sorot peneliti utama dengan foto profesional dan spesialisasi mereka.

Kehidupan Mahasiswa: Tampilkan kegiatan kampus dengan galeri gambar berkualitas tinggi.

Berita & Wawasan: Sajikan artikel terbaru dengan tanggal publikasi dan kategori yang jelas.

3. Tipografi & Keterbacaan
Pedoman Implementasi
Ukuran Font Minimum: 16px (1rem) untuk semua teks isi (body text).

Tinggi Baris (Line Height): 1.5 hingga 1.6 untuk keterbacaan optimal pada paragraf panjang.

Perataan Teks: Selalu gunakan perataan kiri (left-aligned) untuk semua konten teks.

Rasio Kontras: Pastikan rasio kontras minimal 4.5:1 antara teks dan latar belakangnya.

Tipografi Responsif
/* Tipografi Desktop */
.text-display { font-size: 3rem; }
.text-title { font-size: 2.25rem; }
.text-subtitle { font-size: 1.75rem; }

/* Tipografi Mobile */
@media (max-width: 768px) {
  .text-display { font-size: 2.25rem; }
  .text-title { font-size: 1.75rem; }
  .text-subtitle { font-size: 1.5rem; }
}

4. Strategi Aplikasi Warna
Penggunaan Warna Semantik
Oxford Blue (#002147): Judul, tombol primer, elemen navigasi utama.

Brand Gold (#D4AF37): Tombol CTA, sorotan (highlights), indikator pencapaian.

Sky Blue (#A9D6E5): Tombol sekunder, tautan, elemen interaktif lainnya.

Brand Black (#1E1E1E): Teks isi, latar belakang bagian unggulan (featured sections).

Light Grey (#F5F5F5): Latar belakang section sekunder, latar belakang kartu.

Kepatuhan Aksesibilitas
Pastikan rasio kontras warna minimum terpenuhi untuk semua elemen teks.

Gunakan kombinasi warna yang ramah bagi penderita buta warna.

Sediakan indikator alternatif selain warna (misalnya: ikon atau teks) untuk menyampaikan informasi.

5. Layout & Sistem Grid
Implementasi Grid 12 Kolom
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
}

/* Breakpoints Responsif */
@media (max-width: 768px) {
  .grid {
    gap: 1.5rem;
  }
  .col-span-12 { grid-column: span 12; }
  .col-span-6 { grid-column: span 12; }
  .col-span-4 { grid-column: span 12; }
}

Jarak Antar Bagian (Spacing)
Section Besar: 6rem padding atas/bawah.

Section Sedang: 4rem padding atas/bawah.

Section Kecil: 2rem padding atas/bawah.

Jarak Komponen: 1.5rem antara elemen yang saling berhubungan.

6. Elemen Interaktif
Desain Tombol
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn--primary {
  background-color: #002147; /* Oxford Blue */
  color: white;
}

.btn--secondary {
  background-color: #D4AF37; /* Brand Gold */
  color: #1E1E1E;
}

.btn--outline {
  background-color: transparent;
  border: 2px solid #002147;
  color: #002147;
}

Desain Formulir
Gunakan label yang jelas dengan font Montserrat.

Berikan jarak yang cukup antar kolom isian (form fields).

Terapkan umpan balik validasi secara real-time.

Sediakan pesan kesalahan yang mudah diakses dan dipahami.

7. Pedoman Desain Responsif
Pendekatan Mobile-First
Layout Bertumpuk: Kolom akan bertumpuk secara vertikal di layar kecil.

Target Sentuh: Ukuran minimal 44px untuk semua elemen interaktif.

Navigasi: Gunakan menu hamburger untuk perangkat mobile dengan hierarki menu yang jelas.

Gambar: Optimalkan gambar untuk pemuatan cepat dengan format WebP.

Breakpoints
Kecil (Mobile): 0px - 768px

Sedang (Tablet): 769px - 1024px

Besar (Desktop): 1025px+

8. Optimasi Performa
Strategi Pemuatan
Critical CSS: Sisipkan gaya CSS penting untuk konten above-the-fold.

Pemuatan Font: Gunakan font-display: swap untuk font web.

Optimasi Gambar:

Format WebP dengan fallback JPEG.

Gambar responsif dengan srcset.

Terapkan lazy loading untuk gambar di bawah lipatan halaman.

Performa Animasi
Gunakan properti CSS transform dan opacity untuk animasi.

Terapkan properti will-change untuk animasi yang kompleks.

Batasi jumlah animasi yang aktif secara bersamaan.

9. Standar Aksesibilitas
Kepatuhan WCAG 2.1
Kontras Warna: Minimal 4.5:1 untuk teks normal.

Navigasi Keyboard: Seluruh situs harus dapat dinavigasi sepenuhnya menggunakan keyboard.

Dukungan Screen Reader: Gunakan struktur heading yang benar dan label ARIA yang sesuai.

Indikator Fokus: Sediakan status fokus yang terlihat jelas untuk elemen interaktif.

Struktur HTML Semantik
<!-- Hierarki heading yang benar -->
<h1>Judul Halaman Utama</h1>
<h2>Judul Bagian</h2>
<h3>Sub-judul Bagian</h3>

<!-- Landmark navigasi -->
<nav aria-label="Navigasi utama">
  <ul>
    <li><a href="/programs">Program</a></li>
    <!-- ... -->
  </ul>
</nav>

<!-- Aksesibilitas formulir -->
<label for="email">Alamat Email</label>
<input type="email" id="email" required>

10. Strategi Konten
Prinsip Pesan
Jelas & Ringkas: Gunakan bahasa yang mudah dipahami.

Berorientasi Tindakan: Setiap bagian harus memiliki tujuan yang jelas.

Fokus pada Nilai: Komunikasikan manfaat langsung bagi pengguna.

Suara yang Konsisten: Profesional namun tetap ramah.

Hierarki Konten
Hero Section: Tagline yang kuat dan CTA utama.

Proposisi Nilai: 3-4 poin utama tentang keunggulan STIE Dwimulya.

Sorotan Program: Kartu program dengan deskripsi singkat.

Bukti Sosial: Testimoni, statistik, dan pencapaian.

Ajakan Bertindak: Langkah selanjutnya yang jelas untuk berbagai tipe pengguna.

11. Pengujian & Jaminan Kualitas
Protokol Pengujian UX
Uji Kegunaan (Usability Testing): Lakukan pengujian rutin dengan target pengguna.

Pengujian A/B: Uji variasi CTA dan tata letak utama.

Pemantauan Performa: Lacak metrik Core Web Vitals.

Audit Aksesibilitas: Lakukan pemeriksaan aksesibilitas otomatis dan manual secara berkala.

Kompatibilitas Lintas Browser
Uji pada versi terbaru Chrome, Firefox, Safari, dan Edge.

Pastikan pengalaman yang konsisten di semua browser.

Terapkan progressive enhancement untuk browser yang lebih lama.