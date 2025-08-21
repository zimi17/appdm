
'use client';

import './hierarchical-tease.scss';
import { motion } from "framer-motion";
import { ArticleTease } from "@/components/primitives/article-tease/article-tease";
import { TeaseFeed } from "@/components/blocks/tease-feed/tease-feed";
import { HierarchicalTeaseHeader, HierarchicalTeaseHeaderProps } from "./hierarchical-tease-header";
import { ArticleTeaseProps } from '@/components/primitives/article-tease/types';

export interface HierarchicalTeaseProps {
  header?: HierarchicalTeaseHeaderProps;
  articles: Array<any>;
  feedTeaseStyle?: "expanded" | "compressed" | "text-only";
}

export function HierarchicalTease({
  header,
  articles,
  feedTeaseStyle = "expanded",
}: HierarchicalTeaseProps) {
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1, 3);

  const featuredArticleProps: ArticleTeaseProps | null = featuredArticle ? {
    type: "Article",
    title: featuredArticle.title,
    tease: featuredArticle.meta,
    link: featuredArticle.href,
    image: { src: featuredArticle.image, alt: featuredArticle.title, hint: featuredArticle.hint },
    overline: { label: featuredArticle.overline },
    byline: { publicationDate: "2024-08-15T12:00:00Z" },
    style: "full",
    className: "bg-transparent shadow-none",
    HeadingLevel: header ? "h3" : "h2",
  } : null;

  return (
    <motion.div
      className="hbs-hierarchical-tease"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {header && <HierarchicalTeaseHeader {...header} />}
      <div className="hbs-hierarchical-tease__articles">
        <motion.div 
            className="hbs-hierarchical-tease__big-preview"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
        >
          {featuredArticleProps && <ArticleTease {...featuredArticleProps} />}
        </motion.div>
        <div 
            className="hbs-hierarchical-tease__small-preview"
        >
          <TeaseFeed
            HeadingLevelTease={header ? "h3" : "h2"}
            items={otherArticles.map((article) => ({
              name: "ArticleTease",
              props: { 
                type: "Article",
                title: article.title,
                tease: article.meta,
                link: article.href,
                image: { src: article.image, alt: article.title, hint: article.hint },
                overline: { label: article.overline },
                byline: { publicationDate: "2024-08-15T12:00:00Z" },
                style: feedTeaseStyle 
              },
            }))}
          />
        </div>
      </div>
    </motion.div>
  );
}
