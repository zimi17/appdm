
'use client';

import { motion } from "framer-motion";
import { CtaLink } from "./cta-link";
import { ComponentHeader } from "./component-header";

export function HierarchicalTeaseHeader({ title, subheading, cta }: { title: string, subheading: string, cta: any }) {
    return (
        <motion.div 
            className="flex flex-col justify-center"
            variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.5 }}
        >
            {/* The main title is now rendered by ComponentHeader in the parent component. We keep this for structure but it can be simplified if not needed. */}
            <div className="mt-6">
                <CtaLink href={cta.href} variant="link" className="text-primary hover:text-accent">
                    {cta.text}
                </CtaLink>
            </div>
        </motion.div>
    )
}
