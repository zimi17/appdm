
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CtaLink } from '../cta-link/cta-link';
import { LazyImage } from '../lazy-image/lazy-image';

interface PersonTeaseProps {
  person: {
    id: string;
    name: string;
    title: string;
    department?: string;
    bio?: string;
    image?: {
      src: string;
      alt: string;
      hint?: string;
    };
    link: {
      text: string;
      href: string;
    };
  };
  variant?: 'card' | 'flat' | 'text-only';
  size?: 'small' | 'medium' | 'large';
  showImage?: boolean;
  showBio?: boolean;
  className?: string;
}

export function PersonTease({ 
  person, 
  variant = 'card',
  size = 'medium',
  showImage = true,
  showBio = true,
  className 
}: PersonTeaseProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  const variantClasses = {
    card: 'bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300',
    flat: 'hover:bg-muted/50 transition-colors duration-300',
    'text-only': 'hover:text-primary transition-colors duration-300'
  };

  const imageSizes = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32'
  };

  const renderContent = () => {
    if (variant === 'text-only') {
      return (
        <div className="text-center">
          <h3 className={cn("font-headline font-semibold mb-2", sizeClasses[size])}>
            {person.name}
          </h3>
          <p className={cn("text-primary mb-2", sizeClasses[size])}>
            {person.title}
          </p>
          {person.department && (
            <p className="text-muted-foreground text-sm">
              {person.department}
            </p>
          )}
        </div>
      );
    }

    if (variant === 'flat') {
      return (
        <div className="flex items-start gap-4">
          {showImage && person.image && (
            <div className="flex-shrink-0">
              <LazyImage
                src={person.image.src}
                alt={person.image.alt}
                className={cn("rounded-lg overflow-hidden", imageSizes[size])}
                imageClassName="object-cover"
                data-ai-hint={person.image.hint}
                fill
              />
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            <h3 className={cn("font-headline font-semibold mb-2", sizeClasses[size])}>
              {person.name}
            </h3>
            <p className={cn("text-primary mb-2", sizeClasses[size])}>
              {person.title}
            </p>
            {person.department && (
              <p className="text-muted-foreground text-sm mb-2">
                {person.department}
              </p>
            )}
            {showBio && person.bio && (
              <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                {person.bio}
              </p>
            )}
            <CtaLink 
              href={person.link.href}
              variant="outline"
              size="sm"
            >
              {person.link.text}
            </CtaLink>
          </div>
        </div>
      );
    }

    // Card variant
    return (
      <>
        {showImage && person.image && (
          <div className="relative aspect-square overflow-hidden">
            <LazyImage
              src={person.image.src}
              alt={person.image.alt}
              className="w-full h-full"
              imageClassName="object-cover"
              data-ai-hint={person.image.hint}
              fill
            />
          </div>
        )}
        
        <div className="p-4">
          <h3 className={cn("font-headline font-semibold mb-2", sizeClasses[size])}>
            {person.name}
          </h3>
          <p className={cn("text-primary mb-2", sizeClasses[size])}>
            {person.title}
          </p>
          {person.department && (
            <p className="text-muted-foreground text-sm mb-3">
              {person.department}
            </p>
          )}
          {showBio && person.bio && (
            <p className="text-muted-foreground text-sm line-clamp-3 mb-4 leading-relaxed">
              {person.bio}
            </p>
          )}
          <CtaLink 
            href={person.link.href}
            variant="outline"
            size="sm"
            className="w-full justify-center"
          >
            {person.link.text}
          </CtaLink>
        </div>
      </>
    );
  };

  return (
    <motion.div 
      className={cn(
        variantClasses[variant],
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {renderContent()}
    </motion.div>
  );
}
