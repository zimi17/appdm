# ADAPTATION PLAN: Tema Aero ke Website STIE Dwimulya

## Pendahuluan

Dokumen ini menguraikan rencana adaptasi tema "Aero" (khususnya dari direktori `aero/AeroPage/TS/src/app/landing/`) ke dalam website resmi STIE Dwimulya. Tujuannya adalah untuk memanfaatkan layout, komponen visual, dan pola interaktif modern dari tema Aero, sambil menyesuaikan konten dan fungsionalitas agar sesuai dengan kebutuhan spesifik dan identitas akademik STIE Dwimulya.

Kami akan mengadopsi prinsip "Astro Islands" untuk performa optimal. Ini berarti sebagian besar konten akan dirender di sisi server oleh Astro. Untuk fungsionalitas interaktif seperti slider, akordeon, dan navigasi dinamis, kami akan mengimplementasikannya dengan JavaScript murni di sisi klien atau menggunakan pustaka JavaScript minimal yang kompatibel dengan Astro. Komponen React dari tema Aero akan diadaptasi menjadi komponen Astro murni sebisa mungkin, meminimalkan penggunaan framework sisi klien kecuali jika benar-benar diperlukan untuk fitur yang kompleks.

Selain itu, kami akan mengintegrasikan dan memetakan konten yang sudah ada dari folder `preview/` di proyek saat ini, yang mencakup halaman HTML yang sudah ada (hasil dari Publii CMS) dan data feed.

## 1. Pemetaan Halaman Website STIE Dwimulya

Berikut adalah pemetaan halaman-halaman potensial di website STIE Dwimulya dengan referensi landing page di tema Aero dan keterkaitan dengan struktur `preview/` yang sudah ada.

| Halaman STIE Dwimulya        | Referensi Landing Page Aero (`aero/AeroPage/TS/src/app/landing/`) | Keterkaitan dengan `preview/`                                     | Catatan                                                                                                |
| :--------------------------- | :---------------------------------------------------------------- | :---------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- |
| **Beranda (Homepage)**       | `creative/`, `company/`, `marketing/`, `startup/`               | `preview/home/index.html`                                         | Akan menjadi kombinasi dari berbagai bagian (Hero, Features, Services, Initiatives, Testimonials, Blogs, CTA). Akan mengadaptasi layout dan konten dari homepage yang ada (widgets Publii akan diterjemahkan ke komponen Astro). |
| **Tentang Kami**             | `agency/`, `company/`, `startup/`, `photography/`, `portfolio-2/` | `preview/about-us/`, `preview/tentang/`, `preview/Sambutan/`      | Mengadaptasi bagian "About Us" atau serupa. Mungkin mencakup Sejarah, Visi & Misi, Struktur Organisasi, Sambutan Ketua. Konten akan diekstraksi dari file-file HTML yang ada. |
| **Program Studi**            | `creative/`, `ebook/`                                             | `preview/akuntansi/`, `preview/manajemen/`, `preview/Program/`  | Mengadaptasi bagian "Features", "Services", "Courses". Akan menampilkan detail S1 Akuntansi & S1 Manajemen, termasuk kurikulum dan prospek karir. |
| **Penerimaan Mahasiswa Baru**| `agency-2/` (`Pricing`), `charity/` (`JoinUs`)                    | `preview/admisi/`, `preview/penerimaan/`, `preview/pmb-online/` | Mengadaptasi bagian yang menampilkan informasi pendaftaran, persyaratan, jadwal, biaya, beasiswa. Mungkin juga mencakup formulir online jika relevan. |
| **Kehidupan Kampus**         | `photography/` (`Portfolio`), `portfolio/`, `portfolio-2/`       | `preview/galleries/`, `preview/gallery/`, `preview/video/`, `preview/video-2/`, `preview/ukm-dwimulya/`, `preview/musyawarah-mahasiswa-ke-2-stie-dwimulya/` | Mengadaptasi bagian "Gallery" atau "Projects" untuk menampilkan fasilitas, kegiatan mahasiswa, Unit Kegiatan Mahasiswa (UKM), galeri foto/video, dan acara seperti musyawarah mahasiswa. |
| **Berita & Acara**           | `creative/`, `agency/`, `agency-2/`, `company/`, `marketing/`, `photography/`, `portfolio/`, `portfolio-2/`, `startup/` | `preview/berita/`, `preview/blog/`, `preview/feed.xml`, `preview/feed.json` | Mengadaptasi bagian "Blogs" atau "News". Menampilkan daftar posting terbaru, mungkin memanfaatkan data dari feed RSS/JSON yang sudah ada. |
| **Profil Dosen & Staf**      | `finance/` (`Experts`), `agency/` (`Team` - jika ada)             | `preview/dosen/`                                                  | Mengadaptasi bagian yang menampilkan profil individu atau tim. Konten detail dosen akan diekstraksi dari halaman `preview/dosen/`. |
| **Mitra & Kerjasama**        | `portfolio/` (`Brands`), `company/` (`Brands`), `hosting/` (`Brands`) | Tidak ada halaman spesifik yang jelas di `preview/`, mungkin terintegrasi di halaman lain. | Mengadaptasi bagian yang menampilkan logo atau daftar institusi/perusahaan mitra. |
| **Kontak Kami**              | `agency/`, `charity/`, `company/`, `web-designer/`                | `preview/contact/`, `preview/contact-2/`                         | Mengadaptasi bagian "Contact Us" dengan formulir kontak dan informasi lokasi kampus.                   |
| **Halaman Detail Berita/Acara**| `agency/` (`Blog` - detail), `photography/` (`UpdatedBlogs` - detail) | Subfolder bernomor di `preview/media/posts/`, contoh: `preview/10-kegiatan-keren-untuk-mengisi-liburan-semester-agar-lebih-berkesan/index.html` | Halaman tunggal untuk menampilkan konten lengkap dari sebuah berita atau acara. Konten akan diekstraksi dari file HTML di subfolder tersebut. |
| **Halaman Detail Dosen**     | N/A (akan dibuat khusus)                                          | Mungkin subhalaman dari `preview/dosen/` atau detail terpisah.   | Halaman tunggal untuk menampilkan profil lengkap seorang dosen, mungkin dengan riwayat pendidikan, publikasi, dan bidang keahlian. |
| **Halaman Detail Fasilitas** | N/A (akan dibuat khusus)                                          | Mungkin subhalaman dari `preview/fasilitas/`.                    | Halaman tunggal untuk menampilkan detail sebuah fasilitas kampus (misalnya, deskripsi, foto, lokasi).  |
| **Halaman Detail UKM**       | N/A (akan dibuat khusus)                                          | Mungkin subhalaman dari `preview/ukm-dwimulya/`.                   | Halaman tunggal untuk menampilkan detail sebuah unit kegiatan mahasiswa, termasuk deskripsi, kegiatan, dan kontak. |
| **Halaman Detail Inisiatif/Proyek** | N/A (akan dibuat khusus)                                   | Mungkin detail dari item di `preview/galleries/` atau `preview/video/`. | Halaman tunggal untuk menampilkan detail sebuah inisiatif atau proyek, termasuk tujuan, hasil, dan pihak yang terlibat. |
| **Halaman Lainnya (Opsional)** | Berbagai sumber di Aero dan struktur `preview/`                   | `preview/kalender-akademik/`, `preview/dokumen-standar-perguruan-tinggi/`, dll. | Halaman-halaman spesifik lainnya seperti kalender akademik, dokumen penting, repository, dll. Akan diadaptasi sesuai kebutuhan. |

## 2. Pemetaan Komponen Kunci

Berikut adalah pemetaan komponen-komponen yang sering muncul di berbagai landing page Aero dan bagaimana mereka akan diadaptasi untuk website STIE Dwimulya, dengan penamaan yang lebih representatif dan relevansi dengan konten `preview/`:

| Komponen Aero (Contoh Nama) | Fungsi Umum di Aero                 | Nama Komponen Astro yang Diusulkan | Deskripsi Adaptasi & Keterkaitan dengan `preview/`                                                                 | Referensi Landing Page Aero |
| :-------------------------- | :---------------------------------- | :--------------------------------- | :----------------------------------------------------------------------------------------------------------------- | :-------------------------- |
| `Hero` / `HeroSwiper`       | Bagian pembuka halaman dengan judul besar, deskripsi, dan CTA. Bisa dengan gambar atau slider. | **`HeroUtama.astro`**              | Menampilkan sambutan kampus, informasi kunci, dan ajakan bertindak (misalnya, Daftar Sekarang). Akan mengadaptasi fitur slider dan teks dari `preview/home/index.html` (`RevSliderWidget`). | Semua landing page, `preview/home/` |
| `Features` / `Thim_Icon_Box_Widget` | Menyoroti fitur atau keunggulan produk/layanan. | **`KeunggulanProgramStudi.astro`** / **`MengapaMemilihKami.astro`** | Menampilkan fitur-fitur unggulan program studi atau alasan kuat memilih STIE Dwimulya. Akan mengadaptasi struktur `Thim_Icon_Box_Widget` dari `preview/home/`. | `creative/`, `agency-2/`, `hosting/`, `marketing/`, `portfolio/`, `preview/home/` |
| `Services`                  | Menampilkan daftar layanan yang ditawarkan. | **`LayananAkademik.astro`**        | Menampilkan program studi, fasilitas, atau layanan pendukung akademik. Konten akan disesuaikan dari halaman seperti `preview/fasilitas/` dan `preview/siakad/`. | `creative/`, `agency/`, `agency-2/`, `charity/`, `company/`, `hosting/`, `marketing/`, `startup/`, `web-designer/` |
| `ProjectSlider` / `Portfolio` / `Thim_Gallery_Video_Widget` | Menampilkan proyek atau karya dalam format slider atau grid. | **`InisiatifKampus.astro`** / **`GaleriKegiatan.astro`** | Menampilkan proyek mahasiswa/dosen, kegiatan kampus, atau galeri foto/video. Akan menggunakan Swiper (dari Aero) dan mengintegrasikan konten dari `preview/galleries/`, `preview/video/`, dan halaman kegiatan. | `creative/`, `agency/`, `agency-2/`, `marketing/`, `photography/`, `portfolio/`, `portfolio-2/`, `startup/` (`Work`), `web-designer/` (`Works`), `preview/home/`, `preview/galleries/`, `preview/video/` |
| `TestimonialSlider` / `Testimonial` / `Thim_Testimonials_Widget` | Menampilkan ulasan atau testimoni dari klien/pengguna. | **`TestimoniCivitas.astro`**       | Menampilkan kutipan atau ulasan inspiratif dari mahasiswa, alumni, dosen, atau orang tua. Akan mengadaptasi struktur Swiper dari Aero dan konten dari `Thim_Testimonials_Widget` di `preview/home/`. | `creative/`, `charity/`, `company/`, `ebook/`, `finance/`, `hosting/`, `marketing/`, `marketing-2/`, `portfolio-2/`, `startup/`, `preview/home/` |
| `FAQs`                      | Bagian tanya jawab umum.            | **`PertanyaanUmum.astro`**         | Menampilkan daftar pertanyaan yang sering diajukan beserta jawabannya dalam format akordeon. Akan mengadaptasi struktur dari Aero dan konten dari `preview/faq/` atau `preview/faqs/`. | `creative/`, `agency/`, `agency-2/`, `company/`, `hosting/`, `marketing/`, `photography/`, `portfolio/`, `marketing-3/`, `web-designer/`, `preview/faq/`, `preview/faqs/` |
| `Blogs` / `Thim_List_Post_Widget` | Menampilkan daftar posting blog atau berita. | **`BeritaTerbaru.astro`** / **`InformasiKampus.astro`** | Menampilkan cuplikan berita, artikel, atau pengumuman terbaru. Akan mengadaptasi struktur dari Aero dan menampilkan data dari `preview/feed.xml`, `preview/feed.json`, atau daftar posting di `preview/berita/` dan `preview/blog/`. | `creative/`, `agency/`, `agency-2/`, `company/`, `marketing/`, `photography/` (`UpdatedBlogs`), `portfolio/`, `portfolio-2/`, `startup/`, `preview/home/`, `preview/berita/`, `preview/blog/` |
| `Contact` / `ContactUs`     | Formulir kontak dan informasi kontak (alamat, telepon, email). | **`FormulirKontak.astro`** / **`KontakKampus.astro`** | Menyediakan cara bagi pengunjung untuk menghubungi STIE Dwimulya. Akan mengadaptasi struktur formulir dari Aero dan informasi kontak dari `preview/contact/`. | `agency/`, `charity/`, `company/`, `marketing-2/`, `web-designer/`, `preview/contact/`, `preview/contact-2/` |
| `Brands` / `Clients`        | Menampilkan logo mitra atau klien.    | **`MitraKerjasama.astro`**         | Menampilkan logo institusi atau perusahaan yang bekerja sama dengan STIE Dwimulya. Akan mengadaptasi struktur dari Aero. | `company/`, `hosting/`, `portfolio/` |
| `About`                     | Bagian yang memberikan informasi latar belakang atau cerita. | **`TentangSection.astro`**         | Digunakan di halaman "Tentang Kami" untuk detail Sejarah, Visi & Misi. Akan mengadaptasi struktur dari Aero dan konten dari `preview/about-us/`, `preview/tentang/`. | `agency/`, `ebook/`, `marketing/`, `marketing-2/`, `photography/`, `portfolio/`, `portfolio-2/`, `startup/`, `web-designer/` |
| `Pricing`                   | Menampilkan pilihan harga atau paket. | **`InformasiBiayaPendidikan.astro`** / **`PaketBeasiswa.astro`** | Mengadaptasi format tampilan dari Aero untuk menyajikan informasi biaya studi atau paket beasiswa. Konten dari halaman terkait di `preview/` jika ada. | `agency-2/`, `hosting/`            |
| `Newsletter`                | Formulir untuk berlangganan newsletter. | **`FormLanggananBerita.astro`**    | Formulir untuk pendaftaran newsletter atau milis informasi kampus. Akan mengadaptasi struktur formulir dari Aero. | `charity/`, `ebook/` (`SubscribeToMail`) |
| `Team`                      | Menampilkan profil anggota tim.     | **`DaftarDosenStaff.astro`**       | Menampilkan foto, nama, dan jabatan dosen serta staf administrasi. Akan mengadaptasi struktur dari Aero dan data dari `preview/dosen/`. | `agency/` (jika ada), `finance/` (`Experts`) |
| `CallToAction` / `ActionBox`| Bagian dengan pesan kuat dan ajakan bertindak. | **`AjakanBergabung.astro`**        | Mendorong pengunjung untuk melakukan tindakan tertentu, seperti mendaftar atau mengunduh brosur. Akan mengadaptasi struktur dari Aero dan menyesuaikan teks CTA. | `photography/`, `portfolio/`, `portfolio-2/`, `marketing-2/`, `marketing-3/` |
| `Statistics` / `Counter` / `Thim_Counters_Box_Widget` | Menampilkan angka-angka statistik atau pencapaian. | **`StatistikKampus.astro`**        | Menampilkan jumlah mahasiswa, alumni, program studi, atau pencapaian kampus. Akan mengadaptasi struktur dari Aero dan widget counter dari `preview/home/`. | `startup/`, `charity/`, `preview/home/` |
| `SocialLinks`               | Menampilkan ikon dan tautan media sosial. | **`TautanMediaSosial.astro`**      | Akan diadaptasi dari footer Aero atau elemen lain yang relevan. Konten dari `preview/home/` footer. | Umum di berbagai halaman |

## 3. Struktur Direktori Proyek

Struktur direktori untuk komponen Astro akan diorganisir secara logis di dalam folder `src/`.

```
src/
├── components/
│   ├── layouts/       // Layout dasar untuk halaman
│   │   └── KinseyLayout.astro
│   ├── ui/            // Komponen UI dasar yang dapat digunakan kembali (e.g., Button, Input, Card, Accordion)
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Accordion.astro
│   │   └── ...
│   ├── shared/        // Komponen yang digunakan di lebih dari satu bagian/halaman
│   │   ├── BlogCard.astro // Untuk menampilkan cuplikan blog
│   │   ├── ProjectCard.astro // Untuk menampilkan cuplikan proyek/inisiatif
│   │   ├── TestimonialCard.astro // Untuk menampilkan cuplikan testimonial
│   │   └── ...
│   └── sections/      // Komponen untuk setiap bagian utama di halaman (seringkali full-width)
│       ├── HeroUtama.astro
│       ├── KeunggulanProgramStudi.astro
│       ├── LayananAkademik.astro
│       ├── InisiatifKampus.astro
│       ├── TestimoniCivitas.astro
│       ├── PertanyaanUmum.astro
│       ├── BeritaTerbaru.astro
│       ├── FormulirKontak.astro
│       ├── MitraKerjasama.astro
│       ├── StatistikKampus.astro
│       ├── AjakanBergabung.astro
│       └── ...
├── layouts/
│   └── KinseyLayout.astro // Layout utama (sudah dimodifikasi)
├── pages/             // Halaman-halaman utama website
│   ├── index.astro            // Homepage
│   ├── tentang.astro          // Halaman Tentang Kami
│   ├── program-studi.astro    // Halaman Program Studi
│   ├── penerimaan.astro       // Halaman Penerimaan Mahasiswa Baru
│   ├── kehidupan-kampus.astro // Halaman Kehidupan Kampus
│   ├── berita/                // Direktori untuk halaman daftar berita/blog
│   │   └── index.astro
│   ├── berita/
│   │   └── [slug].astro       // Halaman detail berita (menggunakan konten MD/Markdown/CMS)
│   ├── dosen/                 // Direktori untuk halaman daftar dosen
│   │   └── index.astro
│   ├── dosen/
│   │   └── [slug].astro       // Halaman detail dosen
│   ├── fasilitas/
│   │   └── index.astro
│   │   └── [slug].astro       // Halaman detail fasilitas
│   ├── ukm/
│   │   └── index.astro
│   │   └── [slug].astro       // Halaman detail UKM
│   └── kontak.astro           // Halaman Kontak Kami
├── data/              // Folder untuk menyimpan data dalam bentuk JSON/TS (misalnya, untuk berita, dosen, program studi)
│   ├── site.ts        // Data global website (nama, deskripsi, dll.)
│   ├── menu.ts        // Struktur menu navigasi
│   ├── hero.ts        // Data slide hero
│   ├── features.ts    // Data fitur/keunggulan
│   ├── services.ts    // Data layanan/fasilitas
│   ├── projects.ts    // Data proyek/inisiatif
│   ├── testimonials.ts // Data testimonial
│   ├── faqs.ts        // Data FAQ
│   ├── blog.ts        // Data blog/berita (jika tidak dari CMS)
│   ├── authors.ts     // Data penulis (untuk blog)
│   └── ...
├── assets/            // Aset statis seperti gambar, CSS kustom, font
│   ├── css/
│   │   ├── main.css
│   │   └── vendor.css
│   ├── img/
│   │   └── content/   // Gambar konten spesifik halaman
│   │   └── posts/     // Gambar untuk posting blog/berita
│   │   └── ...
│   ├── js/
│   │   └── custom-scripts.js // Skrip JavaScript kustom atau inisialisasi pustaka
│   └── svg/
│       └── icons.svg
│       └── ...
└── utils/             // Berisi helper functions atau utilitas
    ├── index.ts
    └── formatting.ts

```

## 4. Pendekatan Implementasi

*   **Astro murni untuk sebagian besar konten:** Komponen yang bersifat statis atau hanya membutuhkan sedikit interaktivitas akan dibangun sepenuhnya dengan sintaks `.astro`. Ini memaksimalkan performa sisi server.
*   **JavaScript Sisi Klien untuk Interaktivitas:**
    *   **Slider (Swiper.js):** Akan diinisialisasi di dalam tag `<script>` di file `.astro` menggunakan `document.addEventListener('DOMContentLoaded', ...)`. Konfigurasi Swiper akan disesuaikan untuk setiap instance slider.
    *   **Akordeon (FAQs):** Dapat diimplementasikan dengan JavaScript murni untuk mengelola kelas CSS yang menampilkan/menyembunyikan konten. Jika tema Aero menggunakan pustaka Headless UI (seperti Headless UI dari Tailwind CSS atau sejenisnya) yang ringan, kita bisa mencoba mengadaptasi logikanya ke JavaScript vanilla atau mengimpor pustaka tersebut jika ukurannya minimal dan tidak memberatkan.
    *   **Scroll Spy Navigasi:** Logika untuk menyoroti item navigasi saat scroll akan dipertahankan dalam skrip di `KinseyLayout.astro`.
*   **Pengambilan Data:**
    *   Data untuk komponen (misalnya, slide hero, item fitur, proyek, testimonial, pertanyaan umum, berita) akan didefinisikan dalam file `.ts` atau `.json` di folder `src/data/`.
    *   Untuk konten yang sudah ada di folder `preview/`, proses ekstraksi konten (teks, gambar, tautan) akan dilakukan secara manual atau dengan skrip jika memungkinkan, kemudian diatur ke dalam format data terstruktur di `src/data/`.
    *   Untuk halaman detail (berita, dosen, fasilitas), kita dapat menggunakan **Content Collections Astro** (jika ada struktur data terstruktur) atau mengambil konten langsung dari file HTML pratinjau yang ada dan menampilkannya sebagai `raw HTML` atau menguraikannya menjadi komponen Astro.
*   **Manajemen Gaya (Styling):**
    *   Kami akan terus menggunakan framework CSS seperti Tailwind CSS (jika sudah dikonfigurasi atau akan dikonfigurasi di proyek Astro) untuk gaya utility-first.
    *   Gaya kustom yang spesifik untuk komponen atau layout akan ditulis dalam blok `<style>` di dalam file `.astro` atau dalam file CSS terpisah yang diimpor.
    *   Ikon SVG dari tema Aero akan diinlin dalam HTML atau disimpan sebagai komponen Astro terpisah di `src/components/ui/icons/` untuk kemudahan penggunaan.

## 5. Langkah-Langkah Selanjutnya

1.  **Penyelesaian Homepage (`index.astro`):**
    *   Selesaikan adaptasi `TestimonialSlider.tsx` menjadi `TestimoniCivitas.astro` di `index.astro`.
    *   Selesaikan adaptasi `FAQs.tsx` menjadi `PertanyaanUmum.astro` di `index.astro`.
    *   Selesaikan adaptasi `Blogs.tsx` menjadi `BeritaTerbaru.astro` di `index.astro`.
    *   Tambahkan komponen `StatistikKampus.astro` (dari `Thim_Counters_Box_Widget` di `preview/home/`).
    *   Sesuaikan teks dan gambar placeholder dengan konten relevan STIE Dwimulya.
    *   Pastikan semua skrip JavaScript (Swiper, akordeon, scroll spy) diinisialisasi dengan benar di `KinseyLayout.astro` atau di halaman masing-masing dengan `is:inline` atau `client:` directives.

2.  **Pembuatan Halaman Dasar:**
    *   Buat file `.astro` baru di `src/pages/` untuk halaman-halaman utama yang teridentifikasi (`tentang.astro`, `program-studi.astro`, `penerimaan.astro`, `kehidupan-kampus.astro`, `kontak.astro`).
    *   Gunakan `KinseyLayout.astro` sebagai layout untuk halaman-halaman ini.

3.  **Pengembangan Komponen Reusable:**
    *   Ekstrak bagian-bagian berulang dari `index.astro` menjadi komponen Astro terpisah di `src/components/sections/` (misalnya, `HeroUtama.astro`, `KeunggulanProgramStudi.astro`, `InisiatifKampus.astro`, dll.).
    *   Buat komponen UI dasar di `src/components/ui/` jika ada elemen yang sangat generik.
    *   Buat komponen shared di `src/components/shared/` untuk item seperti `BlogCard.astro` atau `ProjectCard.astro`.

4.  **Ekstraksi dan Organisasi Data:**
    *   Mulai proses ekstraksi konten dari file HTML di folder `preview/` dan atur ke dalam struktur data yang sesuai di `src/data/`.
    *   Misalnya, buat `src/data/berita.ts` atau `src/data/dosen.ts` yang berisi array objek dengan properti seperti `title`, `description`, `image`, `slug`, dll.

5.  **Implementasi Halaman Detail (Dinamis):**
    *   Gunakan [Dynamic Routes Astro](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes) untuk halaman detail seperti `src/pages/berita/[slug].astro` atau `src/pages/dosen/[slug].astro`.
    *   Halaman ini akan mengambil data dari `src/data/` berdasarkan `slug` dan menampilkan konten lengkapnya.

6.  **Optimasi dan Responsivitas:**
    *   Pastikan semua komponen dan halaman responsif di berbagai ukuran layar.
    *   Lakukan optimasi gambar dan aset lainnya.
    *   Periksa performa dan aksesibilitas.

7.  **Pengujian:**
    *   Lakukan pengujian fungsionalitas dan visual secara menyeluruh.

Dokumentasi ini akan terus diperbarui dan disempurnakan seiring berjalannya proses adaptasi.
