'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Search, X, Filter, Clock, ArrowRight } from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';

interface SearchSuggestion {
  id: string;
  text: string;
  type?: 'recent' | 'popular' | 'result';
  href?: string;
}

interface SearchBoxProps {
  title?: string;
  description?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
  suggestions?: SearchSuggestion[];
  showFilters?: boolean;
  showRecentSearches?: boolean;
  showPopularSearches?: boolean;
  variant?: 'default' | 'large' | 'compact';
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function SearchBox({
  title,
  description,
  placeholder = 'Search...',
  onSearch,
  suggestions = [],
  showFilters = true,
  showRecentSearches = true,
  showPopularSearches = true,
  variant = 'default',
  theme = 'default',
  className
}: SearchBoxProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
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
        setShowSuggestions(false);
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
      onSearch(searchQuery);
    }

    setShowSuggestions(false);
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
    setShowSuggestions(false);
  };

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.text.toLowerCase().includes(query.toLowerCase())
  );

  const renderSuggestions = () => {
    if (!showSuggestions || (!isFocused && !query)) return null;

    const hasRecentSearches = showRecentSearches && recentSearches.length > 0;
    const hasPopularSearches = showPopularSearches && suggestions.length > 0;
    const hasFilteredSuggestions = query && filteredSuggestions.length > 0;

    if (!hasRecentSearches && !hasPopularSearches && !hasFilteredSuggestions) {
      return null;
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
      >
        <div className="p-2">
          {/* Recent Searches */}
          {hasRecentSearches && !query && (
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
          {hasPopularSearches && !query && (
            <div className="mb-4">
              <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground">
                <Search className="w-4 h-4" />
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
          {hasFilteredSuggestions && (
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
    );
  };

  const renderDefaultVariant = () => (
    <div className="max-w-2xl mx-auto">
      <div className="relative" ref={searchRef}>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              onFocus={() => {
                setIsFocused(true);
                setShowSuggestions(true);
              }}
              placeholder={placeholder}
              className="w-full pl-12 pr-10 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            />
            {query && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          <button
            onClick={() => handleSearch()}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Search
          </button>
        </div>

        <AnimatePresence>
          {renderSuggestions()}
        </AnimatePresence>
      </div>

      {showFilters && (
        <div className="flex justify-center mt-4">
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Filter className="w-4 h-4" />
            Advanced Filters
          </button>
        </div>
      )}
    </div>
  );

  const renderLargeVariant = () => (
    <div className="max-w-4xl mx-auto">
      <div className="relative" ref={searchRef}>
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-6 h-6" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              onFocus={() => {
                setIsFocused(true);
                setShowSuggestions(true);
              }}
              placeholder={placeholder}
              className="w-full pl-14 pr-12 py-4 text-lg border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            />
            {query && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
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

        <AnimatePresence>
          {renderSuggestions()}
        </AnimatePresence>
      </div>

      {showFilters && (
        <div className="flex justify-center mt-6">
          <button className="flex items-center gap-2 px-6 py-3 text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg hover:bg-muted">
            <Filter className="w-5 h-5" />
            Advanced Filters
          </button>
        </div>
      )}
    </div>
  );

  const renderCompactVariant = () => (
    <div className="max-w-md mx-auto">
      <div className="relative" ref={searchRef}>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              onFocus={() => {
                setIsFocused(true);
                setShowSuggestions(true);
              }}
              placeholder={placeholder}
              className="w-full pl-10 pr-8 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            />
            {query && (
              <button
                onClick={clearSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <button
            onClick={() => handleSearch()}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>

        <AnimatePresence>
          {renderSuggestions()}
        </AnimatePresence>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (variant) {
      case 'large':
        return renderLargeVariant();
      case 'compact':
        return renderCompactVariant();
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
