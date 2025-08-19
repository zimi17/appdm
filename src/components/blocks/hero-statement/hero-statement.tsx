
'use client';
import { motion } from 'framer-motion';
import { CtaList } from '../../primitives/cta-list/cta-list';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';
import { cn } from '@/lib/utils';
import { ComponentHeader } from '../../primitives/component-header/component-header';

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
            className={cn("grid lg:grid-cols-12 gap-12 items-center", className)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
        >
            <motion.div 
                className="lg:col-span-6"
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
            <motion.div 
                className="lg:col-span-6"
                variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
                transition={{duration: 0.5}}
            >
                <ComponentHeader title={title} hrClassName="border-primary" titleClassName="font-bold" />
                <p className="text-lg text-muted-foreground mt-4">{description}</p>
                <CtaList items={links} />
            </motion.div>
        </motion.div>
    );
}
