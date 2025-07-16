import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  layout?: 'fill' | 'responsive' | 'fixed';
  className?: string;
  priority?: boolean;
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height, className, priority }) => {
  // This is a basic implementation. If using Next.js, you would use next/image.
  // For Astro, you might use <Image /> from 'astro:assets' if you have local assets.
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = `https://via.placeholder.com/${width || 150}x${height || 150}`;
  };

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`bg-gray-200 ${className}`}
      loading={priority ? 'eager' : 'lazy'}
      onError={handleError}
    />
  );
};

export default Image;
