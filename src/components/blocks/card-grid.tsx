
'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CtaLink } from "../primitives/cta-link";
import { ComponentHeader } from "../primitives/component-header";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Card = ({ item }: { item: any }) => (
  <motion.div 
    className="flex flex-col h-full group bg-background transition-colors duration-300 hover:bg-card"
    variants={cardVariants}
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={item.hint} />
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="font-headline text-2xl mb-4 text-foreground">{item.title}</h3>
      <p className="text-lg mb-6 flex-grow text-muted-foreground">{item.description}</p>
      <CtaLink href={item.href} variant="link">{item.linkText}</CtaLink>
    </div>
  </motion.div>
);

export function CardGrid({ title, items, className, titleClassName, hrClassName }: { title?: string, items: any[], className?: string, titleClassName?: string, hrClassName?:string }) {
  return (
    <motion.section 
      className={cn("py-16 md:py-24", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="container mx-auto px-6">
        {title && (
           <ComponentHeader title={title} titleClassName={titleClassName} hrClassName={hrClassName} />
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => <Card key={item.title + index} item={item} />)}
        </div>
      </div>
    </motion.section>
  )
}
