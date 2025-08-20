'use client';

import { motion } from "framer-motion";
import { HierarchicalTeaseHeader } from "./hierarchical-tease-header";
import { ArticleTease } from "./article-tease";
import { cn } from "@/lib/utils";

export function HierarchicalTease({
  header,
  articles,
  className
}: {
  header: any;
  articles: any[];
  className?: string;
}) {
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1, 3);

  return (
    <motion.section
      className={cn("bg-card text-foreground py-16 md:py-24", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
            <div className="col-span-full lg:col-span-4 lg:sticky top-28">
              <HierarchicalTeaseHeader header={header}/>
            </div>

            <div className="col-span-full lg:col-span-12">
                <div className="grid grid-cols-1 gap-8">
                    <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    >
                    <ArticleTease item={featuredArticle} isFeatured={true} />
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {otherArticles.map((article, index) => (
                        <motion.div
                            key={index}
                            variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <ArticleTease item={article} />
                        </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
  );
}
