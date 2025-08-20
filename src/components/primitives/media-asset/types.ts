import { type ReactNode } from 'react';

export interface MediaAssetImageProps {
  alt: string;
  src: string;
  width?: string;
  height?: string;
  hint?: string;
  caption?: ReactNode;
  align?: 'align-center' | 'align-wide' | 'align-full';
}

export interface MediaAssetVideoProps {
  src: string;
  width?: string;
  height?: string;
  caption?: ReactNode;
  autoplay?: boolean;
  loop?: boolean;
  playsinline?: boolean;
  ariaLabel?: string;
}

export interface MediaAssetProps {
  image?: MediaAssetImageProps;
  video?: MediaAssetVideoProps;
  className?: string;
  aspectRatio?: `${string}/${string}`;
}
