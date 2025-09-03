'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';

interface FormAssemblyEmbedsProps {
  title?: string;
  description?: string;
  formId: string;
  formUrl: string;
  height?: string;
  width?: string;
  showTitle?: boolean;
  showDescription?: boolean;
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function FormAssemblyEmbeds({
  title,
  description,
  formId,
  formUrl,
  height = '600px',
  width = '100%',
  showTitle = true,
  showDescription = true,
  theme = 'default',
  className
}: FormAssemblyEmbedsProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  useEffect(() => {
    // Reset states when formUrl changes
    setLoading(true);
    setError(null);
    setLoaded(false);
  }, [formUrl]);

  const handleIframeLoad = () => {
    setLoading(false);
    setLoaded(true);
  };

  const handleIframeError = () => {
    setLoading(false);
    setError('Failed to load form. Please try again later.');
  };

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    setLoaded(false);
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
          {showTitle && title && (
            <ComponentHeader 
              title={title} 
              description={showDescription ? description : undefined}
              className="mb-12"
            />
          )}

          <div className="relative">
            {/* Loading State */}
            {loading && (
              <motion.div
                className="flex items-center justify-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center">
                  <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
                  <p className="text-muted-foreground">Loading form...</p>
                </div>
              </motion.div>
            )}

            {/* Error State */}
            {error && (
              <motion.div
                className="flex items-center justify-center py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="text-center max-w-md">
                  <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
                  <h3 className="font-headline text-lg font-semibold mb-2">
                    Form Loading Error
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {error}
                  </p>
                  <button
                    onClick={handleRetry}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              </motion.div>
            )}

            {/* Success State */}
            {loaded && !error && (
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {/* Success Indicator */}
                <motion.div
                  className="absolute top-4 right-4 z-10"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    <CheckCircle className="w-4 h-4" />
                    Form loaded
                  </div>
                </motion.div>

                {/* Form Iframe */}
                <iframe
                  src={formUrl}
                  width={width}
                  height={height}
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title={title || `Form ${formId}`}
                  className="w-full border border-border rounded-lg shadow-lg"
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                  style={{
                    minHeight: height,
                    backgroundColor: 'transparent'
                  }}
                />
              </motion.div>
            )}

            {/* Form Container (Hidden during loading/error) */}
            {!loading && !error && (
              <div
                className="relative"
                style={{ display: loaded ? 'block' : 'none' }}
              >
                <iframe
                  src={formUrl}
                  width={width}
                  height={height}
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title={title || `Form ${formId}`}
                  className="w-full border border-border rounded-lg shadow-lg"
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                  style={{
                    minHeight: height,
                    backgroundColor: 'transparent'
                  }}
                />
              </div>
            )}
          </div>

          {/* Form Information */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Form ID: {formId}
            </p>
            {description && !showDescription && (
              <p className="text-sm text-muted-foreground mt-2">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
