
'use client';

import { motion } from "framer-motion";
import { CtaLink } from "@/components/primitives/cta-link/cta-link";
import { ReactNode } from "react";

export interface HierarchicalTeaseHeaderProps {
    overline?: string;
    title?: string;
    subheading?: ReactNode;
    link?: string;
    linkText?: string;
  }

export function HierarchicalTeaseHeader({ 
    overline,
    title,
    subheading,
    link,
    linkText,
}: HierarchicalTeaseHeaderProps) {

    return (
        <motion.div 
            className="hbs-hierarchical-tease__content"
            variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.5 }}
        >
            {overline && <p className="hbs-hierarchical-tease__overline">{overline}</p>}
            {title && <h2 className="hbs-hierarchical-tease__title">{title}</h2>}
            {subheading && <div className="hbs-hierarchical-tease__subheading">{subheading}</div>}
            {link && linkText && (
                 <div className="hbs-hierarchical-tease__cta">
                    <CtaLink href={link} isSmall>
                        {linkText}
                    </CtaLink>
                </div>
            )}
        </motion.div>
    )
}
