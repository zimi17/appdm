
'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Card = ({ item }: { item: any }) => (
  <motion.div 
    className="flex flex-col h-full group bg-card"
    variants={cardVariants}
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={item.hint} />
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="font-headline text-2xl mb-4 text-card-foreground">{item.title}</h3>
      <p className="text-lg mb-6 flex-grow text-muted-foreground">{item.description}</p>
      <Link href={item.href} className="text-primary font-bold self-start hover:underline">
        {item.linkText}
      </Link>
    </div>
  </motion.div>
);

export function CardGrid({ title, items, className, titleClassName }: { title?: string, items: any[], className?: string, titleClassName?: string }) {
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
           <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
           >
              <h2 className={cn("font-headline text-4xl md:text-5xl text-foreground", titleClassName)}>{title}</h2>
              <hr className={cn("mt-4 border-b-4 border-primary w-24", titleClassName && 'border-white')} />
           </motion.div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => <Card key={item.title + index} item={item} />)}
        </div>
      </div>
    </motion.section>
  )
}
