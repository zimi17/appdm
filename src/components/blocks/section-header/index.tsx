
'use client';

import { CtaLink, CtaLinkProps } from "@/components/primitives/cta-link/cta-link";
import { slugify } from "@/lib/slugify";
import { ReactNode } from "react";
import { motion } from "framer-motion";

export interface SectionHeaderProps {
  title?: string;
  description?: ReactNode;
  cta?: CtaLinkProps;
}

export function SectionHeader({ title, description, cta }: SectionHeaderProps) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-7 lg:col-span-8">
          {title && (
            <h2
              className="font-headline text-4xl md:text-5xl text-foreground font-bold"
              id={slugify(title)}
            >
              {title}
            </h2>
          )}
        </div>
        <div className="text-lg text-muted-foreground md:col-span-5 lg:col-span-4">
          {description && <p>{description}</p>}
          {cta && (
            <div className="mt-4">
              <CtaLink {...cta} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
