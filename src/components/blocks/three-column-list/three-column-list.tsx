'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ComponentHeader } from '../../primitives/component-header/component-header';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';

interface ListItem {
  id: string;
  title: string;
  description?: string;
  content?: string;
  image?: {
    src: string;
    alt: string;
    hint?: string;
  };
  icon?: React.ReactNode;
  cta?: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
}

interface ThreeColumnListProps {
  title?: string;
  description?: string;
  items: ListItem[];
  variant?: 'default' | 'with-content' | 'with-images' | 'with-icons';
  theme?: 'default' | 'light' | 'dark' | 'accent';
  showIcons?: boolean;
  className?: string;
}

export function ThreeColumnList({
  title,
  description,
  items,
  variant = 'default',
  theme = 'default',
  showIcons = true,
  className
}: ThreeColumnListProps) {
  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const getCTAClasses = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-primary-foreground hover:bg-primary/90';
      case 'secondary':
        return 'bg-secondary text-secondary-foreground hover:bg-secondary/90';
      case 'outline':
        return 'border border-border hover:bg-muted';
      default:
        return 'bg-primary text-primary-foreground hover:bg-primary/90';
    }
  };

  const renderItem = (item: ListItem, index: number) => (
    <motion.div
      key={item.id}
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Image */}
      {item.image && (
        <div className="aspect-[4/3] rounded-lg overflow-hidden">
          <LazyImage
            src={item.image.src}
            alt={item.image.alt}
            className="w-full h-full"
            imageClassName="object-cover"
            data-ai-hint={item.image.hint}
            fill
          />
        </div>
      )}

      {/* Icon */}
      {showIcons && item.icon && !item.image && (
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {item.icon}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="space-y-3 text-center">
        <h3 className="font-headline text-lg font-semibold">
          {item.title}
        </h3>

        {item.description && (
          <p className="text-muted-foreground text-sm">
            {item.description}
          </p>
        )}

        {item.content && (
          <div className="prose prose-sm max-w-none">
            <p className="text-base leading-relaxed">
              {item.content}
            </p>
          </div>
        )}

        {item.cta && (
          <div>
            <a
              href={item.cta.href}
              className={cn(
                "inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200",
                getCTAClasses(item.cta.variant || 'primary')
              )}
            >
              {item.cta.text}
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => renderItem(item, index))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
