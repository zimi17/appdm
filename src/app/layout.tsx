
import type { Metadata } from 'next';
import './globals.css';
import '@/styles/main.css';
import { Toaster } from "@/components/ui/toaster"
import { StoreProvider } from '@/store/store-provider';
import { SiteHeader } from '@/components/universal/site-header/site-header';
import { SiteFooter } from '@/components/universal/site-footer/site-footer';
import { PageHead } from '@/components/primitives/page-head/page-head';

// Default metadata can still be defined here as a fallback
export const metadata: Metadata = {
  title: 'STIE Dwimulya - Kampus Rakyat, Kampus Perubahan',
  description: "Akses pendidikan berkualitas, beasiswa luas, dan jaminan karier dalam 6 bulan. Dari Serang, untuk Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&family=Source+Serif+Pro:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <StoreProvider location={{}}>
          <SiteHeader />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <SiteFooter />
        </StoreProvider>
        <Toaster />
      </body>
    </html>
  );
}
