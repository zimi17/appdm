
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
    description: "Learning at Harvard can happen for every type of learner, at any phase of life.",
    href: "#",
    sublinks: [
      { 
        title: "Degree programs", 
        description: "Browse all of our undergraduate concentrations and graduate degrees.", 
        sublinks: [
          { title: "Undergraduate Degrees", href: "#"},
          { title: "Graduate Degrees", href: "#" },
          { title: "Other", href: "#" }
        ] 
      },
      { title: "Professional and Lifelong Learning", href: "#" },
      { title: "Harvard Online", href: "#" },
      { 
        title: "Harvard Schools", 
        description: "Visit each School for information on admissions and financial aid.", 
        sublinks: [
          { title: "Harvard College", href: "#"},
          { title: "Harvard Business School", href: "#"},
          { title: "Harvard Divinity School", href: "#"},
          { title: "Harvard Faculty of Arts and Sciences", href: "#"},
          { title: "Harvard Graduate School of Design", href: "#"}
        ] 
      }
    ]
  },
  { title: "Campus", description: "Get tickets to our next game, hours and locations for our libraries and museums, and information about your next career move.", href: "#" },
  { title: "In Focus", description: "Explore a curated examination of Harvard's research, scholarly work, and community.", href: "#" },
  { title: "Visit", description: "Ideas and assistance for your trip to our campus.", href: "#" },
  { title: "About", description: "Learn how Harvard is structured, explore our long history, and discover our extended community.", href: "#"},
  { title: "News", description: "Official news from Harvard University about science, medicine, art, campus life, University issues, and broader national and global concerns.", href: "#"},
];


const NavColumn = ({ links, onLinkClick, onBack, title }: { links: any[], onLinkClick: (link: any) => void, onBack?: () => void, title?: string }) => (
  <div className="h-full overflow-y-auto pt-[90px] pr-6 pb-0 pl-6 [-webkit-overflow-scrolling:touch] w-full after:content-[''] after:block after:h-[50px] after:w-full min-[1260px]:after:h-[88px] md:pt-[137px] min-[960px]:pl-10 min-[960px]:pr-10 min-[1260px]:pt-[146px]">
    {onBack && (
       <div className="nav-primary__back--depth-1 mb-[7px] md:hidden">
          <button onClick={onBack} className="nav-primary__back-action--depth-1 bg-transparent border-0 text-white pt-0 pr-0 pb-0 pl-[26px] relative text-xl tracking-[-0.1px] normal-case flex items-center">
            <span className="icon [speak:never] bg-[#656f77] rounded-full text-white inline-block text-[11px] h-4 left-0 leading-[17px] absolute text-center w-4 top-[7px]"><ChevronLeft className="w-4 h-4" /></span>
            {title}
          </button>
      </div>
    )}
    <ol>
      {links.map((link) => (
        <li key={link.title} className="nav-primary__item--depth-0 [transition:opacity_0.5s_cubic-bezier(.32,0.08,0.24,1),transform_0.5s_cubic-bezier(.32,0.08,0.24,1)] opacity-100 [transform:translateZ(0)] mt-[25px] first:mt-0">
          <button
            onClick={() => onLinkClick(link)}
            className="nav-primary__action--depth-0 bg-transparent border-0 inline p-0 text-left transition-colors duration-150 ease-in-out text-4xl font-headline tracking-[-0.1px] leading-[1.15] md:text-5xl min-[1260px]:text-[56px] text-slate-400 hover:text-white"
          >
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat relative transition-[background-size] duration-300 bg-[0_100%] bg-[length:0%_1px] hover:bg-[length:100%_1px]">{link.title}</span>
          </button>
        </li>
      ))}
    </ol>
  </div>
);


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<any>(null);
  const [level2Menu, setLevel2Menu] = useState<any>(null);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLevel1Click = (link: any) => {
    if (link.sublinks) {
      setActiveMenu(link);
      setLevel2Menu(null); // Reset level 2
    } else {
      setIsNavOpen(false);
      setActiveMenu(null);
      setLevel2Menu(null);
    }
  };

  const handleLevel2Click = (link: any) => {
     if (link.sublinks) {
      setLevel2Menu(link);
    } else {
      setIsNavOpen(false);
      setActiveMenu(null);
      setLevel2Menu(null);
    }
  }


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
              <SheetContent side="right" className="w-full bg-[#292c2f] p-0 text-white overflow-hidden border-0">
                  <div className="flex justify-between items-center px-6 h-[70px] md:h-[75px] min-[960px]:h-[90px] absolute top-0 left-0 right-0 z-10">
                      <Link href="/" className="inline-block h-[29px] w-[115px] min-[375px]:h-9 min-[375px]:w-[142px] md:h-[42px] md:w-[166px] min-[1260px]:h-12 min-[1260px]:w-[190px] relative">
                        <Image src="/logo-white.svg" alt="Dwimulya Hub" fill className="object-contain"/>
                      </Link>
                      <SheetTrigger>
                          <X className="h-6 w-6 text-white" />
                      </SheetTrigger>
                  </div>
                  
                  <div className="h-full flex w-full">
                     <div className="h-full overflow-y-auto w-full md:w-1/3 md:shrink-0 border-r border-gray-700">
                        <NavColumn links={navLinks} onLinkClick={handleLevel1Click}/>
                     </div>
                     <div className={cn("h-full overflow-y-auto w-full md:w-1/3 md:shrink-0 border-r border-gray-700 transition-transform duration-300", activeMenu ? "translate-x-0" : "translate-x-full absolute")}>
                       {activeMenu && <NavColumn links={activeMenu.sublinks} onLinkClick={handleLevel2Click} onBack={() => setActiveMenu(null)} title={activeMenu.title} />}
                     </div>
                      <div className={cn("h-full overflow-y-auto w-full md:w-1/3 md:shrink-0 transition-transform duration-300", level2Menu ? "translate-x-0" : "translate-x-full absolute")}>
                        {level2Menu && <NavColumn links={level2Menu.sublinks} onLinkClick={() => {}} onBack={() => setLevel2Menu(null)} title={level2Menu.title} />}
                     </div>
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

