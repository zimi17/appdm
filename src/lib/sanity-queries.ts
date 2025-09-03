import { client, getPreviewClient, urlFor } from "./sanity-client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";


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
    pageType: string;
    topper?: any[];
    content?: any[];
    metaDescription?: string;
    metaTitle?: string;
    isPublished: boolean;
    publishedAt?: string;
    updatedAt?: string;
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
  const { draftMode } = await import("next/headers");
  const { isEnabled } = await draftMode();
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
      image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg",
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
      image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg",
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
      image: "https://res.cloudinary.com/dmadbfz58/image/upload/v1754354635/DMP_0111_xmz83o.jpg",
      href: "#",
    }));
    return placeholders;
  }
}


const PAGE_QUERY = `*[_type == "page" && slug.current == $slug && isPublished == true][0]{
    _id,
    title,
    slug,
    pageType,
    topper,
    "content": content[]{
        ...,
        _type == "cardGrid" => {
            ...,
            items[]{
                ...,
                "image": image{
                    ...,
                    "hint": asset->metadata.lqip
                }
            }
        },
        _type == "hero" => {
            ...,
            "image": image{
                ...,
                "hint": asset->metadata.lqip
            }
        }
    },
    metaDescription,
    metaTitle,
    isPublished,
    publishedAt,
    updatedAt
}`;

export async function getPageBySlug(slug: string): Promise<SanityPage | null> {
    const { draftMode } = await import("next/headers");
    const { isEnabled } = await draftMode();
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

// Get all published pages for dynamic routing
const ALL_PAGES_QUERY = `*[_type == "page" && isPublished == true]{
    _id,
    title,
    slug,
    pageType,
    metaDescription,
    metaTitle,
    isPublished,
    publishedAt,
    updatedAt
}`;

export async function getAllPublishedPages(): Promise<SanityPage[]> {
    const { draftMode } = await import("next/headers");
    const { isEnabled } = await draftMode();
    const currentClient = isEnabled ? getPreviewClient() : client;

    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
      console.warn("Sanity not configured. Returning empty array for pages.");
      return [];
    }

    try {
        const pages = await currentClient.fetch<SanityPage[]>(ALL_PAGES_QUERY);
        return pages;
    } catch (error) {
        console.error("Failed to fetch all pages:", error);
        return [];
    }
}

// Homepage query
const HOMEPAGE_QUERY = `*[_type == "homepage"][0]{
  _id,
  title,
  metaTitle,
  metaDescription,
  missionTopper,
  programCards,
  heroStatement,
  keywords,
  hierarchicalTease,
  distinction,
  content
}`;

// Site Settings Query
const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  _id,
  contactInfo,
  socialMedia,
  headerSettings,
  globalAlert,
  footerSettings
}`;

// Navigation Query
const NAVIGATION_QUERY = `*[_type == "navigation"][0]{
  _id,
  menuItems
}`;

export interface SanityHomepage {
  _id: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  missionTopper: any;
  programCards: any[];
  heroStatement: any;
  keywords: any[];
  hierarchicalTease: any;
  distinction: any;
  content?: any[];
}

export interface SanitySiteSettings {
  _id: string
  contactInfo?: {
    institutionName?: string
    address?: string
    phone?: string
    email?: string
    website?: string
  }
  socialMedia?: {
    instagram?: string
    facebook?: string
    linkedin?: string
    youtube?: string
    tiktok?: string
  }
  headerSettings?: {
    hotLinks?: Array<{ text: string; href: string }>
    ctaButton?: { text: string; href: string }
    searchSettings?: {
      placeholder?: string
      quickLinkText?: string
      quickLinkHref?: string
    }
  }
  globalAlert?: {
    isEnabled?: boolean
    title?: string
    description?: string
    linkText?: string
    linkHref?: string
  }
  footerSettings?: {
    primaryCta?: {
      title?: string
      description?: string
      href?: string
    }
    footerBlocks?: Array<{
      title: string
      items: Array<{ text: string; href: string }>
    }>
    legalLinks?: Array<{ text: string; href: string }>
  }
}

export interface SanityNavigation {
  _id: string
  menuItems?: Array<{
    id: string
    title: string
    description?: string
    href: string
    sublinks?: Array<{
      id: string
      title: string
      description?: string
      href: string
      sublinks?: Array<{
        id: string
        title: string
        href: string
      }>
    }>
  }>
}

export async function getHomepage(): Promise<SanityHomepage | null> {
    const { draftMode } = await import("next/headers");
    const { isEnabled } = await draftMode();
    const currentClient = isEnabled ? getPreviewClient() : client;

    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
      console.warn("Sanity not configured. Returning null for homepage data.");
      return null;
    }

    try {
        const homepage = await currentClient.fetch<SanityHomepage>(HOMEPAGE_QUERY);
        return homepage;
    } catch (error) {
        console.error("Failed to fetch homepage data:", error);
        return null;
    }
}

export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
    const { draftMode } = await import("next/headers");
    const { isEnabled } = await draftMode();
    const currentClient = isEnabled ? getPreviewClient() : client;

    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
      console.warn("Sanity not configured. Returning null for site settings data.");
      return null;
    }

    try {
        const siteSettings = await currentClient.fetch<SanitySiteSettings>(SITE_SETTINGS_QUERY);
        return siteSettings;
    } catch (error) {
        console.error("Failed to fetch site settings data:", error);
        return null;
    }
}

export async function getNavigation(): Promise<SanityNavigation | null> {
    const { draftMode } = await import("next/headers");
    const { isEnabled } = await draftMode();
    const currentClient = isEnabled ? getPreviewClient() : client;

    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
      console.warn("Sanity not configured. Returning null for navigation data.");
      return null;
    }

    try {
        const navigation = await currentClient.fetch<SanityNavigation>(NAVIGATION_QUERY);
        return navigation;
    } catch (error) {
        console.error("Failed to fetch navigation data:", error);
        return null;
    }
}

// Search-related interfaces
export interface SearchableContent {
  _id: string;
  _type: string;
  title?: string;
  overline?: string;
  meta?: string;
  slug?: { current: string };
  publishedAt?: string;
  image?: any;
  content?: any[];
  description?: string;
  tease?: string;
  href?: string;
  type?: string;
  score?: number;
}

export interface SearchResult {
  results: SearchableContent[];
  totalHits: number;
}

// Search queries for different content types - optimized for performance
const SEARCH_WAWASAN_QUERY = `
  *[_type == "wawasan" && defined(slug) && (
    title match $searchTerm + "*" ||
    overline match $searchTerm + "*" ||
    meta match $searchTerm + "*"
  )] | score(
    boost(title match $searchTerm + "*", 3),
    boost(overline match $searchTerm + "*", 2),
    boost(meta match $searchTerm + "*", 1)
  ) | order(_score desc)[0...25]{
    _id,
    _type,
    title,
    overline,
    meta,
    slug,
    publishedAt,
    image,
    "href": "/" + slug.current,
    "type": "Article",
    _score
  }
`;

const SEARCH_PAGES_QUERY = `
  *[_type == "page" && isPublished == true && defined(slug) && (
    title match $searchTerm + "*" ||
    metaDescription match $searchTerm + "*" ||
    metaTitle match $searchTerm + "*"
  )] | score(
    boost(title match $searchTerm + "*", 3),
    boost(metaTitle match $searchTerm + "*", 2),
    boost(metaDescription match $searchTerm + "*", 1)
  ) | order(_score desc)[0...25]{
    _id,
    _type,
    title,
    metaDescription,
    metaTitle,
    slug,
    publishedAt,
    updatedAt,
    "href": "/" + slug.current,
    "type": "Page",
    _score
  }
`;

const SEARCH_HOMEPAGE_QUERY = `
  *[_type == "homepage"][0]{
    _id,
    _type,
    heroStatement{
      title,
      description
    },
    hierarchicalTease{
      header{
        title,
        subheading
      }
    },
    distinction{
      header{
        title,
        description
      }
    }
  }
`;

// Combined search function
export async function searchSanityContent(query: string): Promise<SearchResult> {
  const { draftMode } = await import("next/headers");
  const { isEnabled } = await draftMode();
  const currentClient = isEnabled ? getPreviewClient() : client;

  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
    console.warn("Sanity not configured. Returning empty search results.");
    return { results: [], totalHits: 0 };
  }

  if (!query || query.trim().length < 2) {
    return { results: [], totalHits: 0 };
  }

  try {
    const searchTerm = query.trim().toLowerCase();

    // Search across different content types
    const [wawasanResults, pageResults, homepageData] = await Promise.all([
      currentClient.fetch<SearchableContent[]>(SEARCH_WAWASAN_QUERY, { searchTerm }),
      currentClient.fetch<SearchableContent[]>(SEARCH_PAGES_QUERY, { searchTerm }),
      currentClient.fetch<any>(SEARCH_HOMEPAGE_QUERY)
    ]);

    // Process homepage content for search
    const homepageResults: SearchableContent[] = [];
    if (homepageData) {
      // Search in hero statement
      if (homepageData.heroStatement) {
        const heroTitle = homepageData.heroStatement.title || '';
        const heroDesc = homepageData.heroStatement.description || '';

        if (heroTitle.toLowerCase().includes(searchTerm) || heroDesc.toLowerCase().includes(searchTerm)) {
          homepageResults.push({
            _id: 'homepage-hero',
            _type: 'homepage',
            title: heroTitle,
            description: heroDesc,
            href: '/',
            type: 'Homepage',
            score: (heroTitle.toLowerCase().includes(searchTerm) ? 3 : 0) +
                   (heroDesc.toLowerCase().includes(searchTerm) ? 1 : 0)
          });
        }
      }

      // Search in hierarchical tease
      if (homepageData.hierarchicalTease?.header) {
        const teaseTitle = homepageData.hierarchicalTease.header.title || '';
        const teaseDesc = homepageData.hierarchicalTease.header.subheading || '';

        if (teaseTitle.toLowerCase().includes(searchTerm) || teaseDesc.toLowerCase().includes(searchTerm)) {
          homepageResults.push({
            _id: 'homepage-tease',
            _type: 'homepage',
            title: teaseTitle,
            description: teaseDesc,
            href: '/wawasan',
            type: 'Homepage',
            score: (teaseTitle.toLowerCase().includes(searchTerm) ? 2 : 0) +
                   (teaseDesc.toLowerCase().includes(searchTerm) ? 1 : 0)
          });
        }
      }

      // Search in distinction
      if (homepageData.distinction?.header) {
        const distTitle = homepageData.distinction.header.title || '';
        const distDesc = homepageData.distinction.header.description || '';

        if (distTitle.toLowerCase().includes(searchTerm) || distDesc.toLowerCase().includes(searchTerm)) {
          homepageResults.push({
            _id: 'homepage-distinction',
            _type: 'homepage',
            title: distTitle,
            description: distDesc,
            href: '/tentang',
            type: 'Homepage',
            score: (distTitle.toLowerCase().includes(searchTerm) ? 2 : 0) +
                   (distDesc.toLowerCase().includes(searchTerm) ? 1 : 0)
          });
        }
      }
    }

    // Combine all results and sort by score
    const allResults = [
      ...wawasanResults,
      ...pageResults,
      ...homepageResults
    ].sort((a, b) => (b.score || 0) - (a.score || 0));

    return {
      results: allResults,
      totalHits: allResults.length
    };

  } catch (error) {
    console.error("Failed to search Sanity content:", error);
    return { results: [], totalHits: 0 };
  }
}
