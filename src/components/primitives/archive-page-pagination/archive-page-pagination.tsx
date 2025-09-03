'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface ArchivePagePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
  className?: string;
}

export function ArchivePagePagination({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5,
  className
}: ArchivePagePaginationProps) {
  // Don't render if there's only one page or no pages
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Calculate start and end of visible range
      let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
      let end = Math.min(totalPages, start + maxVisiblePages - 1);
      
      // Adjust start if we're near the end
      if (end - start + 1 < maxVisiblePages) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }
      
      // Add first page and ellipsis if needed
      if (start > 1) {
        pages.push(1);
        if (start > 2) {
          pages.push('...');
        }
      }
      
      // Add visible pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      // Add ellipsis and last page if needed
      if (end < totalPages) {
        if (end < totalPages - 1) {
          pages.push('...');
        }
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const visiblePages = getVisiblePages();

  const handlePageClick = (page: number | string) => {
    if (typeof page === 'number') {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleFirst = () => {
    onPageChange(1);
  };

  const handleLast = () => {
    onPageChange(totalPages);
  };

  return (
    <motion.nav 
      className={cn("flex items-center justify-center space-x-2", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Pagination navigation"
    >
      {/* First Page Button */}
      {showFirstLast && currentPage > 1 && (
        <motion.button
          onClick={handleFirst}
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-muted transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Go to first page"
        >
          <ChevronsLeft className="w-4 h-4" />
        </motion.button>
      )}

      {/* Previous Button */}
      {showPrevNext && currentPage > 1 && (
        <motion.button
          onClick={handlePrevious}
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-muted transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Go to previous page"
        >
          <ChevronLeft className="w-4 h-4" />
        </motion.button>
      )}

      {/* Page Numbers */}
      <div className="flex items-center space-x-1">
        {visiblePages.map((page, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            {typeof page === 'number' ? (
              <motion.button
                onClick={() => handlePageClick(page)}
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-lg border transition-colors duration-200",
                  page === currentPage
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border hover:bg-muted"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Go to page ${page}`}
                aria-current={page === currentPage ? 'page' : undefined}
              >
                {page}
              </motion.button>
            ) : (
              <span className="flex items-center justify-center w-10 h-10 text-muted-foreground">
                {page}
              </span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Next Button */}
      {showPrevNext && currentPage < totalPages && (
        <motion.button
          onClick={handleNext}
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-muted transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Go to next page"
        >
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      )}

      {/* Last Page Button */}
      {showFirstLast && currentPage < totalPages && (
        <motion.button
          onClick={handleLast}
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-muted transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Go to last page"
        >
          <ChevronsRight className="w-4 h-4" />
        </motion.button>
      )}
    </motion.nav>
  );
}
