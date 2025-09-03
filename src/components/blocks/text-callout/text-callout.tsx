'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AlertCircle, Info, CheckCircle, AlertTriangle, Lightbulb, Quote } from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';

interface TextCalloutProps {
  title?: string;
  description?: string;
  text: string;
  variant?: 'info' | 'warning' | 'success' | 'error' | 'tip' | 'quote';
  theme?: 'default' | 'light' | 'dark' | 'accent';
  icon?: React.ReactNode;
  showIcon?: boolean;
  className?: string;
}

export function TextCallout({
  title,
  description,
  text,
  variant = 'info',
  theme = 'default',
  icon,
  showIcon = true,
  className
}: TextCalloutProps) {
  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const variantClasses = {
    info: {
      container: 'bg-blue-50 border-blue-200 text-blue-900',
      icon: 'text-blue-600',
      defaultIcon: Info
    },
    warning: {
      container: 'bg-yellow-50 border-yellow-200 text-yellow-900',
      icon: 'text-yellow-600',
      defaultIcon: AlertTriangle
    },
    success: {
      container: 'bg-green-50 border-green-200 text-green-900',
      icon: 'text-green-600',
      defaultIcon: CheckCircle
    },
    error: {
      container: 'bg-red-50 border-red-200 text-red-900',
      icon: 'text-red-600',
      defaultIcon: AlertCircle
    },
    tip: {
      container: 'bg-purple-50 border-purple-200 text-purple-900',
      icon: 'text-purple-600',
      defaultIcon: Lightbulb
    },
    quote: {
      container: 'bg-gray-50 border-gray-200 text-gray-900',
      icon: 'text-gray-600',
      defaultIcon: Quote
    }
  };

  const variantConfig = variantClasses[variant];
  const IconComponent = variantConfig.defaultIcon;

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

          <motion.div
            className={cn(
              "p-6 rounded-lg border-2",
              variantConfig.container
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              {showIcon && (
                <div className={cn("flex-shrink-0", variantConfig.icon)}>
                  {icon || <IconComponent className="w-6 h-6" />}
                </div>
              )}

              {/* Content */}
              <div className="flex-1">
                <div className="prose prose-sm max-w-none">
                  <p className="text-base leading-relaxed m-0">
                    {text}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
