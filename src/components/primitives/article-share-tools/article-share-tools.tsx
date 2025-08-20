
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Icon, IconName } from '../icon/icon';
import { Button } from '@/components/ui/button';

interface ArticleShareToolsProps {
    url: string;
    text: string;
    className?: string;
}

interface ShareOption {
    name: string;
    icon: IconName;
    href: string;
}

export function ArticleShareTools({ url, text, className }: ArticleShareToolsProps) {
    const [pageUrl, setPageUrl] = useState('');

    useEffect(() => {
        // Ensure the URL is set on the client-side to avoid hydration mismatch
        setPageUrl(url || window.location.href);
    }, [url]);

    const shareOptions: ShareOption[] = [
        { 
            name: 'WhatsApp', 
            icon: 'WhatsApp',
            href: `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + pageUrl)}` 
        },
        { 
            name: 'Facebook', 
            icon: 'Facebook',
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}` 
        },
        { 
            name: 'Twitter', 
            icon: 'Twitter',
            href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(text)}` 
        },
        { 
            name: 'LinkedIn', 
            icon: 'Linkedin',
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`
        },
        { 
            name: 'Email', 
            icon: 'Email',
            href: `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(pageUrl)}`
        },
    ];

    return (
        <div className={cn("p-4 border-l-2 border-primary bg-background", className)}>
            <h3 className="font-bold text-lg mb-4 text-foreground">Bagikan Artikel Ini</h3>
            <ul className="space-y-2">
                {shareOptions.map((option) => (
                    <li key={option.name}>
                         <a 
                            href={option.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                        >
                            <div className="bg-card p-2 rounded-full group-hover:bg-primary/10">
                                <Icon name={option.icon} className="h-5 w-5" />
                            </div>
                            <span className="font-medium">{option.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
