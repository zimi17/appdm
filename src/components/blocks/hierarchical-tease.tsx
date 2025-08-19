
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
  const otherArticles = articles.slice(1, 3); // Display 2 smaller articles

  return (
    <motion.section
      className="bg-secondary text-secondary-foreground py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <div className="container mx-auto px-6">
        {/* Header is now correctly positioned at the top of the section */}
        <ComponentHeader 
          title={header.title}
          description={header.subheading}
          hrClassName="border-primary"
          descriptionClassName="text-muted-foreground"
        />
        
        {/* Main grid for content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mt-12">
          {/* Left column for the CTA and any other header-related info */}
          <motion.div
              variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.5 }}
          >
              <HierarchicalTeaseHeader cta={header.cta} />
          </motion.div>

          {/* Right column for the articles */}
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
