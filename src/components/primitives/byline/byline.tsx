'use client';

import { format } from 'date-fns';
import Link from 'next/link';

interface Author {
    name: string;
    link?: string;
}

export interface BylineProps {
    authors: Author[];
    publicationDate: string;
}

export function Byline({ authors, publicationDate }: BylineProps) {
    const formattedDate = format(new Date(publicationDate), "MMMM d, yyyy");

    const authorList = authors.map((author, index) => {
        const authorName = author.link ? <Link href={author.link} className="hover:underline">{author.name}</Link> : <span>{author.name}</span>;
        
        if (index === 0) {
            return <span key={author.name} className="hbs-byline__author">{authorName}</span>;
        } else if (index === authors.length - 1) {
            return <span key={author.name} className="hbs-byline__author">, and {authorName}</span>;
        } else {
            return <span key={author.name} className="hbs-byline__author">, {authorName}</span>;
        }
    });

    return (
        <div className="hbs-byline">
            <p className="hbs-byline__text text-sm text-muted-foreground">
                By {authorList} on <time dateTime={publicationDate}>{formattedDate}</time>
            </p>
        </div>
    );
}
