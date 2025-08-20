
'use client';

import { motion } from "framer-motion";
import { CtaLink } from "@/components/primitives/cta-link/cta-link";
import { ComponentHeader } from "@/components/primitives/component-header/component-header";
import { ReactNode } from "react";

export interface HierarchicalTeaseHeaderProps {
    componentHeader?: any;
  
    overline?: string;
    title?: string;
    subheading?: ReactNode;
    link?: string;
    linkText?: string;
  
    editAttributes?: {
      title?: any;
      overline?: any;
      subheading?: any;
    };
  }

export function HierarchicalTeaseHeader({ 
    componentHeader,
    overline,
    title,
    subheading,
    link,
    linkText,
    editAttributes
}: HierarchicalTeaseHeaderProps) {
    if (componentHeader) {
        return (
            <ComponentHeader 
                {...componentHeader}
                className="hbs-hierarchical-tease__component-header"
            />
        )
    }

    return (
        <motion.div 
            className="flex flex-col justify-center h-full"
            variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.5 }}
        >
            {overline && <p className="text-sm font-semibold text-primary mb-2">{overline}</p>}
            {title && <h2 className="font-headline text-4xl text-white font-bold">{title}</h2>}
            {subheading && <div className="text-muted-foreground text-lg mt-4">{subheading}</div>}
            {link && linkText && (
                 <div className="mt-6">
                    <CtaLink href={link} variant="link" className="text-primary hover:text-accent font-bold">
                        {linkText}
                    </CtaLink>
                </div>
            )}
        </motion.div>
    )
}
