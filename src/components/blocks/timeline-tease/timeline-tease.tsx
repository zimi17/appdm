'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ComponentHeader } from '../../primitives/component-header/component-header';
import { CtaLink } from '../../primitives/cta-link/cta-link';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';

interface TimelineEvent {
  id: string;
  date: string;
  endDate?: string;
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
    hint?: string;
  };
  link?: {
    text: string;
    href: string;
  };
}

interface TimelineTeaseProps {
  title?: string;
  description?: string;
  events: TimelineEvent[];
  variant?: 'vertical' | 'horizontal';
  showImages?: boolean;
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function TimelineTease({ 
  title, 
  description, 
  events, 
  variant = 'vertical',
  showImages = true,
  theme = 'default',
  className 
}: TimelineTeaseProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const eventVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long'
    });
  };

  const formatDateRange = (startDate: string, endDate?: string) => {
    if (!endDate || endDate === startDate) {
      return formatDate(startDate);
    }
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  if (variant === 'horizontal') {
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
        variants={containerVariants}
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
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />
              
              <div className="space-y-12">
                {events.map((event, index) => (
                  <motion.div 
                    key={event.id}
                    className={cn(
                      "relative flex items-center",
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    )}
                    variants={eventVariants}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10" />
                    
                    {/* Content */}
                    <div className={cn(
                      "flex-1 p-6 bg-card border border-border rounded-lg",
                      index % 2 === 0 ? "mr-8" : "ml-8"
                    )}>
                      <div className="text-center mb-4">
                        <div className="text-sm text-primary font-medium">
                          {formatDateRange(event.date, event.endDate)}
                        </div>
                        <h3 className="font-headline text-lg font-semibold mt-1">
                          {event.title}
                        </h3>
                      </div>
                      
                      {event.description && (
                        <p className="text-muted-foreground text-sm mb-4 text-center">
                          {event.description}
                        </p>
                      )}
                      
                      {showImages && event.image && (
                        <div className="mb-4">
                          <LazyImage
                            src={event.image.src}
                            alt={event.image.alt}
                            className="w-full aspect-[3/2] rounded-lg overflow-hidden"
                            imageClassName="object-cover"
                            data-ai-hint={event.image.hint}
                            fill
                          />
                        </div>
                      )}
                      
                      {event.link && (
                        <div className="text-center">
                          <CtaLink 
                            href={event.link.href}
                            variant="outline"
                            size="sm"
                          >
                            {event.link.text}
                          </CtaLink>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    );
  }

  // Vertical variant
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
      variants={containerVariants}
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
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
            
            <div className="space-y-8">
              {events.map((event, index) => (
                <motion.div 
                  key={event.id}
                  className="relative flex items-start gap-6"
                  variants={eventVariants}
                >
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6 bg-card border border-border rounded-lg">
                    <div className="mb-4">
                      <div className="text-sm text-primary font-medium mb-2">
                        {formatDateRange(event.date, event.endDate)}
                      </div>
                      <h3 className="font-headline text-lg font-semibold">
                        {event.title}
                      </h3>
                    </div>
                    
                    {event.description && (
                      <p className="text-muted-foreground text-sm mb-4">
                        {event.description}
                      </p>
                    )}
                    
                    {showImages && event.image && (
                      <div className="mb-4">
                        <LazyImage
                          src={event.image.src}
                          alt={event.image.alt}
                          className="w-full aspect-[3/2] rounded-lg overflow-hidden"
                          imageClassName="object-cover"
                          data-ai-hint={event.image.hint}
                          fill
                        />
                      </div>
                    )}
                    
                    {event.link && (
                      <CtaLink 
                        href={event.link.href}
                        variant="outline"
                        size="sm"
                      >
                        {event.link.text}
                      </CtaLink>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
