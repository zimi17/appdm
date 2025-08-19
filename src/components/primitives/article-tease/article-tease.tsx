
'use client';

import Link from 'next/link';
import { LazyImage } from '../lazy-image/lazy-image';
import { Byline } from '../byline/byline';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { type ArticleTeaseProps } from './types';


function ArticleTeaseDesc({ tease }: { tease: ReactNode }) {
    if (!tease) return null;
  
    if (typeof tease === "string") {
      return (
        <p
          className="mt-2 text-muted-foreground"
        >
            {tease}
        </p>
      );
    }
  
    return (
      <div className="mt-2 text-muted-foreground">
        {tease}
      </div>
    );
  }

export function ArticleTease({
    title,
    link,
    byline,
    overline,
    tease,
    image,
    style = "full",
    HeadingLevel = "h3",
    className,
}: ArticleTeaseProps) {
    
    const content = (
        <div className="flex flex-col p-4 flex-grow">
            {overline?.label && (
                <span className="text-sm font-semibold text-primary mb-2">
                    {overline.link ? <Link href={overline.link} className="hover:underline">{overline.label}</Link> : overline.label}
                </span>
            )}
            <HeadingLevel className={cn(
                "font-headline font-bold",
                style === 'full' ? 'text-xl md:text-2xl' : 'text-xl'
            )}>
                <Link href={link} className="hover:underline">
                    {title}
                </Link>
            </HeadingLevel>
            {tease && <ArticleTeaseDesc tease={tease} />}
            {byline && (
                <div className="mt-4 text-xs">
                    <Byline {...byline} />
                </div>
            )}
        </div>
    );

    if (style === 'text-only') {
        return (
            <div className={cn('flex flex-col', className)}>
                {content}
            </div>
        );
    }
    
    return (
        <article className={cn(
            'flex flex-col group bg-card overflow-hidden transition-shadow duration-300 hover:shadow-xl h-full',
            className
        )}>
            {image && (
                <div className="relative">
                    <Link href={link} className="absolute inset-0 z-10" aria-hidden="true" tabIndex={-1}>
                        <span className="sr-only">{typeof title === 'string' ? title : 'Read article'}</span>
                    </Link>
                    <LazyImage 
                        src={image.src} 
                        alt={image.alt} 
                        className="aspect-[3/2]" 
                        imageClassName="object-cover group-hover:scale-105 transition-transform duration-300" 
                        data-ai-hint={image.hint}
                        fill
                    />
                </div>
            )}
            {content}
        </article>
    );
}
