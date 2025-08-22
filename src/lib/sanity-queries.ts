
import { client, urlFor } from "./sanity-client";

// Definisikan tipe data yang akan kita ambil
export interface SanityPost {
  _id: string;
  title?: string;
  overline?: string;
  meta?: string;
  hint?: string;
  image?: any; // Tipe gambar Sanity
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
  // Gracefully handle if Sanity is not configured
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
    console.warn("Sanity not configured. Returning placeholder data for insights.");
    const placeholders = Array.from({ length: 4 }).map((_, i) => ({
      _id: `placeholder-${i}`,
      title: "Konfigurasi Sanity untuk Melihat Wawasan",
      overline: "Wawasan & Penelitian",
      meta: "Harap konfigurasikan Sanity project ID dan dataset Anda di file .env.local.",
      hint: "placeholder",
      image: "https://placehold.co/800x600.png",
      href: "#",
    }));
    return placeholders;
  }

  try {
    const sanityArticles = await client.fetch<SanityPost[]>(POSTS_QUERY);

    // Transformasi data Sanity agar sesuai dengan format yang diharapkan komponen
    const transformedArticles = sanityArticles.map(article => ({
      ...article,
      // Penting: ubah objek gambar Sanity menjadi URL string
      image: urlFor(article.image).width(800).height(600).url(),
      href: article.href || "#"
    }));

    // Pastikan kita memiliki 4 artikel untuk tease, gunakan placeholder jika perlu
    const placeholders = Array.from({ length: Math.max(0, 4 - transformedArticles.length) }).map((_, i) => ({
      _id: `placeholder-extra-${i}`,
      title: "Tambahkan Lebih Banyak Postingan di Sanity",
      overline: "Wawasan & Penelitian",
      meta: "Buat lebih banyak postingan wawasan di Sanity Studio Anda untuk mengisi bagian ini.",
      hint: "placeholder",
      image: "https://placehold.co/800x600.png",
      href: "#",
    }));

    return [...transformedArticles, ...placeholders];
  } catch (error) {
    console.error("Failed to fetch Sanity data:", error);
    const placeholders = Array.from({ length: 4 }).map((_, i) => ({
      _id: `error-placeholder-${i}`,
      title: "Gagal Mengambil Data Wawasan",
      overline: "Wawasan & Penelitian",
      meta: "Terjadi kesalahan saat mengambil data dari Sanity. Periksa konsol untuk detailnya.",
      hint: "placeholder",
      image: "https://placehold.co/800x600.png",
      href: "#",
    }));
    return placeholders;
  }
}
