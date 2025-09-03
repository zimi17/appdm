'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ComponentHeader } from '../../primitives/component-header/component-header';
import { CtaLink } from '../../primitives/cta-link/cta-link';

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
  link?: {
    text: string;
    href: string;
  };
}

interface EventScheduleProps {
  title?: string;
  description?: string;
  events: Event[];
  viewMode?: 'list' | 'calendar' | 'timeline';
  showFilters?: boolean;
  categories?: string[];
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function EventSchedule({ 
  title, 
  description, 
  events, 
  viewMode = 'list',
  showFilters = false,
  categories = [],
  theme = 'default',
  className 
}: EventScheduleProps) {
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
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    return timeString;
  };

  const groupedEvents = events.reduce((groups, event) => {
    const date = new Date(event.startDate);
    const monthYear = date.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
    
    if (!groups[monthYear]) {
      groups[monthYear] = [];
    }
    groups[monthYear].push(event);
    return groups;
  }, {} as Record<string, Event[]>);

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

          {/* Filters */}
          {showFilters && categories.length > 0 && (
            <motion.div 
              className="mb-8 flex flex-wrap gap-2"
              variants={eventVariants}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </button>
              ))}
            </motion.div>
          )}

          {/* Events List */}
          <div className="space-y-8">
            {Object.entries(groupedEvents).map(([monthYear, monthEvents]) => (
              <motion.div 
                key={monthYear}
                className="space-y-4"
                variants={eventVariants}
              >
                <h3 className="font-headline text-xl font-semibold text-muted-foreground border-b border-border pb-2">
                  {monthYear}
                </h3>
                
                <div className="space-y-4">
                  {monthEvents.map((event) => (
                    <motion.div 
                      key={event.id}
                      className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                      variants={eventVariants}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        {/* Event Image */}
                        {event.image && (
                          <div className="flex-shrink-0">
                            <img
                              src={event.image.src}
                              alt={event.image.alt}
                              className="w-24 h-24 object-cover rounded-lg"
                              data-ai-hint={event.image.hint}
                            />
                          </div>
                        )}

                        {/* Event Content */}
                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                            <div className="flex-1">
                              <h4 className="font-headline text-xl font-semibold mb-2">
                                {event.title}
                              </h4>
                              
                              {event.description && (
                                <p className="text-muted-foreground mb-4">
                                  {event.description}
                                </p>
                              )}

                              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
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
                                    <span>{event.location}</span>
                                  </div>
                                )}
                                
                                {event.category && (
                                  <div className="flex items-center gap-2">
                                    <span className="text-primary">🏷️</span>
                                    <span>{event.category}</span>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* CTA */}
                            {event.link && (
                              <div className="flex-shrink-0">
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
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
