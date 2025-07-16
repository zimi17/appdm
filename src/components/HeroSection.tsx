import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white"
      style={{ backgroundImage: 'url(/assets/hero-bg.jpg)' }}>
      <div className="absolute inset-0 bg-dwimulya-dark-blue opacity-70"></div>
      <div className="relative z-10 text-center p-4">
        <h1 className="text-5xl font-bold mb-4 text-dwimulya-gold">Selamat Datang di STIE Dwimulya</h1>
        <p className="text-xl mb-8">Mencetak Generasi Unggul di Bidang Ekonomi dan Bisnis</p>
        <Button size="lg" className="bg-dwimulya-gold text-dwimulya-dark-blue hover:bg-yellow-400">
          Jelajahi Program Kami
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;