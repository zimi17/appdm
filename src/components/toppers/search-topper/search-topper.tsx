'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Search, Filter, X, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';

interface SearchSuggestion {
  id: string;
  text: string;
  type?: 'recent' | 'popular' | 'result';
  href?: string;
  icon?: string;
}

interface SearchFilter {
  id: string;
  label: string;
  type: 'select' | 'checkbox' | 'range';
  options?: { value: string; label: string }[];
  value?: any;
}

interface SearchTopperProps {
  title: string;
  description?: string;
  placeholder?: string;
  onSearch?: (query: string, filters?: Record<string, any>) => void;
  suggestions?: SearchSuggestion[];
  filters?: SearchFilter[];
  showFilters?: boolean;
  showSuggestions?: boolean;
  showRecentSearches?: boolean;
  showPopularSearches?: boolean;
  backgroundImage?: {
    src: string;
    alt: string;
    hint?: string;
  };
  variant?: 'default' | 'centered' | 'minimal';
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function SearchTopper({
  title,
  description,
  placeholder = 'Search...',
  onSearch,
  suggestions = [],
  filters = [],
  showFilters = true,
  showSuggestions = true,
  showRecentSearches = true,
  showPopularSearches = true,
  backgroundImage,
  variant = 'default',
  theme = 'default',
  className
}: SearchTopperProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showSuggestionsPanel, setShowSuggestionsPanel] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});
  const [showFiltersPanel, setShowFiltersPanel] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recent-searches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestionsPanel(false);
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (searchQuery: string = query) => {
    if (!searchQuery.trim()) return;

    // Add to recent searches
    const newRecentSearches = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
    setRecentSearches(newRecentSearches);
    localStorage.setItem('recent-searches', JSON.stringify(newRecentSearches));

    // Call onSearch callback
    if (onSearch) {
      onSearch(searchQuery, activeFilters);
    }

    setShowSuggestionsPanel(false);
    setIsFocused(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.text);
    handleSearch(suggestion.text);
  };

  const clearSearch = () => {
    setQuery('');
    setShowSuggestionsPanel(false);
  };

  const handleFilterChange = (filterId: string, value: any) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterId]: value
    }));
  };

  const clearFilters = () => {
    setActiveFilters({});
  };

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.text.toLowerCase().includes(query.toLowerCase())
  );

  const renderSearchInput = () => (
    <div className="relative" ref={searchRef}>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
            type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => {
              setIsFocused(true);
              setShowSuggestionsPanel(true);
            }}
            placeholder={placeholder}
            className="w-full pl-12 pr-10 py-4 text-lg border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          />
          {query && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        <button
          onClick={() => handleSearch()}
          className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
        >
          <span>Search</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Suggestions Panel */}
      <AnimatePresence>
        {showSuggestionsPanel && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
          >
            <div className="p-2">
              {/* Recent Searches */}
              {showRecentSearches && recentSearches.length > 0 && !query && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    Recent Searches
                  </div>
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick({ id: `recent-${index}`, text: search, type: 'recent' })}
                      className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-muted rounded-lg transition-colors"
                    >
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{search}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Popular Searches */}
              {showPopularSearches && suggestions.length > 0 && !query && (
                <div className="mb-4">
                  <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    Popular Searches
                  </div>
                  {suggestions.slice(0, 5).map((suggestion) => (
                    <button
                      key={suggestion.id}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-muted rounded-lg transition-colors"
                    >
                      <Search className="w-4 h-4 text-muted-foreground" />
                      <span>{suggestion.text}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Filtered Suggestions */}
              {query && filteredSuggestions.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground">
                    <Search className="w-4 h-4" />
                    Suggestions
                  </div>
                  {filteredSuggestions.slice(0, 8).map((suggestion) => (
                    <button
                      key={suggestion.id}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-muted rounded-lg transition-colors"
                    >
                      <Search className="w-4 h-4 text-muted-foreground" />
                      <span>{suggestion.text}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* No Results */}
              {query && filteredSuggestions.length === 0 && (
                <div className="px-3 py-4 text-center text-muted-foreground">
                  No suggestions found for "{query}"
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const renderFilters = () => {
    if (!showFilters || filters.length === 0) return null;

    return (
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Filters</h3>
              <button
            onClick={clearFilters}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
            Clear All
              </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filters.map((filter) => (
            <div key={filter.id} className="space-y-2">
              <label className="text-sm font-medium">{filter.label}</label>
              
              {filter.type === 'select' && filter.options && (
                <select
                  value={activeFilters[filter.id] || ''}
                  onChange={(e) => handleFilterChange(filter.id, e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">All</option>
                  {filter.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}

              {filter.type === 'checkbox' && filter.options && (
                <div className="space-y-2">
                  {filter.options.map((option) => (
                    <label key={option.value} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={activeFilters[filter.id]?.includes(option.value) || false}
                        onChange={(e) => {
                          const currentValues = activeFilters[filter.id] || [];
                          const newValues = e.target.checked
                            ? [...currentValues, option.value]
                            : currentValues.filter((v: string) => v !== option.value);
                          handleFilterChange(filter.id, newValues);
                        }}
                        className="rounded border-border"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDefaultVariant = () => (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h1 className="font-headline text-4xl md:text-5xl font-bold leading-tight">
          {title}
        </h1>
        
        {description && (
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        {renderSearchInput()}
        {renderFilters()}
      </motion.div>
    </div>
  );

  const renderCenteredVariant = () => (
    <div className="text-center space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h1 className="font-headline text-5xl md:text-6xl font-bold leading-tight">
          {title}
        </h1>
        
        {description && (
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        {renderSearchInput()}
      </motion.div>

      {renderFilters()}
    </div>
  );

  const renderMinimalVariant = () => (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-2"
      >
        <h1 className="font-headline text-3xl md:text-4xl font-bold leading-tight">
          {title}
        </h1>
        
        {description && (
          <p className="text-muted-foreground max-w-xl mx-auto">
            {description}
          </p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        {renderSearchInput()}
      </motion.div>
    </div>
  );

  const renderContent = () => {
    switch (variant) {
      case 'centered':
        return renderCenteredVariant();
      case 'minimal':
        return renderMinimalVariant();
      default:
        return renderDefaultVariant();
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
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <LazyImage
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            className="w-full h-full"
            imageClassName="object-cover opacity-20"
            data-ai-hint={backgroundImage.hint}
            fill
          />
        </div>
      )}

      <div className="relative z-10 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
        <div className="col-span-full">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </motion.section>
  );
}