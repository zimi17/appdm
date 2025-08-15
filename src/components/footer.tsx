import Link from 'next/link';
import { School, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <School className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold font-headline">Dwimulya Hub</span>
          </div>
          <div className="flex gap-4">
            <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        <div className="mt-6 border-t border-accent-foreground/20 pt-6 text-center text-sm text-accent-foreground/80">
          <p>&copy; {currentYear} STIE Dwimulya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
