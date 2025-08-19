
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ShimmerCard } from '../shimmer-card';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  shimmerClassName?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  'data-ai-hint'?: string;
}

export function LazyImage({
  src,
  alt,
  className,
  imageClassName,
  shimmerClassName,
  fill = false,
  width,
  height,
  sizes,
  priority = false,
  'data-ai-hint': dataAiHint,
}: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {isLoading && (
        <div className="absolute inset-0 z-10">
           <ShimmerCard className={shimmerClassName} />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          imageClassName
        )}
        onLoad={() => setIsLoading(false)}
        sizes={sizes}
        priority={priority}
        data-ai-hint={dataAiHint}
      />
    </div>
  );
}
