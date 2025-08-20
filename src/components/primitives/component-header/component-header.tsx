'use client';

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CtaLink } from "../cta-link/cta-link";
import { ReactNode } from "react";

interface ComponentHeaderProps {
  title: string;
  description?: string | ReactNode;
  link?: string;
  linkText?: string;
  isSmall?: boolean;
  className?: string;
  HeadingLevel?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function ComponentHeader({ 
  title, 
  description, 
  link, 
  linkText,
  isSmall = false,
  className,
  HeadingLevel = 'h2',
}: ComponentHeaderProps) {
  
  const CtaComponent = () => {
    if (!link || !linkText) return null;
    return (
      <div className={cn(!isSmall && 'md:self-end')}>
        <CtaLink href={link}>
          {linkText}
        </CtaLink>
      </div>
    );
  };

  const largeVariant = () => (
    <div className="md:flex md:items-end md:justify-between">
      <div className="flex-grow">
        <HeadingLevel className={cn("font-headline text-4xl md:text-5xl text-foreground")}>
          {title}
        </HeadingLevel>
        {description && (
          <div className="mt-4 text-lg text-muted-foreground max-w-3xl">
              {typeof description === 'string' ? <p>{description}</p> : description}
          </div>
        )}
      </div>
      <div className="mt-6 md:mt-0 md:ml-8 flex-shrink-0">
        <CtaComponent />
      </div>
    </div>
  );

  const smallVariant = () => (
    <div>
        <HeadingLevel className={cn("font-headline text-2xl text-foreground")}>
          {title}
        </HeadingLevel>
        {description && (
          <div className="mt-2 text-base text-muted-foreground">
              {typeof description === 'string' ? <p>{description}</p> : description}
          </div>
        )}
         {link && linkText && (
          <div className="mt-4">
             <CtaLink href={link}>
                {linkText}
            </CtaLink>
          </div>
        )}
    </div>
  );

  return (
    <motion.div
      className={cn("mb-12", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {isSmall ? smallVariant() : largeVariant()}
      <hr className={cn("mt-4 border-b-2 border-primary w-24", isSmall ? 'border-b' : 'border-b-4')} />
    </motion.div>
  );
}
