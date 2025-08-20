
'use client';
import { ArticleTease } from '@/components/primitives/article-tease/article-tease';
import { type ArticleTeaseProps } from '@/components/primitives/article-tease/types';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface TeaseFeedItem {
    name: 'ArticleTease';
    props: ArticleTeaseProps;
}

interface TeaseFeedProps {
    items: TeaseFeedItem[];
    HeadingLevelTease?: 'h2' | 'h3' | 'h4';
    className?: string;
}

export function TeaseFeed({ items, HeadingLevelTease, className }: TeaseFeedProps) {
    const listVariants = {
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className={cn("hbs-tease-feed", className)}>
            <motion.ul 
                className="hbs-tease-feed__list space-y-8 md:space-y-0 md:gap-8"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {items.map((item, i) => (
                    <motion.li key={i} className="hbs-tease-feed__item" variants={itemVariants}>
                        {item.name === 'ArticleTease' && (
                            <ArticleTease {...item.props} HeadingLevel={HeadingLevelTease} />
                        )}
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
}
