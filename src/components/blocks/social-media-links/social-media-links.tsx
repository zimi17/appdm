'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Music, 
  MessageCircle,
  Globe,
  ExternalLink
} from 'lucide-react';
import { ComponentHeader } from '../../primitives/component-header/component-header';

interface SocialMediaPlatform {
  id: string;
  name: string;
  url: string;
  icon?: string;
  label?: string;
}

interface SocialMediaLinksProps {
  title?: string;
  description?: string;
  platforms: SocialMediaPlatform[];
  variant?: 'horizontal' | 'vertical' | 'grid' | 'compact';
  showLabels?: boolean;
  showIcons?: boolean;
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function SocialMediaLinks({
  title,
  description,
  platforms,
  variant = 'horizontal',
  showLabels = true,
  showIcons = true,
  theme = 'default',
  className
}: SocialMediaLinksProps) {
  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const getPlatformIcon = (platform: SocialMediaPlatform) => {
    if (platform.icon) {
      // Custom icon provided
      return <span className="text-lg">{platform.icon}</span>;
    }

    // Default icons based on platform name
    const platformName = platform.name.toLowerCase();
    
    if (platformName.includes('facebook')) {
      return <Facebook className="w-5 h-5" />;
    } else if (platformName.includes('twitter') || platformName.includes('x.com')) {
      return <Twitter className="w-5 h-5" />;
    } else if (platformName.includes('instagram')) {
      return <Instagram className="w-5 h-5" />;
    } else if (platformName.includes('linkedin')) {
      return <Linkedin className="w-5 h-5" />;
    } else if (platformName.includes('youtube')) {
      return <Youtube className="w-5 h-5" />;
    } else if (platformName.includes('tiktok')) {
      return <Music className="w-5 h-5" />;
    } else if (platformName.includes('whatsapp')) {
      return <MessageCircle className="w-5 h-5" />;
    } else {
      return <Globe className="w-5 h-5" />;
    }
  };

  const getPlatformColor = (platform: SocialMediaPlatform) => {
    const platformName = platform.name.toLowerCase();
    
    if (platformName.includes('facebook')) {
      return 'hover:bg-blue-500 hover:text-white';
    } else if (platformName.includes('twitter') || platformName.includes('x.com')) {
      return 'hover:bg-sky-500 hover:text-white';
    } else if (platformName.includes('instagram')) {
      return 'hover:bg-pink-500 hover:text-white';
    } else if (platformName.includes('linkedin')) {
      return 'hover:bg-blue-600 hover:text-white';
    } else if (platformName.includes('youtube')) {
      return 'hover:bg-red-500 hover:text-white';
    } else if (platformName.includes('tiktok')) {
      return 'hover:bg-black hover:text-white';
    } else if (platformName.includes('whatsapp')) {
      return 'hover:bg-green-500 hover:text-white';
    } else {
      return 'hover:bg-primary hover:text-primary-foreground';
    }
  };

  const renderPlatformLink = (platform: SocialMediaPlatform, index: number) => (
    <motion.a
      key={platform.id}
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:shadow-md transition-all duration-200",
        getPlatformColor(platform)
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Visit our ${platform.name} page`}
    >
      {showIcons && getPlatformIcon(platform)}
      {showLabels && (
        <span className="font-medium">
          {platform.label || platform.name}
        </span>
      )}
      <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
    </motion.a>
  );

  const renderHorizontalLayout = () => (
    <div className="flex flex-wrap items-center gap-4">
      {platforms.map((platform, index) => renderPlatformLink(platform, index))}
    </div>
  );

  const renderVerticalLayout = () => (
    <div className="space-y-3">
      {platforms.map((platform, index) => renderPlatformLink(platform, index))}
    </div>
  );

  const renderGridLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {platforms.map((platform, index) => renderPlatformLink(platform, index))}
    </div>
  );

  const renderCompactLayout = () => (
    <div className="flex items-center gap-2">
      {platforms.map((platform, index) => (
        <motion.a
          key={platform.id}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "p-2 rounded-lg border border-border bg-card hover:shadow-md transition-all duration-200",
            getPlatformColor(platform)
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Visit our ${platform.name} page`}
        >
          {showIcons && getPlatformIcon(platform)}
        </motion.a>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (variant) {
      case 'vertical':
        return renderVerticalLayout();
      case 'grid':
        return renderGridLayout();
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
