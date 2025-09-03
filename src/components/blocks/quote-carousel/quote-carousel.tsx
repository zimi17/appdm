'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';

interface QuoteItem {
  id: string;
  text: string;
  author: string;
  title?: string;
  company?: string;
  image?: {
    src: string;
    alt: string;
    hint?: string;
  };
}

interface QuoteCarouselProps {
  title?: string;
  description?: string;
  quotes: QuoteItem[];
  autoPlay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  showNavigation?: boolean;
  variant?: 'single' | 'multiple';
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function QuoteCarousel({
  title,
  description,
  quotes,
  autoPlay = true,
  interval = 5000,
  showIndicators = true,
  showNavigation = true,
  variant = 'single',
  theme = 'default',
  className
}: QuoteCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || quotes.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, interval, quotes.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(autoPlay);
  };

  if (!quotes || quotes.length === 0) return null;

  const currentQuote = quotes[currentIndex];

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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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

          <div className="relative">
            {/* Quote Content */}
            <div className="text-center max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  {/* Quote Icon */}
                  <div className="flex justify-center">
                    <Quote className="w-12 h-12 text-primary opacity-50" />
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed">
                    "{currentQuote.text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center justify-center gap-6">
                    {/* Author Image */}
                    {currentQuote.image && (
                      <div className="flex-shrink-0">
                        <LazyImage
                          src={currentQuote.image.src}
                          alt={currentQuote.image.alt}
                          className="w-16 h-16 rounded-full overflow-hidden"
                          imageClassName="object-cover"
                          data-ai-hint={currentQuote.image.hint}
                          fill
                        />
                      </div>
                    )}

                    {/* Author Details */}
                    <div className="text-center">
                      <div className="font-headline text-lg font-semibold">
                        {currentQuote.author}
                      </div>
                      {currentQuote.title && (
                        <div className="text-muted-foreground">
                          {currentQuote.title}
                        </div>
                      )}
                      {currentQuote.company && (
                        <div className="text-sm text-muted-foreground">
                          {currentQuote.company}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            {showNavigation && quotes.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-background border border-border hover:bg-muted transition-colors duration-200 flex items-center justify-center"
                  aria-label="Previous quote"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-background border border-border hover:bg-muted transition-colors duration-200 flex items-center justify-center"
                  aria-label="Next quote"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Indicators */}
            {showIndicators && quotes.length > 1 && (
              <div className="flex justify-center mt-8 space-x-2">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-colors duration-200",
                      index === currentIndex
                        ? "bg-primary"
                        : "bg-muted hover:bg-muted-foreground/50"
                    )}
                    aria-label={`Go to quote ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Play/Pause Indicator */}
            {quotes.length > 1 && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {isPlaying ? 'Pause' : 'Play'} auto-rotation
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
