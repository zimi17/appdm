# Mengintegrasikan Sanity.io ke Proyek Ini

Panduan ini akan memandu Anda mengintegrasikan Sanity.io ke dalam proyek Next.js yang sudah ada. Alih-alih mengganti konten yang ada, kita akan mengambil salah satu komponen yang ada—bagian "Wawasan & Penelitian"—dan mengubahnya agar datanya diambil dari Sanity CMS.

## Alur Kerja Pengembangan yang Direkomendasikan

Kita akan menjalankan dua server pengembangan secara bersamaan di dua terminal terpisah dari direktori root proyek Anda.

**1. Terminal Pertama: Jalankan Server Next.js**
Dari direktori root proyek, jalankan server pengembangan Next.js seperti biasa.
```sh
npm run dev
```
Aplikasi Anda akan berjalan di port `9002` (atau port default Anda).

**2. Terminal Kedua: Jalankan Sanity Studio**
Di terminal baru, masuk ke direktori `studio`, instal dependensinya, lalu jalankan server pengembangan Sanity.
```sh
cd studio
npm install  # Hanya perlu dijalankan sekali
npm run dev
```
Studio akan berjalan secara internal di port `3333`.

**3. Akses Studio Anda**
Sekarang, buka browser Anda dan navigasikan ke rute `/studio` pada URL **aplikasi utama** Anda, misalnya: `https://[URL_CLOUD_WORKSTATION_ANDA]/studio`. Berkat `rewrites` di `next.config.ts`, aplikasi Next.js Anda akan mem-proxy permintaan ke Sanity Studio, memberikan Anda pengalaman yang terintegrasi.

## 2. Membuat Skema Konten (Schema)

Saat ini, halaman utama menampilkan artikel "Wawasan & Penelitian" dari data statis. Kita akan membuat skema di Sanity untuk mengelola konten ini.

Pastikan file `studio/schemas/wawasan.ts` ada dan berisi kode berikut:

```typescript
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'wawasan',
  title: 'Wawasan & Penelitian',
  type: 'document',
  fields: [
    defineField({
      name: 'overline',
      title: 'Overline',
      type: 'string',
      description: 'Teks singkat di atas judul, cth: "Publikasi Dwimulya"',
    }),
    defineField({
      name: 'title',
      title: 'Judul',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'meta',
      title: 'Meta',
      type: 'string',
      description: 'Informasi penulis dan tanggal, cth: "Oleh Bambang Arianto. Diterbitkan 12 Agustus 2025."',
    }),
    defineField({
      name: 'image',
      title: 'Gambar Utama',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'hint',
          title: 'Petunjuk Gambar (Hint)',
          type: 'string',
          description: 'Deskripsi singkat untuk gambar, cth: "small business digital"',
        }
      ]
    }),
    defineField({
      name: 'publishedAt',
      title: 'Tanggal Publikasi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'meta',
      media: 'image',
    },
  },
})
```

## 3. Mendaftarkan Skema dan Mengkonfigurasi Studio

Sekarang, daftarkan skema `wawasan` ke Studio Anda. Buka file `studio/sanity.config.ts` dan pastikan isinya seperti ini, **ganti `your-project-id` dengan ID proyek Sanity Anda**.

```typescript
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import wawasan from './schemas/wawasan'

const projectId = 'your-project-id'; 
const dataset = 'production';

export default defineConfig({
  name: 'default',
  title: 'STIE Dwimulya Website Studio',
  basePath: '/studio',
  projectId: projectId, 
  dataset: dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [wawasan],
  },
})
```
Setelah menyimpan file ini, Studio akan memuat ulang. Anda sekarang dapat membuat postingan "Wawasan & Penelitian" baru dari dalam CMS.

## 4. Menghubungkan Aplikasi Next.js ke Sanity

Aplikasi Next.js kita perlu tahu cara berkomunikasi dengan Sanity.

Pastikan file `.env` (atau `.env.local`) di **direktori root** proyek Anda berisi kredensial Anda:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

File klien di `src/lib/sanity-client.ts` akan menggunakan variabel-variabel ini untuk mengambil data.

## 5. Mengambil Data di Halaman Utama

File `src/app/page.tsx` sudah dikonfigurasi untuk memanggil fungsi `getHomepageInsights()` dari `src/lib/sanity-queries.ts`. Fungsi ini akan mengambil 4 postingan terbaru dari tipe `wawasan` di Sanity CMS Anda.

Selesai! Sekarang, bagian "Wawasan & Penelitian" di halaman utama Anda mengambil konten langsung dari Sanity CMS. Anda dapat mengelola postingan tersebut tanpa perlu menyentuh kode lagi.
