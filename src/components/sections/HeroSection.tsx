import React from 'react';
import Button from '@/components/common/ui/Button/Button';

interface HeroSectionProps {
  headline: string;
  subheadline?: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ headline, subheadline, imageUrl, ctaText, ctaLink }) => {
  return (
    <section className="relative h-[600px] bg-cover bg-center text-white" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">{headline}</h1>
        {subheadline && <p className="text-xl md:text-2xl max-w-3xl mb-8">{subheadline}</p>}
        {ctaText && ctaLink && (
          <Button variant="primary" size="lg" onClick={() => window.location.href = ctaLink}>
            {ctaText}
          </Button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
