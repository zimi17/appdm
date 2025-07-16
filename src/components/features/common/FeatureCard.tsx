import React from 'react';

interface FeatureCardProps {
  imageUrl: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  direction?: 'left' | 'right';
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageUrl, title, description, ctaText, ctaLink, direction = 'left', className }) => {
  const imageOrder = direction === 'left' ? 'md:order-1' : 'md:order-2';
  const textOrder = direction === 'left' ? 'md:order-2' : 'md:order-1';

  return (
    <div className={`flex flex-col md:flex-row items-center bg-white shadow-xl rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-2xl ${className}`}>
      <div className={`w-full md:w-1/2 ${imageOrder}`}>
        <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className={`w-full md:w-1/2 p-10 ${textOrder}`}>
        <h2 className="text-3xl font-bold mb-3 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-6 text-lg">{description}</p>
        {ctaText && ctaLink && (
          <a href={ctaLink} className="text-blue-600 hover:underline font-bold text-lg group">
            {ctaText} <span className="inline-block transition-transform transform group-hover:translate-x-1">&rarr;</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
