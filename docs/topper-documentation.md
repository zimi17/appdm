# Panduan Komponen Topper

Dokumen ini memberikan panduan untuk setiap komponen topper yang berfungsi sebagai elemen pembuka untuk berbagai jenis halaman.

---

## Deskripsi Topper

Toppers adalah komponen tunggal (singleton) yang wajib ada untuk memulai sebuah halaman. Mereka mengatur konteks visual dan informasional utama untuk konten yang akan disajikan di bawahnya.

---

## Page Toppers `❌`
> Topper halaman diperlukan untuk memulai halaman konten standar.

#### Card Topper `❌`
- **Deskripsi**: Memulai halaman dengan gambar lebar penuh, blok judul bertema, dan tautan opsional.
- **Aturan**: Ideal untuk halaman detail yang ingin menonjolkan visual yang kuat. Membutuhkan gambar berkualitas tinggi dengan rasio aspek 16:9 atau 3:2.

#### Media Topper `❌`
- **Deskripsi**: Memulai halaman dengan tema warna, tautan CTA, dan koleksi gambar yang menonjol.
- **Aturan**: Cocok untuk halaman galeri atau konten yang sangat visual. Dapat menampilkan beberapa gambar dalam tata letak yang menarik.

#### Simple Page Topper `❌`
- **Deskripsi**: Memulai halaman dengan tema warna yang dapat dipilih dan pengantar teks.
- **Aturan**: Paling serbaguna untuk halaman standar di mana fokus utamanya adalah konten tekstual.

#### Split Page Topper `❌`
- **Deskripsi**: Memulai halaman dengan judul, subjudul, tema warna primer, tema warna sekunder, gambar menonjol, dan koleksi tautan CTA opsional dalam tata letak terpisah, kiri dan kanan.
- **Aturan**: Efektif untuk menyeimbangkan antara teks informatif dan visual yang kuat secara berdampingan.

#### Statistics Topper `❌`
- **Deskripsi**: Memulai halaman dengan judul, subjudul, tema warna, gambar opsional, koleksi tautan CTA opsional, dan kumpulan fakta numerik singkat.
- **Aturan**: Digunakan untuk halaman yang perlu segera membangun kredibilitas dengan menampilkan data atau pencapaian kunci.

---

## Article Toppers `❌`
> Topper artikel diperlukan untuk memulai artikel berita, cerita, dan posting blog.

#### Simple Article Topper `❌`
- **Deskripsi**: Memulai artikel dengan tema warna yang dapat dipilih, overline topik, pengantar, dan byline.
- **Aturan**: Tampilan standar untuk artikel berita atau posting blog.

#### Big Art Topper `❌`
- **Deskripsi**: Memulai artikel dengan tema warna yang dapat dipilih, overline topik, pengantar, byline, dan gambar yang menonjol.
- **Aturan**: Gunakan ketika artikel memiliki satu gambar utama yang kuat yang dapat menjadi pusat perhatian.

#### Split Article Topper `❌`
- **Deskripsi**: Memulai artikel dengan judul, subjudul, tema warna primer, tema warna sekunder, gambar menonjol dalam tata letak terpisah, kiri dan kanan.
- **Aturan**: Mirip dengan Split Page Topper tetapi disesuaikan untuk konteks artikel.

---

## Template Toppers `❌`
> Topper template diperlukan untuk memulai halaman dengan template tertentu.

#### Course Topper `❌`
- **Deskripsi**: Topper yang diperlukan untuk memulai Halaman Kursus.
- **Aturan**: Harus menampilkan informasi kunci seperti judul kursus, tanggal, dan instruktur.

#### Editorial Topper `❌`
- **Deskripsi**: Topper yang diperlukan untuk memulai Halaman Arahan Editorial.
- **Aturan**: Didesain untuk menampilkan koleksi artikel atau tema editorial.

#### Event Topper `❌`
- **Deskripsi**: Topper yang diperlukan untuk memulai Halaman Acara.
- **Aturan**: Harus menampilkan detail penting acara seperti nama, tanggal, waktu, dan lokasi.

#### Profile Topper `❌`
- **Deskripsi**: Topper yang diperlukan untuk memulai Halaman Profil.
- **Aturan**: Menampilkan nama, jabatan, dan foto profil individu.

#### Search Topper `❌`
- **Deskripsi**: Topper yang diperlukan untuk memulai Halaman Pencarian.
- **Aturan**: Biasanya berisi bilah pencarian besar dan filter opsional.

---

## Kompatibilitas Template
| Komponen | Halaman Arsip | Halaman Arahan | Halaman Detail | Halaman Artikel |
| :--- | :---: | :---: | :---: | :---: |
| Page Topper (semua) | ⚫️ | ⚫️ | ⚫️ | |
| Article Topper (semua) | | | | ⚫️ |
| Course Topper | ⚫️ | ⚫️ | ⚫️ | |
| Editorial Topper | ⚫️ | ⚫️ | ⚫️ | |
| Event Topper | ⚫️ | ⚫️ | ⚫️ | |
| Participant Story Topper | | | | ⚫️ |
| Profile Topper | ⚫️ | ⚫️ | ⚫️ | |
| Search Topper | ⚫️ | | | |