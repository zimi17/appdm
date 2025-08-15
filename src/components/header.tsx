"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, Menu, X, ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    title: "Academics",
    sublinks: [
      { title: "Degree programs", sublinks: ["Undergraduate Degrees", "Graduate Degrees", "Other"] },
      "Professional and Lifelong Learning",
      "Harvard Online",
      { title: "Harvard Schools", sublinks: ["Harvard College", "Harvard Business School", "Harvard Divinity School"] }
    ]
  },
  { title: "Campus" },
  { title: "In Focus" },
  { title: "Visit" },
  { title: "About" },
  { title: "News" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderSubMenu = (item: any) => (
    <div className="absolute top-0 left-full w-full h-full bg-[#292c2f] p-6 overflow-y-auto">
      <Button onClick={() => setActiveSubMenu(null)} className="flex items-center text-white mb-4 bg-transparent hover:bg-transparent">
        <ChevronLeft className="w-4 h-4 mr-2" /> Back
      </Button>
      <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
      <ul>
        {item.sublinks.map((sublink: string, index: number) => (
          <li key={index} className="mb-2">
            <Link href="#" className="text-white hover:text-[#a51c30]">
              {sublink}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <header className={cn("site-header site-header--position-fixed site-nav--is-active sticky z-[12000] transition-all duration-300", isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-white")}>
        <div className="flex h-[70px] justify-between items-center px-6 md:h-[75px] min-[1260px]:h-[90px]">
          <div className="flex items-center">
            <Link href="/" className="inline-block h-[29px] w-[115px] min-[375px]:h-9 min-[375px]:w-[142px] md:h-[42px] md:w-[166px] min-[1260px]:h-12 min-[1260px]:w-[190px] relative">
               <Image src="/logo.svg" alt="Harvard University" fill className="object-contain" />
            </Link>
          </div>

          <div className="flex items-center gap-2">
             <div className="hidden md:flex items-center gap-2 mr-4">
                 <Link href="#" className="text-sm font-semibold text-gray-700 hover:text-[#a51c30]">Learn about our lawsuits</Link>
                 <span className="bg-[#a51c30] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">1</span>
             </div>
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-6 w-6 text-gray-800" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsNavOpen(true)}>
              <Menu className="h-6 w-6 text-gray-800" />
            </Button>
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
            <input type="text" placeholder="Search Harvard University" className="bg-transparent border-b-2 border-white text-white text-3xl w-full max-w-2xl text-center placeholder-gray-400 outline-none pb-2"/>
            <div className="mt-8 text-center">
                <h4 className="text-gray-400 mb-4">Quick Links</h4>
                <Link href="#" className="text-white text-lg font-semibold hover:text-[#a51c30]">A to Z index</Link>
            </div>
        </div>
      </div>

       {/* Navigation Menu */}
       <Sheet open={isNavOpen} onOpenChange={setIsNavOpen}>
        <SheetContent side="right" className="w-full md:w-1/2 lg:w-1/3 bg-[#292c2f] p-0 text-white overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
                <Link href="/" className="inline-block h-8 w-40 relative">
                  <Image src="/logo-white.svg" alt="Harvard University" fill className="object-contain"/>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsNavOpen(false)}>
                    <X className="h-6 w-6 text-white" />
                </Button>
            </div>
            <nav className="p-6">
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.title} className="py-2 border-b border-gray-800">
                            <button onClick={() => setActiveMenu(activeMenu === link.title ? null : link.title)} className="w-full text-left text-3xl font-headline flex justify-between items-center hover:text-[#a51c30]">
                                {link.title}
                                {link.sublinks && <ChevronRight className="w-6 h-6" />}
                            </button>
                            {link.sublinks && activeMenu === link.title && (
                               <div className="mt-4 pl-4">
                                   <ul>
                                       {link.sublinks.map((sublink: any, index: number) => (
                                           <li key={index} className="py-2">
                                               {typeof sublink === 'string' ? (
                                                    <Link href="#" className="text-lg hover:text-[#a51c30]">{sublink}</Link>
                                               ): (
                                                <button onClick={() => setActiveSubMenu(activeSubMenu === sublink.title ? null : sublink.title)} className="w-full text-left text-lg flex justify-between items-center hover:text-[#a51c30]">
                                                   {sublink.title}
                                                   <ChevronRight className="w-5 h-5" />
                                                </button>
                                               )}

                                               {typeof sublink !== 'string' && activeSubMenu === sublink.title && (
                                                 <ul className="mt-2 pl-4">
                                                   {sublink.sublinks.map((deepSublink: string, deepIndex: number) => (
                                                     <li key={deepIndex} className="py-1">
                                                       <Link href="#" className="text-base text-gray-400 hover:text-white">{deepSublink}</Link>
                                                     </li>
                                                   ))}
                                                 </ul>
                                               )}
                                           </li>
                                       ))}
                                   </ul>
                               </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </SheetContent>
       </Sheet>

    </>
  );
}
