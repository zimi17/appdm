'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Mail, Check, AlertCircle, Loader2 } from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
  errorMessage?: string;
  onSubmit?: (email: string) => Promise<boolean>;
  variant?: 'default' | 'inline' | 'card';
  showIcon?: boolean;
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function NewsletterSignup({
  title,
  description,
  placeholder = 'Enter your email address',
  buttonText = 'Subscribe',
  successMessage = 'Thank you for subscribing!',
  errorMessage = 'Something went wrong. Please try again.',
  onSubmit,
  variant = 'default',
  showIcon = true,
  theme = 'default',
  className
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setStatus('idle');

    try {
      if (onSubmit) {
        const success = await onSubmit(email);
        if (success) {
          setStatus('success');
          setMessage(successMessage);
          setEmail('');
        } else {
          setStatus('error');
          setMessage(errorMessage);
        }
      } else {
        // Default behavior - just show success
        setStatus('success');
        setMessage(successMessage);
        setEmail('');
      }
    } catch (error) {
      setStatus('error');
      setMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const renderDefaultVariant = () => (
    <div className="max-w-md mx-auto text-center">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            {showIcon && (
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            )}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className={cn(
                "w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors",
                showIcon && "pl-12"
              )}
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={cn(
              "px-6 py-3 rounded-lg font-medium transition-colors duration-200",
              isLoading
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              buttonText
            )}
          </button>
        </div>

        {status !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "flex items-center gap-2 text-sm",
              status === 'success' ? "text-green-600" : "text-red-600"
            )}
          >
            {status === 'success' ? (
              <Check className="w-4 h-4" />
            ) : (
              <AlertCircle className="w-4 h-4" />
            )}
            <span>{message}</span>
          </motion.div>
        )}
      </form>
    </div>
  );

  const renderInlineVariant = () => (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1">
          {showIcon && (
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className={cn(
              "w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors",
              showIcon && "pl-12"
            )}
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={cn(
            "px-6 py-3 rounded-lg font-medium transition-colors duration-200",
            isLoading
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            buttonText
          )}
        </button>
      </form>

      {status !== 'idle' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "flex items-center gap-2 text-sm mt-2",
            status === 'success' ? "text-green-600" : "text-red-600"
          )}
        >
          {status === 'success' ? (
            <Check className="w-4 h-4" />
          ) : (
            <AlertCircle className="w-4 h-4" />
          )}
          <span>{message}</span>
        </motion.div>
      )}
    </div>
  );

  const renderCardVariant = () => (
    <div className="max-w-lg mx-auto">
      <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="newsletter-email" className="text-sm font-medium">
              Email Address
            </label>
            <div className="relative">
              {showIcon && (
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              )}
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                className={cn(
                  "w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors",
                  showIcon && "pl-12"
                )}
                disabled={isLoading}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={cn(
              "w-full px-6 py-3 rounded-lg font-medium transition-colors duration-200",
              isLoading
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Subscribing...</span>
              </div>
            ) : (
              buttonText
            )}
          </button>

          {status !== 'idle' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex items-center gap-2 text-sm p-3 rounded-lg",
                status === 'success' 
                  ? "bg-green-50 text-green-700 border border-green-200" 
                  : "bg-red-50 text-red-700 border border-red-200"
              )}
            >
              {status === 'success' ? (
                <Check className="w-4 h-4" />
              ) : (
                <AlertCircle className="w-4 h-4" />
              )}
              <span>{message}</span>
            </motion.div>
          )}
        </form>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (variant) {
      case 'inline':
        return renderInlineVariant();
      case 'card':
        return renderCardVariant();
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
