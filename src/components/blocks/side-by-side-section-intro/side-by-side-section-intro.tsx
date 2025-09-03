'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ComponentHeader } from '../../primitives/component-header/component-header';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';

interface SideBySideSectionIntroProps {
  title?: string;
  description?: string;
  leftContent: {
    title?: string;
    description?: string;
    content?: string;
    image?: {
      src: string;
      alt: string;
      hint?: string;
    };
    cta?: {
      text: string;
      href: string;
      variant?: 'primary' | 'secondary' | 'outline';
    };
  };
  rightContent: {
    title?: string;
    description?: string;
    content?: string;
    image?: {
      src: string;
      alt: string;
      hint?: string;
    };
    cta?: {
      text: string;
      href: string;
      variant?: 'primary' | 'secondary' | 'outline';
    };
  };
  variant?: 'ordered' | 'unordered' | 'ordered-wide' | 'unordered-center' | 'unordered-no-description' | 'unordered-subtitle';
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function SideBySideSectionIntro({
  title,
  description,
  leftContent,
  rightContent,
  variant = 'unordered',
  theme = 'default',
  className
}: SideBySideSectionIntroProps) {
  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const variantClasses = {
    ordered: 'grid-cols-1 lg:grid-cols-2',
    unordered: 'grid-cols-1 lg:grid-cols-2',
    'ordered-wide': 'grid-cols-1 lg:grid-cols-2',
    'unordered-center': 'grid-cols-1 lg:grid-cols-2',
    'unordered-no-description': 'grid-cols-1 lg:grid-cols-2',
    'unordered-subtitle': 'grid-cols-1 lg:grid-cols-2'
  };

  const getCTAClasses = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-primary-foreground hover:bg-primary/90';
      case 'secondary':
        return 'bg-secondary text-secondary-foreground hover:bg-secondary/90';
      case 'outline':
        return 'border border-border hover:bg-muted';
      default:
        return 'bg-primary text-primary-foreground hover:bg-primary/90';
    }
  };

  const renderContent = (content: any, side: 'left' | 'right') => (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: side === 'left' ? 0.1 : 0.2 }}
    >
      {/* Image */}
      {content.image && (
        <div className="aspect-[4/3] rounded-lg overflow-hidden">
          <LazyImage
            src={content.image.src}
            alt={content.image.alt}
            className="w-full h-full"
            imageClassName="object-cover"
            data-ai-hint={content.image.hint}
            fill
          />
        </div>
      )}

      {/* Content */}
      <div className="space-y-4">
        {content.title && (
          <h3 className="font-headline text-xl font-semibold">
            {content.title}
          </h3>
        )}

        {content.description && (
          <p className="text-muted-foreground">
            {content.description}
          </p>
        )}

        {content.content && (
          <div className="prose prose-sm max-w-none">
            <p className="text-base leading-relaxed">
              {content.content}
            </p>
          </div>
        )}

        {content.cta && (
          <div>
            <a
              href={content.cta.href}
              className={cn(
                "inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200",
                getCTAClasses(content.cta.variant || 'primary')
              )}
            >
              {content.cta.text}
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );

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

          <div className={cn(
            "grid gap-8 lg:gap-12",
            variantClasses[variant]
          )}>
            {/* Left Content */}
            <div>
              {renderContent(leftContent, 'left')}
            </div>

            {/* Right Content */}
            <div>
              {renderContent(rightContent, 'right')}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
