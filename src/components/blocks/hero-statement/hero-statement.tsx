
'use client';
import { motion } from 'framer-motion';
import { ComponentHeader } from '../../primitives/component-header/component-header';
import { CtaList } from '../../primitives/cta-list/cta-list';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';

interface HeroStatementProps {
    title: string;
    description: string;
    imageUrl: string;
    imageHint: string;
    links: {
        href: string;
        text: string;
    }[];
}

export function HeroStatement({ title, description, imageUrl, imageHint, links }: HeroStatementProps) {
    return (
        <motion.section 
            className="py-16 md:py-24 bg-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
        >
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        className="order-2 lg:order-2"
                        variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
                        transition={{duration: 0.5}}
                    >
                        <ComponentHeader title={title} hrClassName="border-primary" titleClassName="font-bold" />
                        <p className="text-lg text-muted-foreground mt-4">{description}</p>
                        <CtaList items={links} />
                    </motion.div>
                    <motion.div 
                        className="order-1 lg:order-1"
                        variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                        transition={{duration: 0.5}}
                    >
                         <LazyImage 
                           src={imageUrl} 
                           alt={title} 
                           className="relative aspect-[3/2] overflow-hidden"
                           imageClassName="object-cover"
                           data-ai-hint={imageHint}
                           fill
                          />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
