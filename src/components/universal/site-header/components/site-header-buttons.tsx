"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Search, Menu, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SanitySiteSettings } from "@/lib/sanity-queries";

interface SiteHeaderButtonsProps {
  siteSettings: SanitySiteSettings | null;
  onMenuOpen: (isOpen: boolean) => void;
  className?: string;
  showSearch?: boolean;
  showAlert?: boolean;
  showCTA?: boolean;
}

export function SiteHeaderButtons({
  siteSettings,
  onMenuOpen,
  className,
  showSearch = true,
  showAlert = true,
  showCTA = true
}: SiteHeaderButtonsProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // Use Sanity data if available, fallback to static data
  const ctaButton = siteSettings?.headerSettings?.ctaButton || { text: 'Daftar', href: '/pendaftaran' };
  const globalAlert = siteSettings?.globalAlert || {
    isEnabled: true,
    title: 'Pemberitahuan',
    description: 'Informasi penting.',
    linkText: 'Kalender Akademik tahun ajaran 2025/2026 telah disesuaikan. Pelajari untuk informasi terkini.',
    linkHref: '/kalender-akademik'
  };
  const searchSettings = siteSettings?.headerSettings?.searchSettings || {
    placeholder: 'Pencarian',
    quickLinkText: 'A to Z index',
    quickLinkHref: '#'
  };

  const handleSearch = (query: string = searchQuery) => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div 
      className={cn("site-header__buttons flex items-center gap-2", className)}
      data-sanity={siteSettings?._id ? `siteSettings=${siteSettings._id};path=headerSettings` : undefined}
    >
      {/* CTA Button */}
      {showCTA && (
        <Link href={ctaButton.href}>
          <Button variant="ghost" className="hidden md:inline-flex text-background hover:text-primary">
            {ctaButton.text}
          </Button>
        </Link>
      )}

      {/* Alert Button (Mobile) */}
      {showAlert && globalAlert.isEnabled && (
        <div className="md:hidden">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-6 w-6 text-background" />
                <span className="absolute top-2 right-2 flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a51c30]">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#df072e] opacity-75 animate-ping"></span>
                  </span>
                </span>
                <span className="sr-only">Informasi Penting</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 mr-4 z-[111]">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">{globalAlert.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {globalAlert.description}
                  </p>
                </div>
                <div>
                  <Link href={globalAlert.linkHref || '#'} className="text-sm font-medium text-secondary hover:underline">
                    {globalAlert.linkText}
                  </Link>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      )}

      {/* Search Button */}
      {showSearch && (
        <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
          <Search className="h-6 w-6 text-background" />
          <span className="sr-only">Search</span>
        </Button>
      )}

      {/* Menu Button */}
      <Sheet onOpenChange={onMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6 text-background" />
            <span className="sr-only">Menu</span>
          </Button>
        </SheetTrigger>
      </Sheet>

      {/* Search Overlay */}
      {showSearch && (
        <div className={cn(
          "fixed inset-0 bg-black/90 z-[100] p-8 transition-transform duration-300",
          isSearchOpen ? "translate-y-0" : "-translate-y-full"
        )}>
          <div className="flex justify-end">
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-white">
                <line x1="18" x2="6" y1="6" y2="18"></line>
                <line x1="6" x2="18" y1="6" y2="18"></line>
              </svg>
              <span className="sr-only">Close search</span>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center h-full -mt-16">
            <form onSubmit={handleSearchSubmit} className="w-full max-w-2xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={searchSettings.placeholder}
                className="bg-transparent border-b-2 border-white text-white text-3xl w-full text-center placeholder-gray-400 outline-none pb-2"
                autoFocus
              />
            </form>
            <div className="mt-8 text-center">
              <h4 className="text-gray-400 mb-4">Quick Links</h4>
              <Link href={searchSettings.quickLinkHref || '#'} className="text-white text-lg font-semibold hover:text-primary">
                {searchSettings.quickLinkText}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
