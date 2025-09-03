'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { User, Mail, ExternalLink, ArrowRight } from 'lucide-react';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';
import { PageSection } from '../../primitives/page-section/page-section';

interface Person {
  id: string;
  name: string;
  title?: string;
  department?: string;
  bio?: string;
  image?: {
    src: string;
    alt: string;
  };
  email?: string;
  phone?: string;
  website?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    research?: string;
  };
}

interface RelatedPeopleProps {
  title?: string;
  description?: string;
  people: Person[];
  variant?: 'default' | 'grid' | 'list' | 'compact';
  showBio?: boolean;
  showContact?: boolean;
  showSocialLinks?: boolean;
  maxItems?: number;
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function RelatedPeople({
  title,
  description,
  people,
  variant = 'default',
  showBio = true,
  showContact = true,
  showSocialLinks = true,
  maxItems = 6,
  theme = 'default',
  className
}: RelatedPeopleProps) {
  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const displayPeople = people.slice(0, maxItems);

  const renderPersonCard = (person: Person, index: number) => (
    <motion.div
      key={person.id}
      className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="p-6">
        {/* Image and Basic Info */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            {person.image ? (
              <LazyImage
                src={person.image.src}
                alt={person.image.alt}
                className="w-full h-full"
                imageClassName="object-cover group-hover:scale-105 transition-transform duration-300"
                fill
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <User className="w-8 h-8 text-muted-foreground" />
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {person.name}
            </h3>
            {person.title && (
              <p className="text-sm text-muted-foreground mb-1">{person.title}</p>
            )}
            {person.department && (
              <p className="text-xs text-muted-foreground">{person.department}</p>
            )}
          </div>
        </div>

        {/* Bio */}
        {showBio && person.bio && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {person.bio}
          </p>
        )}

        {/* Contact Information */}
        {showContact && (
          <div className="space-y-2 mb-4">
            {person.email && (
              <a
                href={`mailto:${person.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="truncate">{person.email}</span>
              </a>
            )}
            {person.phone && (
              <a
                href={`tel:${person.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <User className="w-4 h-4" />
                <span>{person.phone}</span>
              </a>
            )}
            {person.website && (
              <a
                href={person.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="truncate">Website</span>
              </a>
            )}
          </div>
        )}

        {/* Social Links */}
        {showSocialLinks && person.socialLinks && (
          <div className="flex items-center gap-2">
            {person.socialLinks.linkedin && (
              <a
                href={person.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn profile"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {person.socialLinks.twitter && (
              <a
                href={person.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter profile"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {person.socialLinks.research && (
              <a
                href={person.socialLinks.research}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Research profile"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );

  const renderPersonListItem = (person: Person, index: number) => (
    <motion.div
      key={person.id}
      className="group flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:shadow-md transition-all duration-200"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
        {person.image ? (
          <LazyImage
            src={person.image.src}
            alt={person.image.alt}
            className="w-full h-full"
            imageClassName="object-cover group-hover:scale-105 transition-transform duration-300"
            fill
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <User className="w-6 h-6 text-muted-foreground" />
          </div>
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold group-hover:text-primary transition-colors">
          {person.name}
        </h3>
        {person.title && (
          <p className="text-sm text-muted-foreground">{person.title}</p>
        )}
        {person.department && (
          <p className="text-xs text-muted-foreground">{person.department}</p>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        {person.email && (
          <a
            href={`mailto:${person.email}`}
            className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        )}
        {person.website && (
          <a
            href={person.website}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Website"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );

  const renderPersonCompact = (person: Person, index: number) => (
    <motion.div
      key={person.id}
      className="group flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:shadow-md transition-all duration-200"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
        {person.image ? (
          <LazyImage
            src={person.image.src}
            alt={person.image.alt}
            className="w-full h-full"
            imageClassName="object-cover group-hover:scale-105 transition-transform duration-300"
            fill
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <User className="w-5 h-5 text-muted-foreground" />
          </div>
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-sm group-hover:text-primary transition-colors truncate">
          {person.name}
        </h3>
        {person.title && (
          <p className="text-xs text-muted-foreground truncate">{person.title}</p>
        )}
      </div>
      
      {person.email && (
        <a
          href={`mailto:${person.email}`}
          className="p-1.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Email"
        >
          <Mail className="w-3 h-3" />
        </a>
      )}
    </motion.div>
  );

  const renderDefaultVariant = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayPeople.map((person, index) => renderPersonCard(person, index))}
    </div>
  );

  const renderGridVariant = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {displayPeople.map((person, index) => renderPersonCard(person, index))}
    </div>
  );

  const renderListVariant = () => (
    <div className="space-y-3">
      {displayPeople.map((person, index) => renderPersonListItem(person, index))}
    </div>
  );

  const renderCompactVariant = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {displayPeople.map((person, index) => renderPersonCompact(person, index))}
    </div>
  );

  const renderContent = () => {
    switch (variant) {
      case 'grid':
        return renderGridVariant();
      case 'list':
        return renderListVariant();
      case 'compact':
        return renderCompactVariant();
      default:
        return renderDefaultVariant();
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
      <PageSection>
        {title && (
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            {description && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </PageSection>
    </motion.section>
  );
}
