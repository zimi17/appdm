
'use client';

import { ArticleTease as ArticleTeasePrimitive } from '@/components/primitives/article-tease/article-tease';

export function ArticleTease({ item, isFeatured = false }: { item: any, isFeatured?: boolean }) {
    return (
        <ArticleTeasePrimitive
            type="Article"
            title={item.title}
            tease={isFeatured ? item.description : undefined}
            link={item.href}
            image={{src: item.image, alt: item.title, hint: item.hint}}
            overline={{label: item.overline}}
            byline={{authors: [{name: item.meta.split(' pada ')[0].replace('Oleh ','')}], publicationDate: new Date().toISOString()}}
            style="full"
            className="bg-transparent hover:bg-transparent shadow-none hover:shadow-none"
        />
    )
}
