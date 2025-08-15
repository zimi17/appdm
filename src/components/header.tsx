
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Search, Menu, X, ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    title: "Academics",
    description: "Learning at Harvard can happen for every type of learner, at any phase of life.",
    href: "#",
    sublinks: [
      { title: "Degree programs", description: "Browse all of our undergraduate concentrations and graduate degrees.", sublinks: ["Undergraduate Degrees", "Graduate Degrees", "Other"] },
      { title: "Professional and Lifelong Learning", href: "#" },
      { title: "Harvard Online", href: "#" },
      { title: "Harvard Schools", description: "Visit each School for information on admissions and financial aid.", sublinks: ["Harvard College", "Harvard Business School", "Harvard Divinity School", "Harvard Faculty of Arts and Sciences", "Harvard Graduate School of Design"] }
    ]
  },
  { title: "Campus", description: "Get tickets to our next game, hours and locations for our libraries and museums, and information about your next career move.", href: "#" },
  { title: "In Focus", description: "Explore a curated examination of Harvard's research, scholarly work, and community.", href: "#" },
  { title: "Visit", description: "Ideas and assistance for your trip to our campus.", href: "#" },
  { title: "About", description: "Learn how Harvard is structured, explore our long history, and discover our extended community.", href: "#"},
  { title: "News", description: "Official news from Harvard University about science, medicine, art, campus life, University issues, and broader national and global concerns.", href: "#"},
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<any | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (link: any) => {
    if (link.sublinks) {
      setActiveMenu(link);
    } else {
      // Handle direct link click
      setIsNavOpen(false);
    }
  };

  const renderNavLinks = (links: any[], onLinkClick: (link:any)=>void) => (
      <ul>
        {links.map((link) => (
            <li key={typeof link === 'string' ? link : link.title} className="border-b border-gray-800">
                <button onClick={() => onLinkClick(link)} className="w-full text-left text-xl py-3 flex justify-between items-center hover:text-[#a51c30] transition-colors">
                    <span>{typeof link === 'string' ? link : link.title}</span>
                    {(typeof link !== 'string' && link.sublinks) && <ChevronRight className="w-5 h-5" />}
                </button>
            </li>
        ))}
    </ul>
  );

  return (
    <>
      <header className={cn("site-header site-header--position-fixed site-nav--is-active sticky top-0 z-[12000] transition-all duration-300", isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-white")}>
        <div className="flex h-[70px] justify-between items-center px-6 md:h-[75px] min-[960px]:h-[90px]">
          <div className="flex items-center">
            <Link href="/" className="inline-block h-[29px] w-[115px] min-[375px]:h-9 min-[375px]:w-[142px] md:h-[42px] md:w-[166px] min-[1260px]:h-12 min-[1260px]:w-[190px] relative">
               <Image src="/logo.svg" alt="Dwimulya Hub" fill className="object-contain" />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 mr-4">
                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-[#a51c30]">Hot Links</a>
                <span className="bg-[#a51c30] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">1</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-6 w-6 text-gray-800" />
            </Button>
             <Sheet open={isNavOpen} onOpenChange={setIsNavOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-gray-800" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full md:w-[350px] bg-[#292c2f] p-0 text-white overflow-y-auto">
                  <div className="flex justify-between items-center p-6 border-b border-gray-700 h-[90px]">
                      <Link href="/" className="inline-block h-8 w-40 relative">
                        <Image src="/logo-white.svg" alt="Dwimulya Hub" fill className="object-contain"/>
                      </Link>
                      <SheetClose>
                          <X className="h-6 w-6 text-white" />
                      </SheetClose>
                  </div>
                  <div className="relative overflow-hidden h-[calc(100%-90px)]">
                    <div className={cn("transition-transform duration-300 h-full", activeMenu ? "-translate-x-full" : "translate-x-0")}>
                      <nav className="p-6 h-full overflow-y-auto">
                          <ol>
                              {navLinks.map((link) => (
                                  <li key={link.title} className="py-2">
                                      <button onClick={() => handleMenuClick(link)} className="w-full text-left text-4xl font-headline flex justify-between items-center hover:text-[#a51c30]">
                                          {link.title}
                                      </button>
                                  </li>
                              ))}
                          </ol>
                      </nav>
                    </div>
                    {activeMenu && (
                      <div className={cn("absolute top-0 left-0 w-full h-full bg-[#292c2f] transition-transform duration-300", activeMenu ? "translate-x-0" : "translate-x-full")}>
                          <div className="p-6 border-b border-gray-700">
                              <Button onClick={() => setActiveMenu(null)} className="flex items-center text-white mb-4 bg-transparent hover:bg-transparent p-0">
                                  <ChevronLeft className="w-4 h-4 mr-2" /> Back
                              </Button>
                              <h2 className="text-xl font-bold">{activeMenu.title}</h2>
                              {activeMenu.description && <p className="text-sm mt-2 text-gray-400">{activeMenu.description}</p>}
                          </div>
                          <nav className="p-6 h-[calc(100%-150px)] overflow-y-auto">
                              {activeMenu.sublinks && renderNavLinks(activeMenu.sublinks, handleMenuClick)}
                          </nav>
                      </div>
                    )}
                  </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      <div className={cn("fixed inset-0 bg-black/90 z-[12001] p-8 transition-transform duration-300", isSearchOpen ? "translate-y-0" : "-translate-y-full")}>
        <div className="flex justify-end">
           <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
              <X className="h-8 w-8 text-white" />
           </Button>
        </div>
        <div className="flex flex-col items-center justify-center h-full -mt-16">
            <input type="text" placeholder="Search Dwimulya Hub" className="bg-transparent border-b-2 border-white text-white text-3xl w-full max-w-2xl text-center placeholder-gray-400 outline-none pb-2"/>
            <div className="mt-8 text-center">
                <h4 className="text-gray-400 mb-4">Quick Links</h4>
                <Link href="#" className="text-white text-lg font-semibold hover:text-[#a51c30]">A to Z index</Link>
            </div>
        </div>
      </div>
    </>
  );
}

