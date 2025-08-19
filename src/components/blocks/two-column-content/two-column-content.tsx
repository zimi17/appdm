
'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ComponentHeader } from '../../primitives/component-header/component-header';

interface TwoColumnContentProps {
  title: string;
  paragraphs: string[];
}

export function TwoColumnContent({ title, paragraphs }: TwoColumnContentProps) {
  return (
    <motion.section
      className={cn("bg-transparent text-foreground")}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
        <div className="max-w-6xl">
           <ComponentHeader title={title} />
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-lg text-muted-foreground leading-relaxed">
            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
    </motion.section>
  );
}
