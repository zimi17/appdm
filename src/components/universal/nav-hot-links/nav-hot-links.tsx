
import Link from 'next/link';
import { hotLinks } from '@/lib/data/nav';
import { SanitySiteSettings } from '@/lib/sanity-queries';

interface NavHotLinksProps {
  siteSettings: SanitySiteSettings | null;
}

export function NavHotLinks({ siteSettings }: NavHotLinksProps) {
  // Use Sanity data if available, fallback to static data
  const links = siteSettings?.headerSettings?.hotLinks || hotLinks;

  return (
    <nav 
      className="ml-8 hidden md:block"
      data-sanity={siteSettings?._id ? `siteSettings=${siteSettings._id};path=headerSettings.hotLinks` : undefined}
    >
      <ol>
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="flex items-center gap-2 text-sm font-medium text-background hover:text-primary transition-colors before:content-[''] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#df072e]"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
