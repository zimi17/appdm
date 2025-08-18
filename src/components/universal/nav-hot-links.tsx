
import Link from 'next/link';
import { hotLinks } from '@/lib/data/nav';

export function NavHotLinks() {
  return (
    <nav className="ml-8 hidden md:block">
      <ol>
        {hotLinks.map((link, index) => (
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

