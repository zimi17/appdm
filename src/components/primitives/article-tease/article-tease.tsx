'use client';
import Link from 'next/link';
import { LazyImage } from '../lazy-image';
import { Byline, type BylineProps } from '../byline/byline';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export interface ArticleTeaseProps {
    title: ReactNode;
    link: string;
    byline?: BylineProps;
    overline?: {
        label?: string;
        link?: string;
    };
    tease?: ReactNode;
    image?: {
        alt: string;
        src: string;
        width?: string;
        height?: string;
        hint?: string;
    };
    type: "Article";
    style?: "full" | "text-only" | "compressed" | "expanded" | "expandable" | "content" | "cta" | "grid";
    HeadingLevel?: 'h2' | 'h3' | 'h4';
    className?: string;
}

export function ArticleTease({
    title,
    link,
    byline,
    overline,
    tease,
    image,
    style = 'full',
    HeadingLevel = 'h3',
    className,
}: ArticleTeaseProps) {
    
    const content = (
        <div className="hbs-article-tease__content flex flex-col p-4 flex-grow">
            {overline?.label && (
                <span className="hbs-article-tease__overline text-sm font-semibold text-primary mb-2">
                    {overline.link ? <Link href={overline.link} className="hover:underline">{overline.label}</Link> : overline.label}
                </span>
            )}
            <HeadingLevel className={cn(
                "hbs-article-tease__title font-headline font-bold",
                style === 'full' ? 'text-2xl' : 'text-xl'
            )}>
                <Link href={link} className="hbs-article-tease__title__link hover:underline text-foreground">
                    {title}
                </Link>
            </HeadingLevel>
            {tease && <p className="hbs-article-tease__teaser mt-2 text-muted-foreground flex-grow">{tease}</p>}
            {byline && (
                <div className="hbs-article-tease__meta mt-4">
                    <Byline {...byline} />
                </div>
            )}
        </div>
    );

    if (style === 'text-only') {
        return (
            <div className={cn('hbs-article-tease hbs-article-tease--text-only', className)}>
                {content}
            </div>
        );
    }
    
    return (
        <div className={cn(
            'hbs-article-tease hbs-article-tease--full hbs-component--tease-feed flex flex-col group bg-background transition-colors duration-300 hover:bg-card',
            className
        )}>
            {image && (
                <div className="hbs-article-tease__image">
                    <Link href={link} className="hbs-article-tease__image__link" aria-hidden="true" tabIndex={-1}>
                        <LazyImage 
                            src={image.src} 
                            alt={image.alt} 
                            className="aspect-[3/2]" 
                            imageClassName="object-cover group-hover:scale-105 transition-transform duration-300" 
                            data-ai-hint={image.hint}
                            fill
                        />
                    </Link>
                </div>
            )}
            {content}
        </div>
    );
}
