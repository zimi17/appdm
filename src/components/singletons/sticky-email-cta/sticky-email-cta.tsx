'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Mail, X, Check, AlertCircle, Loader2 } from 'lucide-react';

interface StickyEmailCTAProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
  errorMessage?: string;
  onSubmit?: (email: string) => Promise<boolean>;
  triggerScroll?: number;
  showCloseButton?: boolean;
  position?: 'bottom-left' | 'bottom-right' | 'bottom-center';
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function StickyEmailCTA({
  title = 'Stay Updated',
  description = 'Get the latest news and updates delivered to your inbox.',
  placeholder = 'Enter your email address',
  buttonText = 'Subscribe',
  successMessage = 'Thank you for subscribing!',
  errorMessage = 'Something went wrong. Please try again.',
  onSubmit,
  triggerScroll = 300,
  showCloseButton = true,
  position = 'bottom-right',
  theme = 'default',
  className
}: StickyEmailCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const themeClasses = {
    default: 'bg-background text-foreground border border-border shadow-lg',
    light: 'bg-muted/95 text-foreground border border-border shadow-lg',
    dark: 'bg-foreground text-background border border-border shadow-lg',
    accent: 'bg-primary text-primary-foreground border border-primary-foreground/20 shadow-lg'
  };

  const positionClasses = {
    'bottom-left': 'bottom-6 left-6',
    'bottom-right': 'bottom-6 right-6',
    'bottom-center': 'bottom-6 left-1/2 transform -translate-x-1/2'
  };

  // Handle scroll trigger
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > triggerScroll && !isClosed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerScroll, isClosed]);

  // Check if user has already subscribed (localStorage)
  useEffect(() => {
    const hasSubscribed = localStorage.getItem('email-subscribed');
    if (hasSubscribed) {
      setIsClosed(true);
    }
  }, []);

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
          localStorage.setItem('email-subscribed', 'true');
          // Auto-close after success
          setTimeout(() => {
            setIsVisible(false);
            setIsClosed(true);
          }, 3000);
        } else {
          setStatus('error');
          setMessage(errorMessage);
        }
      } else {
        // Default behavior - just show success
        setStatus('success');
        setMessage(successMessage);
        setEmail('');
        localStorage.setItem('email-subscribed', 'true');
        // Auto-close after success
        setTimeout(() => {
          setIsVisible(false);
          setIsClosed(true);
        }, 3000);
      }
    } catch (error) {
      setStatus('error');
      setMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
    // Remember that user closed it for this session
    sessionStorage.setItem('email-cta-closed', 'true');
  };

  const renderContent = () => (
    <div className="p-4 max-w-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-sm">{title}</h3>
        </div>
        {showCloseButton && (
          <button
            onClick={handleClose}
            className="p-1 rounded-full hover:bg-muted/50 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Description */}
      {description && (
        <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={cn(
            "w-full px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
            isLoading
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Subscribing...</span>
            </div>
          ) : (
            buttonText
          )}
        </button>
      </form>

      {/* Status Message */}
      <AnimatePresence>
        {status !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={cn(
              "flex items-center gap-2 text-xs p-2 rounded-lg mt-3",
              status === 'success' 
                ? "bg-green-50 text-green-700 border border-green-200" 
                : "bg-red-50 text-red-700 border border-red-200"
            )}
          >
            {status === 'success' ? (
              <Check className="w-3 h-3" />
            ) : (
              <AlertCircle className="w-3 h-3" />
            )}
            <span>{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }}
          className={cn(
            "fixed z-50 rounded-lg",
            themeClasses[theme],
            positionClasses[position],
            className
          )}
        >
          {renderContent()}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
