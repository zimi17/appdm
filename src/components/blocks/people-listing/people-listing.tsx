'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ComponentHeader } from '../../primitives/component-header/component-header';
import { CtaLink } from '../../primitives/cta-link/cta-link';
import { LazyImage } from '../../primitives/lazy-image/lazy-image';

interface Person {
  id: string;
  name: string;
  title: string;
  department?: string;
  bio?: string;
  expertise?: string[];
  email?: string;
  phone?: string;
  image?: {
    src: string;
    alt: string;
    hint?: string;
  };
  links?: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  }[];
}

interface PeopleListingProps {
  title?: string;
  description?: string;
  people: Person[];
  showBio?: boolean;
  showContact?: boolean;
  showExpertise?: boolean;
  variant?: 'grid' | 'list' | 'cards';
  columns?: 2 | 3 | 4;
  theme?: 'default' | 'light' | 'dark' | 'accent';
  className?: string;
}

export function PeopleListing({ 
  title, 
  description, 
  people, 
  showBio = true,
  showContact = false,
  showExpertise = true,
  variant = 'grid',
  columns = 3,
  theme = 'default',
  className 
}: PeopleListingProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const personVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const themeClasses = {
    default: 'bg-background text-foreground',
    light: 'bg-muted/50 text-foreground',
    dark: 'bg-foreground text-background',
    accent: 'bg-primary text-primary-foreground'
  };

  const variantClasses = {
    grid: `grid gap-6 md:grid-cols-2 lg:grid-cols-${columns}`,
    list: 'space-y-6',
    cards: `grid gap-6 md:grid-cols-2 lg:grid-cols-${columns}`
  };

  const renderPerson = (person: Person) => {
    if (variant === 'list') {
      return (
        <motion.div 
          key={person.id}
          className="flex flex-col lg:flex-row gap-6 p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow duration-300"
          variants={personVariants}
        >
          {/* Person Image */}
          {person.image && (
            <div className="flex-shrink-0">
              <LazyImage
                src={person.image.src}
                alt={person.image.alt}
                className="w-32 h-32 rounded-lg overflow-hidden"
                imageClassName="object-cover"
                data-ai-hint={person.image.hint}
                fill
              />
            </div>
          )}

          {/* Person Content */}
          <div className="flex-1">
            <div className="mb-4">
              <h3 className="font-headline text-xl font-semibold mb-2">
                {person.name}
              </h3>
              <p className="text-lg text-primary font-medium mb-2">
                {person.title}
              </p>
              {person.department && (
                <p className="text-muted-foreground mb-3">
                  {person.department}
                </p>
              )}
              
              {showBio && person.bio && (
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {person.bio}
                </p>
              )}

              {showExpertise && person.expertise && person.expertise.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium text-sm mb-2">Bidang Keahlian:</h4>
                  <div className="flex flex-wrap gap-2">
                    {person.expertise.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {showContact && (
                <div className="space-y-2 text-sm text-muted-foreground">
                  {person.email && (
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✉️</span>
                      <span>{person.email}</span>
                    </div>
                  )}
                  {person.phone && (
                    <div className="flex items-center gap-2">
                      <span className="text-primary">📞</span>
                      <span>{person.phone}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Links */}
            {person.links && person.links.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {person.links.map((link, index) => (
                  <CtaLink 
                    key={index}
                    href={link.href}
                    variant={link.variant || 'outline'}
                    size="sm"
                  >
                    {link.text}
                  </CtaLink>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      );
    }

    // Grid/Cards variant
    return (
      <motion.div 
        key={person.id}
        className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
        variants={personVariants}
      >
        {/* Person Image */}
        {person.image && (
          <div className="relative aspect-square overflow-hidden">
            <LazyImage
              src={person.image.src}
              alt={person.image.alt}
              className="w-full h-full"
              imageClassName="object-cover"
              data-ai-hint={person.image.hint}
              fill
            />
          </div>
        )}

        {/* Person Content */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="font-headline text-lg font-semibold mb-2 line-clamp-2">
              {person.name}
            </h3>
            <p className="text-primary font-medium mb-2 line-clamp-1">
              {person.title}
            </p>
            {person.department && (
              <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
                {person.department}
              </p>
            )}
            
            {showBio && person.bio && (
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                {person.bio}
              </p>
            )}

            {showExpertise && person.expertise && person.expertise.length > 0 && (
              <div className="mb-4">
                <h4 className="font-medium text-xs mb-2">Bidang Keahlian:</h4>
                <div className="flex flex-wrap gap-1">
                  {person.expertise.slice(0, 3).map((skill, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {person.expertise.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                      +{person.expertise.length - 3}
                    </span>
                  )}
                </div>
              </div>
            )}

            {showContact && (
              <div className="space-y-1 text-xs text-muted-foreground">
                {person.email && (
                  <div className="flex items-center gap-1">
                    <span className="text-primary">✉️</span>
                    <span className="line-clamp-1">{person.email}</span>
                  </div>
                )}
                {person.phone && (
                  <div className="flex items-center gap-1">
                    <span className="text-primary">📞</span>
                    <span>{person.phone}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Links */}
          {person.links && person.links.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {person.links.slice(0, 2).map((link, index) => (
                <CtaLink 
                  key={index}
                  href={link.href}
                  variant={link.variant || 'outline'}
                  size="sm"
                  className="flex-1 justify-center"
                >
                  {link.text}
                </CtaLink>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    );
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
      variants={containerVariants}
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
          
          <div className={variantClasses[variant]}>
            {people.map(renderPerson)}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
