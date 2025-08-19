
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { StoreProvider } from '@/store/store-provider';
import { SiteHeader } from '@/components/universal/site-header/site-header';
import { SiteFooter } from '@/components/universal/site-footer/site-footer';

export const metadata: Metadata = {
  title: 'Dwimulya Hub',
  description: "A responsive university website for STIE Dwimulya, embodying its mission of empowering society and the tagline 'kampus rakyat kampus perubahan'.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&family=Source+Serif+4:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
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
