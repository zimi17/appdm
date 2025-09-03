'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ComponentHeader } from '../../primitives/component-header/component-header';
import { CtaLink } from '../../primitives/cta-link/cta-link';

interface Statistic {
  value: string;
  label: string;
}

interface StatisticsCTAProps {
  title?: string;
  description?: string;
  statistics: Statistic[];
  cta: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
  };
  theme?: 'default' | 'light' | 'dark' | 'accent';
  layout?: 'horizontal' | 'vertical';
  className?: string;
}

export function StatisticsCTA({ 
  title, 
  description, 
  statistics, 
  cta, 
  theme = 'default',
  layout = 'horizontal',
  className 
}: StatisticsCTAProps) {
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
    default: 'bg-background text-foreground border border-border',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const layoutClasses = {
    horizontal: 'flex-row items-center justify-between',
    vertical: 'flex-col items-center text-center space-y-6'
  };

  return (
    <motion.section 
      className={cn(
        "py-12 md:py-16",
        themeClasses[theme],
        "rounded-lg",
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
        <div className="col-span-full">
          <div className={cn(
            "flex",
            layoutClasses[layout]
          )}>
            {/* Content */}
            <motion.div 
              className="flex-1"
              variants={containerVariants}
            >
              {title && (
                <ComponentHeader 
                  title={title} 
                  description={description}
                  className="mb-6"
                />
              )}
              
              {/* Statistics */}
              <div className={cn(
                "grid gap-6",
                layout === 'horizontal' 
                  ? "grid-cols-1 md:grid-cols-3" 
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              )}>
                {statistics.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center"
                    variants={statVariants}
                  >
                    <div className="font-headline text-2xl md:text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div 
              className={cn(
                "flex-shrink-0",
                layout === 'horizontal' ? "ml-8" : ""
              )}
              variants={statVariants}
            >
              <CtaLink 
                href={cta.href}
                variant={cta.variant || 'primary'}
                size={cta.size || 'lg'}
                className="whitespace-nowrap"
              >
                {cta.text}
              </CtaLink>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
