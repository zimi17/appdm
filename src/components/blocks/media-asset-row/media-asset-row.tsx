'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';

interface MediaItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  type: 'image' | 'video';
  hint?: string;
}

interface MediaAssetRowProps {
  title?: string;
  description?: string;
  media: MediaItem[];
  variant?: '1-up' | '2-up' | '3-up' | '1-up-vertical' | '2-up-full-vertical';
  showCaptions?: boolean;
  lightbox?: boolean;
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function MediaAssetRow({
  title,
  description,
  media,
  variant = '3-up',
  showCaptions = true,
  lightbox = true,
  theme = 'default',
  className
}: MediaAssetRowProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const variantClasses = {
    '1-up': 'grid-cols-1',
    '2-up': 'grid-cols-1 md:grid-cols-2',
    '3-up': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    '1-up-vertical': 'grid-cols-1 max-w-md mx-auto',
    '2-up-full-vertical': 'grid-cols-1 md:grid-cols-2'
  };

  const getAspectRatio = () => {
    switch (variant) {
      case '1-up-vertical':
        return 'aspect-[3/4]';
      case '2-up-full-vertical':
        return 'aspect-[4/5]';
      default:
        return 'aspect-[4/3]';
    }
  };

  const openLightbox = (index: number) => {
    if (lightbox) {
      setLightboxIndex(index);
      setLightboxOpen(true);
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setLightboxIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const goToNext = () => {
    setLightboxIndex((prev) => (prev + 1) % media.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  if (!media || media.length === 0) return null;

  return (
    <>
      <motion.section 
        className={cn(
          "py-16 md:py-24",
          themeClasses[theme],
          className
        )}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
      >
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
          <div className="col-span-full">
            {title && (
              <ComponentHeader 
                title={title} 
                description={description}
                className="mb-12"
              />
            )}

            <div className={cn(
              "grid gap-6",
              variantClasses[variant]
            )}>
              {media.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Media Content */}
                  <div className={cn("relative", getAspectRatio())}>
                    {item.type === 'image' ? (
                      <LazyImage
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full"
                        imageClassName="object-cover group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={item.hint}
                        fill
                      />
                    ) : (
                      <div className="relative w-full h-full bg-muted">
                        <video
                          src={item.src}
                          className="w-full h-full object-cover"
                          poster={item.src}
                          preload="metadata"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Overlay */}
                    {lightbox && (
                      <div 
                        className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 cursor-pointer"
                        onClick={() => openLightbox(index)}
                      />
                    )}

                    {/* Play Button for Videos */}
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Caption */}
                  {showCaptions && item.caption && (
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground">
                        {item.caption}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Lightbox */}
      {lightbox && lightboxOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-7xl max-h-[90vh] mx-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {media.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Media Content */}
            <div className="relative">
              {media[lightboxIndex].type === 'image' ? (
                <img
                  src={media[lightboxIndex].src}
                  alt={media[lightboxIndex].alt}
                  className="max-w-full max-h-[90vh] object-contain"
                />
              ) : (
                <video
                  src={media[lightboxIndex].src}
                  className="max-w-full max-h-[90vh]"
                  controls
                  autoPlay
                />
              )}

              {/* Caption */}
              {showCaptions && media[lightboxIndex].caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                  <p className="text-sm">{media[lightboxIndex].caption}</p>
                </div>
              )}
            </div>

            {/* Counter */}
            {media.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {lightboxIndex + 1} / {media.length}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </>
  );
}
