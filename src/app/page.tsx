
'use client';

import { useState } from 'react';
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ContentSection } from "@/components/content-section";
import { Footer } from "@/components/footer";
import { Button } from '@/components/ui/button';

export default function Home() {
  const [theme, setTheme] = useState<'bright' | 'dark'>('bright');

  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === 'bright' ? 'dark' : 'bright');
  };

  return (
    <div className={`flex flex-col min-h-screen ${theme === 'bright' ? 'bg-[#f3f4f4]' : 'bg-[#1a1a1a]'}`}>
      <Header />
      <main id="main-content">
        <div className="p-4 flex justify-center">
          <Button onClick={toggleTheme}>
            Toggle Theme (Current: {theme})
          </Button>
        </div>
        <HeroSection theme={theme} />
        <ContentSection />
      </main>
      <Footer />
    </div>
  );
}
