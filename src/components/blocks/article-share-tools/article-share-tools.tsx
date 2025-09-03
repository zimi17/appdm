'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Share2, Copy, Check, Printer, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';

interface ArticleShareToolsProps {
  title?: string;
  description?: string;
  url: string;
  articleTitle?: string;
  articleDescription?: string;
  platforms?: ('facebook' | 'twitter' | 'linkedin' | 'whatsapp')[];
  showCopyLink?: boolean;
  showPrint?: boolean;
  variant?: 'horizontal' | 'vertical' | 'compact';
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function ArticleShareTools({
  title,
  description,
  url,
  articleTitle,
  articleDescription,
  platforms = ['facebook', 'twitter', 'linkedin', 'whatsapp'],
  showCopyLink = true,
  showPrint = true,
  variant = 'horizontal',
  theme = 'default',
  className
}: ArticleShareToolsProps) {
  const [copied, setCopied] = useState(false);

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const shareText = articleTitle || 'Check out this article';
  const shareUrl = typeof window !== 'undefined' ? window.location.href : url;

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedText = encodeURIComponent(shareText);
    const encodedDescription = encodeURIComponent(articleDescription || '');

    let shareUrl_platform = '';

    switch (platform) {
      case 'facebook':
        shareUrl_platform = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'twitter':
        shareUrl_platform = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
        break;
      case 'linkedin':
        shareUrl_platform = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'whatsapp':
        shareUrl_platform = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
        break;
    }

    if (shareUrl_platform) {
      window.open(shareUrl_platform, '_blank', 'width=600,height=400');
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return <Facebook className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'whatsapp':
        return <MessageCircle className="w-5 h-5" />;
      default:
        return <Share2 className="w-5 h-5" />;
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

  const renderShareButton = (platform: string, index: number) => (
    <motion.button
      key={platform}
      onClick={() => handleShare(platform)}
      className={cn(
        "p-3 rounded-lg border border-border bg-card hover:shadow-md transition-all duration-200",
        getPlatformColor(platform)
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Share on ${platform}`}
    >
      {getPlatformIcon(platform)}
    </motion.button>
  );

  const renderHorizontalLayout = () => (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-muted-foreground">Share:</span>
      <div className="flex items-center gap-2">
        {platforms.map((platform, index) => renderShareButton(platform, index))}
        
        {showCopyLink && (
          <motion.button
            onClick={handleCopyLink}
            className={cn(
              "p-3 rounded-lg border border-border bg-card hover:shadow-md transition-all duration-200",
              copied ? "bg-green-500 text-white" : "hover:bg-primary hover:text-primary-foreground"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: platforms.length * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Copy link"
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          </motion.button>
        )}

        {showPrint && (
          <motion.button
            onClick={handlePrint}
            className="p-3 rounded-lg border border-border bg-card hover:shadow-md transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (platforms.length + (showCopyLink ? 1 : 0)) * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Print article"
          >
            <Printer className="w-5 h-5" />
          </motion.button>
        )}
      </div>
    </div>
  );

  const renderVerticalLayout = () => (
    <div className="space-y-4">
      <span className="text-sm font-medium text-muted-foreground">Share this article:</span>
      <div className="grid grid-cols-2 gap-3">
        {platforms.map((platform, index) => (
          <motion.button
            key={platform}
            onClick={() => handleShare(platform)}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:shadow-md transition-all duration-200",
              getPlatformColor(platform)
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Share on ${platform}`}
          >
            {getPlatformIcon(platform)}
            <span className="text-sm font-medium capitalize">{platform}</span>
          </motion.button>
        ))}
        
        {showCopyLink && (
          <motion.button
            onClick={handleCopyLink}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:shadow-md transition-all duration-200",
              copied ? "bg-green-500 text-white" : "hover:bg-primary hover:text-primary-foreground"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: platforms.length * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Copy link"
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            <span className="text-sm font-medium">Copy Link</span>
          </motion.button>
        )}

        {showPrint && (
          <motion.button
            onClick={handlePrint}
            className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:shadow-md transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (platforms.length + (showCopyLink ? 1 : 0)) * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Print article"
          >
            <Printer className="w-5 h-5" />
            <span className="text-sm font-medium">Print</span>
          </motion.button>
        )}
      </div>
    </div>
  );

  const renderCompactLayout = () => (
    <div className="flex items-center gap-2">
      {platforms.map((platform, index) => renderShareButton(platform, index))}
      
      {showCopyLink && (
        <motion.button
          onClick={handleCopyLink}
          className={cn(
            "p-2 rounded-lg border border-border bg-card hover:shadow-md transition-all duration-200",
            copied ? "bg-green-500 text-white" : "hover:bg-primary hover:text-primary-foreground"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: platforms.length * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Copy link"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </motion.button>
      )}

      {showPrint && (
        <motion.button
          onClick={handlePrint}
          className="p-2 rounded-lg border border-border bg-card hover:shadow-md transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: (platforms.length + (showCopyLink ? 1 : 0)) * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Print article"
        >
          <Printer className="w-4 h-4" />
        </motion.button>
      )}
    </div>
  );

  const renderContent = () => {
    switch (variant) {
      case 'vertical':
        return renderVerticalLayout();
      case 'compact':
        return renderCompactLayout();
      default:
        return renderHorizontalLayout();
    }
  };

  return (
    <motion.section 
      className={cn(
        "py-16 md:py-24",
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
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-16 gap-x-6 px-6">
        <div className="col-span-full">
          {title && (
            <ComponentHeader 
              title={title} 
              description={description}
              className="mb-12"
            />
          )}

          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
