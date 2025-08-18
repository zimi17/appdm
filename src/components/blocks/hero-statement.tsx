
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ComponentHeader } from '../primitives/component-header';
import { CtaList } from '../primitives/cta-list';

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
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        className="order-2 lg:order-1"
                        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
                        transition={{duration: 0.5}}
                    >
                        <ComponentHeader title={title} hrClassName="border-primary" />
                        <p className="text-lg text-muted-foreground mt-4">{description}</p>
                        <CtaList items={links} />
                    </motion.div>
                    <motion.div 
                        className="order-1 lg:order-2"
                        variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                        transition={{duration: 0.5}}
                    >
                         <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                            <Image src={imageUrl} alt={title} fill className="object-cover" data-ai-hint={imageHint} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
