
'use client';

import { usePathname } from 'next/navigation';
import Head from 'next/head';
import { ReactNode } from 'react';

// Tipe sederhana untuk properti gambar, bisa diperluas nanti
export interface MediaAssetImageProps {
    src: string;
    alt: string;
    width?: string;
    height?: string;
}

export type ArticleStructuredData = Partial<{
  name: string;
  author: string;
  datePublished: string;
  image: string;
  articleSection: string;
  articleBody: string;
  url: string;
}>;

export type EventStructuredData = Partial<{
  name: string;
  startDate: string;
  endDate?: string;
  eventAttendanceMode?: string;
  eventStatus?: string;
  location: Array<object>;
  image?: string;
  description?: string;
  offers?: object;
  performer?: object;
  organizer?: object;
}>;


export interface HeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  type?: string;
  siteName?: string;
  image?: MediaAssetImageProps;
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  twitterCreator?: string;
  twitterSite?: string;
  metaOverride?: Record<string, string | undefined>;
  children?: ReactNode;
  openGraphDescription?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  articleStructuredData?: ArticleStructuredData;
  eventStructuredData?: EventStructuredData;
}

export function CustomHead({
  title = "STIE Dwimulya - Kampus Rakyat, Kampus Perubahan",
  description = "STIE Dwimulya: Akses pendidikan berkualitas, beasiswa luas, dan jaminan karier dalam 6 bulan. Dari Serang, untuk Indonesia.",
  siteName = "STIE Dwimulya",
  canonicalUrl,
  type = "website",
  image,
  twitterCard = "summary_large_image",
  twitterCreator = "@stiedwimulya",
  twitterSite = "@stiedwimulya",
  metaOverride,
  children,
  openGraphDescription,
  noFollow,
  noIndex,
  articleStructuredData,
  eventStructuredData,
}: HeadProps) {
  const pathname = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.stiedwimulya.ac.id';
  const finalCanonicalUrl = canonicalUrl || `${baseUrl}${pathname}`;
  const imageSrc = image?.src;

  const meta = {
    "og:title": title,
    "og:description": openGraphDescription ?? description,
    "og:url": finalCanonicalUrl,
    "og:type": type,
    "og:site_name": siteName,
    "og:image": imageSrc,
    "og:image:width": image?.width,
    "og:image:height": image?.height,
    "og:image:alt": image?.alt,
    "twitter:title": title,
    "twitter:description": description,
    "twitter:card": twitterCard,
    "twitter:creator": twitterCreator,
    "twitter:site": twitterSite,
    "twitter:image": imageSrc,
    "twitter:image:alt": image?.alt,
    ...metaOverride,
  };

  return (
    <Head>
      {noIndex && <meta key="robots-noindex" name="robots" content="noindex" />}
      {noFollow && <meta key="robots-nofollow" name="robots" content="nofollow" />}
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
      {Object.entries(meta).map(
        ([property, value]) =>
          value ? <meta property={property} content={value} key={property} /> : null,
      )}
      {finalCanonicalUrl && <link rel="canonical" href={finalCanonicalUrl} />}
      
      {articleStructuredData && (
        <script
          key="article-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Article",
              publisher: {
                "@type": "Organization",
                name: siteName,
              },
              ...articleStructuredData
            }),
          }}
        />
      )}
      
      {eventStructuredData && (
        <script
          key="event-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Event",
              ...eventStructuredData
            }),
          }}
        />
      )}

      {children}
    </Head>
  );
}
