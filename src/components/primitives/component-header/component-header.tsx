
'use client';

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CtaLink, CtaLinkProps } from "../cta-link/cta-link";

interface ComponentHeaderProps {
  title: string;
  description?: string | React.ReactNode;
  cta?: CtaLinkProps;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  hrClassName?: string;
}

export function ComponentHeader({ title, description, cta, className, titleClassName, descriptionClassName, hrClassName }: ComponentHeaderProps) {
  return (
    <motion.div
      className={cn("mb-12", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={cn("font-headline text-4xl md:text-5xl text-foreground", titleClassName)}>
        {title}
      </h2>
      {description && (
        <div className={cn("mt-4 text-lg text-muted-foreground max-w-3xl", descriptionClassName)}>
            {typeof description === 'string' ? <p>{description}</p> : description}
        </div>
      )}
       {cta && (
        <div className="mt-4">
          <CtaLink {...cta} />
        </div>
      )}
      <hr className={cn("mt-4 border-b-4 border-primary w-24", hrClassName)} />
    </motion.div>
  );
}
