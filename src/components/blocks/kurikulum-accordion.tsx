
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

interface KurikulumAccordionProps {
  title: string;
  items: {
    id: string;
    title: string;
    description: string;
    credits: string;
  }[];
  linkText: string;
  linkHref: string;
}

export function KurikulumAccordion({ title, items, linkText, linkHref }: KurikulumAccordionProps) {
  return (
    <section className="bg-background text-foreground py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-headline text-4xl md:text-5xl">{title}</h2>
          <hr className="mt-4 border-b-4 border-primary w-24" />
        </motion.div>
        
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
          <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg bg-secondary hover:bg-accent">
            <Link href={linkHref}>{linkText}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
