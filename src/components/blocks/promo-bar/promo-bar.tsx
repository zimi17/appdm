
'use client';
import Link from 'next/link';
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
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8 border-t border-b border-border py-8">
          <h2 className="font-headline text-4xl text-foreground md:w-1/3">{title}</h2>
          <p className={cn("text-lg text-muted-foreground md:w-2/3", descriptionClassName)}>
            {description} <CtaLink href={linkHref} className={cn("text-primary font-bold hover:underline whitespace-nowrap", linkClassName)}>{linkText}</CtaLink>
          </p>
      </div>
    </motion.section>
  );
}
