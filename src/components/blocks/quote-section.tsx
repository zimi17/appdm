
'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { CtaLink } from "../primitives/cta-link";

interface QuoteSectionProps {
    quote: string;
    author: string;
    role: string;
    imageUrl: string;
    imageHint?: string;
    linkText: string;
    linkHref: string;
}

export function QuoteSection({ quote, author, role, imageUrl, imageHint, linkText, linkHref }: QuoteSectionProps) {
  return (
    <motion.section 
      className="py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div className="md:w-1/2" variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
            <blockquote className="relative pl-16">
               <motion.div className="absolute top-0 left-0 text-[12rem] text-primary/10 font-serif leading-none -mt-8" initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 0.2 }} viewport={{once: true}} transition={{ duration: 0.5}}>“</motion.div>
              <p className="font-headline text-4xl md:text-5xl text-foreground leading-tight">{quote}</p>
              <cite className="mt-6 block">
                <span className="block font-bold text-lg text-foreground">{author}</span>
                <span className="block text-muted-foreground">{role}</span>
              </cite>
               <CtaLink href={linkHref} variant="default" className="mt-8 bg-secondary text-secondary-foreground hover:bg-accent rounded-full px-6 py-3">
                  {linkText}
                </CtaLink>
            </blockquote>
          </motion.div>
          <motion.div className="md:w-1/2" variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
            <Image src={imageUrl} alt={author} width={624} height={624} className="rounded-full aspect-square object-cover" data-ai-hint={imageHint} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
