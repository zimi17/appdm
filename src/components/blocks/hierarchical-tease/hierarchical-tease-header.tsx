
'use client';

import { motion } from "framer-motion";
import { CtaLink } from "@/components/primitives/cta-link";
import { ComponentHeader } from "@/components/primitives/component-header";

export function HierarchicalTeaseHeader({ header }: { header: any }) {
    // Varian 1: Menggunakan ComponentHeader
    if (header.componentHeader) {
        return (
            <ComponentHeader 
                title={header.componentHeader.title}
                hrClassName="border-primary"
                titleClassName="text-white"
            />
        )
    }

    // Varian 2: Header standar dengan overline, title, subheading, dan cta
    return (
        <motion.div 
            className="flex flex-col justify-center"
            variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.5 }}
        >
            {header.overline && <p className="text-sm font-semibold text-primary mb-2">{header.overline}</p>}
            {header.title && <h2 className="font-headline text-4xl text-white font-bold">{header.title}</h2>}
            {header.subheading && <p className="text-muted-foreground text-lg mt-4">{header.subheading}</p>}
            {header.cta && (
                 <div className="mt-6">
                    <CtaLink href={header.cta.href} variant="link" className="text-primary hover:text-accent font-bold">
                        {header.cta.text}
                    </CtaLink>
                </div>
            )}
        </motion.div>
    )
}
