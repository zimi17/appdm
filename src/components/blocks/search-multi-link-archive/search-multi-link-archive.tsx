'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Search, ExternalLink, ArrowRight } from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';

interface SearchLink {
  id: string;
  title: string;
  description?: string;
  url: string;
  category?: string;
  type?: 'internal' | 'external';
  icon?: string;
  featured?: boolean;
}

interface SearchMultiLinkArchiveProps {
  title?: string;
  description?: string;
  links: SearchLink[];
  showSearch?: boolean;
  showCategories?: boolean;
  categories?: string[];
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function SearchMultiLinkArchive({
  title,
  description,
  links,
  showSearch = true,
  showCategories = true,
  categories = [],
  theme = 'default',
  className
}: SearchMultiLinkArchiveProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const filteredLinks = links.filter(link => {
    const matchesSearch = !searchQuery || 
      link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.description?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || link.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const renderLink = (link: SearchLink, index: number) => (
    <motion.div
      key={link.id}
      className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <a
        href={link.url}
        target={link.type === 'external' ? '_blank' : '_self'}
        rel={link.type === 'external' ? 'noopener noreferrer' : undefined}
        className="block p-6"
      >
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            {link.icon ? (
              <span className="text-2xl">{link.icon}</span>
            ) : (
              <ArrowRight className="w-6 h-6 text-primary" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-headline text-lg font-semibold group-hover:text-primary transition-colors">
                {link.title}
              </h3>
              {link.type === 'external' && (
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              )}
              {link.featured && (
                <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Featured
                </span>
              )}
            </div>
            
            {link.description && (
              <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                {link.description}
              </p>
            )}

            {link.category && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                {link.category}
              </span>
            )}
          </div>
        </div>
      </a>
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
                  placeholder="Search links..."
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            )}

            {/* Categories */}
            {showCategories && categories.length > 0 && (
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
          </div>

          {/* Results */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredLinks.length} link{filteredLinks.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLinks.map((link, index) => renderLink(link, index))}
          </div>

          {/* No Results */}
          {filteredLinks.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔗</div>
              <h3 className="font-headline text-lg font-semibold mb-2">
                No links found
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
