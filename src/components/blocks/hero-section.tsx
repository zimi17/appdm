
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
}

export function HeroSection({ title, description, imageUrl, imageHint }: HeroSectionProps) {
  const gradientClass = 'bg-gradient-to-t from-background via-background/80 to-transparent';

  return (
    <section className="relative flex items-center justify-center pt-[200px] pb-[200px] text-center overflow-hidden bg-background text-foreground h-[600px]">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Image
          src={imageUrl}
          alt={description}
          fill
          className="object-cover"
          priority
          data-ai-hint={imageHint}
        />
        <div className={`absolute inset-0 ${gradientClass}`} />
      </motion.div>
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <motion.h1
          className="font-headline text-5xl md:text-7xl lg:text-8xl font-normal leading-none text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-8 max-w-xl mx-auto text-lg font-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
