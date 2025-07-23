# Panduan SEO untuk Website STIE Dwimulya

## 1. Tujuan Panduan SEO

Panduan ini bertujuan untuk memastikan website STIE Dwimulya dioptimalkan dengan baik untuk mesin pencari (SEO), meningkatkan visibilitas online, dan menarik calon mahasiswa, dosen, serta mitra yang relevan. Panduan ini selaras dengan identitas visual dan struktur website yang telah direncanakan dalam dokumen Adaptation Plan dan Design System.

---

## 2. Prinsip SEO Utama

1.  **Konten Berkualitas & Relevan:** Konten harus informatif, akurat, dan memberikan nilai nyata kepada pengguna.
2.  **Kecepatan & Performa:** Website harus cepat dimuat untuk memberikan pengalaman pengguna yang baik.
3.  **Mobile-First Indexing:** Website harus sepenuhnya responsif dan dioptimalkan untuk perangkat seluler.
4.  **Struktur & Navigasi yang Jelas:** Hierarki informasi dan navigasi yang intuitif membantu crawler memahami situs.
5.  **Aksesibilitas:** Website yang dapat diakses oleh semua pengguna, termasuk yang menggunakan teknologi bantu, cenderung memiliki SEO yang lebih baik.

---

## 3. Strategi SEO On-Page

### A. Optimisasi Judul dan Meta Deskripsi

*   **Judul Halaman (`<title>`):**
    *   Panjang: 50-60 karakter.
    *   Struktur: `[Topik Utama Halaman] | [STIE Dwimulya]` atau `[Nama Halaman] - STIE Dwimulya`.
    *   Contoh: "Program Studi Akuntansi - STIE Dwimulya", "Beranda - Sekolah Tinggi Ilmu Ekonomi Dwimulya".
*   **Meta Deskripsi:**
    *   Panjang: 150-160 karakter.
    *   Sertakan Call-to-Action (CTA) ringan.
    *   Contoh: "Temukan program studi Akuntansi unggulan di STIE Dwimulya. Kurikulum relevan, dosen berkualitas, dan prospek karir cerah menanti Anda."

### B. Penggunaan Heading Tags (H1-H6)

*   **H1:** Hanya satu per halaman, biasanya judul utama halaman.
*   **H2-H6:** Gunakan untuk subjudul dan membangun hierarki konten.
*   Terapkan sistem tipografi STIE Dwimulya (`Heading.astro`) dengan memastikan tag HTML-nya sesuai (H1, H2, dll.).
*   Masukkan keyword target secara alami dalam heading.

### C. Optimisasi Konten

*   **Keyword Research:** Identifikasi keyword target untuk setiap halaman (program studi, penerimaan, berita, dll.).
*   **Keyword Density:** Gunakan keyword secara alami, hindari *keyword stuffing*.
*   **Internal Linking:** Tautkan ke halaman lain dalam situs untuk membantu crawler menjelajah dan memperkuat struktur situs.
*   **External Linking:** Tautkan ke sumber terpercaya jika relevan untuk meningkatkan kredibilitas konten.
*   **Panjang Konten:** Untuk halaman utama seperti "Tentang Kami", "Program Studi", "Penerimaan", gunakan konten yang komprehensif (minimal 1000 kata).

### D. Optimisasi Gambar

*   **Nama File:** Gunakan nama deskriptif dengan keyword (misal: `mahasiswa-stie-dwimulya-kegiatan.jpg`).
*   **Alt Text:** Tulis deskripsi akurat dan informatif untuk setiap gambar. Sertakan keyword jika relevan tanpa memaksa.
*   **Ukuran File:** Kompres gambar untuk mempercepat loading (gunakan format WebP jika didukung).
*   **Struktur Folder:** Organisir gambar dalam folder yang jelas (misal: `/assets/img/program-studi/`, `/assets/img/berita/`).

### E. URL yang Ramah SEO

*   **Struktur:** Gunakan struktur URL yang bersih dan deskriptif.
*   **Karakter:** Gunakan huruf kecil, pisahkan kata dengan tanda hubung (-).
*   **Keyword:** Sertakan keyword utama dalam slug URL.
*   Contoh: `https://www.stiedwimulya.ac.id/program-studi/akuntansi`, `https://www.stiedwimulya.ac.id/berita/seminar-teknologi-2024`.

---

## 4. Strategi SEO Technical

### A. Arsitektur Situs & Navigasi

*   **Sitemap XML:** Buat dan kirimkan `sitemap.xml` ke Google Search Console. Termasuk semua halaman penting (`index.astro`, `tentang.astro`, `program-studi.astro`, halaman detail berita/dosen, dll.).
*   **Robots.txt:** Konfigurasikan file `robots.txt` untuk mengizinkan crawling pada halaman yang diinginkan dan mengecualikan halaman yang tidak perlu diindeks (misalnya, halaman admin).
*   **Breadcrumbs:** Implementasikan breadcrumb navigation untuk meningkatkan UX dan memberikan konteks lokasi halaman kepada crawler.
*   **Internal Linking:** Pastikan navigasi utama (`Header.astro`) dan footer (`Footer.astro`) memiliki tautan ke halaman-halaman utama. Gunakan tautan deskriptif dalam konten.

### B. Kecepatan & Performa

*   **Optimisasi Gambar:** Seperti disebutkan di atas.
*   **Minifikasi CSS/JS:** Pastikan file CSS dan JavaScript diminifikasi.
*   **Caching:** Implementasikan strategi caching yang tepat.
*   **Lazy Loading:** Gunakan lazy loading untuk gambar dan komponen di bawah lipat (below-the-fold).
*   **Core Web Vitals:** Pantau dan optimalkan Core Web Vitals (LCP, FID, CLS) melalui tools seperti Google PageSpeed Insights atau Lighthouse.

### C. Mobile Optimization

*   **Responsive Design:** Pastikan semua komponen (`Grid.astro`, `Section.astro`, dll.) sepenuhnya responsif sesuai panduan `@IDENTITAS_VISUAL.md`.
*   **Mobile-Friendly Test:** Gunakan Google Mobile-Friendly Test Tool secara berkala.

### D. Struktur Data (Schema Markup)

*   **Organization:** Untuk informasi dasar institusi.
*   **EducationalOccupationalProgram:** Untuk halaman Program Studi.
*   **Article:** Untuk halaman Berita.
*   **Person:** Untuk halaman Profil Dosen.
*   **Event:** Untuk halaman Acara (jika ada).
*   Gunakan format JSON-LD dan tempatkan di `<head>`.

### E. Internasionalisasi (Jika Diperlukan)

*   Jika website memiliki versi bahasa lain, implementasikan `hreflang` tags.

---

## 5. Optimisasi untuk Komponen dan Halaman Spesifik

Berdasarkan `@ADAPTATION_PLAN.md` dan `@IDENTITAS_VISUAL.md`:

*   **`HeroUtama.astro`:**
    *   Gunakan `<h1>` untuk tagline utama.
    *   Pastikan teks hero mengandung keyword utama untuk halaman beranda.
*   **`KeunggulanProgramStudi.astro` / `MengapaMemilihKami.astro`:**
    *   Gunakan `<h2>` atau `<h3>` untuk judul fitur/keunggulan.
    *   Gunakan `<p>` dengan bahasa persuasif dan keyword terkait.
*   **`InisiatifKampus.astro` / `GaleriKegiatan.astro`:**
    *   Gunakan `alt` text yang deskriptif untuk gambar kegiatan.
*   **`TestimoniCivitas.astro`:**
    *   Tidak langsung berdampak pada SEO teknis, tetapi meningkatkan kredibilitas halaman.
*   **`BeritaTerbaru.astro` / `BlogCard.astro`:**
    *   Pastikan setiap `BlogCard` memiliki tautan dengan slug URL yang SEO-friendly.
    *   Gunakan tanggal publikasi yang akurat.
*   **`FormulirKontak.astro`:**
    *   Gunakan schema `ContactPage` atau markup dalam struktur data.
*   **Halaman Dinamis (`[slug].astro`):**
    *   Pastikan setiap halaman detail (berita, dosen, fasilitas) memiliki `<title>`, meta description, dan konten unik yang dioptimalkan.

---

## 6. Strategi SEO Off-Page (Rekomendasi)

*   **Link Building:** Dapatkan backlink berkualitas dari situs akademik, pemerintah, media lokal, dan organisasi terpercaya.
*   **Social Media:** Aktif di media sosial untuk meningkatkan brand awareness dan traffic tidak langsung.
*   **Local SEO:** Klaim dan optimalkan Google Business Profile. Pastikan Nama, Alamat, dan Nomor Telepon (NAP) konsisten di web dan direktori online.
*   **Directory Submission:** Daftarkan institusi di direktori pendidikan terpercaya.

---

## 7. Monitoring & Tools

*   **Google Search Console:** Untuk memantau kinerja situs, mengidentifikasi masalah teknis, dan melihat keyword yang membawa traffic.
*   **Google Analytics:** Untuk memahami perilaku pengguna dan sumber traffic.
*   **Ahrefs / SEMrush / Ubersuggest:** Untuk riset keyword, analisis backlink, dan audit SEO kompetitor.
*   **Screaming Frog / Sitebulb:** Untuk audit teknis situs secara menyeluruh.

---

## 8. Checklist Implementasi SEO

**On-Page:**
- [ ] `<title>` unik dan dioptimalkan untuk setiap halaman
- [ ] Meta description unik dan menarik untuk setiap halaman
- [ ] Penggunaan heading tags (H1-H6) yang benar
- [ ] Konten berkualitas tinggi dengan keyword target
- [ ] Internal linking yang strategis
- [ ] Alt text untuk semua gambar
- [ ] URL yang bersih dan deskriptif

**Technical:**
- [ ] `sitemap.xml` dibuat dan dikirim
- [ ] `robots.txt` dikonfigurasi
- [ ] Struktur data (schema markup) diimplementasikan
- [ ] Kecepatan website dioptimalkan
- [ ] Website sepenuhnya mobile-friendly
- [ ] Tidak ada broken links

**Content:**
- [ ] Keyword research dilakukan untuk halaman utama
- [ ] Halaman "Tentang Kami" komprehensif
- [ ] Halaman "Program Studi" detail dengan kurikulum dan prospek karir
- [ ] Blog/berita diperbarui secara rutin
- [ ] Profil dosen lengkap dan teroptimasi

Dengan mengikuti panduan ini, website STIE Dwimulya akan memiliki fondasi SEO yang kuat yang selaras dengan identitas merek dan arsitektur website yang telah direncanakan.