
import React from 'react';

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  ctaButton?: {
    text: string;
    url: string;
  };
  sectionVariant?: 'default' | 'centered';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  ctaButton,
  sectionVariant = 'default' 
}) => {
  return (
    <div 
      className={`relative bg-cover bg-center h-screen`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
        <h1 className="text-5xl font-bold">{title}</h1>
        {subtitle && <p className="text-xl mt-4">{subtitle}</p>}
        {ctaButton && (
          <a 
            href={ctaButton.url}
            className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
          >
            {ctaButton.text}
          </a>
        )}
      </div>
    </div>
  );
};
