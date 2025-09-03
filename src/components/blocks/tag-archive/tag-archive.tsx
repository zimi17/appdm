'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Hash, X } from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';

interface Tag {
  id: string;
  name: string;
  count: number;
  color?: string;
  description?: string;
}

interface TagArchiveProps {
  title?: string;
  description?: string;
  tags: Tag[];
  selectedTags: string[];
  onTagSelect: (tagId: string) => void;
  onTagDeselect: (tagId: string) => void;
  onClearAll?: () => void;
  variant?: 'cloud' | 'list' | 'filter';
  showCount?: boolean;
  showDescription?: boolean;
  maxTags?: number;
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function TagArchive({
  title,
  description,
  tags,
  selectedTags,
  onTagSelect,
  onTagDeselect,
  onClearAll,
  variant = 'cloud',
  showCount = true,
  showDescription = false,
  maxTags,
  theme = 'default',
  className
}: TagArchiveProps) {
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  // Sort tags by count (descending) and limit if maxTags is specified
  const sortedTags = [...tags]
    .sort((a, b) => b.count - a.count)
    .slice(0, maxTags);

  // Calculate size scale for cloud variant
  const getTagSize = (count: number) => {
    if (variant !== 'cloud') return 'text-base';
    
    const maxCount = Math.max(...tags.map(tag => tag.count));
    const minCount = Math.min(...tags.map(tag => tag.count));
    const range = maxCount - minCount;
    
    if (range === 0) return 'text-base';
    
    const ratio = (count - minCount) / range;
    const sizes = ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl'];
    const sizeIndex = Math.floor(ratio * (sizes.length - 1));
    
    return sizes[sizeIndex];
  };

  const getTagColor = (tag: Tag) => {
    if (tag.color) return tag.color;
    
    // Generate color based on tag name for consistency
    const colors = [
      'bg-blue-100 text-blue-800 border-blue-200',
      'bg-green-100 text-green-800 border-green-200',
      'bg-purple-100 text-purple-800 border-purple-200',
      'bg-pink-100 text-pink-800 border-pink-200',
      'bg-yellow-100 text-yellow-800 border-yellow-200',
      'bg-indigo-100 text-indigo-800 border-indigo-200',
      'bg-red-100 text-red-800 border-red-200',
      'bg-teal-100 text-teal-800 border-teal-200'
    ];
    
    const index = tag.name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const handleTagClick = (tagId: string) => {
    if (selectedTags.includes(tagId)) {
      onTagDeselect(tagId);
    } else {
      onTagSelect(tagId);
    }
  };

  const handleClearAll = () => {
    onClearAll?.();
  };

  if (!tags || tags.length === 0) return null;

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

          {/* Selected Tags */}
          {selectedTags.length > 0 && (
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium text-muted-foreground">
                  Filtered by:
                </span>
                {selectedTags.map((tagId) => {
                  const tag = tags.find(t => t.id === tagId);
                  if (!tag) return null;
                  
                  return (
                    <motion.button
                      key={tagId}
                      onClick={() => onTagDeselect(tagId)}
                      className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm hover:bg-primary/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Hash className="w-3 h-3" />
                      {tag.name}
                      <X className="w-3 h-3" />
                    </motion.button>
                  );
                })}
                {onClearAll && (
                  <button
                    onClick={handleClearAll}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Clear all
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {/* Tags Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {variant === 'cloud' ? (
              <div className="flex flex-wrap gap-3 justify-center">
                {sortedTags.map((tag, index) => (
                  <motion.button
                    key={tag.id}
                    onClick={() => handleTagClick(tag.id)}
                    onMouseEnter={() => setHoveredTag(tag.id)}
                    onMouseLeave={() => setHoveredTag(null)}
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200",
                      getTagSize(tag.count),
                      selectedTags.includes(tag.id)
                        ? "bg-primary text-primary-foreground border-primary"
                        : getTagColor(tag),
                      "hover:scale-105 hover:shadow-md"
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Hash className="w-4 h-4" />
                    {tag.name}
                    {showCount && (
                      <span className="text-xs opacity-75">
                        ({tag.count})
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>
            ) : variant === 'list' ? (
              <div className="space-y-2">
                {sortedTags.map((tag, index) => (
                  <motion.button
                    key={tag.id}
                    onClick={() => handleTagClick(tag.id)}
                    className={cn(
                      "w-full flex items-center justify-between p-4 rounded-lg border transition-colors duration-200",
                      selectedTags.includes(tag.id)
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card border-border hover:bg-muted"
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="flex items-center gap-3">
                      <Hash className="w-4 h-4" />
                      <span className="font-medium">{tag.name}</span>
                      {showDescription && tag.description && (
                        <span className="text-sm text-muted-foreground">
                          {tag.description}
                        </span>
                      )}
                    </div>
                    {showCount && (
                      <span className="text-sm text-muted-foreground">
                        {tag.count}
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>
            ) : (
              // Filter variant
              <div className="flex flex-wrap gap-2">
                {sortedTags.map((tag, index) => (
                  <motion.button
                    key={tag.id}
                    onClick={() => handleTagClick(tag.id)}
                    className={cn(
                      "inline-flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors duration-200",
                      selectedTags.includes(tag.id)
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card border-border hover:bg-muted"
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Hash className="w-3 h-3" />
                    {tag.name}
                    {showCount && (
                      <span className="text-xs opacity-75">
                        ({tag.count})
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Tag Description Tooltip */}
          {showDescription && hoveredTag && (
            <motion.div
              className="fixed z-50 p-3 bg-popover border border-border rounded-lg shadow-lg max-w-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              {(() => {
                const tag = tags.find(t => t.id === hoveredTag);
                return tag?.description || 'No description available';
              })()}
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
