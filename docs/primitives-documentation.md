# Panduan Komponen Primitives

Dokumen ini memberikan panduan untuk *primitives*, yaitu komponen dasar yang digabungkan untuk membuat komponen yang lebih kompleks. Pengguna utama dokumentasi ini adalah pengembang yang memperluas Design System STIE Dwimulya.

---

## Deskripsi Primitives

Primitives adalah blok bangunan elemental dari *design system*. Mereka adalah komponen terkecil yang dapat digunakan kembali dan harus dirancang dengan mempertimbangkan fleksibilitas dan konsistensi.

---

## Daftar Primitives & Status

| Primitive | Sudah Ada? | Deskripsi |
| :--- | :---: | :--- |
| **Archive Page Facets** | ✅ | Menyediakan checkbox multi-pilih untuk pemfilteran faceted. |
| **Archive Page Pagination** | ✅ | Tautan bernomor untuk memecah daftar panjang entri di beberapa halaman. |
| **Arrow Button** | ✅ | Tombol untuk memajukan konten maju atau mundur (terintegrasi dalam Carousel, dll). |
| **Article Share Tools** | ❌ | Alat berbagi standar untuk artikel (perlu disesuaikan untuk WhatsApp, dll). |
| **Article Tease** | ❌ | Tautan teaser artikel standar untuk digunakan dalam daftar artikel. |
| **Aside** | ✅ | Konten sidebar untuk halaman dan artikel. |
| **Book Tease** | ❌ | Tautan teaser buku standar. (Tidak relevan untuk saat ini). |
| **Breadcrumbs** | ✅ | Tautan navigasi untuk struktur halaman hierarkis. |
| **Byline** | ❌ | Baris nama penulis artikel yang terstandardisasi. |
| **Component Header** | ✅ | Judul terstandardisasi untuk digunakan dalam komponen. |
| **CTA** | ✅ | Tautan Call to Action (CTA) terstandardisasi. |
| **Embed** | ❌ | Komponen untuk menyematkan media (YouTube, dll) secara responsif. |
| **Event Feed Tease** | ❌ | Tautan teaser acara standar untuk digunakan dalam daftar acara. |
| **Form** | ✅ | Elemen formulir yang sudah di-styling (Input, Select, dll. dari ShadCN). |
| **Head** | ✅ | Elemen `<head>` standar yang ditangani oleh Next.js. |
| **Icon** | ✅ | Komponen ikonografi standar (menggunakan `lucide-react`). |
| **Kaltura Embed** | ❌ | Embed video Kaltura. (Tidak relevan, akan menggunakan Embed generik). |
| **Logo** | ✅ | Logo STIE Dwimulya yang terstandardisasi. |
| **Media Asset** | ✅ | Komponen untuk gambar (`LazyImage`). |
| **Newsletter Signup** | ❌ | Contoh formulir sederhana untuk pendaftaran newsletter. |
| **Page Section** | ❌ | Komponen untuk mensegmentasi halaman dan komponen. |
| **Participant Story Tease** | ❌ | Tautan teaser cerita peserta standar. |
| **Person Tease** | ❌ | Tautan teaser orang standar (untuk direktori dosen/staf). |
| **Podcast Tease** | ❌ | Tautan teaser podcast standar. (Tidak relevan untuk saat ini). |
| **Program Tease** | ❌ | Tautan teaser program standar. |
| **Quote Tease** | ❌ | Tautan teaser kutipan standar. |
| **Search Box** | ✅ | Elemen input untuk form pencarian. |
| **Shimmer** | ✅ | State `loading` terstandardisasi. |
| **Sibling Page Navigation** | ❌ | Tautan navigasi untuk halaman hierarkis dengan halaman sejajar. |
| **Social Media Links** | ✅ | Tautan standar ke akun media sosial (ada di footer). |
| **Social Media Tease** | ❌ | Tautan teaser media sosial standar. |
| **Tabs** | ✅ | Komponen untuk mengelompokkan beberapa panel konten. |
| **Timeline Event** | ❌ | Acara timeline standar untuk digunakan dalam komponen Timeline Tease. |
| **Toast** | ✅ | Pop-up standar di bagian bawah untuk notifikasi. |
| **Tooltip** | ✅ | Komponen tooltip sederhana untuk menampilkan informasi tambahan. |
