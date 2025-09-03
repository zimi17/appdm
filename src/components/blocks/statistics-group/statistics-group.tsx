'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ComponentHeader } from '../../primitives/component-header/component-header';
import { CtaLink } from '../../primitives/cta-link/cta-link';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';

interface Statistic {
  value: string;
  label: string;
  description?: string;
}

interface StatisticsGroupProps {
  title?: string;
  description?: string;
  statistics: Statistic[];
  image?: {
    src: string;
    alt: string;
    hint?: string;
  };
  cta?: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
  layout?: 'side-by-side' | 'stacked';
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function StatisticsGroup({ 
  title, 
  description, 
  statistics, 
  image, 
  cta, 
  layout = 'side-by-side',
  theme = 'default',
  className 
}: StatisticsGroupProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const layoutClasses = {
    'side-by-side': 'lg:grid-cols-2 lg:gap-12',
    'stacked': 'flex-col space-y-8'
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
      variants={containerVariants}
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
          
          <div className={cn(
            "flex items-start",
            layoutClasses[layout]
          )}>
            {/* Statistics */}
            <motion.div 
              className="flex-1"
              variants={containerVariants}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {statistics.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center"
                    variants={statVariants}
                  >
                    <div className="mb-4">
                      <div className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                        {stat.value}
                      </div>
                      <div className="font-headline text-lg md:text-xl font-semibold mb-2">
                        {stat.label}
                      </div>
                      {stat.description && (
                        <p className="text-sm text-muted-foreground">
                          {stat.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA */}
              {cta && (
                <motion.div 
                  className="mt-12 text-center"
                  variants={statVariants}
                >
                  <CtaLink 
                    href={cta.href}
                    variant={cta.variant || 'primary'}
                    size="lg"
                  >
                    {cta.text}
                  </CtaLink>
                </motion.div>
              )}
            </motion.div>

            {/* Image */}
            {image && (
              <motion.div 
                className="flex-1 mt-8 lg:mt-0"
                variants={statVariants}
              >
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden"
                  imageClassName="object-cover"
                  data-ai-hint={image.hint}
                  fill
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
