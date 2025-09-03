'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';

interface FeedItem {
  id: string;
  title: string;
  description?: string;
  type: 'article' | 'event' | 'person' | 'program' | 'news';
  publishDate?: string;
  author?: string;
  category?: string;
  tags?: string[];
  image?: {
    src: string;
    alt: string;
    hint?: string;
  };
  href?: string;
  featured?: boolean;
}

interface Feed {
  id: string;
  title: string;
  description?: string;
  items: FeedItem[];
  showMoreHref?: string;
  showMoreText?: string;
}

interface MultiFeedTeaseRowProps {
  title?: string;
  description?: string;
  feeds: Feed[];
  variant?: 'horizontal' | 'vertical' | 'grid';
  itemsPerFeed?: number;
  showFeedTitles?: boolean;
  showMoreLinks?: boolean;
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function MultiFeedTeaseRow({
  title,
  description,
  feeds,
  variant = 'horizontal',
  itemsPerFeed = 3,
  showFeedTitles = true,
  showMoreLinks = true,
  theme = 'default',
  className
}: MultiFeedTeaseRowProps) {
  const [activeFeed, setActiveFeed] = useState(0);

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article': return '📄';
      case 'event': return '📅';
      case 'person': return '👤';
      case 'program': return '🎓';
      case 'news': return '📰';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article': return 'bg-blue-100 text-blue-800';
      case 'event': return 'bg-green-100 text-green-800';
      case 'person': return 'bg-purple-100 text-purple-800';
      case 'program': return 'bg-orange-100 text-orange-800';
      case 'news': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const renderFeedItem = (item: FeedItem, index: number) => (
    <motion.div
      key={item.id}
      className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      {item.href ? (
        <a href={item.href} className="block">
          {renderItemContent(item)}
        </a>
      ) : (
        renderItemContent(item)
      )}
    </motion.div>
  );

  const renderItemContent = (item: FeedItem) => (
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
            <span className="text-lg">{getTypeIcon(item.type)}</span>
          </div>
          {item.featured && (
            <div className="absolute top-2 right-2">
              <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className={cn(
            "px-2 py-1 text-xs font-medium rounded-full",
            getTypeColor(item.type)
          )}>
            {item.type.toUpperCase()}
          </span>
        </div>

        <h3 className="font-headline text-lg font-semibold mb-2 line-clamp-2">
          {item.title}
        </h3>
        
        {item.description && (
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3 flex-1">
            {item.description}
          </p>
        )}

        {/* Meta Information */}
        <div className="space-y-1 text-xs text-muted-foreground">
          {item.publishDate && (
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{formatDate(item.publishDate)}</span>
            </div>
          )}

          {item.author && (
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{item.author}</span>
            </div>
          )}

          {item.category && (
            <div className="flex items-center gap-1">
              <Tag className="w-3 h-3" />
              <span>{item.category}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {item.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="px-1 py-0.5 bg-muted text-muted-foreground text-xs rounded"
              >
                {tag}
              </span>
            ))}
            {item.tags.length > 2 && (
              <span className="px-1 py-0.5 bg-muted text-muted-foreground text-xs rounded">
                +{item.tags.length - 2}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );

  const renderHorizontalFeeds = () => (
    <div className="space-y-8">
      {/* Feed Navigation */}
      {feeds.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {feeds.map((feed, index) => (
            <button
              key={feed.id}
              onClick={() => setActiveFeed(index)}
              className={cn(
                "px-4 py-2 rounded-lg font-medium transition-colors",
                index === activeFeed
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {feed.title}
            </button>
          ))}
        </div>
      )}

      {/* Active Feed Content */}
      <div>
        {showFeedTitles && (
          <div className="mb-6">
            <h3 className="font-headline text-2xl font-semibold mb-2">
              {feeds[activeFeed].title}
            </h3>
            {feeds[activeFeed].description && (
              <p className="text-muted-foreground">
                {feeds[activeFeed].description}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feeds[activeFeed].items.slice(0, itemsPerFeed).map((item, index) => 
            renderFeedItem(item, index)
          )}
        </div>

        {showMoreLinks && feeds[activeFeed].showMoreHref && (
          <div className="text-center mt-6">
            <a
              href={feeds[activeFeed].showMoreHref}
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
            >
              {feeds[activeFeed].showMoreText || 'View All'}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );

  const renderVerticalFeeds = () => (
    <div className="space-y-12">
      {feeds.map((feed, index) => (
        <div key={feed.id}>
          {showFeedTitles && (
            <div className="mb-6">
              <h3 className="font-headline text-2xl font-semibold mb-2">
                {feed.title}
              </h3>
              {feed.description && (
                <p className="text-muted-foreground">
                  {feed.description}
                </p>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feed.items.slice(0, itemsPerFeed).map((item, itemIndex) => 
              renderFeedItem(item, itemIndex)
            )}
          </div>

          {showMoreLinks && feed.showMoreHref && (
            <div className="text-center mt-6">
              <a
                href={feed.showMoreHref}
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
              >
                {feed.showMoreText || 'View All'}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderGridFeeds = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {feeds.map((feed, index) => (
        <div key={feed.id}>
          {showFeedTitles && (
            <div className="mb-6">
              <h3 className="font-headline text-xl font-semibold mb-2">
                {feed.title}
              </h3>
              {feed.description && (
                <p className="text-muted-foreground text-sm">
                  {feed.description}
                </p>
              )}
            </div>
          )}

          <div className="space-y-4">
            {feed.items.slice(0, itemsPerFeed).map((item, itemIndex) => 
              renderFeedItem(item, itemIndex)
            )}
          </div>

          {showMoreLinks && feed.showMoreHref && (
            <div className="text-center mt-4">
              <a
                href={feed.showMoreHref}
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors text-sm"
              >
                {feed.showMoreText || 'View All'}
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (variant) {
      case 'vertical':
        return renderVerticalFeeds();
      case 'grid':
        return renderGridFeeds();
      default:
        return renderHorizontalFeeds();
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
