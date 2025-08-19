
import Link from 'next/link';
import { cn } from "@/lib/utils"

export interface SiteFooterLegalProps {
    items?: Array<{
        href: string;
        children: React.ReactNode;
    }>;
    copyright?: string;
}

export function SiteFooterLegal({ items = [], copyright}: SiteFooterLegalProps) {
    const currentYear = new Date().getFullYear();
    const copyrightText = copyright?.replace('{new Date().getFullYear()}', currentYear.toString()) || `© ${currentYear} Yayasan Dwimulya Sahati dan Civitas Akademika STIE Dwimulya.`;

    return (
        <div className="bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-6 py-4 border-t border-white/10 text-sm text-muted-foreground">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                    <p className="md:col-span-4 text-center md:text-left">
                        {copyrightText}
                    </p>
                    <div className="md:col-span-8 flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
                        {items.map((link, i) => (
                            <Link key={i} href={link.href} className="hover:text-primary transition-colors">{link.children}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
