
'use client';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Card = ({ item }: { item: any }) => (
  <motion.li 
    className="flex"
    variants={cardVariants}
  >
    <div className="bg-primary text-primary-foreground p-6 flex flex-col flex-grow group hover:bg-secondary transition-colors duration-300">
      <h3 className="font-headline text-2xl mb-4">{item.title}</h3>
      <p className="text-lg mb-6 flex-grow opacity-90">{item.description}</p>
      <Link href={item.href} className="mt-auto self-start">
        <Button variant="ghost" className="p-0 text-lg hover:bg-transparent hover:text-primary-foreground">
          {item.linkText}
          <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-2" />
        </Button>
        <span className="sr-only"> on {item.title}</span>
      </Link>
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
         <motion.div 
            className="mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
           >
              <h2 className="font-headline text-4xl md:text-5xl text-foreground">{title}</h2>
           </motion.div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map(item => <Card key={item.title} item={item} />)}
        </ul>
      </div>
    </motion.section>
  )
}
