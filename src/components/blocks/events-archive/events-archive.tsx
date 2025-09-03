'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Search, Filter, Calendar, MapPin, Clock } from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';
import { ArchivePagePagination } from '../../primitives/archive-page-pagination/archive-page-pagination';

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
  href?: string;
  status?: 'upcoming' | 'ongoing' | 'past';
}

interface EventsArchiveProps {
  title?: string;
  description?: string;
  events: Event[];
  showSearch?: boolean;
  showFilters?: boolean;
  showPagination?: boolean;
  itemsPerPage?: number;
  categories?: string[];
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function EventsArchive({
  title,
  description,
  events,
  showSearch = true,
  showFilters = true,
  showPagination = true,
  itemsPerPage = 12,
  categories = [],
  theme = 'default',
  className
}: EventsArchiveProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const getEventStatus = (event: Event) => {
    const now = new Date();
    const startDate = new Date(event.startDate);
    const endDate = event.endDate ? new Date(event.endDate) : startDate;

    if (now < startDate) return 'upcoming';
    if (now >= startDate && now <= endDate) return 'ongoing';
    return 'past';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'ongoing':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'past':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = !searchQuery || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || event.category === selectedCategory;
    
    const eventStatus = getEventStatus(event);
    const matchesStatus = !selectedStatus || eventStatus === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedEvents = filteredEvents.slice(startIndex, endIndex);

  const renderEvent = (event: Event, index: number) => {
    const status = getEventStatus(event);
    
    return (
      <motion.div
        key={event.id}
        className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
      >
        {event.href ? (
          <a href={event.href} className="block">
            {renderEventContent(event, status)}
          </a>
        ) : (
          renderEventContent(event, status)
        )}
      </motion.div>
    );
  };

  const renderEventContent = (event: Event, status: string) => (
    <div className="h-full flex flex-col">
      {/* Image */}
      {event.image && (
        <div className="relative h-48 overflow-hidden">
          <LazyImage
            src={event.image.src}
            alt={event.image.alt}
            className="w-full h-full"
            imageClassName="object-cover group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={event.image.hint}
            fill
          />
          <div className="absolute top-3 left-3">
            <span className={cn(
              "px-2 py-1 rounded-full text-xs font-medium border",
              getStatusColor(status)
            )}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-headline text-xl font-semibold mb-3 line-clamp-2">
          {event.title}
        </h3>
        
        {event.description && (
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
            {event.description}
          </p>
        )}

        {/* Event Details */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(event.startDate)}</span>
            {event.endDate && event.endDate !== event.startDate && (
              <span> - {formatDate(event.endDate)}</span>
            )}
          </div>

          {event.time && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{event.time}</span>
            </div>
          )}

          {event.location && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="line-clamp-1">{event.location}</span>
            </div>
          )}

          {event.category && (
            <div className="mt-3">
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                {event.category}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
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

          {/* Controls */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Search */}
            {showSearch && (
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search events..."
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            )}

            {/* Filters */}
            {showFilters && (
              <div className="flex gap-2">
                <Filter className="w-4 h-4 text-muted-foreground mt-2" />
                
                {categories.length > 0 && (
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                )}

                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">All Status</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="past">Past</option>
                </select>
              </div>
            )}
          </div>

          {/* Results */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedEvents.map((event, index) => renderEvent(event, index))}
          </div>

          {/* No Results */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="font-headline text-lg font-semibold mb-2">
                No events found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          {/* Pagination */}
          {showPagination && totalPages > 1 && (
            <div className="flex justify-center">
              <ArchivePagePagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
