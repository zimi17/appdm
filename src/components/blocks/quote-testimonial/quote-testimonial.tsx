'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title?: string;
  company?: string;
  image?: {
    src: string;
    alt: string;
    hint?: string;
  };
  rating?: number;
}

interface QuoteTestimonialProps {
  title?: string;
  description?: string;
  testimonials: Testimonial[];
  variant?: 'single' | 'carousel' | 'grid';
  showIndicators?: boolean;
  showNavigation?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function QuoteTestimonial({
  title,
  description,
  testimonials,
  variant = 'carousel',
  showIndicators = true,
  showNavigation = true,
  autoplay = true,
  autoplayInterval = 5000,
  theme = 'default',
  className
}: QuoteTestimonialProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoplay);

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || variant !== 'carousel' || testimonials.length <= 1) return;

    const interval = setInterval(nextTestimonial, autoplayInterval);
    return () => clearInterval(interval);
  }, [isAutoPlaying, autoplayInterval, testimonials.length, variant]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={cn(
          "text-lg",
          i < rating ? "text-yellow-400" : "text-gray-300"
        )}
      >
        ★
      </span>
    ));
  };

  const renderSingleTestimonial = (testimonial: Testimonial) => (
    <motion.div
      className="max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative">
        <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
        
        <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
          "{testimonial.quote}"
        </blockquote>

        {testimonial.rating && (
          <div className="flex justify-center mb-4">
            {renderStars(testimonial.rating)}
          </div>
        )}

        <div className="flex items-center justify-center gap-4">
          {testimonial.image && (
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <LazyImage
                src={testimonial.image.src}
                alt={testimonial.image.alt}
                className="w-full h-full"
                imageClassName="object-cover"
                data-ai-hint={testimonial.image.hint}
                fill
              />
            </div>
          )}
          
          <div className="text-left">
            <div className="font-semibold text-lg">{testimonial.author}</div>
            {testimonial.title && (
              <div className="text-muted-foreground">{testimonial.title}</div>
            )}
            {testimonial.company && (
              <div className="text-muted-foreground text-sm">{testimonial.company}</div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderCarouselTestimonial = () => (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {renderSingleTestimonial(testimonials[currentIndex])}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      {showNavigation && testimonials.length > 1 && (
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Indicators */}
      {showIndicators && testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors",
                index === currentIndex ? "bg-primary" : "bg-muted"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );

  const renderGridTestimonials = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Quote className="w-8 h-8 text-primary/20 mb-4" />
          
          <blockquote className="text-base leading-relaxed mb-4">
            "{testimonial.quote}"
          </blockquote>

          {testimonial.rating && (
            <div className="flex mb-4">
              {renderStars(testimonial.rating)}
            </div>
          )}

          <div className="flex items-center gap-3">
            {testimonial.image && (
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <LazyImage
                  src={testimonial.image.src}
                  alt={testimonial.image.alt}
                  className="w-full h-full"
                  imageClassName="object-cover"
                  data-ai-hint={testimonial.image.hint}
                  fill
                />
              </div>
            )}
            
            <div>
              <div className="font-semibold">{testimonial.author}</div>
              {testimonial.title && (
                <div className="text-muted-foreground text-sm">{testimonial.title}</div>
              )}
              {testimonial.company && (
                <div className="text-muted-foreground text-sm">{testimonial.company}</div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (variant) {
      case 'single':
        return renderSingleTestimonial(testimonials[0]);
      case 'carousel':
        return renderCarouselTestimonial();
      case 'grid':
        return renderGridTestimonials();
      default:
        return renderCarouselTestimonial();
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

          {renderContent()}
        </div>
      </div>
    </motion.section>
  );
}
