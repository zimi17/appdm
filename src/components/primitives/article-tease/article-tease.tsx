
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
        <p className="mt-2 text-muted-foreground text-base md:text-lg">
            {tease}
        </p>
      );
    }
  
    return (
      <div className="mt-2 text-muted-foreground text-base md:text-lg">
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
    style = "expanded",
    HeadingLevel = "h3",
    className,
}: ArticleTeaseProps) {
    
    const content = (
        <div className={cn("flex flex-col p-4 flex-grow justify-center", style === 'full' && "p-0")}>
            {overline?.label && (
                <span className="text-sm font-semibold text-primary mb-2">
                    {overline.link ? <Link href={overline.link} className="hover:underline">{overline.label}</Link> : overline.label}
                </span>
            )}
            <HeadingLevel className={cn(
                "font-headline font-bold",
                style === 'full' ? 'text-2xl md:text-3xl' : 'text-xl'
            )}>
                <Link href={link} className="hover:underline">
                    {title}
                </Link>
            </HeadingLevel>
            {tease && <ArticleTeaseDesc tease={tease} />}
            {byline && (
                <div className="mt-4 text-sm text-muted-foreground">
                    <Byline {...byline} />
                </div>
            )}
        </div>
    );

    if (style === 'text-only') {
        return (
            <article className={cn('flex flex-col', className)}>
                {content}
            </article>
        );
    }
    
    const isExpandedWithImage = style === "expanded" && image;

    return (
        <article className={cn(
            'group transition-shadow duration-300 hover:shadow-xl h-full',
            isExpandedWithImage ? 'grid md:grid-cols-12 gap-x-6 items-center' : 'flex flex-col',
            className
        )}>
            {image && (
                <div className={cn("relative", isExpandedWithImage && "md:col-span-4")}>
                    <Link href={link} className="block relative aspect-[4/3]" aria-hidden="true" tabIndex={-1}>
                        <LazyImage 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full h-full"
                            imageClassName="object-cover group-hover:scale-105 transition-transform duration-300" 
                            data-ai-hint={image.hint}
                            fill
                        />
                    </Link>
                </div>
            )}
             <div className={cn(isExpandedWithImage ? 'md:col-span-8' : '', 'flex-grow flex')}>
                {content}
            </div>
        </article>
    );
}
