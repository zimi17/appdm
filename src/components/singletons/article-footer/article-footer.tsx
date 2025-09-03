'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  MessageCircle,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';
import { PageSection } from '../../primitives/page-section/page-section';

interface Author {
  name: string;
  title?: string;
  bio?: string;
  image?: {
    src: string;
    alt: string;
  };
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

interface RelatedArticle {
  id: string;
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  href: string;
  publishDate?: string;
}

interface ArticleFooterProps {
  author: Author;
  publishDate: string;
  readingTime?: number;
  tags?: string[];
  categories?: string[];
  shareButtons?: ('facebook' | 'twitter' | 'linkedin' | 'whatsapp')[];
  relatedArticles?: RelatedArticle[];
  variant?: 'default' | 'compact' | 'extended';
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function ArticleFooter({
  author,
  publishDate,
  readingTime,
  tags = [],
  categories = [],
  shareButtons = ['facebook', 'twitter', 'linkedin', 'whatsapp'],
  relatedArticles = [],
  variant = 'default',
  theme = 'default',
  className
}: ArticleFooterProps) {
  const [copied, setCopied] = useState(false);

  const themeClasses = {
    default: 'bg-background text-foreground border-t border-border',
    light: 'bg-muted/50 text-foreground border-t border-border',
    dark: 'bg-foreground text-background border-t border-border',
    accent: 'bg-primary text-primary-foreground border-t border-primary-foreground/20'
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleShare = (platform: string) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const title = typeof document !== 'undefined' ? document.title : '';
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return <Facebook className="w-4 h-4" />;
      case 'twitter':
        return <Twitter className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'whatsapp':
        return <MessageCircle className="w-4 h-4" />;
      default:
        return <Share2 className="w-4 h-4" />;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return 'hover:bg-blue-500 hover:text-white';
      case 'twitter':
        return 'hover:bg-sky-500 hover:text-white';
      case 'linkedin':
        return 'hover:bg-blue-600 hover:text-white';
      case 'whatsapp':
        return 'hover:bg-green-500 hover:text-white';
      default:
        return 'hover:bg-primary hover:text-primary-foreground';
    }
  };

  const renderAuthor = () => (
    <div className="flex items-start gap-4">
      {author.image && (
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <LazyImage
            src={author.image.src}
            alt={author.image.alt}
            className="w-full h-full"
            imageClassName="object-cover"
            fill
          />
        </div>
      )}
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{author.name}</h3>
        {author.title && (
          <p className="text-sm text-muted-foreground mb-2">{author.title}</p>
        )}
        {author.bio && (
          <p className="text-sm leading-relaxed mb-3">{author.bio}</p>
        )}
        {author.socialLinks && (
          <div className="flex items-center gap-2">
            {author.socialLinks.twitter && (
              <a
                href={author.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {author.socialLinks.linkedin && (
              <a
                href={author.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {author.socialLinks.email && (
              <a
                href={`mailto:${author.socialLinks.email}`}
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email author"
              >
                <User className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );

  const renderMetaInfo = () => (
    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Calendar className="w-4 h-4" />
        <span>{formatDate(publishDate)}</span>
      </div>
      
      {readingTime && (
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{readingTime} min read</span>
        </div>
      )}
    </div>
  );

  const renderTagsAndCategories = () => (
    <div className="space-y-3">
      {categories.length > 0 && (
        <div>
          <h4 className="font-semibold text-sm text-muted-foreground mb-2">Categories</h4>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {tags.length > 0 && (
        <div>
          <h4 className="font-semibold text-sm text-muted-foreground mb-2">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderShareButtons = () => (
    <div className="space-y-3">
      <h4 className="font-semibold text-sm text-muted-foreground">Share this article</h4>
      <div className="flex items-center gap-2">
        {shareButtons.map((platform) => (
          <button
            key={platform}
            onClick={() => handleShare(platform)}
            className={cn(
              "p-2 rounded-full bg-muted hover:shadow-md transition-all duration-200",
              getPlatformColor(platform)
            )}
            aria-label={`Share on ${platform}`}
          >
            {getPlatformIcon(platform)}
          </button>
        ))}
        
        <button
          onClick={handleCopyLink}
          className={cn(
            "p-2 rounded-full bg-muted hover:shadow-md transition-all duration-200",
            copied ? "bg-green-500 text-white" : "hover:bg-primary hover:text-primary-foreground"
          )}
          aria-label="Copy link"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const renderRelatedArticles = () => {
    if (relatedArticles.length === 0) return null;

    return (
      <div className="space-y-4">
        <h4 className="font-semibold text-lg">Related Articles</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {relatedArticles.map((article) => (
            <motion.a
              key={article.id}
              href={article.href}
              className="group block p-4 rounded-lg border border-border hover:shadow-md transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex gap-3">
                {article.image && (
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <LazyImage
                      src={article.image.src}
                      alt={article.image.alt}
                      className="w-full h-full"
                      imageClassName="object-cover group-hover:scale-105 transition-transform duration-200"
                      fill
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h5 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h5>
                  {article.description && (
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {article.description}
                    </p>
                  )}
                  {article.publishDate && (
                    <p className="text-xs text-muted-foreground mt-2">
                      {formatDate(article.publishDate)}
                    </p>
                  )}
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    );
  };

  const renderDefaultVariant = () => (
    <div className="space-y-8">
      {/* Author Section */}
      <div className="border-b border-border pb-6">
        {renderAuthor()}
      </div>

      {/* Meta Information */}
      <div>
        {renderMetaInfo()}
      </div>

      {/* Tags and Categories */}
      {(tags.length > 0 || categories.length > 0) && (
        <div>
          {renderTagsAndCategories()}
        </div>
      )}

      {/* Share Buttons */}
      <div>
        {renderShareButtons()}
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="border-t border-border pt-6">
          {renderRelatedArticles()}
        </div>
      )}
    </div>
  );

  const renderCompactVariant = () => (
    <div className="space-y-6">
      {/* Author and Meta */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {author.image && (
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <LazyImage
                src={author.image.src}
                alt={author.image.alt}
                className="w-full h-full"
                imageClassName="object-cover"
                fill
              />
            </div>
          )}
          <div>
            <h3 className="font-semibold">{author.name}</h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{formatDate(publishDate)}</span>
              {readingTime && <span>{readingTime} min read</span>}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {shareButtons.slice(0, 3).map((platform) => (
            <button
              key={platform}
              onClick={() => handleShare(platform)}
              className={cn(
                "p-2 rounded-full bg-muted hover:shadow-md transition-all duration-200",
                getPlatformColor(platform)
              )}
              aria-label={`Share on ${platform}`}
            >
              {getPlatformIcon(platform)}
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 5).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  const renderExtendedVariant = () => (
    <div className="space-y-8">
      {/* Author Section */}
      <div className="border-b border-border pb-8">
        {renderAuthor()}
      </div>

      {/* Meta Information */}
      <div>
        {renderMetaInfo()}
      </div>

      {/* Tags and Categories */}
      {(tags.length > 0 || categories.length > 0) && (
        <div>
          {renderTagsAndCategories()}
        </div>
      )}

      {/* Share Buttons */}
      <div>
        {renderShareButtons()}
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="border-t border-border pt-8">
          {renderRelatedArticles()}
        </div>
      )}
    </div>
  );

  const renderContent = () => {
    switch (variant) {
      case 'compact':
        return renderCompactVariant();
      case 'extended':
        return renderExtendedVariant();
      default:
        return renderDefaultVariant();
    }
  };

  return (
    <motion.footer 
      className={cn(
        "py-8 md:py-12",
        themeClasses[theme],
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
    >
      <PageSection>
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </PageSection>
    </motion.footer>
  );
}
