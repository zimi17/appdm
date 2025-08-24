
import { client, getPreviewClient, urlFor } from "./sanity-client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { draftMode } from 'next/headers'

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

export interface SanityPage {
    _id: string;
    title: string;
    slug: { current: string };
    content: any[];
    metaDescription?: string;
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
  const { isEnabled } = draftMode();
  const currentClient = isEnabled ? getPreviewClient() : client;

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
    const sanityArticles = await currentClient.fetch<SanityPost[]>(POSTS_QUERY);

    // Transformasi data Sanity agar sesuai dengan format yang diharapkan komponen
    const transformedArticles = sanityArticles.map(article => ({
      ...article,
      // Penting: ubah objek gambar Sanity menjadi URL string
      image: urlFor(article.image as SanityImageSource).width(800).height(600).url(),
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


const PAGE_QUERY = `*[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    content,
    metaDescription
}`;

export async function getPageBySlug(slug: string): Promise<SanityPage | null> {
    const { isEnabled } = draftMode();
    const currentClient = isEnabled ? getPreviewClient() : client;

    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
      console.warn("Sanity not configured. Returning null for page data.");
      return null;
    }

    try {
        const page = await currentClient.fetch<SanityPage>(PAGE_QUERY, { slug });
        return page;
    } catch (error) {
        console.error(`Failed to fetch page data for slug "${slug}":`, error);
        return null;
    }
}
