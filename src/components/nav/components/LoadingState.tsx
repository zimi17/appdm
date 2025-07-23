import React from 'react';
import { cn } from './ui/utils';

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  variant?: 'text' | 'rectangular' | 'circular' | 'card';
}

export function Skeleton({ className, width, height, variant = 'rectangular' }: SkeletonProps) {
  const baseClasses = 'skeleton-loader';
  
  const variants = {
    text: 'h-4 rounded',
    rectangular: 'rounded-lg',
    circular: 'rounded-full aspect-square',
    card: 'rounded-xl'
  };

  const style = {
    width: width || (variant === 'text' ? '100%' : '200px'),
    height: height || (variant === 'text' ? '1rem' : variant === 'circular' ? width || '40px' : '120px')
  };

  return (
    <div 
      className={cn(baseClasses, variants[variant], className)}
      style={style}
      aria-label="Loading content"
    />
  );
}

interface SkeletonTextProps {
  lines?: number;
  className?: string;
}

export function SkeletonText({ lines = 3, className }: SkeletonTextProps) {
  return (
    <div className={cn('space-y-3', className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton 
          key={index}
          variant="text"
          width={index === lines - 1 ? '60%' : '100%'}
        />
      ))}
    </div>
  );
}

interface SkeletonCardProps {
  className?: string;
  showAvatar?: boolean;
  showActions?: boolean;
}

export function SkeletonCard({ className, showAvatar = false, showActions = false }: SkeletonCardProps) {
  return (
    <div className={cn('p-6 bg-white rounded-xl brand-shadow', className)}>
      {/* Header with optional avatar */}
      {showAvatar && (
        <div className="flex items-center space-x-4 mb-4">
          <Skeleton variant="circular" width="48px" />
          <div className="flex-1">
            <Skeleton variant="text" width="40%" height="20px" />
            <Skeleton variant="text" width="60%" height="16px" className="mt-2" />
          </div>
        </div>
      )}
      
      {/* Main image/content area */}
      <Skeleton variant="rectangular" height="200px" className="mb-4" />
      
      {/* Title */}
      <Skeleton variant="text" width="80%" height="24px" className="mb-3" />
      
      {/* Description lines */}
      <SkeletonText lines={2} className="mb-4" />
      
      {/* Action buttons */}
      {showActions && (
        <div className="flex space-x-3">
          <Skeleton variant="rectangular" width="100px" height="40px" />
          <Skeleton variant="rectangular" width="80px" height="40px" />
        </div>
      )}
    </div>
  );
}

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  color?: 'primary' | 'secondary' | 'white';
}

export function Spinner({ size = 'md', className, color = 'primary' }: SpinnerProps) {
  const sizeClasses = {
    sm: 'spinner-sm',
    md: 'spinner-md',
    lg: 'spinner-lg'
  };

  const colorClasses = {
    primary: 'spinner-primary',
    secondary: 'spinner-secondary',
    white: 'spinner-white'
  };

  return (
    <div 
      className={cn('spinner', sizeClasses[size], colorClasses[color], className)}
      aria-label="Loading"
    />
  );
}

interface LoadingOverlayProps {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
  message?: string;
}

export function LoadingOverlay({ isLoading, children, className, message }: LoadingOverlayProps) {
  return (
    <div className={cn('relative', className)}>
      {children}
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-10 animate-fade-in">
          <div className="text-center">
            <Spinner size="lg" />
            {message && (
              <p className="mt-4 text-body text-slate-grey font-montserrat">
                {message}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

interface ProgressBarProps {
  progress: number; // 0-100
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'success' | 'warning' | 'error';
  showLabel?: boolean;
}

export function ProgressBar({ 
  progress, 
  className, 
  size = 'md', 
  color = 'primary',
  showLabel = false 
}: ProgressBarProps) {
  const validProgress = Math.min(100, Math.max(0, progress));
  
  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };

  const colors = {
    primary: 'bg-oxford-blue',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500'
  };

  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-body font-montserrat text-slate-grey">Progress</span>
          <span className="text-body-bold font-montserrat text-oxford-blue">{validProgress}%</span>
        </div>
      )}
      <div className={cn('bg-light-grey rounded-full overflow-hidden', sizes[size])}>
        <div 
          className={cn('progress-bar rounded-full', colors[color], sizes[size])}
          style={{ width: `${validProgress}%` }}
          role="progressbar"
          aria-valuenow={validProgress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}

// Loading state untuk list items
export function SkeletonList({ items = 5, className }: { items?: number; className?: string }) {
  return (
    <div className={cn('space-y-4', className)}>
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} className="flex items-center space-x-4">
          <Skeleton variant="circular" width="40px" />
          <div className="flex-1">
            <Skeleton variant="text" width="60%" height="20px" />
            <Skeleton variant="text" width="40%" height="16px" className="mt-2" />
          </div>
          <Skeleton variant="rectangular" width="80px" height="32px" />
        </div>
      ))}
    </div>
  );
}

// Loading state untuk table
export function SkeletonTable({ rows = 5, cols = 4, className }: { 
  rows?: number; 
  cols?: number; 
  className?: string; 
}) {
  return (
    <div className={cn('space-y-4', className)}>
      {/* Table header */}
      <div className="grid grid-cols-4 gap-4 pb-4 border-b border-light-grey">
        {Array.from({ length: cols }).map((_, index) => (
          <Skeleton key={index} variant="text" width="80%" height="20px" />
        ))}
      </div>
      
      {/* Table rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-4 gap-4 py-3">
          {Array.from({ length: cols }).map((_, colIndex) => (
            <Skeleton key={colIndex} variant="text" width="90%" />
          ))}
        </div>
      ))}
    </div>
  );
}