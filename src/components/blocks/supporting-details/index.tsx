
'use client';

import { LazyImage } from "@/components/primitives/lazy-image";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SupportingDetailsListItem {
  title?: ReactNode;
  subtitle?: ReactNode;
}

export interface SupportingDetailsProps {
  items?: Array<SupportingDetailsListItem>;
  mediaAsset?: {
    src: string;
    alt: string;
    hint?: string;
  };
  className?: string;
}

export function SupportingDetails({ items = [], mediaAsset, className }: SupportingDetailsProps) {
  return (
    <motion.div 
      className={cn("mt-12 grid lg:grid-cols-12 gap-12 items-start", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.15 }}
    >
        <motion.ul 
          className="grid md:grid-cols-2 gap-x-8 gap-y-10 lg:col-span-8"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {items.map((item, i) => (
            <motion.li 
              key={i} 
              className="flex items-start gap-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="w-16 shrink-0 border-t-2 border-primary mt-3"></div>
              <div>
                {item.title && (
                  <h3 className="text-xl font-bold font-headline text-foreground">
                    {item.title}
                  </h3>
                )}
                {item.subtitle && (
                  <p className="mt-2 text-muted-foreground">{item.subtitle}</p>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {mediaAsset && (
          <motion.div 
            className="row-start-1 lg:row-start-auto lg:col-span-4"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
             <LazyImage 
                src={mediaAsset.src} 
                alt={mediaAsset.alt}
                data-ai-hint={mediaAsset.hint}
                className="aspect-[3/4] overflow-hidden"
                imageClassName="object-cover"
                fill
            />
          </motion.div>
        )}
    </motion.div>
  );
}
