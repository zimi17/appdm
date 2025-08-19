
import Link from 'next/link';

export interface SiteFooterLegalProps {
  items?: Array<{
    href: string;
    children: React.ReactNode;
  }>;
  copyright?: string;
}

export function SiteFooterLegal({ items = [], copyright }: SiteFooterLegalProps) {
  const currentYear = new Date().getFullYear();
  const copyrightText = copyright || `© ${currentYear} Yayasan Dwimulya Sahati dan Civitas Akademika STIE Dwimulya.`;

  return (
    <div className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-4 border-t border-white/10 text-sm text-muted-foreground">
        <div className="grid grid-cols-12 gap-y-4 items-baseline gap-x-4">
          <div className="col-span-12 md:col-span-4 text-center md:text-left">
            <p>{copyrightText}</p>
          </div>
          <div className="col-span-12 md:col-span-8 flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
            {items.map((link, i) => (
              <Link key={i} href={link.href} className="hover:text-white transition-colors">
                {link.children}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
