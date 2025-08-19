
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { ComponentHeader } from "../../primitives/component-header/component-header";
import { CtaLink } from "../../primitives/cta-link/cta-link";
import { cn } from "@/lib/utils";

interface AccordionSectionProps {
  title: string;
  items: {
    id: string;
    title: string;
    description: string;
    credits: string;
  }[];
  linkText: string;
  linkHref: string;
  className?: string;
}

export function AccordionSection({ title, items, linkText, linkHref, className }: AccordionSectionProps) {
  return (
    <section className={cn("bg-background text-foreground py-16 md:py-24", className)}>
        <div className="max-w-screen-2xl mx-auto px-6">
            <ComponentHeader title={title} />
            
            <motion.div 
            className="mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            >
            <Accordion type="single" collapsible className="w-full">
                {items.map((item) => (
                <motion.div
                    key={item.id}
                    variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                    }}
                >
                    <AccordionItem value={item.id} className="border-b-2 border-border">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                        <div className="flex justify-between items-center w-full">
                        <span className="font-headline text-2xl md:text-3xl">{item.title}</span>
                        <span className="text-muted-foreground text-lg mr-4">{item.credits}</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                        <p className="text-muted-foreground text-lg">{item.description}</p>
                    </AccordionContent>
                    </AccordionItem>
                </motion.div>
                ))}
            </Accordion>
            </motion.div>

            <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            >
            <CtaLink href={linkHref} size="lg" className="rounded-full px-8 py-6 text-lg bg-secondary hover:bg-accent">
                {linkText}
            </CtaLink>
            </motion.div>
        </div>
    </section>
  )
}
