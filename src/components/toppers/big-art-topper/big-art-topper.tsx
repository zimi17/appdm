'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowDown, Play, Pause } from 'lucide-react';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';

interface BigArtTopperProps {
  title: string;
  description?: string;
  image: {
    src: string;
    alt: string;
    hint?: string;
  };
  overlay?: {
    enabled: boolean;
    opacity: number;
    color: string;
  };
  variant?: 'default' | 'centered' | 'left-aligned' | 'right-aligned';
  height?: 'small' | 'medium' | 'large' | 'full';
  showScrollIndicator?: boolean;
  parallax?: boolean;
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function BigArtTopper({
  title,
  description,
  image,
  overlay = {
    enabled: true,
    opacity: 0.4,
    color: 'black'
  },
  variant = 'default',
  height = 'large',
  showScrollIndicator = true,
  parallax = false,
  theme = 'default',
  className
}: BigArtTopperProps) {
  // Handle undefined image gracefully
  const safeImage = image || {
    src: 'https://res.cloudinary.com/dmadbfz58/image/upload/v1754359928/DMP_9402_kus1ih.jpg',
    alt: title || 'Default image',
    hint: 'students classroom'
  };
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const themeClasses = {
    default: 'text-foreground',
    light: 'text-foreground',
    dark: 'text-background',
    accent: 'text-primary-foreground'
  };

  const heightClasses = {
    small: 'h-64 md:h-80',
    medium: 'h-80 md:h-96',
    large: 'h-96 md:h-[500px]',
    full: 'h-screen'
  };

  const variantClasses = {
    default: 'items-center justify-center text-center',
    centered: 'items-center justify-center text-center',
    'left-aligned': 'items-center justify-start text-left pl-8 md:pl-16',
    'right-aligned': 'items-center justify-end text-right pr-8 md:pr-16'
  };

  // Parallax effect
  useEffect(() => {
    if (!parallax) return;

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallax]);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('big-art-topper');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleScrollToContent = () => {
    const nextSection = document.querySelector('section:not(#big-art-topper)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="big-art-topper"
      className={cn(
        "relative overflow-hidden",
        heightClasses[height],
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <LazyImage
          src={safeImage.src}
          alt={safeImage.alt}
          className="w-full h-full"
          imageClassName={cn(
            "object-cover w-full h-full transition-transform duration-700",
            parallax && "scale-110"
          )}
          data-ai-hint={safeImage.hint}
          fill
          style={parallax ? {
            transform: `translateY(${scrollY * 0.5}px)`
          } : undefined}
        />
      </div>

      {/* Overlay */}
      {overlay.enabled && (
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: overlay.color,
            opacity: overlay.opacity
          }}
        />
      )}

      {/* Content */}
      <div className={cn(
        "relative z-10 h-full flex",
        variantClasses[variant]
      )}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className={cn(
              "font-headline font-bold leading-tight",
              height === 'small' ? "text-3xl md:text-4xl" :
              height === 'medium' ? "text-4xl md:text-5xl" :
              height === 'large' ? "text-5xl md:text-6xl" :
              "text-6xl md:text-7xl",
              themeClasses[theme]
            )}>
              {title}
            </h1>

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={cn(
                  "text-lg md:text-xl leading-relaxed max-w-2xl",
                  theme === 'default' ? "text-muted-foreground" :
                  theme === 'light' ? "text-muted-foreground" :
                  theme === 'dark' ? "text-background/80" :
                  "text-primary-foreground/80",
                  variant === 'left-aligned' ? "ml-0" :
                  variant === 'right-aligned' ? "ml-auto" :
                  "mx-auto"
                )}
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <button
            onClick={handleScrollToContent}
            className={cn(
              "flex flex-col items-center gap-2 p-3 rounded-full transition-all duration-300 hover:scale-110",
              theme === 'default' ? "bg-background/20 text-foreground hover:bg-background/30" :
              theme === 'light' ? "bg-background/20 text-foreground hover:bg-background/30" :
              theme === 'dark' ? "bg-background/20 text-background hover:bg-background/30" :
              "bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30"
            )}
            aria-label="Scroll to content"
          >
            <span className="text-sm font-medium">Scroll</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </motion.div>
      )}

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </section>
  );
}
