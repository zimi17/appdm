import { Link, type LinkProps } from "lucide-react";

export interface SiteFooterLegalProps {
    items?: Array<LinkProps>;
    copyright?: string;
}

export function SiteFooterLegal({ items = [], copyright}: SiteFooterLegalProps) {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-background/80">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center py-4 text-sm text-muted-foreground">
                <p className="order-2 md:order-1 mt-4 md:mt-0">
                    &copy; {currentYear} {copyright || "STIE Dwimulya"}
                </p>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 order-1 md:order-2">
                    {items.map((link, i) => (
                        <Link key={i} href={link.href} className="hover:text-primary transition-colors">{link.children}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}