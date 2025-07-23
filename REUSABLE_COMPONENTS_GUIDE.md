# REUSABLE COMPONENTS GUIDE: Website STIE Dwimulya

## 1. Tujuan Komponen Reusable

Pengembangan website STIE Dwimulya dengan mengadaptasi tema Aero dan konten `preview/` akan sangat mengandalkan komponen yang dapat digunakan kembali (reusable components). Tujuan utama dari pendekatan ini adalah:

*   **Konsistensi UI/UX:** Memastikan tampilan dan pengalaman pengguna yang seragam di seluruh website, sesuai dengan pedoman visual (`@IDENTITAS_VISUAL.md`) dan UI/UX (`@UI_UX.guidelines.md`).
*   **Efisiensi Pengembangan:** Mengurangi duplikasi kode dan mempercepat proses pengembangan dengan menggunakan blok bangunan yang sudah jadi.
*   **Maintainabilitas:** Mempermudah pembaruan dan perbaikan, karena perubahan pada satu komponen akan tercermin di semua tempat penggunaannya.
*   **Skalabilitas:** Memungkinkan penambahan fitur dan halaman baru dengan lebih mudah dan cepat di masa depan.
*   **Kolaborasi:** Mempermudah kolaborasi antar pengembang dengan struktur kode yang terstandardisasi.

## 2. Prinsip Desain Komponen

Dalam membangun komponen reusable, kami akan mengikuti prinsip-prinsip berikut:

*   **Modularitas:** Setiap komponen harus memiliki satu tanggung jawab yang jelas dan terisolasi.
*   **Keterpisahan Kekhawatiran (Separation of Concerns):** Logika, data, dan presentasi harus dipisahkan sebisa mungkin.
*   **Fleksibilitas (Props-driven):** Komponen harus dapat menerima data (props) untuk mengkustomisasi tampilan dan perilakunya, sehingga dapat digunakan dalam berbagai konteks.
*   **Aksesibilitas:** Memastikan komponen dirancang dengan mempertimbangkan standar aksesibilitas web.
*   **Kinerja:** Mengoptimalkan komponen untuk loading cepat dan rendering yang efisien.

## 3. Katalog Komponen Reusable yang Diusulkan

Berikut adalah daftar komponen reusable utama yang akan dikembangkan, dengan mempertimbangkan adaptasi dari tema Aero (`@aero/AeroPage/TS/src/app/landing/creative/` dan lainnya), konten `preview/`, serta kebutuhan spesifik STIE Dwimulya.

### Struktur Direktori Komponen:

Komponen akan ditempatkan di `src/components/` dengan sub-direktori yang logis:

```
src/
├── components/
│   ├── layouts/       // Layout dasar untuk halaman (mis. KinseyLayout.astro)
│   ├── ui/            // Komponen UI dasar yang sangat generik dan dapat digunakan kembali di mana saja (mis. Button, Card, Form elements)
│   ├── modules/        // Komponen yang mewakili bagian logis atau fungsionalitas tertentu (mis. slider, accordion, navigasi)
│   ├── sections/      // Komponen untuk setiap bagian utama di halaman (seringkali full-width dan mengandung sub-komponen)
│   └── shared/        // Komponen yang kecil dan digunakan di berbagai sections/pages (mis. BlogCard, IconBox, Avatar)
```

### Daftar Komponen:

| Nama Komponen Astro           | Tipe Direktori | Sumber Adaptasi Aero / Preview                         | Kebutuhan Data (Props) & Fungsionalitas                  | Pertimbangan UI/UX & Ikon                                                              | Kebutuhan .astro / .tsx |
| :---------------------------- | :------------- | :----------------------------------------------------- | :------------------------------------------------------- | :-------------------------------------------------------------------------------------- | :---------------------- |
| `layouts/KinseyLayout.astro` | `layouts`      | `aero/AeroPage/TS/src/components/TopNavBar.tsx` (untuk navigasi) | `title`, `description`, `className`. Mengelola struktur dasar HTML, meta tags, CSS global, dan skrip global (Swiper, HS Overlay, Scroll Spy). | Navigasi responsif, logo STIE Dwimulya. Memastikan font dan warna dasar dari `@IDENTITAS_VISUAL.md`. | `.astro`                |
| `sections/HeroUtama.astro`    | `sections`     | `aero/AeroPage/TS/src/app/landing/creative/components/HeroSwiper.tsx`, `preview/home/index.html` (RevSliderWidget) | `slides: { title: string, description: string, image: string }[]`. Fungsionalitas slider. | Layout hero yang menarik, tipografi judul utama (dari `@IDENTITAS_VISUAL.md`). Navigasi slider (panah/dot) yang jelas. | `.astro` (dengan JS sisi klien untuk Swiper) |
| `sections/KeunggulanProgramStudi.astro` | `sections`     | `aero/AeroPage/TS/src/app/landing/creative/components/Features.tsx`, `preview/home/index.html` (Thim_Icon_Box_Widget) | `features: { icon: string, title: string, description: string, link: string }[]`. | Desain kartu/box yang bersih, ikon yang relevan. Warna aksen (dari `@IDENTITAS_VISUAL.md`). Hover effects. | `.astro`                |
| `sections/LayananAkademik.astro` | `sections`     | `aero/AeroPage/TS/src/app/landing/creative/components/Services.tsx` | `services: { title: string, link: string, icon?: string }[]`. Mungkin juga `imageUrl: string` untuk bagian gambar. | Tampilan daftar layanan yang terstruktur, tautan yang jelas. Ikon pendukung.            | `.astro`                |
| `sections/InisiatifKampus.astro` | `sections`     | `aero/AeroPage/TS/src/app/landing/creative/components/ProjectSlider.tsx`, `preview/galleries/`, `preview/video/` | `projects: { title: string, subTitle: string, image: string, link: string }[]`. Fungsionalitas slider. | Tampilan proyek/kegiatan dengan gambar, judul, dan deskripsi singkat. Navigasi slider. | `.astro` (dengan JS sisi klien untuk Swiper) |
| `sections/TestimoniCivitas.astro` | `sections`     | `aero/AeroPage/TS/src/app/landing/creative/components/TestimonialSlider.tsx`, `preview/home/index.html` (Thim_Testimonials_Widget) | `testimonials: { name: string, role: string, text: string, avatar: string }[]`. Fungsionalitas slider. | Desain kutipan testimoni yang menonjol, rating bintang (jika ada).                   | `.astro` (dengan JS sisi klien untuk Swiper) |
| `sections/PertanyaanUmum.astro` | `sections`     | `aero/AeroPage/TS/src/app/landing/creative/components/FAQs.tsx`, `preview/faq/` | `faqs: { question: string, answer: string }[]`. Fungsionalitas akordeon (toggle). | Item akordeon yang mudah diakses dan informatif. Ikon panah untuk buka/tutup.    | `.astro` (dengan JS sisi klien untuk akordeon) |
| `sections/BeritaTerbaru.astro` | `sections`     | `aero/AeroPage/TS/src/app/landing/creative/components/Blogs.tsx`, `preview/berita/`, `preview/blog/`, `preview/feed.xml` | `blogs: { title: string, description: string, image: string, date: string, author: string, link: string }[]`. | Tampilan daftar berita (grid atau list). Gambar thumbnail. Link ke halaman detail. | `.astro`                |
| `sections/FormulirKontak.astro` | `sections`     | `aero/AeroPage/TS/src/app/landing/agency/components/Contact.tsx`, `preview/contact/` | Mengelola input formulir (nama, email, pesan). Integrasi dengan layanan pengiriman formulir (jika diperlukan). | Desain formulir yang jelas dan mudah diisi.                                             | `.astro` (dengan JS sisi klien untuk validasi/submission) |
| `sections/StatistikKampus.astro` | `sections`     | `preview/home/index.html` (Thim_Counters_Box_Widget) | `stats: { label: string, value: number, icon?: string }[]`. Fungsionalitas animasi counter (jika ada). | Tampilan angka statistik yang besar dan jelas. Ikon pendukung.                       | `.astro` (dengan JS sisi klien untuk animasi) |
| `shared/BlogCard.astro`       | `shared`       | `aero/AeroPage/TS/src/app/landing/creative/components/BlogCard.tsx` | `blog: { title: string, description: string, image: string, date: string, author: string, link: string }`. | Kartu tunggal untuk setiap item blog/berita.                                          | `.astro`                |
| `shared/IconBox.astro`        | `shared`       | `preview/home/index.html` (Thim_Icon_Box_Widget) | `icon: string`, `title: string`, `description: string`, `link: string`. | Box dengan ikon di atas atau samping, judul, deskripsi, dan link. Konsisten dengan gaya tema. | `.astro`                |
| `ui/Button.astro`             | `ui`           | Umum di Aero, `preview/home/index.html` (`widget_button`) | `text: string`, `href: string`, `variant: 'primary' | 'secondary' | 'outline'`, `size: 'sm' | 'md' | 'lg'`. | Berbagai varian tombol (warna, ukuran, outline) sesuai `@UI_UX.guidelines.md`. | `.astro`                |
| `ui/Card.astro`               | `ui`           | Umum di Aero, `preview/home/index.html` (`card`, `shadow-sm`) | `children: any`, `className?: string`.                                    | Styling dasar untuk kartu (border, shadow, padding).                                 | `.astro`                |

## 4. Strategi Pengelolaan Ikon

Untuk konsistensi dan performa, kami akan menerapkan strategi berikut untuk ikon:

*   **Prioritas SVG Inline:** Untuk ikon sederhana dan spesifik yang sering digunakan, kami akan langsung menginlin SVG di dalam komponen Astro. Ini menghindari permintaan HTTP tambahan dan memungkinkan styling dengan CSS.
*   **Komponen Ikon Astro:** Untuk ikon yang lebih kompleks atau yang digunakan di banyak tempat dengan sedikit variasi, kami akan membuat komponen Astro terpisah (misalnya, `src/components/ui/icons/LuArrowRight.astro`) yang merender SVG. Ini memungkinkan pengelolaan terpusat dan mudah diimpor.
*   **Adaptasi `react-icons`:** Karena tema Aero menggunakan `react-icons` (seperti `LuComponent`, `LuMoveRight`), kami akan mengambil path SVG mentah dari ikon-ikon tersebut dan mengubahnya menjadi SVG inline atau komponen Astro. Ini menghindari ketergantungan pada React hanya untuk ikon.
*   **Ikon dari `preview/`:** Jika ada ikon spesifik di `preview/` yang tidak ada di Lucide Icons (yang mirip dengan `react-icons/lu`), kami akan mengekstrak SVG-nya dan menambahkannya ke pustaka ikon internal.
*   **Pustaka Ikon Eksternal (Opsional):** Jika ada kebutuhan ikon yang sangat luas dan tidak dapat dipenuhi dengan SVG kustom atau adaptasi, kami mungkin mempertimbangkan pustaka ikon berbasis font (misalnya, Font Awesome) yang dimuat secara selektif untuk meminimalkan ukuran bundle.

## 5. Panduan Pemilihan Teknologi (.astro vs .tsx)

Keputusan untuk menggunakan `.astro` (untuk Astro murni) atau `.tsx` (untuk komponen React yang di-hydrated di Astro) akan didasarkan pada kebutuhan interaktivitas dan kompleksitas logika:

*   **Gunakan `.astro` jika:**
    *   Komponen bersifat statis atau sebagian besar statis.
    *   Interaktivitas terbatas pada event handler DOM sederhana (misalnya, klik tombol yang mengubah kelas CSS) yang dapat diimplementasikan dengan JavaScript vanilla di dalam tag `<script>` (menggunakan `client:load`, `client:visible`, dll. jika perlu).
    *   Tidak ada manajemen state kompleks yang melibatkan hooks React (useState, useEffect, dll.).
    *   Contoh: Kartu konten, bagian hero statis, footer, header non-interaktif, elemen UI dasar seperti tombol tanpa state internal kompleks.
    *   **Contoh Adaptasi:** `HeroUtama.astro` (menggunakan JS sisi klien untuk Swiper), `KeunggulanProgramStudi.astro`, `LayananAkademik.astro`, `BeritaTerbaru.astro`.

*   **Gunakan `.tsx` (dengan integrasi React Astro) jika:**
    *   Komponen membutuhkan manajemen state yang kompleks atau interaktivitas yang dinamis yang sulit atau tidak efisien untuk diimplementasikan dengan JavaScript vanilla atau Astro murni.
    *   Ada ketergantungan pada hooks React atau ekosistem React yang luas (misalnya, pustaka grafik yang dibangun di React, formulir kompleks dengan validasi real-time).
    *   Komponen tersebut memang sangat dioptimalkan untuk React dan re-implementasi di Astro murni akan memakan waktu atau kurang performa.
    *   **Prioritas Rendah:** Pendekatan ini akan dihindari sebisa mungkin untuk menjaga ukuran bundle JavaScript seminimal mungkin, sesuai filosofi Astro.
    *   **Contoh Potensial (jarang):** Formulir pendaftaran multi-langkah yang kompleks dengan validasi sisi klien yang rumit, komponen dashboard real-time (tidak relevan untuk website publik).

## 6. Workflow Implementasi Komponen

1.  **Analisis & Pemetaan:** Identifikasi bagian atau elemen yang akan dijadikan komponen, tentukan sumber adaptasinya (Aero, Preview, atau baru), dan definisikan props yang dibutuhkan. Gunakan dokumen ini sebagai panduan.
2.  **Pembuatan File Komponen:** Buat file `.astro` baru di lokasi yang sesuai dalam `src/components/`.
3.  **Adaptasi Struktur HTML & CSS:** Salin dan sesuaikan markup HTML serta kelas CSS dari sumber Aero atau `preview`. Pastikan kelas Tailwind CSS digunakan dengan benar.
4.  **Integrasi Ikon:** Ganti ikon `react-icons` dengan SVG inline atau komponen ikon Astro yang relevan.
5.  **Pengelolaan Data (Props):** Definisikan `props` di bagian `---` komponen Astro dan gunakan data yang diimpor dari folder `src/data/` atau diteruskan langsung.
6.  **Fungsionalitas Interaktif (JS sisi klien):** Untuk slider, akordeon, atau elemen interaktif lainnya, tulis kode JavaScript vanilla di dalam tag `<script>` di dalam komponen Astro atau di `KinseyLayout.astro`. Pastikan kode ini hanya dieksekusi setelah DOM siap.
7.  **Pengujian:** Uji setiap komponen secara terisolasi dan juga saat diintegrasikan ke dalam halaman untuk memastikan tampilan dan fungsionalitas yang benar.
8.  **Dokumentasi Internal:** Tambahkan komentar yang jelas di dalam kode komponen untuk menjelaskan tujuan, props, dan fungsionalitas khusus.

## 7. Data Flow untuk Komponen

Data akan menjadi inti dari komponen reusable. Kami akan mengelola data dengan cara berikut:

*   **Data Statis Global (`src/data/site.ts`):** Informasi situs umum seperti nama situs, deskripsi, informasi kontak dasar.
*   **Data Menu Navigasi (`src/data/menu.ts`):** Struktur menu utama dan submenu.
*   **Data Spesifik Bagian/Halaman (`src/data/*.ts`):** Data untuk setiap bagian konten (misalnya, `hero.ts` untuk slide hero, `features.ts` untuk daftar fitur, `blog.ts` untuk entri blog). Data ini akan diekspor sebagai array objek atau objek tunggal.
*   **Props Passing:** Data akan diimpor ke halaman `.astro` (misalnya, `index.astro`) dan kemudian diteruskan sebagai props ke komponen `sections/` yang relevan.
    ```astro
    ---
    import { heroSlides } from '../../data/hero';
    import HeroUtama from '../../components/sections/HeroUtama.astro';
    ---
    <HeroUtama slides={heroSlides} />
    ```
*   **Astro Content Collections (Opsional, untuk konten Markdown/MDX):** Untuk konten seperti posting blog, detail dosen, atau halaman statis yang banyak, kami akan mempertimbangkan menggunakan Content Collections Astro. Ini memungkinkan kita mendefinisikan skema data dan mengelola konten di file Markdown/MDX secara terstruktur.

Dokumen ini akan menjadi referensi utama bagi tim pengembang untuk memastikan konsistensi dan efisiensi dalam membangun website STIE Dwimulya.