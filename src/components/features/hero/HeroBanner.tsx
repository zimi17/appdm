import React from 'react';

interface HeroBannerProps {
  imageUrl: string;
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ imageUrl, headline, subheadline, ctaText, ctaLink, className }) => {
  return (
    <div
      className={`relative bg-cover bg-center text-white ${className}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
      <div className="relative container mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-shadow-lg">{headline}</h1>
        {subheadline && <p className="text-lg md:text-2xl mb-8 text-shadow-md">{subheadline}</p>}
        {ctaText && ctaLink && (
          <a href={ctaLink} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
            {ctaText}
          </a>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
