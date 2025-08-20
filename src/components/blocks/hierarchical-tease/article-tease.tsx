
'use client';

import { ArticleTease as ArticleTeasePrimitive } from '@/components/primitives/article-tease/article-tease';

export function ArticleTease({ item, isFeatured = false }: { item: any, isFeatured?: boolean }) {
    return (
        <ArticleTeasePrimitive
            type="Article"
            title={item.title}
            tease={item.meta}
            link={item.href}
            image={{src: item.image, alt: item.title, hint: item.hint}}
            overline={{label: item.overline}}
            byline={{ publicationDate: "2024-08-15T12:00:00Z" }}
            style={isFeatured ? "full" : "expanded"}
            className={isFeatured ? "bg-transparent hover:bg-transparent shadow-none hover:shadow-none p-0" : "bg-card hover:bg-card/90"}
        />
    )
}
