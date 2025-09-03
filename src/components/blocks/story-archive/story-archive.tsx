'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Search, Filter, Calendar, User, Tag } from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';
import { ArchivePagePagination } from '../../primitives/archive-page-pagination/archive-page-pagination';

interface Story {
  id: string;
  title: string;
  excerpt?: string;
  content?: string;
  author?: string;
  publishDate: string;
  category?: string;
  tags?: string[];
  image?: {
    src: string;
    alt: string;
    hint?: string;
  };
  href?: string;
  readTime?: number;
  featured?: boolean;
}

interface StoryArchiveProps {
  title?: string;
  description?: string;
  stories: Story[];
  showSearch?: boolean;
  showFilters?: boolean;
  showPagination?: boolean;
  itemsPerPage?: number;
  categories?: string[];
  showAuthor?: boolean;
  showReadTime?: boolean;
  showFeatured?: boolean;
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function StoryArchive({
  title,
  description,
  stories,
  showSearch = true,
  showFilters = true,
  showPagination = true,
  itemsPerPage = 12,
  categories = [],
  showAuthor = true,
  showReadTime = true,
  showFeatured = true,
  theme = 'default',
  className
}: StoryArchiveProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const filteredStories = stories.filter(story => {
    const matchesSearch = !searchQuery || 
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.content?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = !selectedCategory || story.category === selectedCategory;
    
    const matchesFeatured = !showOnlyFeatured || story.featured;
    
    return matchesSearch && matchesCategory && matchesFeatured;
  });

  const totalPages = Math.ceil(filteredStories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedStories = filteredStories.slice(startIndex, endIndex);

  const renderStory = (story: Story, index: number) => (
    <motion.div
      key={story.id}
      className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      {story.href ? (
        <a href={story.href} className="block">
          {renderStoryContent(story)}
        </a>
      ) : (
        renderStoryContent(story)
      )}
    </motion.div>
  );

  const renderStoryContent = (story: Story) => (
    <div className="h-full flex flex-col">
      {/* Image */}
      {story.image && (
        <div className="relative h-48 overflow-hidden">
          <LazyImage
            src={story.image.src}
            alt={story.image.alt}
            className="w-full h-full"
            imageClassName="object-cover group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={story.image.hint}
            fill
          />
          {story.featured && showFeatured && (
            <div className="absolute top-3 left-3">
              <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-headline text-xl font-semibold mb-3 line-clamp-2">
          {story.title}
        </h3>
        
        {story.excerpt && (
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
            {story.excerpt}
          </p>
        )}

        {/* Story Meta */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(story.publishDate)}</span>
          </div>

          {showAuthor && story.author && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4" />
              <span>{story.author}</span>
            </div>
          )}

          {showReadTime && story.readTime && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{story.readTime} min read</span>
            </div>
          )}

          {story.category && (
            <div className="mt-3">
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                {story.category}
              </span>
            </div>
          )}

          {/* Tags */}
          {story.tags && story.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {story.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
              {story.tags.length > 3 && (
                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                  +{story.tags.length - 3}
                </span>
              )}
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
                  placeholder="Search stories..."
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

                {showFeatured && (
                  <label className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg bg-background cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showOnlyFeatured}
                      onChange={(e) => setShowOnlyFeatured(e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm">Featured only</span>
                  </label>
                )}
              </div>
            )}
          </div>

          {/* Results */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredStories.length} story{filteredStories.length !== 1 ? 'ies' : ''} found
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedStories.map((story, index) => renderStory(story, index))}
          </div>

          {/* No Results */}
          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📖</div>
              <h3 className="font-headline text-lg font-semibold mb-2">
                No stories found
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
