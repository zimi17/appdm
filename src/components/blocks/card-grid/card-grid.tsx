
'use client';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CtaLink } from "../../primitives/cta-link/cta-link";
import { ComponentHeader } from "../../primitives/component-header/component-header";
import { LazyImage } from "../../primitives/lazy-image/lazy-image";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Card = ({ item, cardClassName }: { item: any, cardClassName?: string }) => (
  <motion.div 
    className={cn("flex flex-col h-full group transition-colors duration-300", cardClassName)}
    variants={cardVariants}
  >
    {item.image && (
        <LazyImage 
        src={item.image} 
        alt={item.title} 
        className="aspect-[3/2]"
        imageClassName="object-cover group-hover:scale-105 transition-transform duration-300"
        data-ai-hint={item.hint} 
        fill
        />
    )}
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="font-headline text-2xl mb-4">{item.title}</h3>
      <p className="text-lg mb-6 flex-grow opacity-90">{item.description}</p>
      <CtaLink href={item.href} variant="link" className="mt-auto self-start text-primary group-hover:text-primary">
        {item.linkText}
      </CtaLink>
    </div>
  </motion.div>
);

export function CardGrid({ title, items, className, titleClassName, hrClassName, cardClassName }: { title?: string, items: any[], className?: string, titleClassName?: string, hrClassName?:string, cardClassName?: string }) {
  return (
    <motion.section 
      className={cn("py-16 md:py-24 bg-transparent", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {title && (
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
        <div className="col-span-full">
            <ComponentHeader title={title} titleClassName={titleClassName} hrClassName={hrClassName} />
        </div>
      </div>
      )}
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
          <div className="col-span-full grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {items.map((item, index) => <Card key={item.title + index} item={item} cardClassName={cardClassName} />)}
          </div>
      </div>
    </motion.section>
  )
}
