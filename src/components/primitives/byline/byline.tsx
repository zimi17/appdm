
'use client';

import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import Link from 'next/link';
import { type BylineProps } from '../article-tease/types';

export function Byline({ authors, publicationDate, disableLinks = false }: BylineProps) {
    const formattedDate = format(new Date(publicationDate), "d MMMM yyyy", { locale: id });

    const authorList = authors.map((author, index) => {
        const authorName = !disableLinks && author.link ? (
            <Link href={author.link} className="hover:underline">{author.name}</Link>
        ) : (
            <span>{author.name}</span>
        );
        
        let separator = '';
        if (authors.length > 1) {
            if (index < authors.length - 2) {
                separator = ', ';
            } else if (index === authors.length - 2) {
                separator = ' dan ';
            }
        }
        
        return <span key={author.name} className="inline">{authorName}{separator}</span>;
    });

    return (
        <div className="text-sm text-muted-foreground">
            <p>
                Oleh {authorList} pada <time dateTime={publicationDate}>{formattedDate}</time>
            </p>
        </div>
    );
}
