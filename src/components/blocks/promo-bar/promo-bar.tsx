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
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6 items-center border-t border-b border-border py-8">
            <h2 className="font-headline text-4xl text-foreground col-span-full md:col-span-4">{title}</h2>
            <p className={cn("text-lg text-muted-foreground col-span-full md:col-span-12", descriptionClassName)}>
              {description} <CtaLink href={linkHref} className={cn("text-primary font-bold hover:underline whitespace-nowrap", linkClassName)}>{linkText}</CtaLink>
            </p>
        </div>
    </motion.section>
  );
}
