
'use client';

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CtaLink } from "@/components/primitives/cta-link/cta-link";
import { ArrowRight } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Card = ({ item }: { item: any }) => (
  <motion.li 
    className="flex"
    variants={cardVariants}
  >
    <a href={item.href} className="flex flex-col h-full p-8 group transition-colors duration-300 bg-[#a51c30] text-white hover:bg-[#a51c30]/90 w-full">
      <h3 className="font-headline text-2xl font-bold mb-4">{item.title}</h3>
      <p className="text-lg mb-6 flex-grow opacity-90">{item.description}</p>
      <div className="mt-auto self-start">
        <ArrowRight className="h-6 w-6 transform transition-transform group-hover:translate-x-2" />
      </div>
    </a>
  </motion.li>
);

export function TeaseRow({ items, className }: { items: any[], className?: string }) {
  return (
    <motion.div 
      className={cn("col-span-full", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((item, index) => (
          <Card key={item.title + index} item={item} />
        ))}
      </ul>
    </motion.div>
  );
}
