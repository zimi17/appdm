import type { Metadata } from 'next';
import { draftMode } from 'next/headers'
import { Toaster } from "@/components/ui/toaster"
import { StoreProvider } from '@/store/store-provider';
import { SiteHeader } from '@/components/universal/site-header/site-header';
import { SiteFooter } from '@/components/universal/site-footer/site-footer';
import { VisualEditing } from 'next-sanity'
import { getSiteSettings, getNavigation } from '@/lib/sanity-queries'
import '@/app/globals.css';
import '@/styles/index.scss';

// Default metadata can still be defined here as a fallback
export const metadata: Metadata = {
  title: 'STIE Dwimulya - Kampus Rakyat, Kampus Perubahan',
  description: "Akses pendidikan berkualitas, beasiswa luas, dan jaminan karier dalam 6 bulan. Dari Serang, untuk Indonesia.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const draft = await draftMode();
  const { isEnabled } = draft;
  
  // Fetch universal data from Sanity
  const [siteSettings, navigation] = await Promise.all([
    getSiteSettings(),
    getNavigation()
  ]);
  
  return (
    <html lang="id" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&family=Source+Serif+Pro:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <StoreProvider location={{}}>
          <SiteHeader siteSettings={siteSettings} navigation={navigation} />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <SiteFooter siteSettings={siteSettings} />
        </StoreProvider>
        {isEnabled && (
          <VisualEditing />
        )}
        <Toaster />
      </body>
    </html>
  );
}
