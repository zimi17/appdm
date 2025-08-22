# Mengintegrasikan Sanity.io ke Proyek Ini

Panduan ini akan memandu Anda mengintegrasikan Sanity.io ke dalam proyek Next.js yang sudah ada. Alih-alih mengganti konten yang ada, kita akan mengambil salah satu komponen yang ada—bagian "Wawasan & Penelitian"—dan mengubahnya agar datanya diambil dari Sanity CMS.

## 1. Inisialisasi Sanity Studio

Pertama, kita akan membuat Sanity Studio di dalam direktori `studio` baru di root proyek Anda.

Jalankan perintah ini di terminal dari direktori root proyek:
```sh
npm create sanity@latest -- --template clean --typescript --output-path studio
```
Ikuti petunjuk untuk login dan memilih proyek. Setelah selesai, Anda akan memiliki folder `studio` baru di root proyek Anda.

## 2. Menjalankan Sanity Studio Secara Lokal (Terintegrasi)

Berkat konfigurasi `rewrites` di `next.config.ts`, kita bisa mengakses Studio melalui aplikasi utama kita.

**Alur Kerja Pengembangan:**

1.  **Terminal 1 (Aplikasi Utama):** Dari direktori root proyek Anda, jalankan server Next.js seperti biasa.
    ```sh
    npm run dev
    ```
    Aplikasi Anda akan berjalan di port `9002` (atau port default Anda).

2.  **Terminal 2 (Sanity Studio):** Buka terminal baru, masuk ke direktori `studio`, dan jalankan server pengembangan Sanity.
    ```sh
    cd studio
    npm run dev
    ```
    Studio akan berjalan di port `3333`, tetapi Anda tidak perlu mengaksesnya langsung.

3.  **Akses Studio:** Sekarang, buka browser Anda dan navigasikan ke rute `/studio` pada aplikasi utama Anda, misalnya: `https://[URL_CLOUD_WORKSTATION_ANDA]/studio`. Anda akan melihat antarmuka Sanity CMS yang berjalan dengan lancar.

## 3. Membuat Skema Konten (Schema)

Saat ini, halaman utama menampilkan artikel "Wawasan & Penelitian" dari data statis. Kita akan membuat skema di Sanity untuk mengelola konten ini.

Buat file baru di `studio/schemas/wawasan.ts` dan tambahkan kode berikut:

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

## 4. Mendaftarkan Skema ke Studio

Sekarang, daftarkan skema `wawasan` yang baru dibuat ke Studio Anda. Buka file `studio/sanity.config.ts` dan perbarui seperti ini:

```typescript
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import wawasan from './schemas/wawasan' // Impor skema baru

export default defineConfig({
  name: 'default',
  title: 'studio-website-stie-dwimulya',

  // Ganti dengan projectId dan dataset Anda
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id', 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [wawasan], // Daftarkan skema di sini
  },
})
```
**Penting:** Ganti `your-project-id` dengan Project ID Sanity Anda yang sebenarnya, atau lebih baik lagi, atur di file `.env` Anda.

Setelah menyimpan file ini, Studio akan memuat ulang. Anda sekarang dapat membuat postingan "Wawasan & Penelitian" baru dari dalam CMS. Lanjutkan dan buat beberapa entri agar kita memiliki data untuk ditampilkan.

## 5. Menghubungkan Aplikasi Next.js ke Sanity

Sekarang kita akan menginstal dependensi yang diperlukan dan mengkonfigurasi aplikasi Next.js untuk mengambil data dari Sanity.

Dari direktori root proyek (bukan direktori `studio`), jalankan:
```sh
npm install next-sanity @sanity/image-url
```

Selanjutnya, buat file klien Sanity di `src/lib/sanity-client.ts`. Pastikan file tersebut terlihat seperti ini:

```typescript
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
  console.warn("Sanity projectId or dataset not set. Check your .env.local file.");
}

export const client = createClient({
  projectId: projectId || "your-project-id", // Fallback, ganti dengan ID Anda
  dataset: dataset || "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  if (!source) {
    return {
      width: () => ({
        height: () => ({
          url: () => "https://placehold.co/800x600.png"
        })
      })
    };
  }
  return builder.image(source)
}

```
**Penting:** Buat file `.env` di root proyek Anda dan tambahkan kredensial Anda di sana:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

## 6. Mengambil Data Sanity di Komponen

Kita akan membuat fungsi query di `src/lib/sanity-queries.ts` dan memanggilnya di halaman utama.

Buka `src/lib/sanity-queries.ts` dan pastikan isinya seperti berikut:
```typescript
import { client, urlFor } from "./sanity-client";

export interface SanityPost {
  _id: string;
  title?: string;
  overline?: string;
  meta?: string;
  hint?: string;
  image?: any;
  href?: string;
}

const POSTS_QUERY = `*[_type == "wawasan"]|order(publishedAt desc)[0...4]{
  _id,
  title,
  overline,
  meta,
  "hint": image.hint,
  image,
  "href": "/" + slug.current
}`;

export async function getHomepageInsights(): Promise<SanityPost[]> {
  // ... (implementasi ada di file yang ada)
}
```

## 7. Memperbarui Halaman Utama

Terakhir, buka `src/app/page.tsx` dan ganti `HierarchicalTease` yang statis dengan data dari Sanity. Pastikan fungsi `Home` adalah `async`.

```tsx
// src/app/page.tsx
import { HierarchicalTease } from "@/components/blocks/hierarchical-tease/hierarchical-tease";
import { getHomepageInsights } from "@/lib/sanity-queries";
// ...impor lainnya

export default async function Home() {
    // ...data statis lainnya
    const insights = await getHomepageInsights();

    return (
        <main id="main-content">
            {/* ...komponen lainnya tetap sama */}
            
            <PageSection theme="dark">
              <HierarchicalTease
                  header={homePageData.hierarchicalTease.header}
                  articles={insights}
              />
            </PageSection>
            
            {/* ...sisa komponen */}
        </main>
    );
}
```

Selesai! Sekarang, bagian "Wawasan & Penelitian" di halaman utama Anda mengambil konten langsung dari Sanity CMS. Anda dapat mengelola postingan tersebut tanpa perlu menyentuh kode lagi.
