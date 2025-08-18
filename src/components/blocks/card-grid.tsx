
'use client';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CtaLink } from "../primitives/cta-link";
import { ComponentHeader } from "../primitives/component-header";
import { LazyImage } from "../primitives/lazy-image";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Card = ({ item }: { item: any }) => (
  <motion.div 
    className="flex flex-col h-full group bg-background transition-colors duration-300 hover:bg-card"
    variants={cardVariants}
  >
    <LazyImage 
      src={item.image} 
      alt={item.title} 
      className="aspect-[4/3]"
      imageClassName="object-cover group-hover:scale-105 transition-transform duration-300"
      data-ai-hint={item.hint} 
      fill
    />
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
