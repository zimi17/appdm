
'use client';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CtaLink } from "../primitives/cta-link";
import { ComponentHeader } from "../primitives/component-header";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Card = ({ item }: { item: any }) => (
  <motion.li 
    className="flex"
    variants={cardVariants}
  >
    <div className="bg-secondary text-secondary-foreground p-6 flex flex-col flex-grow group hover:bg-accent transition-colors duration-300">
      <h3 className="font-headline text-2xl mb-4">{item.title}</h3>
      <p className="text-lg mb-6 flex-grow opacity-90">{item.description}</p>
      <CtaLink href={item.href} variant="link" className="mt-auto self-start text-secondary-foreground hover:text-secondary-foreground/80">
        {item.linkText}
      </CtaLink>
    </div>
  </motion.li>
);

export function InfoCardGrid({ title, items, className }: { title: string, items: any[], className?: string }) {
  return (
    <motion.section 
      className={cn("py-16 md:py-24 bg-background", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <div className="container mx-auto px-6">
        <ComponentHeader title={title} className="max-w-2xl" titleClassName="font-bold"/>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map(item => <Card key={item.title} item={item} />)}
        </ul>
      </div>
    </motion.section>
  )
}
