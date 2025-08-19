
'use client';

import { motion } from "framer-motion";
import { CtaLink } from "@/components/primitives/cta-link";

export function HierarchicalTeaseHeader({ cta, subheading }: { cta: any, subheading?: string }) {
    return (
        <motion.div 
            className="flex flex-col justify-center"
            variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.5 }}
        >
             {subheading && <p className="text-muted-foreground text-lg">{subheading}</p>}
            <div className="mt-6">
                <CtaLink href={cta.href} variant="link" className="text-primary hover:text-accent">
                    {cta.text}
                </CtaLink>
            </div>
        </motion.div>
    )
}
