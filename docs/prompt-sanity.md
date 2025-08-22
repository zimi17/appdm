# Mengintegrasikan Sanity.io ke Proyek Ini

Panduan ini akan memandu Anda mengintegrasikan Sanity.io ke dalam proyek Next.js yang sudah ada. Alih-alih mengganti konten yang ada, kita akan mengambil salah satu komponen yang ada—bagian "Wawasan & Penelitian"—dan mengubahnya agar datanya diambil dari Sanity CMS.

## 1. Inisialisasi Sanity Studio

Pertama, kita akan membuat Sanity Studio di dalam direktori `studio` baru di root proyek Anda.

Jalankan perintah ini di terminal dari direktori root proyek:
```sh
npm create sanity@latest -- --template clean --typescript --output-path studio
```
Ikuti petunjuk untuk login dan memilih proyek. Setelah selesai, Anda akan memiliki folder `studio` baru.

## 2. Menjalankan Sanity Studio Secara Lokal

Untuk mengkonfigurasi CMS Anda, jalankan server pengembangan Sanity Studio.

```sh
cd studio
npm run dev
```
Buka [http://localhost:3333](http://localhost:3333) di browser Anda dan login menggunakan akun yang sama dengan yang Anda gunakan untuk CLI.

## 3. Membuat Skema Konten (Schema)

Saat ini, halaman utama menampilkan artikel "Wawasan & Penelitian" dari data statis di `src/app/home-data.ts`. Kita akan membuat skema di Sanity untuk mengelola konten ini.

Buat file baru di `studio/schemas/post.ts` dan tambahkan kode berikut:

```typescript
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Postingan Wawasan & Penelitian',
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
    }),
    defineField({
      name: 'hint',
      title: 'Petunjuk Gambar (Hint)',
      type: 'string',
      description: 'Deskripsi singkat untuk gambar, cth: "small business digital"',
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

Sekarang, daftarkan skema `post` yang baru dibuat ke Studio Anda. Buka file `studio/sanity.config.ts` dan perbarui seperti ini:

```typescript
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import post from './schemas/post' // Impor skema baru

export default defineConfig({
  name: 'default',
  title: 'studio-website-stie-dwimulya',

  // Ganti dengan projectId dan dataset Anda
  projectId: 'PROJECT_ID_ANDA', 
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [post], // Daftarkan skema di sini
  },
})
```
**Penting:** Ganti `PROJECT_ID_ANDA` dengan Project ID Sanity Anda.

Setelah menyimpan file ini, Studio akan memuat ulang. Anda sekarang dapat membuat postingan "Wawasan & Penelitian" baru dari dalam CMS. Lanjutkan dan buat beberapa entri agar kita memiliki data untuk ditampilkan.

## 5. Menghubungkan Aplikasi Next.js ke Sanity

Sekarang kita akan menginstal dependensi yang diperlukan dan mengkonfigurasi aplikasi Next.js untuk mengambil data dari Sanity.

Dari direktori root proyek (bukan direktori `studio`), jalankan:
```sh
npm install next-sanity @sanity/image-url
```

Selanjutnya, buat file klien Sanity. Buat file baru di `src/lib/sanity-client.ts`:

```typescript
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  // Ganti dengan projectId dan dataset Anda
  projectId: "PROJECT_ID_ANDA",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
```
**Penting:** Ganti `PROJECT_ID_ANDA` lagi di sini.

## 6. Mengambil Data Sanity di Komponen

Kita akan membuat komponen baru yang mengambil data dari Sanity, lalu mengganti komponen statis yang ada di halaman utama.

Buat file baru di `src/app/components/sanity-hierarchical-tease.tsx`:

```tsx
import { client, urlFor } from "@/lib/sanity-client";
import { HierarchicalTease } from "@/components/blocks/hierarchical-tease/hierarchical-tease";
import { homePageData } from "../home-data"; // Kita masih butuh header dari sini

// Definisikan tipe data yang akan kita ambil
export interface SanityPost {
  _id: string;
  title: string;
  overline: string;
  meta: string;
  hint: string;
  image: any; // Tipe gambar Sanity
  // href akan kita bangun secara manual jika diperlukan
}

const POSTS_QUERY = `*[_type == "post"]|order(publishedAt desc)[0...4]{
  _id,
  title,
  overline,
  meta,
  hint,
  image
}`;

export async function SanityHierarchicalTease() {
  const sanityArticles = await client.fetch<SanityPost[]>(POSTS_QUERY);

  // Transformasi data Sanity agar sesuai dengan format yang diharapkan oleh komponen HierarchicalTease
  const transformedArticles = sanityArticles.map(article => ({
    ...article,
    href: "#", // Atau bangun URL dari slug jika ada
    // Penting: ubah objek gambar Sanity menjadi URL string
    image: article.image ? urlFor(article.image).width(800).height(600).url() : "https://placehold.co/800x600.png"
  }));

  return (
    <HierarchicalTease
      header={homePageData.hierarchicalTease.header}
      articles={transformedArticles}
    />
  );
}

```

## 7. Memperbarui Halaman Utama

Terakhir, buka `src/app/page.tsx` dan ganti komponen `HierarchicalTease` yang statis dengan komponen baru yang mengambil data dari Sanity.

1.  Ubah `Home` menjadi `async function`.
2.  Impor `SanityHierarchicalTease`.
3.  Ganti pemanggilan komponennya.

```tsx
// src/app/page.tsx

// ...impor lainnya
import { HierarchicalTease } from "@/components/blocks/hierarchical-tease/hierarchical-tease";
import { SanityHierarchicalTease } from "./components/sanity-hierarchical-tease"; // Impor komponen baru
import { PageSection } from "@/components/primitives/page-section/page-section";

// Ubah fungsi ini menjadi async
export default async function Home() {
    const { missionTopper, programCards, heroStatement, snowflakes, distinction } = homePageData;

    return (
        <main id="main-content">
            {/* ...komponen lainnya tetap sama */}
            
            <PageSection theme="dark">
              {/* Ganti komponen ini */}
              {/* 
                <HierarchicalTease
                    header={homePageData.hierarchicalTease.header}
                    articles={homePageData.hierarchicalTease.articles}
                />
              */}
              <SanityHierarchicalTease />
            </PageSection>
            
            {/* ...sisa komponen */}
        </main>
    );
}
```

Selesai! Sekarang, bagian "Wawasan & Penelitian" di halaman utama Anda mengambil konten langsung dari Sanity CMS. Anda dapat mengelola postingan tersebut tanpa perlu menyentuh kode lagi.
