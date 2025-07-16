import React from 'react';

interface TextContent {
  headline: string;
  subheadline?: string;
  paragraph: string;
  ctaText?: string;
  ctaLink?: string;
}

interface MediaTextProps {
  mediaUrl: string;
  mediaAlt: string;
  textContent: TextContent;
  layout?: 'left' | 'right';
  className?: string;
}

const MediaText: React.FC<MediaTextProps> = ({ mediaUrl, mediaAlt, textContent, layout = 'left', className }) => {
  const mediaOrder = layout === 'left' ? 'md:order-1' : 'md:order-2';
  const textOrder = layout === 'left' ? 'md:order-2' : 'md:order-1';

  return (
    <section className={`flex flex-col md:flex-row items-center ${className}`}>
      <div className={`w-full md:w-1/2 ${mediaOrder}`}>
        <img src={mediaUrl} alt={mediaAlt} className="object-cover w-full h-full rounded-lg shadow-md" />
      </div>
      <div className={`w-full md:w-1/2 p-12 ${textOrder}`}>
        <h2 className="text-4xl font-extrabold mb-4 text-gray-800">{textContent.headline}</h2>
        {textContent.subheadline && <h3 className="text-2xl text-gray-500 mb-6 font-medium">{textContent.subheadline}</h3>}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">{textContent.paragraph}</p>
        {textContent.ctaText && textContent.ctaLink && (
          <a href={textContent.ctaLink} className="text-blue-600 hover:underline font-bold text-lg group">
            {textContent.ctaText} <span className="inline-block transition-transform transform group-hover:translate-x-1">&rarr;</span>
          </a>
        )}
      </div>
    </section>
  );
};

export default MediaText;
