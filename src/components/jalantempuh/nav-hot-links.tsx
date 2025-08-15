
import Link from 'next/link';

export function NavHotLinks() {
  return (
    <nav className="ml-8 hidden md:block">
      <ol>
        <li>
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors before:content-[''] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#df072e]"
          >
            Learn about our lawsuits to protect our students and researchers
          </a>
        </li>
      </ol>
    </nav>
  );
}
