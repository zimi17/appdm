
'use client';
import { motion } from 'framer-motion';
import { CtaList } from '../../primitives/cta-list';
import { LazyImage } from '../../primitives/lazy-image';
import { cn } from '@/lib/utils';
import { ComponentHeader } from '../../primitives/component-header';

interface HeroStatementProps {
    title: string;
    description: string;
    imageUrl: string;
    imageHint: string;
    links: {
        href: string;
        text: string;
    }[];
    className?: string;
}

export function HeroStatement({ title, description, imageUrl, imageHint, links, className }: HeroStatementProps) {
    return (
        <motion.div 
            className={cn("grid lg:grid-cols-16 gap-x-6 gap-y-8 items-center", className)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
        >
            <motion.div 
                className="lg:col-span-8 order-last lg:order-first"
                variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
                transition={{duration: 0.5}}
            >
                <ComponentHeader title={title} hrClassName="border-primary" titleClassName="font-bold" />
                <p className="text-lg text-muted-foreground mt-4">{description}</p>
                <CtaList items={links} />
            </motion.div>
            <motion.div 
                className="lg:col-span-8"
                variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                transition={{duration: 0.5}}
            >
                <LazyImage 
                    src={imageUrl} 
                    alt={title} 
                    className="relative aspect-[4/3] overflow-hidden"
                    imageClassName="object-cover"
                    data-ai-hint={imageHint}
                    fill
                />
            </motion.div>
        </motion.div>
    );
}
