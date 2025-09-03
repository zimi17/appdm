'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ComponentHeader } from '../../primitives/component-header/component-header';

interface TableColumn {
  key: string;
  header: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

interface TableRow {
  [key: string]: any;
}

interface TableProps {
  title?: string;
  description?: string;
  columns: TableColumn[];
  data: TableRow[];
  variant?: 'simple' | 'bordered' | 'striped';
  size?: 'sm' | 'md' | 'lg';
  showHeader?: boolean;
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function Table({ 
  title, 
  description, 
  columns, 
  data, 
  variant = 'bordered',
  size = 'md',
  showHeader = true,
  theme = 'default',
  className 
}: TableProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const variantClasses = {
    simple: 'border-b border-border',
    bordered: 'border border-border',
    striped: 'border-b border-border'
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  };

  const getAlignmentClass = (align?: 'left' | 'center' | 'right') => {
    switch (align) {
      case 'center': return 'text-center';
      case 'right': return 'text-right';
      default: return 'text-left';
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
          
          <div className="overflow-x-auto">
            <table className={cn(
              "w-full",
              variant === 'bordered' && "border-collapse"
            )}>
              {/* Table Header */}
              {showHeader && (
                <thead>
                  <motion.tr 
                    className={cn(
                      "bg-muted/50",
                      variantClasses[variant]
                    )}
                    variants={rowVariants}
                  >
                    {columns.map((column) => (
                      <th
                        key={column.key}
                        className={cn(
                          sizeClasses[size],
                          "font-semibold font-headline",
                          getAlignmentClass(column.align),
                          column.width && column.width
                        )}
                        style={{ width: column.width }}
                      >
                        {column.header}
                      </th>
                    ))}
                  </motion.tr>
                </thead>
              )}

              {/* Table Body */}
              <tbody>
                {data.map((row, rowIndex) => (
                  <motion.tr 
                    key={rowIndex}
                    className={cn(
                      variantClasses[variant],
                      variant === 'striped' && rowIndex % 2 === 1 && "bg-muted/30",
                      "hover:bg-muted/50 transition-colors duration-200"
                    )}
                    variants={rowVariants}
                  >
                    {columns.map((column) => (
                      <td
                        key={column.key}
                        className={cn(
                          sizeClasses[size],
                          getAlignmentClass(column.align)
                        )}
                      >
                        {row[column.key]}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {data.length === 0 && (
            <motion.div 
              className="text-center py-12 text-muted-foreground"
              variants={rowVariants}
            >
              <p>Tidak ada data yang tersedia</p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
