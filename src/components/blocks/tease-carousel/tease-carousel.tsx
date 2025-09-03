'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';

interface TeaseItem {
  id: string;
  title: string;
  description?: string;
  type?: 'article' | 'event' | 'person' | 'program' | 'news';
  publishDate?: string;
  author?: string;
  category?: string;
  tags?: string[];
  image?: {
    src: string;
    alt: string;
    hint?: string;
  };
  href?: string;
  featured?: boolean;
}

interface TeaseCarouselProps {
  title?: string;
  description?: string;
  teases: TeaseItem[];
  variant?: 'default' | 'large' | 'compact';
  itemsPerView?: number;
  showIndicators?: boolean;
  showNavigation?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function TeaseCarousel({
  title,
  description,
  teases,
  variant = 'default',
  itemsPerView = 3,
  showIndicators = true,
  showNavigation = true,
  autoplay = true,
  autoplayInterval = 5000,
  theme = 'default',
  className
}: TeaseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoplay);

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const totalSlides = Math.ceil(teases.length / itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return;

    const interval = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, autoplayInterval, totalSlides]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article': return '📄';
      case 'event': return '📅';
      case 'person': return '👤';
      case 'program': return '🎓';
      case 'news': return '📰';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article': return 'bg-blue-100 text-blue-800';
      case 'event': return 'bg-green-100 text-green-800';
      case 'person': return 'bg-purple-100 text-purple-800';
      case 'program': return 'bg-orange-100 text-orange-800';
      case 'news': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const getCurrentTeases = () => {
    const startIndex = currentIndex * itemsPerView;
    return teases.slice(startIndex, startIndex + itemsPerView);
  };

  const renderTeaseItem = (tease: TeaseItem, index: number) => (
    <motion.div
      key={tease.id}
      className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {tease.href ? (
        <a href={tease.href} className="block">
          {renderTeaseContent(tease)}
        </a>
      ) : (
        renderTeaseContent(tease)
      )}
    </motion.div>
  );

  const renderTeaseContent = (tease: TeaseItem) => (
    <div className="h-full flex flex-col">
      {/* Image */}
      {tease.image && (
        <div className="relative h-48 overflow-hidden">
          <LazyImage
            src={tease.image.src}
            alt={tease.image.alt}
            className="w-full h-full"
            imageClassName="object-cover group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={tease.image.hint}
            fill
          />
          <div className="absolute top-3 left-3">
            <span className="text-lg">{getTypeIcon(tease.type || 'article')}</span>
          </div>
          {tease.featured && (
            <div className="absolute top-3 right-3">
              <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className={cn(
            "px-2 py-1 text-xs font-medium rounded-full",
            getTypeColor(tease.type || 'article')
          )}>
            {(tease.type || 'article').toUpperCase()}
          </span>
        </div>

        <h3 className="font-headline text-xl font-semibold mb-3 line-clamp-2">
          {tease.title}
        </h3>
        
        {tease.description && (
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
            {tease.description}
          </p>
        )}

        {/* Meta Information */}
        <div className="space-y-2 text-xs text-muted-foreground mb-4">
          {tease.publishDate && (
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{formatDate(tease.publishDate)}</span>
            </div>
          )}

          {tease.author && (
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{tease.author}</span>
            </div>
          )}

          {tease.category && (
            <div className="flex items-center gap-1">
              <Tag className="w-3 h-3" />
              <span>{tease.category}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        {tease.tags && tease.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {tease.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
            {tease.tags.length > 2 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                +{tease.tags.length - 2}
              </span>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto">
          <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
            Read More
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  );

  const renderDefaultVariant = () => (
    <div className="relative">
      {/* Carousel Content */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {getCurrentTeases().map((tease, index) => renderTeaseItem(tease, index))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      {showNavigation && totalSlides > 1 && (
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Indicators */}
      {showIndicators && totalSlides > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors",
                index === currentIndex ? "bg-primary" : "bg-muted"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );

  const renderLargeVariant = () => (
    <div className="relative">
      {/* Carousel Content */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {getCurrentTeases().map((tease, index) => renderTeaseItem(tease, index))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      {showNavigation && totalSlides > 1 && (
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Indicators */}
      {showIndicators && totalSlides > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-4 h-4 rounded-full transition-colors",
                index === currentIndex ? "bg-primary" : "bg-muted"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );

  const renderCompactVariant = () => (
    <div className="relative">
      {/* Carousel Content */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {getCurrentTeases().map((tease, index) => renderTeaseItem(tease, index))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      {showNavigation && totalSlides > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Indicators */}
      {showIndicators && totalSlides > 1 && (
        <div className="flex justify-center gap-1 mt-4">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                index === currentIndex ? "bg-primary" : "bg-muted"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );

  const renderContent = () => {
    switch (variant) {
      case 'large':
        return renderLargeVariant();
      case 'compact':
        return renderCompactVariant();
      default:
        return renderDefaultVariant();
    }
  };

  return (
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

          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
