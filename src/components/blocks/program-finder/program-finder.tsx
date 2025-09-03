'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Search, Filter, Calendar, Clock, Users, MapPin, ArrowRight } from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';

interface Program {
  id: string;
  title: string;
  description?: string;
  category: string;
  duration?: string;
  format?: 'online' | 'in-person' | 'hybrid';
  level?: 'beginner' | 'intermediate' | 'advanced';
  price?: number;
  currency?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  maxParticipants?: number;
  image?: {
    src: string;
    alt: string;
    hint?: string;
  };
  href?: string;
  featured?: boolean;
  tags?: string[];
}

interface ProgramFinderProps {
  title?: string;
  description?: string;
  programs: Program[];
  showSearch?: boolean;
  showFilters?: boolean;
  showPagination?: boolean;
  itemsPerPage?: number;
  categories?: string[];
  levels?: string[];
  formats?: string[];
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function ProgramFinder({
  title,
  description,
  programs,
  showSearch = true,
  showFilters = true,
  showPagination = true,
  itemsPerPage = 9,
  categories = [],
  levels = [],
  formats = [],
  theme = 'default',
  className
}: ProgramFinderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [selectedFormat, setSelectedFormat] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const formatPrice = (price: number, currency: string = 'IDR') => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const filteredPrograms = useMemo(() => {
    return programs.filter(program => {
      const matchesSearch = !searchQuery || 
        program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = !selectedCategory || program.category === selectedCategory;
      const matchesLevel = !selectedLevel || program.level === selectedLevel;
      const matchesFormat = !selectedFormat || program.format === selectedFormat;
      
      return matchesSearch && matchesCategory && matchesLevel && matchesFormat;
    });
  }, [programs, searchQuery, selectedCategory, selectedLevel, selectedFormat]);

  const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPrograms = filteredPrograms.slice(startIndex, endIndex);

  const renderProgram = (program: Program, index: number) => (
    <motion.div
      key={program.id}
      className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      {program.href ? (
        <a href={program.href} className="block">
          {renderProgramContent(program)}
        </a>
      ) : (
        renderProgramContent(program)
      )}
    </motion.div>
  );

  const renderProgramContent = (program: Program) => (
    <div className="h-full flex flex-col">
      {/* Image */}
      {program.image && (
        <div className="relative h-48 overflow-hidden">
          <LazyImage
            src={program.image.src}
            alt={program.image.alt}
            className="w-full h-full"
            imageClassName="object-cover group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={program.image.hint}
            fill
          />
          {program.featured && (
            <div className="absolute top-3 left-3">
              <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                Featured
              </span>
            </div>
          )}
          <div className="absolute top-3 right-3">
            <span className={cn(
              "px-2 py-1 text-xs font-medium rounded-full",
              program.format === 'online' ? "bg-blue-100 text-blue-800" :
              program.format === 'in-person' ? "bg-green-100 text-green-800" :
              "bg-purple-100 text-purple-800"
            )}>
              {program.format?.replace('-', ' ').toUpperCase()}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-headline text-xl font-semibold mb-3 line-clamp-2">
          {program.title}
        </h3>
        
        {program.description && (
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
            {program.description}
          </p>
        )}

        {/* Program Details */}
        <div className="space-y-2 mb-4">
          {program.duration && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{program.duration}</span>
            </div>
          )}

          {program.startDate && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(program.startDate)}</span>
            </div>
          )}

          {program.location && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="line-clamp-1">{program.location}</span>
            </div>
          )}

          {program.maxParticipants && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>Max {program.maxParticipants} participants</span>
            </div>
          )}
        </div>

        {/* Price and Level */}
        <div className="flex items-center justify-between mb-4">
          {program.price && (
            <div className="text-lg font-semibold text-primary">
              {formatPrice(program.price, program.currency)}
            </div>
          )}
          
          {program.level && (
            <span className={cn(
              "px-2 py-1 text-xs font-medium rounded-full",
              program.level === 'beginner' ? "bg-green-100 text-green-800" :
              program.level === 'intermediate' ? "bg-yellow-100 text-yellow-800" :
              "bg-red-100 text-red-800"
            )}>
              {program.level.toUpperCase()}
            </span>
          )}
        </div>

        {/* Tags */}
        {program.tags && program.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {program.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
            {program.tags.length > 3 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                +{program.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto">
          <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </span>
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
                  placeholder="Search programs..."
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

                {levels.length > 0 && (
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">All Levels</option>
                    {levels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                )}

                {formats.length > 0 && (
                  <select
                    value={selectedFormat}
                    onChange={(e) => setSelectedFormat(e.target.value)}
                    className="px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">All Formats</option>
                    {formats.map((format) => (
                      <option key={format} value={format}>
                        {format}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            )}
          </div>

          {/* Results */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredPrograms.length} program{filteredPrograms.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedPrograms.map((program, index) => renderProgram(program, index))}
          </div>

          {/* No Results */}
          {filteredPrograms.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎓</div>
              <h3 className="font-headline text-lg font-semibold mb-2">
                No programs found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          {/* Pagination */}
          {showPagination && totalPages > 1 && (
            <div className="flex justify-center">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={cn(
                      "px-3 py-2 rounded-lg border transition-colors",
                      page === currentPage
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:bg-muted"
                    )}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
