'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';

interface TruncatorProps {
  title?: string;
  description?: string;
  content: string;
  maxLength?: number;
  showMoreText?: string;
  showLessText?: string;
  variant?: 'text' | 'paragraph' | 'list' | 'code';
  preserveFormatting?: boolean;
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function Truncator({
  title,
  description,
  content,
  maxLength = 200,
  showMoreText = 'Show more',
  showLessText = 'Show less',
  variant = 'text',
  preserveFormatting = false,
  theme = 'default',
  className
}: TruncatorProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldTruncate, setShouldTruncate] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  // Check if content needs truncation
  useEffect(() => {
    if (contentRef.current) {
      const textLength = content.length;
      setShouldTruncate(textLength > maxLength);
    }
  }, [content, maxLength]);

  const getTruncatedContent = () => {
    if (!shouldTruncate || isExpanded) {
      return content;
    }
    return content.substring(0, maxLength) + '...';
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const renderContent = () => {
    const displayContent = getTruncatedContent();

    switch (variant) {
      case 'paragraph':
        return (
          <div className="prose prose-lg max-w-none">
            <p className="leading-relaxed">
              {displayContent}
            </p>
          </div>
        );

      case 'list':
        const lines = displayContent.split('\n').filter(line => line.trim());
        return (
          <ul className="space-y-2">
            {lines.map((line, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>{line.trim()}</span>
              </li>
            ))}
          </ul>
        );

      case 'code':
        return (
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code className="text-sm font-mono">
              {displayContent}
            </code>
          </pre>
        );

      default:
        return (
          <div className={cn(
            "text-base leading-relaxed",
            preserveFormatting && "whitespace-pre-wrap"
          )}>
            {displayContent}
          </div>
        );
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

          <div className="max-w-4xl mx-auto">
            <div ref={contentRef}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={isExpanded ? 'expanded' : 'truncated'}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Toggle Button */}
            {shouldTruncate && (
              <motion.div
                className="flex justify-center mt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <button
                  onClick={toggleExpanded}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      {showLessText}
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      {showMoreText}
                    </>
                  )}
                </button>
              </motion.div>
            )}

            {/* Character Count */}
            {shouldTruncate && (
              <div className="text-center mt-4">
                <span className="text-sm text-muted-foreground">
                  {isExpanded 
                    ? `${content.length} characters` 
                    : `${maxLength} of ${content.length} characters shown`
                  }
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
