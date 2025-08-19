
'use client';

import { motion } from "framer-motion";
import { HierarchicalTeaseHeader } from "../primitives/hierarchical-tease-header";
import { ArticleTease } from "../primitives/article-tease";
import { ComponentHeader } from "../primitives/component-header";

export function HierarchicalTease({
  header,
  articles,
}: {
  header: any;
  articles: any[];
}) {
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1, 4);

  return (
    <motion.section
      className="bg-secondary text-secondary-foreground py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="container mx-auto px-6">
        <ComponentHeader 
          title={header.title}
          description={header.subheading}
          hrClassName="border-primary"
          descriptionClassName="text-muted-foreground"
        />
        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 items-start mt-12">
          <HierarchicalTeaseHeader {...header} cta={header.cta} />
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="md:col-span-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ArticleTease item={featuredArticle} isFeatured={true} />
            </motion.div>
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
    </motion.section>
  );
}
