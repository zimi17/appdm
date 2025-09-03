"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface ContrastAwareProps {
  children: React.ReactNode;
  className?: string;
  theme?: 'light' | 'dark' | 'high-contrast' | 'stie-primary' | 'stie-crimson';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'inverse';
  as?: keyof JSX.IntrinsicElements;
}

/**
 * ContrastAware component ensures proper contrast across all themes
 * Automatically applies appropriate text and background colors based on theme
 */
export const ContrastAware: React.FC<ContrastAwareProps> = ({
  children,
  className,
  theme = 'light',
  variant = 'primary',
  as: Component = 'div',
  ...props
}) => {
  const contrastClasses = cn(
    // Base contrast classes
    'text-contrast-primary',
    'bg-contrast-primary',
    
    // Variant-specific classes
    {
      'text-contrast-primary bg-contrast-primary': variant === 'primary',
      'text-contrast-secondary bg-contrast-secondary': variant === 'secondary',
      'text-contrast-tertiary bg-contrast-tertiary': variant === 'tertiary',
      'text-contrast-inverse bg-contrast-inverse': variant === 'inverse',
    },
    
    // Theme-specific adjustments
    {
      'border-contrast-light': theme === 'light',
      'border-contrast-medium': theme === 'dark',
      'border-contrast-strong': theme === 'high-contrast',
    },
    
    className
  );

  return (
    <Component
      className={contrastClasses}
      data-theme={theme}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * ContrastAwareText component for text elements with proper contrast
 */
export const ContrastAwareText: React.FC<Omit<ContrastAwareProps, 'as'> & {
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}> = ({
  children,
  className,
  theme = 'light',
  variant = 'primary',
  as: Component = 'p',
  ...props
}) => {
  const textClasses = cn(
    // Text-specific contrast classes
    {
      'text-contrast-primary': variant === 'primary',
      'text-contrast-secondary': variant === 'secondary',
      'text-contrast-tertiary': variant === 'tertiary',
      'text-contrast-inverse': variant === 'inverse',
    },
    
    className
  );

  return (
    <Component
      className={textClasses}
      data-theme={theme}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * ContrastAwareLink component for links with proper contrast
 */
export const ContrastAwareLink: React.FC<Omit<ContrastAwareProps, 'as'> & {
  href: string;
  target?: string;
  rel?: string;
}> = ({
  children,
  className,
  theme = 'light',
  href,
  target,
  rel,
  ...props
}) => {
  const linkClasses = cn(
    'link-contrast',
    'transition-colors duration-200',
    'focus-visible:outline-2 focus-visible:outline-offset-2',
    className
  );

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={linkClasses}
      data-theme={theme}
      {...props}
    >
      {children}
    </a>
  );
};

/**
 * ContrastAwareButton component for buttons with proper contrast
 */
export const ContrastAwareButton: React.FC<Omit<ContrastAwareProps, 'as'> & {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}> = ({
  children,
  className,
  theme = 'light',
  variant = 'primary',
  type = 'button',
  disabled = false,
  onClick,
  ...props
}) => {
  const buttonClasses = cn(
    // Base button styles
    'px-4 py-2 rounded-md font-medium transition-all duration-200',
    'focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    
    // Contrast-aware styles
    {
      'text-contrast-inverse bg-contrast-primary border border-contrast-medium': variant === 'primary',
      'text-contrast-primary bg-contrast-secondary border border-contrast-light': variant === 'secondary',
      'text-contrast-secondary bg-contrast-tertiary border border-contrast-light': variant === 'tertiary',
      'text-contrast-primary bg-contrast-inverse border border-contrast-strong': variant === 'inverse',
    },
    
    // Hover states
    'hover:opacity-90 hover:scale-105',
    
    className
  );

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonClasses}
      data-theme={theme}
      {...props}
    >
      {children}
    </button>
  );
};
