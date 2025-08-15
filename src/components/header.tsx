
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Search, Menu, X, ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

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
      { title: "Professional and Lifelong Learning", href: "/professional-lifelong-learning" },
      { title: "Harvard Online", href: "/harvard-online" },
      { 
        title: "Harvard Schools", 
        description: "Visit each School for information on admissions and financial aid.", 
        href: "/schools",
        sublinks: [
          { title: "Harvard College", href: "/schools/college"},
          { title: "Harvard Business School", href: "/schools/hbs"},
          { title: "Harvard Division of Continuing Education", href: "/schools/dce"},
          { title: "Harvard Divinity School", href: "/schools/hds"},
          { title: "Harvard Faculty of Arts and Sciences", href: "/schools/fas"},
          { title: "Harvard Kenneth C. Griffin Graduate School of Arts and Sciences", href: "/schools/griffin-gsas"},
          { title: "Harvard Graduate School of Design", href: "/schools/gsd"},
          { title: "Harvard Graduate School of Education", href: "/schools/gse"},
          { title: "Harvard John A. Paulson School of Engineering and Applied Sciences", href: "/schools/seas"},
          { title: "Harvard Kennedy School", href: "/schools/hks"},
          { title: "Harvard Law School", href: "/schools/hls"},
          { title: "Harvard Medical School", href: "/schools/hms"},
          { title: "Harvard Radcliffe Institute", href: "/schools/radcliffe"},
          { title: "Harvard School of Dental Medicine", href: "/schools/sdm"},
          { title: "Harvard T.H. Chan School of Public Health", href: "/schools/hsph"}
        ] 
      }
    ]
  },
  {
    title: "Campus",
    description: "Get tickets to our next game, hours and locations for our libraries and museums, and information about your next career move.",
    href: "/campus",
    sublinks: [
      {
        title: "Libraries",
        description: "Explore our libraries",
        href: "/campus/libraries",
        sublinks: [
          { title: "Arnold Arboretum Horticultural Library", href: "/libraries/arnold-arboretum" },
          { title: "Baker Library and Special Collections", href: "/libraries/baker" },
          { title: "Biblioteca Berenson", href: "/libraries/berenson" },
          { title: "Botany Libraries", href: "/libraries/botany" },
          { title: "Cabot Science Library", href: "/libraries/cabot" },
          { title: "Countway Library", href: "/libraries/countway" },
          { title: "Dumbarton Oaks Research Library", href: "/libraries/dumbarton-oaks" },
          { title: "Ernst Mayr Library", href: "/libraries/ernst-mayr" },
          { title: "Fine Arts Library", href: "/libraries/fine-arts" },
          { title: "Frances Loeb Library", href: "/libraries/frances-loeb" },
          { title: "Fung Library", href: "/libraries/fung" },
          { title: "Gutman Library", href: "/libraries/gutman" },
          { title: "Harvard Divinity School Library", href: "/libraries/hds" },
          { title: "Harvard Film Archive", href: "/libraries/film-archive" },
          { title: "Harvard Law School Library", href: "/libraries/hls" },
          { title: "Harvard Map Collection", href: "/libraries/map-collection" },
          { title: "Harvard University Archives", href: "/libraries/university-archives" },
          { title: "Harvard-Yenching Library", href: "/libraries/harvard-yenching" },
          { title: "HKS Library and Knowledge Services", href: "/libraries/hks" },
          { title: "Houghton Library", href: "/libraries/houghton" },
          { title: "Lamont Library", href: "/libraries/lamont" },
          { title: "Loeb Music Library", href: "/libraries/loeb-music" },
          { title: "Robbins Library of Philosophy", href: "/libraries/robbins" },
          { title: "Schlesinger Library on the History of Women in America", href: "/libraries/schlesinger" },
          { title: "Tozzer Library", href: "/libraries/tozzer" },
          { title: "Widener Library", href: "/libraries/widener" },
          { title: "Woodberry Poetry Room", href: "/libraries/woodberry-poetry" }
        ]
      },
      {
        title: "Museums",
        description: "Explore our museums",
        href: "/campus/museums",
        sublinks: [
          { title: "The Arnold Arboretum", href: "/museums/arnold-arboretum" },
          { title: "Carpenter Center for the Visual Arts", href: "/museums/carpenter-center" },
          { title: "Collection of Historical Scientific Instruments", href: "/museums/chsi" },
          { title: "Graduate School of Design Exhibitions", href: "/museums/gsd-exhibitions" },
          { title: "Harvard Art Museums", href: "/museums/art" },
          { title: "Harvard Forest", href: "/museums/forest" },
          { title: "Harvard Museum of Natural History", href: "/museums/natural-history" },
          { title: "The Harvard Museum of the Ancient Near East", href: "/museums/ancient-near-east" },
          { title: "Harvard Museums of Science and Culture", href: "/museums/science-culture" },
          { title: "Harvard University Herbaria", href: "/museums/herbaria" },
          { title: "Mineralogical and Geological Museum", href: "/museums/mineralogical-geological" },
          { title: "Museum of Comparative Zoology", href: "/museums/mcz" },
          { title: "The Peabody Museum of Archaeology and Ethnology", href: "/museums/peabody" },
          { title: "Warren Anatomical Museum", href: "/museums/warren-anatomical" }
        ]
      },
      { title: "Athletics", href: "/athletics" },
      { title: "Work at Harvard", href: "/work-at-harvard" },
      { title: "Events", href: "/events" },
      { title: "Commencement", href: "/commencement" }
    ]
  },
    {
    title: "In Focus",
    description: "Explore a curated examination of Harvard's research, scholarly work, and community.",
    href: "/in-focus",
    sublinks: [
      { 
        title: "Mentorship", 
        description: "A dedication to mentorship has been part of Harvard's mission for nearly 400 years.",
        href: "/in-focus/mentorship" 
      },
      { 
        title: "Progress at Risk", 
        description: "Threats to federal funding endanger scientific breakthroughs and disease prevention.",
        href: "/in-focus/progress-at-risk" 
      },
      { 
        title: "Driving American Innovation", 
        description: "Harvard innovation has made Americans' lives easier, healthier, and safer.",
        href: "/in-focus/driving-innovation" 
      }
    ]
  },
  {
    title: "Visit",
    description: "Ideas and assistance for your trip to our campus.",
    href: "/visit",
    sublinks: [
      { title: "Tours", href: "/visit/tours" },
      { title: "Maps and directions", href: "/visit/maps-directions" },
      { title: "Tour Providers", href: "/visit/tour-providers" }
    ]
  },
    {
    title: "About",
    description: "Learn how Harvard is structured, explore our long history, and discover our extended community.",
    href: "/about",
    sublinks: [
      { 
        title: "History of Harvard", 
        description: "Harvard is perhaps best-known because of its enduring history of innovation in education.",
        href: "/about/history",
        sublinks: [
          { title: "History timeline", href: "/about/history/timeline" },
          { title: "Nobel Laureates", href: "/about/history/nobel-laureates" },
          { title: "Honorary Degrees", href: "/about/history/honorary-degrees" },
          { title: "Harvard shields", href: "/about/history/shields" }
        ]
      },
      { 
        title: "Leadership and governance", 
        description: "Learn about our Leadership",
        href: "/about/leadership",
        sublinks: [
          { title: "President", href: "/about/leadership/president" },
          { title: "Officers and Deans", href: "/about/leadership/officers-deans" },
          { title: "Harvard Corporation", href: "/about/leadership/corporation" },
          { title: "Board of Overseers", href: "/about/leadership/overseers" },
          { title: "University Professorships", href: "/about/leadership/professorships" }
        ]
      },
      { title: "Endowment", href: "/about/endowment" },
      { title: "Belonging", href: "/about/belonging" },
      { title: "Harvard in the Community", href: "/about/community" },
      { title: "Harvard in the World", href: "/about/world" }
    ]
  },
  {
    title: "News",
    description: "Official news from Harvard University about science, medicine, art, campus life, University issues, and broader national and global concerns.",
    href: "/news",
    sublinks: [
      { title: "Trending News Stories", href: "/news/trending" },
      { title: "The Harvard Gazette", href: "/news/gazette" },
      { title: "Sign up for the Daily Gazette", href: "/news/daily-gazette-signup" }
    ]
  }
];

const NavColumn = ({ items, onItemClick, activeItem, parentItem, level, onBackClick }: any) => (
  <div className="h-full overflow-y-auto w-full p-6">
    {(level > 1 && parentItem) && (
      <div className="mb-6">
        {onBackClick && (
          <button onClick={onBackClick} className="flex items-center text-sm text-gray-400 hover:text-white mb-4">
            <ChevronLeft className="h-4 w-4 mr-1" /> Back
          </button>
        )}
        <Link href={parentItem.href || '#'} className="hover:underline">
          <strong className="block font-bold text-xl tracking-[-0.1px] leading-normal flex items-center">
            {parentItem.title}
          </strong>
        </Link>
        {parentItem.description && <span className="block text-sm leading-normal mt-2 text-gray-400">{parentItem.description}</span>}
      </div>
    )}
    <ol className={parentItem ? 'border-t border-gray-700' : ''}>
      {items.map((link: any) => (
        <li key={link.title} className={parentItem ? "border-b border-gray-700" : "mt-1"}>
          <button
            onClick={() => onItemClick(link)}
            className={cn(
              "w-full text-left p-2 transition-colors duration-150 ease-in-out flex justify-between items-center",
              parentItem ? "text-slate-300 hover:text-white hover:bg-black/10 text-lg font-bold py-4" : "text-4xl font-headline tracking-[-0.1px] leading-[1.15]",
              activeItem?.title === link.title ? 'text-white' + (parentItem ? ' bg-black/20' : '') : 'text-slate-400 hover:text-white'
            )}
          >
            <span className="flex-grow">{link.title}</span>
            {link.sublinks && <ChevronRight className="h-5 w-5 flex-shrink-0" />}
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
  const [activeL1, setActiveL1] = useState<any | null>(null);
  const [activeL2, setActiveL2] = useState<any | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const resetNav = () => {
    setIsNavOpen(false);
    setActiveL1(null);
    setActiveL2(null);
  };
  
  const handleL1Click = (link: any) => {
    if (activeL1?.title === link.title) {
        setActiveL1(null);
        setActiveL2(null);
    } else {
        setActiveL1(link);
        setActiveL2(null);
    }
  };

  const handleL2Click = (link: any) => {
    if (activeL2?.title === link.title) {
        setActiveL2(null);
    } else {
        setActiveL2(link);
    }
  };


  return (
    <>
      <header className={cn("site-header sticky top-0 z-[12000] transition-all duration-300", isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-white")}>
        <div className="flex h-[90px] justify-between items-center px-6">
          <div className="flex items-center">
            <Link href="/">
              <Logo className="h-12 w-auto" />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 mr-4">
                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-primary">Hot Links</a>
                <span className="bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">1</span>
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
              <SheetContent side="top" className="w-full h-full bg-[#292c2f] p-0 text-white overflow-hidden border-0">
                  <div className="flex justify-between items-center px-6 h-[90px] absolute top-0 left-0 right-0 z-10">
                      <Link href="/" onClick={resetNav}>
                        <Logo theme="dark" className="h-12 w-auto"/>
                      </Link>
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" onClick={resetNav}>
                           <X className="h-6 w-6 text-white" />
                        </Button>
                      </SheetTrigger>
                  </div>
                  
                  <div className="h-full flex w-full pt-[90px]">
                      <div className="w-full md:w-1/3 border-r border-gray-700">
                        <NavColumn items={navLinks} onItemClick={handleL1Click} activeItem={activeL1} level={1} />
                      </div>
                      <div className="w-full md:w-1/3 border-r border-gray-700">
                        {activeL1?.sublinks && <NavColumn items={activeL1.sublinks} onItemClick={handleL2Click} activeItem={activeL2} parentItem={activeL1} level={2} onBackClick={() => setActiveL1(null)} />}
                      </div>
                      <div className="w-full md:w-1/3">
                         {activeL2?.sublinks && <NavColumn items={activeL2.sublinks} onItemClick={(link:any) => resetNav()} activeItem={null} parentItem={activeL2} level={3} onBackClick={() => setActiveL2(null)} />}
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
                <Link href="#" className="text-white text-lg font-semibold hover:text-primary">A to Z index</Link>
            </div>
        </div>
      </div>
    </>
  );
}
