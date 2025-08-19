
'use client';

import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import Link from 'next/link';
import { type BylineProps, type Author } from '../article-tease/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const AuthorLink = ({ author, disableLinks }: { author: Author, disableLinks?: boolean }) => {
    if (disableLinks || !author.link) {
        return <span>{author.name}</span>;
    }
    return <Link href={author.link} className="hover:underline">{author.name}</Link>;
};

const AuthorList = ({ authors, disableLinks }: { authors?: Author[], disableLinks?: boolean }) => {
    if (!authors || authors.length === 0) return null;

    return (
        <>
            {authors.map((author, index) => {
                let separator = '';
                if (authors.length > 1) {
                    if (index < authors.length - 2) {
                        separator = ', ';
                    } else if (index === authors.length - 2) {
                        separator = ' dan ';
                    }
                }
                return (
                    <span key={author.name} className="inline">
                        <AuthorLink author={author} disableLinks={disableLinks} />
                        {separator}
                    </span>
                );
            })}
        </>
    );
};


export function Byline({ authors, featuredAuthors, publicationDate, type = "Authors", disableLinks = false }: BylineProps) {
    
    let formattedDate = '';
    try {
        formattedDate = format(new Date(publicationDate), "d MMMM yyyy", { locale: id });
    } catch (e) {
        // Fallback for invalid date
        formattedDate = publicationDate;
    }

    const showFeatured = type === "Featured" || type === "ShowAll";
    const showAuthors = type === "Authors" || type === "ShowAll";
    const showDate = type !== "PeopleOnly";

    if (type === 'PeopleOnly') {
        return (
            <div className="text-sm text-muted-foreground">
                <p>
                    <AuthorList authors={authors} disableLinks={disableLinks} />
                </p>
            </div>
        )
    }

    if (type === 'DateOnly') {
         return (
            <div className="text-sm text-muted-foreground">
                <p>
                    <time dateTime={publicationDate}>{formattedDate}</time>
                </p>
            </div>
         )
    }
    
    if (type === 'Featured' && featuredAuthors) {
        return (
            <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                    {featuredAuthors.map(author => (
                        <Avatar key={author.name}>
                            <AvatarImage src={author.avatar?.image.src} alt={author.name} />
                            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                    ))}
                </div>
                <div className="text-sm text-muted-foreground">
                    <p>
                        <AuthorList authors={featuredAuthors} disableLinks={disableLinks} />
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="text-sm text-muted-foreground">
            <p>
                {showFeatured && featuredAuthors && (
                    <>
                        Featuring <AuthorList authors={featuredAuthors} disableLinks={disableLinks} />.
                    </>
                )}
                {showAuthors && authors && (
                    <>
                         By <AuthorList authors={authors} disableLinks={disableLinks} />
                    </>
                )}
                {showDate && (
                    <>
                        {' on '}
                        <time dateTime={publicationDate}>{formattedDate}</time>
                    </>
                )}.
            </p>
        </div>
    );
}
