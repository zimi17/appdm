
'use client';

import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import Link from 'next/link';
import { type BylineProps, type Author } from '../article-tease/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

// Helper component untuk merender satu penulis dengan tautan opsional
const AuthorLink = ({ author, disableLinks }: { author: Author, disableLinks?: boolean }) => {
    if (disableLinks || !author.link) {
        return <span className="font-semibold">{author.name}</span>;
    }
    return <Link href={author.link} className="font-semibold hover:underline">{author.name}</Link>;
};

// Helper component untuk merender daftar penulis dengan pemisah yang benar
const AuthorList = ({ authors, disableLinks }: { authors?: Author[], disableLinks?: boolean }) => {
    if (!authors || authors.length === 0) return null;

    return (
        <>
            {authors.map((author, index) => (
                <React.Fragment key={author.name}>
                    <AuthorLink author={author} disableLinks={disableLinks} />
                    {authors.length > 1 && index < authors.length - 2 && ', '}
                    {authors.length > 1 && index === authors.length - 2 && ' dan '}
                </React.Fragment>
            ))}
        </>
    );
};


export function Byline({ authors, featuredAuthors, publicationDate, type = "Authors", disableLinks = false }: BylineProps) {
    
    let formattedDate = '';
    try {
        formattedDate = format(new Date(publicationDate), "d MMMM yyyy", { locale: id });
    } catch (e) {
        // Fallback untuk tanggal yang tidak valid
        formattedDate = publicationDate;
    }

    const showFeatured = (type === "Featured" || type === "ShowAll") && featuredAuthors && featuredAuthors.length > 0;
    const showAuthors = (type === "Authors" || type === "ShowAll") && authors && authors.length > 0;
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
                <time dateTime={publicationDate}>{formattedDate}</time>
            </div>
         )
    }
    
    if (type === 'Featured' && showFeatured) {
        return (
            <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                    {featuredAuthors.map(author => (
                        <Avatar key={author.name} className="h-8 w-8 border-2 border-background">
                            <AvatarImage src={author.avatar?.image.src} alt={author.avatar?.image.alt || author.name} />
                            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                    ))}
                </div>
                <div className="text-sm text-muted-foreground">
                    <AuthorList authors={featuredAuthors} disableLinks={disableLinks} />
                    {showDate && (
                        <span className='ml-1'>
                            · <time dateTime={publicationDate}>{formattedDate}</time>
                        </span>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className="text-sm text-muted-foreground">
            {showAuthors && (
                <span>
                    Oleh <AuthorList authors={authors} disableLinks={disableLinks} />
                </span>
            )}
            {showDate && (
                 <span>
                    {showAuthors && ' · '}
                    <time dateTime={publicationDate}>{formattedDate}</time>
                </span>
            )}
        </div>
    );
}
