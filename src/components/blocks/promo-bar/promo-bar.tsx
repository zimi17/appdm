
'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CtaLink } from '../../primitives/cta-link/cta-link';

interface PromoBarProps {
    title: string;
    description: string;
    linkText: string;
    linkHref: string;
    className?: string;
    descriptionClassName?: string;
    linkClassName?: string;
}

export function PromoBar({ title, description, linkText, linkHref, className, descriptionClassName, linkClassName }: PromoBarProps) {
  return (
    <motion.section 
      className={cn("py-12 bg-card", className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 border-t border-b border-border py-8">
            <h2 className="font-headline text-4xl text-foreground md:col-span-4">{title}</h2>
            <p className={cn("text-lg text-muted-foreground md:col-span-8", descriptionClassName)}>
              {description} <CtaLink href={linkHref} className={cn("text-primary font-bold hover:underline whitespace-nowrap", linkClassName)}>{linkText}</CtaLink>
            </p>
        </div>
      </div>
    </motion.section>
  );
}
