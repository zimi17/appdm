'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Search, X, Filter } from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';

interface FilterItem {
  id: string;
  label: string;
  value: string;
  count?: number;
}

interface SearchResult {
  id: string;
  title: string;
  description?: string;
  url: string;
  type: 'article' | 'event' | 'person' | 'page';
  date?: string;
  image?: string;
}

interface SearchArchiveProps {
  title?: string;
  description?: string;
  placeholder?: string;
  showFilters?: boolean;
  filters?: FilterItem[];
  onSearchChange?: (query: string) => void;
  onFilterChange?: (filters: string[]) => void;
  onSearch?: (query: string, filters: string[]) => void;
  results?: SearchResult[];
  loading?: boolean;
  totalResults?: number;
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function SearchArchive({
  title,
  description,
  placeholder = "Cari konten...",
  showFilters = true,
  filters = [],
  onSearchChange,
  onFilterChange,
  onSearch,
  results = [],
  loading = false,
  totalResults = 0,
  theme = 'default',
  className
}: SearchArchiveProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  // Debounced search
  const debouncedSearch = useCallback(
    (() => {
      let timeoutId: NodeJS.Timeout;
      return (query: string) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          onSearchChange?.(query);
          onSearch?.(query, selectedFilters);
        }, 300);
      };
    })(),
    [onSearchChange, onSearch, selectedFilters]
  );

  useEffect(() => {
    if (searchQuery) {
      debouncedSearch(searchQuery);
    }
  }, [searchQuery, debouncedSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    onSearchChange?.('');
  };

  const handleFilterToggle = (filterId: string) => {
    const newFilters = selectedFilters.includes(filterId)
      ? selectedFilters.filter(id => id !== filterId)
      : [...selectedFilters, filterId];
    
    setSelectedFilters(newFilters);
    onFilterChange?.(newFilters);
    onSearch?.(searchQuery, newFilters);
  };

  const handleClearFilters = () => {
    setSelectedFilters([]);
    onFilterChange?.([]);
    onSearch?.(searchQuery, []);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article': return '📄';
      case 'event': return '📅';
      case 'person': return '👤';
      case 'page': return '📋';
      default: return '📄';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
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

          {/* Search Input */}
          <motion.div 
            className="relative mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder={placeholder}
                className="w-full pl-12 pr-12 py-4 text-lg border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>

          {/* Filters */}
          {showFilters && filters.length > 0 && (
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Filter:</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => handleFilterToggle(filter.id)}
                      className={cn(
                        "px-3 py-1 text-sm rounded-full border transition-colors duration-200",
                        selectedFilters.includes(filter.id)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:bg-muted"
                      )}
                    >
                      {filter.label}
                      {filter.count && (
                        <span className="ml-1 text-xs opacity-75">
                          ({filter.count})
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {selectedFilters.length > 0 && (
                  <button
                    onClick={handleClearFilters}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Clear all
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Mencari...</p>
              </div>
            ) : searchQuery || selectedFilters.length > 0 ? (
              <>
                {/* Results Count */}
                <div className="mb-6">
                  <p className="text-muted-foreground">
                    {totalResults > 0 ? (
                      <>Menampilkan {results.length} dari {totalResults} hasil</>
                    ) : (
                      <>Tidak ada hasil ditemukan</>
                    )}
                  </p>
                </div>

                {/* Results List */}
                {results.length > 0 && (
                  <div className="space-y-4">
                    {results.map((result, index) => (
                      <motion.div
                        key={result.id}
                        className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-2xl">{getTypeIcon(result.type)}</div>
                          
                          <div className="flex-1">
                            <h3 className="font-headline text-lg font-semibold mb-2">
                              <a 
                                href={result.url}
                                className="hover:text-primary transition-colors"
                              >
                                {result.title}
                              </a>
                            </h3>
                            
                            {result.description && (
                              <p className="text-muted-foreground mb-3 line-clamp-2">
                                {result.description}
                              </p>
                            )}
                            
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="capitalize">{result.type}</span>
                              {result.date && (
                                <span>{formatDate(result.date)}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Masukkan kata kunci untuk mencari konten
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
