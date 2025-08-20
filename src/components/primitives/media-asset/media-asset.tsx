'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { type MediaAssetProps } from './types';
import { LazyImage } from '../lazy-image/lazy-image';
import { Pause, Play } from 'lucide-react';

export function MediaAsset({ image, video, className, aspectRatio }: MediaAssetProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(!!video?.autoplay);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  
  const mediaContent = image ? (
    <LazyImage
      src={image.src}
      alt={image.alt}
      width={image.width ? parseInt(image.width) : undefined}
      height={image.height ? parseInt(image.height) : undefined}
      className={cn('w-full h-full', aspectRatio && `aspect-[${aspectRatio.replace('/',':')}]`)}
      imageClassName="object-cover"
      fill={!image.width || !image.height}
      data-ai-hint={image.hint}
    />
  ) : video ? (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        src={video.src}
        width={video.width ? parseInt(video.width) : undefined}
        height={video.height ? parseInt(video.height) : undefined}
        loop={video.loop}
        autoPlay={video.autoplay}
        playsInline={video.playsinline}
        muted // Muted is required for autoplay in most browsers
        aria-label={video.ariaLabel}
        className={cn('w-full h-full object-cover', aspectRatio && `aspect-[${aspectRatio.replace('/',':')}]`)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClick={togglePlay}
      >
        <p>Sorry, your browser does not support embedded videos.</p>
      </video>
      <button 
        onClick={togglePlay}
        className="absolute bottom-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/75 transition-opacity opacity-0 group-hover:opacity-100"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </button>
    </div>
  ) : null;

  const caption = image?.caption || video?.caption;

  return (
    <figure className={cn('group', className)}>
      <div className="relative overflow-hidden w-full">
        {mediaContent}
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-muted-foreground">
            {caption}
        </figcaption>
      )}
    </figure>
  );
}
