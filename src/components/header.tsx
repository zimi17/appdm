
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, Menu, X, ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    title: "Academics",
    description: "Learning at Harvard can happen for every type of learner, at any phase of life.",
    href: "/academics",
    sublinks: [
      { 
        title: "Degree programs", 
        description: "Browse all of our undergraduate concentrations and graduate degrees.",
        href: "/academics/degree-programs",
        sublinks: [
          { title: "Undergraduate Degrees", href: "/academics/degree-programs/undergraduate"},
          { title: "Graduate Degrees", href: "/academics/degree-programs/graduate" },
          { title: "Other", href: "/academics/degree-programs/other" }
        ] 
      },
      { title: "Professional and Lifelong Learning", href: "#" },
      { title: "Harvard Online", href: "#" },
      { 
        title: "Harvard Schools", 
        description: "Visit each School for information on admissions and financial aid.", 
        href: "/schools",
        sublinks: [
          { title: "Harvard College", href: "/schools/college"},
          { title: "Harvard Business School", href: "/schools/hbs"},
          { title: "Harvard Divinity School", href: "/schools/hds"},
          { title: "Harvard Faculty of Arts and Sciences", href: "/schools/fas"},
          { title: "Harvard Graduate School of Design", href: "/schools/gsd"}
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

const NavColumn = ({ links, onLinkClick, onBack, parentTitle, currentItem, depth = 1 }: { links: any[], onLinkClick: (link: any) => void, onBack?: () => void, parentTitle?: string, currentItem: any, depth?: number }) => {

    const title = depth > 1 ? currentItem?.title : parentTitle;
    const description = depth > 1 ? currentItem?.description : "";
    const href = depth > 1 ? currentItem?.href : "";

    return (
    <div className={cn("h-full overflow-y-auto w-full pt-[90px] pr-6 pb-0 pl-6 [-webkit-overflow-scrolling:touch] after:content-[''] after:block after:h-[50px] after:w-full min-[1260px]:after:h-[88px] md:pt-[137px] min-[960px]:pl-10 min-[960px]:pr-10 min-[1260px]:pt-[146px]", depth > 1 && "md:w-full")}>
      {onBack && (
         <div className="nav-primary__back mb-9 md:mb-10 min-[1260px]:mb-[60px]">
            <button onClick={onBack} className="nav-primary__back-action bg-transparent border-0 text-white text-sm tracking-wider uppercase pt-0 pr-0 pb-0 pl-[26px] relative flex items-center font-medium">
              <span className="icon bg-[#656f77] rounded-full text-white inline-block text-[11px] h-4 left-0 leading-[17px] absolute text-center w-4 top-0.5"><ChevronLeft className="w-4 h-4" /></span>
              {parentTitle}
            </button>
        </div>
      )}
       { description && (
         <div className="mb-[37px] md:mb-10 min-[1260px]:mb-[60px]">
           <strong className="block font-headline text-xl tracking-[-0.1px] leading-normal">{title}</strong>
           <span className="block text-lg tracking-[-0.1px] leading-normal mt-2">{description}</span>
            { href && (
              <a href={href} className="inline-flex items-center text-lg leading-normal mt-2 font-medium hover:underline">
                 Explore more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            )}
         </div>
       )}

      <ol className={cn(depth > 1 && "border-t border-[#464a4f]")}>
        {links.map((link) => (
          <li key={link.title} className={cn("nav-primary__item", depth > 1 ? "border-b border-[#464a4f] py-4" : "mt-6")}>
            <button
              onClick={() => onLinkClick(link)}
              className="nav-primary__action bg-transparent border-0 inline p-0 text-left transition-colors duration-150 ease-in-out text-slate-400 hover:text-white w-full"
            >
             <div className="flex justify-between items-center">
                {depth === 1 ? (
                    <span className="text-4xl font-headline tracking-[-0.1px] leading-[1.15] md:text-5xl min-[1260px]:text-[56px] bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat relative transition-[background-size] duration-300 bg-[0_100%] bg-[length:0%_1px] hover:bg-[length:100%_1px]">{link.title}</span>
                ) : (
                    <strong className="text-lg font-bold">{link.title}</strong>
                )}
                {link.sublinks && <ChevronRight className="h-5 w-5 text-gray-500" />}
             </div>
            </button>
          </li>
        ))}
      </ol>
    </div>
  )};
  

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navState, setNavState] = useState<{ level: number, menu: any }>({ level: 1, menu: { sublinks: navLinks, title: "Main Menu" } });
  const [history, setHistory] = useState<{ level: number, menu: any }[]>([]);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link: any) => {
    if (link.sublinks) {
      setHistory([...history, navState]);
      setNavState({ level: navState.level + 1, menu: link });
    } else {
      setIsNavOpen(false);
      resetNav();
    }
  };

  const handleBackClick = () => {
    const previousState = history.pop();
    if(previousState){
        setNavState(previousState);
        setHistory([...history]);
    }
  };

  const resetNav = () => {
    setIsNavOpen(false);
    setTimeout(() => {
        setNavState({ level: 1, menu: { sublinks: navLinks, title: "Main Menu" }});
        setHistory([]);
    }, 300);
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
             <Sheet open={isNavOpen} onOpenChange={(open) => !open && resetNav()}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" onClick={() => setIsNavOpen(true)}>
                  <Menu className="h-6 w-6 text-gray-800" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full h-full bg-[#292c2f] p-0 text-white overflow-hidden border-0">
                  <div className="flex justify-between items-center px-6 h-[70px] md:h-[75px] min-[960px]:h-[90px] absolute top-0 left-0 right-0 z-10">
                      <Link href="/" onClick={resetNav} className="inline-block h-[29px] w-[115px] min-[375px]:h-9 min-[375px]:w-[142px] md:h-[42px] md:w-[166px] min-[1260px]:h-12 min-[1260px]:w-[190px] relative">
                        <Image src="/logo-white.svg" alt="Dwimulya Hub" fill className="object-contain"/>
                      </Link>
                      <SheetTrigger onClick={resetNav}>
                          <X className="h-6 w-6 text-white" />
                      </SheetTrigger>
                  </div>
                  
                  <div className="h-full flex w-full md:w-[200%] lg:w-[300%] transition-transform duration-300" style={{ transform: `translateX(-${(navState.level - 1) * 100 / (history.length + 1) }%)` }}>
                     <div className="h-full w-full md:w-1/3 md:shrink-0 border-r border-gray-700">
                        <NavColumn links={navLinks} onLinkClick={handleLinkClick} currentItem={null} />
                     </div>
                     <div className="h-full w-full md:w-1/3 md:shrink-0 border-r border-gray-700">
                       { navState.level > 1 && navState.menu.sublinks && <NavColumn links={navState.menu.sublinks} onLinkClick={handleLinkClick} onBack={handleBackClick} parentTitle={history[history.length-1]?.menu.title} currentItem={navState.menu} depth={2} />}
                     </div>
                      <div className="h-full w-full md:w-1/3 md:shrink-0">
                        { navState.level > 2 && navState.menu.sublinks && <NavColumn links={navState.menu.sublinks} onLinkClick={handleLinkClick} onBack={handleBackClick} parentTitle={history[history.length-1]?.menu.title} currentItem={navState.menu} depth={3} />}
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
