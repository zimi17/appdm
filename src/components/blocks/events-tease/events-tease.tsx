'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ComponentHeader } from '../../primitives/component-header/component-header';
import { CtaLink } from '../../primitives/cta-link/cta-link';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';

interface Event {
  id: string;
  title: string;
  description?: string;
  startDate: string;
  endDate?: string;
  time?: string;
  location?: string;
  category?: string;
  image?: {
    src: string;
    alt: string;
    hint?: string;
  };
  link: {
    text: string;
    href: string;
  };
}

interface EventsTeaseProps {
  title?: string;
  description?: string;
  events: Event[];
  variant?: '2-teases' | '3-teases' | '4-teases' | '5-teases' | '6-teases';
  showLinks?: boolean;
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function EventsTease({ 
  title, 
  description, 
  events, 
  variant = '3-teases',
  showLinks = true,
  theme = 'default',
  className 
}: EventsTeaseProps) {
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

  const variantClasses = {
    '2-teases': 'md:grid-cols-2',
    '3-teases': 'md:grid-cols-2 lg:grid-cols-3',
    '4-teases': 'md:grid-cols-2 lg:grid-cols-4',
    '5-teases': 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    '6-teases': 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short'
    });
  };

  const formatTime = (timeString: string) => {
    return timeString;
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
          
          <div className={cn(
            "grid gap-6",
            variantClasses[variant]
          )}>
            {events.map((event) => (
              <motion.div 
                key={event.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                variants={eventVariants}
              >
                {/* Event Image */}
                {event.image && (
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <LazyImage
                      src={event.image.src}
                      alt={event.image.alt}
                      className="w-full h-full"
                      imageClassName="object-cover"
                      data-ai-hint={event.image.hint}
                      fill
                    />
                    {event.category && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                          {event.category}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Event Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="font-headline text-lg font-semibold mb-2 line-clamp-2">
                      {event.title}
                    </h3>
                    
                    {event.description && (
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {event.description}
                      </p>
                    )}

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span className="text-primary">📅</span>
                        <span>{formatDate(event.startDate)}</span>
                        {event.endDate && event.endDate !== event.startDate && (
                          <span> - {formatDate(event.endDate)}</span>
                        )}
                      </div>
                      
                      {event.time && (
                        <div className="flex items-center gap-2">
                          <span className="text-primary">🕐</span>
                          <span>{formatTime(event.time)}</span>
                        </div>
                      )}
                      
                      {event.location && (
                        <div className="flex items-center gap-2">
                          <span className="text-primary">📍</span>
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  {showLinks && event.link && (
                    <CtaLink 
                      href={event.link.href}
                      variant="outline"
                      size="sm"
                      className="w-full justify-center"
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
    </motion.section>
  );
}
