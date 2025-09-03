'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ComponentHeader } from '../../primitives/component-header/component-header';

interface Statistic {
  value: string;
  label: string;
  description?: string;
  icon?: string;
}

interface StatisticsRowProps {
  title?: string;
  description?: string;
  statistics: Statistic[];
  variant?: 'two-up' | 'three-up' | 'four-up';
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function StatisticsRow({ 
  title, 
  description, 
  statistics, 
  variant = 'three-up',
  theme = 'default',
  className 
}: StatisticsRowProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const variantClasses = {
    'two-up': 'md:grid-cols-2',
    'three-up': 'md:grid-cols-2 lg:grid-cols-3',
    'four-up': 'md:grid-cols-2 lg:grid-cols-4'
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
            "grid gap-6",
            variantClasses[variant]
          )}>
            {statistics.map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                variants={cardVariants}
              >
                {stat.icon && (
                  <div className="text-4xl mb-4 text-primary">
                    {stat.icon}
                  </div>
                )}
                
                <div className="mb-4">
                  <div className="font-headline text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="font-headline text-lg font-semibold mb-2">
                    {stat.label}
                  </div>
                  {stat.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stat.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
