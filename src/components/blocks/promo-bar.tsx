
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface PromoBarProps {
    title: string;
    description: string;
    linkText: string;
    linkHref: string;
}

export function PromoBar({ title, description, linkText, linkHref }: PromoBarProps) {
  return (
    <motion.section 
      className="py-12 bg-card"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8 border-t border-b border-border py-8">
          <h2 className="font-headline text-4xl text-foreground md:w-1/3">{title}</h2>
          <p className="text-lg text-muted-foreground md:w-2/3">
            {description} <Link href={linkHref} className="text-primary font-bold hover:underline whitespace-nowrap">{linkText}</Link>
          </p>
      </div>
    </motion.section>
  );
}
