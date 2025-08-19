
'use client';

import Link from 'next/link';
import { LazyImage } from '@/components/primitives/lazy-image/lazy-image';
import { cn } from '@/lib/utils';

export function ArticleTease({ item, isFeatured = false }: { item: any, isFeatured?: boolean }) {
    return (
        <div className="flex flex-col group">
            <LazyImage 
                src={item.image} 
                alt={item.title} 
                className={cn("w-full aspect-[3/2]")}
                imageClassName="object-cover group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={item.hint}
                fill 
            />
            <div className="mt-4">
                <p className="text-sm font-semibold text-primary">{item.overline}</p>
                <h3 className={cn("font-headline font-bold mt-1", isFeatured ? "text-3xl" : "text-xl")}>
                    <Link href={item.href} className="hover:underline text-white">{item.title}</Link>
                </h3>
                <p className="text-sm text-muted-foreground mt-2">{item.meta}</p>
            </div>
        </div>
    )
}
