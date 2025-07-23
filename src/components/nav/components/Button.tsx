import React, { forwardRef } from 'react';
import { cn } from './ui/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading = false, icon, children, disabled, ...props }, ref) => {
    
    const baseClasses = 'btn-micro focus-ring';
    
    const variants = {
      primary: 'btn-primary',
      secondary: 'btn-secondary', 
      accent: 'btn-accent',
      outline: 'btn-outline',
      ghost: 'btn-ghost'
    };
    
    const sizes = {
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg'
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          loading && 'cursor-wait',
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <div className="spinner spinner-md" aria-label="Loading" />
        )}
        {icon && !loading && icon}
        <span className={loading ? 'opacity-70' : ''}>
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';