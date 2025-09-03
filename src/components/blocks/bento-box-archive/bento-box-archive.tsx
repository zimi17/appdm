'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Search, Filter, Grid, List } from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';

interface BentoItem {
  id: string;
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
    hint?: string;
  };
  category?: string;
  tags?: string[];
  href?: string;
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall';
  type?: 'article' | 'event' | 'person' | 'page' | 'media';
}

interface BentoBoxArchiveProps {
  title?: string;
  description?: string;
  items: BentoItem[];
  showSearch?: boolean;
  showFilters?: boolean;
  showViewToggle?: boolean;
  categories?: string[];
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function BentoBoxArchive({
  title,
  description,
  items,
  showSearch = true,
  showFilters = true,
  showViewToggle = true,
  categories = [],
  theme = 'default',
  className
}: BentoBoxArchiveProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return 'col-span-1 row-span-1';
      case 'medium':
        return 'col-span-1 row-span-2';
      case 'large':
        return 'col-span-2 row-span-2';
      case 'wide':
        return 'col-span-2 row-span-1';
      case 'tall':
        return 'col-span-1 row-span-3';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article': return '📄';
      case 'event': return '📅';
      case 'person': return '👤';
      case 'page': return '📋';
      case 'media': return '🎬';
      default: return '📄';
    }
  };

  const filteredItems = items.filter(item => {
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const renderGridItem = (item: BentoItem, index: number) => (
    <motion.div
      key={item.id}
      className={cn(
        "group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300",
        getSizeClasses(item.size || 'small')
      )}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
    >
      {item.href ? (
        <a href={item.href} className="block h-full">
          {renderItemContent(item)}
        </a>
      ) : (
        renderItemContent(item)
      )}
    </motion.div>
  );

  const renderItemContent = (item: BentoItem) => (
    <div className="h-full flex flex-col">
      {/* Image */}
      {item.image && (
        <div className="relative h-32 overflow-hidden">
          <LazyImage
            src={item.image.src}
            alt={item.image.alt}
            className="w-full h-full"
            imageClassName="object-cover group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={item.image.hint}
            fill
          />
          <div className="absolute top-2 left-2">
            <span className="text-2xl">{getTypeIcon(item.type || 'article')}</span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-headline text-lg font-semibold mb-2 line-clamp-2">
          {item.title}
        </h3>
        
        {item.description && (
          <p className="text-muted-foreground text-sm line-clamp-3 flex-1">
            {item.description}
          </p>
        )}

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {item.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
            {item.tags.length > 3 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                +{item.tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );

  const renderListItem = (item: BentoItem, index: number) => (
    <motion.div
      key={item.id}
      className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      {item.href ? (
        <a href={item.href} className="block">
          <div className="flex items-center gap-4 p-4">
            {renderListItemContent(item)}
          </div>
        </a>
      ) : (
        <div className="flex items-center gap-4 p-4">
          {renderListItemContent(item)}
        </div>
      )}
    </motion.div>
  );

  const renderListItemContent = (item: BentoItem) => (
    <>
      {/* Image */}
      {item.image && (
        <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg">
          <LazyImage
            src={item.image.src}
            alt={item.image.alt}
            className="w-full h-full"
            imageClassName="object-cover"
            data-ai-hint={item.image.hint}
            fill
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg">{getTypeIcon(item.type || 'article')}</span>
          <h3 className="font-headline text-lg font-semibold truncate">
            {item.title}
          </h3>
        </div>
        
        {item.description && (
          <p className="text-muted-foreground text-sm line-clamp-2">
            {item.description}
          </p>
        )}

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {item.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
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
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Search */}
            {showSearch && (
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search items..."
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            )}

            {/* Filters */}
            {showFilters && categories.length > 0 && (
              <div className="flex gap-2">
                <Filter className="w-4 h-4 text-muted-foreground mt-2" />
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
              </div>
            )}

            {/* View Toggle */}
            {showViewToggle && (
              <div className="flex border border-border rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={cn(
                    "px-3 py-2 rounded-l-lg transition-colors",
                    viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                  )}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={cn(
                    "px-3 py-2 rounded-r-lg transition-colors",
                    viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                  )}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Results */}
          <div className="mb-4">
            <p className="text-muted-foreground">
              {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {/* Items Display */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px]">
              {filteredItems.map((item, index) => renderGridItem(item, index))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredItems.map((item, index) => renderListItem(item, index))}
            </div>
          )}

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-headline text-lg font-semibold mb-2">
                No items found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
