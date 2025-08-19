
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { StoreProvider } from '@/store/store-provider';

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
      <body className="font-body antialiased">
        <StoreProvider location={{}}>
          {children}
        </StoreProvider>
        <Toaster />
      </body>
    </html>
  );
}
