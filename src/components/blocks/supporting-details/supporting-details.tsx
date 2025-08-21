'use client';

import { LazyImage } from "@/components/primitives/lazy-image/lazy-image";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ComponentHeader } from "@/components/primitives/component-header/component-header";
import { CtaLink } from "@/components/primitives/cta-link/cta-link";

export interface SupportingDetailsListItem {
  title?: ReactNode;
  subtitle?: ReactNode;
}

export interface SupportingDetailsProps {
  header: {
    title: string;
    description: string;
    cta: {
      text: string;
      href: string;
    }
  }
  items?: Array<SupportingDetailsListItem>;
  mediaAsset?: {
    src: string;
    alt: string;
    hint?: string;
  };
}

export function SupportingDetails({ header, items = [], mediaAsset }: SupportingDetailsProps) {
  return (
    <motion.div 
      className="mt-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.15 }}
    >
      <div className="md:flex md:justify-between md:items-end mb-12">
        <div className="md:w-1/2">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                {header.title}
            </h2>
        </div>
        <div className="md:w-1/2 lg:w-5/12 mt-4 md:mt-0">
            <p className="text-lg text-muted-foreground">{header.description}</p>
            <CtaLink href={header.cta.href} className="mt-4">
                {header.cta.text}
            </CtaLink>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-x-12 items-start">
        <motion.ul 
          className="grid md:grid-cols-2 gap-x-8 gap-y-12 lg:col-span-7"
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
              className="supporting-details-item flex gap-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="item-decorator shrink-0 border-t-2 border-primary w-1/5 mt-2"></div>
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
            className="row-start-1 lg:row-start-auto lg:col-span-5"
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
                className="aspect-[4/5] overflow-hidden"
                imageClassName="object-cover"
                fill
            />
          </motion.div>
        )}
      </div>
      <style jsx>{`
        .supporting-details-item .item-decorator {
          flex-shrink: 0;
          transform: translateY(0.5em); /* visual alignment */
        }
      `}</style>
    </motion.div>
  );
}
