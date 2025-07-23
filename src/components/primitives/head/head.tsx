import React, { ReactNode } from "react";

// Simplified types for structured data and image props
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
  location: Array<Record<string, unknown>>;
  image?: string;
  description?: string;
  offers?: Record<string, unknown>;
  performer?: Record<string, unknown>;
  organizer?: Record<string, unknown>;
}>;

interface MediaAssetImageProps {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
}

// Simplified DataLayerEventData
type DataLayerEventData = Record<string, unknown>;

export interface HeadProps {
  gtagId?: string;
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
  convertId?: string;
  pageLoadEventData?: DataLayerEventData;
  articleStructuredData?: ArticleStructuredData;
  eventStructuredData?: EventStructuredData;
}

export const Head: React.FC<HeadProps> = ({
  gtagId,
  title = "STIE Dwimulya", // Default to STIE Dwimulya
  description = "STIE Dwimulya", // Default to STIE Dwimulya
  siteName = "STIE Dwimulya", // Default to STIE Dwimulya
  canonicalUrl,
  type = "website",
  image,
  twitterCard = "summary",
  twitterCreator = "@STIEDwimulya", // Updated for STIE Dwimulya
  twitterSite = "@STIEDwimulya", // Updated for STIE Dwimulya
  metaOverride,
  children,
  openGraphDescription,
  noFollow,
  noIndex,
  convertId,
  pageLoadEventData,
  articleStructuredData,
  eventStructuredData,
}) => {
  const imageSrc = image?.src; // Assuming image.src is already a direct URL

  const meta = {
    "og:title": title,
    "og:description": openGraphDescription ?? description,
    "og:url": canonicalUrl,
    "og:type": type,
    "og:site_name": siteName,
    "og:image": imageSrc,
    "og:image:width": image?.width?.toString(), // Convert to string for meta content
    "og:image:height": image?.height?.toString(), // Convert to string for meta content
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
    <>
      {/* Preconnect for external resources if needed, e.g., fonts, CDNs */}
      {/* <link rel="preconnect" href="https://example-cdn.com" /> */}

      {noIndex && <meta key="robots-noindex" name="robots" content="noindex" />}
      {noFollow && <meta key="robots-nofollow" name="robots" content="nofollow" />}

      <title>{title}</title>
      {description && <meta name="description" content={description} />}

      {Object.entries(meta).map(([property, value]) =>
        value ? <meta property={property} content={value} key={property} /> : null
      )}

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {convertId && (
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtagId}');`,
          }}
        />
      )}

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
                name: "STIE Dwimulya", // Updated for STIE Dwimulya
              },
              url: articleStructuredData.url,
              name: articleStructuredData.name,
              image: articleStructuredData.image,
              articleBody: articleStructuredData.articleBody,
              datePublished: articleStructuredData.datePublished,
              articleSection: articleStructuredData.articleSection,
              author: articleStructuredData.author && {
                "@type": "Person",
                name: articleStructuredData.author,
              },
            }),
          }}
        ></script>
      )}

      {eventStructuredData && (
        <script
          key="event-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Event",
              name: eventStructuredData.name,
              startDate: eventStructuredData.startDate,
              endDate: eventStructuredData.endDate,
              eventAttendanceMode: eventStructuredData.eventAttendanceMode,
              eventStatus: eventStructuredData.eventStatus,
              location: eventStructuredData.location,
              image: eventStructuredData.image,
              description: eventStructuredData.description,
              offers: eventStructuredData.offers,
              organizer: eventStructuredData.organizer,
            }),
          }}
        ></script>
      )}

      {pageLoadEventData && (
        <script
          key="gtm-init"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLater|| [];
                window.dataLayer.push({ event: "page_load", event_data: ${JSON.stringify(
                  pageLoadEventData,
                )} });`,
          }}
        />
      )}

      {gtagId && (
        <script
          key="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtagId}');
            `,
          }}
        />
      )}
      {children}
    </>
  );
};
