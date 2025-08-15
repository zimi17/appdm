
"use client";

import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";

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
          { title: "Undergraduate Degrees", href: "/academics/degree-programs/undergraduate" },
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
          { title: "Harvard College", href: "/schools/college" },
          { title: "Harvard Business School", href: "/schools/hbs" },
          { title: "Harvard Division of Continuing Education", href: "/schools/dce" },
          { title: "Harvard Divinity School", href: "/schools/hds" },
          { title: "Harvard Faculty of Arts and Sciences", href: "/schools/fas" },
          { title: "Harvard Kenneth C. Griffin Graduate School of Arts and Sciences", href: "/schools/griffin-gsas" },
          { title: "Harvard Graduate School of Design", href: "/schools/gsd" },
          { title: "Harvard Graduate School of Education", href: "/schools/gse" },
          { title: "Harvard John A. Paulson School of Engineering and Applied Sciences", href: "/schools/seas" },
          { title: "Harvard Kennedy School", href: "/schools/hks" },
          { title: "Harvard Law School", href: "/schools/hls" },
          { title: "Harvard Medical School", href: "/schools/hms" },
          { title: "Harvard Radcliffe Institute", href: "/schools/radcliffe" },
          { title: "Harvard School of Dental Medicine", href: "/schools/sdm" },
          { title: "Harvard T.H. Chan School of Public Health", href: "/schools/hsph" }
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

const NavColumn = ({
  links,
  onLinkClick,
  parentItem,
  activeItem,
  depth = 1,
  className
}: {
  links: any[],
  onLinkClick: (link: any, depth: number) => void,
  parentItem?: any,
  activeItem?: any,
  depth?: number,
  className?: string
}) => {

  const handleBackClick = () => {
    onLinkClick({ parent: true, depth }, depth);
  };
  
  return (
    <div className={cn("h-full overflow-y-auto w-full pt-[90px] pr-6 pb-0 pl-6 [-webkit-overflow-scrolling:touch] after:content-[''] after:block after:h-[50px] after:w-full min-[1260px]:after:h-[88px] md:pt-[137px] min-[960px]:pl-10 min-[960px]:pr-10 min-[1260px]:pt-[146px] nav-scrollbar", className)}>
      {depth > 1 && parentItem && (
         <div className="nav-primary__subsec--top pt-[30px] mb-6 md:mb-[41px]">
           <div className="nav-primary__back mb-9 md:hidden">
             <button onClick={handleBackClick} className="nav-primary__back-action bg-transparent border-0 text-white text-sm tracking-wider uppercase pt-0 pr-0 pb-0 pl-[26px] relative flex items-center font-medium">
               <span className="icon bg-[#656f77] rounded-full text-white inline-block text-[11px] h-4 left-0 leading-[17px] absolute text-center w-4 top-0.5"><ChevronLeft className="w-4 h-4" /></span>
               {parentItem.parentTitle || 'Back'}
             </button>
           </div>
           {parentItem?.href ? (
             <Link href={parentItem.href} className="hover:underline group">
              <strong className="block font-bold text-xl tracking-[-0.1px] leading-normal flex items-center">
                {parentItem?.title}
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </strong>
            </Link>
           ) : (
            <strong className="block font-bold text-xl tracking-[-0.1px] leading-normal">
              {parentItem?.title}
            </strong>
           )}
           {parentItem?.description && <span className="block text-base leading-normal mt-2 text-gray-400">{parentItem.description}</span>}
         </div>
       )}

      <ol className={cn(depth > 1 && "border-t border-gray-700")}>
        {links.map((link) => (
          <li key={link.title} className={cn("nav-primary__item", depth > 1 && "border-b border-gray-700")}>
            <button
              onClick={() => onLinkClick(link, depth)}
              className={cn(
                "nav-primary__action bg-transparent border-0 inline p-0 text-left transition-colors duration-150 ease-in-out w-full",
                activeItem?.title === link.title ? 'text-white' : 'text-slate-400'
              )}
            >
              <div className="flex justify-between items-center py-2 group hover:text-white">
                {depth === 1 ? (
                   <span className={cn(
                    "text-4xl font-headline tracking-[-0.1px] leading-[1.15] md:text-5xl min-[1260px]:text-[56px] bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat relative transition-[background-size] duration-300 bg-[0_100%] bg-[length:0%_1px] group-hover:bg-[length:100%_1px]",
                    activeItem?.title === link.title && 'bg-[length:100%_1px]'
                  )}>{link.title}</span>
                ) : (
                  <span className="flex items-center w-full">
                    <strong className="text-lg font-bold transition-colors duration-150 group-hover:text-white">{link.title}</strong>
                    {link.sublinks && (
                      <ChevronRight className="h-5 w-5 text-gray-500 ml-auto flex-shrink-0 group-hover:text-white transition-colors duration-150" />
                    )}
                  </span>
                )}
              </div>
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
};

export function GlobalMenu({ isOpen, onOpenChange }: { isOpen: boolean, onOpenChange: (open: boolean) => void }) {
  const [activeL1, setActiveL1] = useState<any | null>(null);
  const [activeL2, setActiveL2] = useState<any | null>(null);

  const resetNav = () => {
    onOpenChange(false);
    setTimeout(() => {
      setActiveL1(null);
      setActiveL2(null);
    }, 300);
  }

  const handleNavLinkClick = (link: any, depth: number) => {
    if (link.parent) {
      if (link.depth === 2) {
        setActiveL1(null);
      } else if (link.depth === 3) {
        setActiveL2(null);
      }
      return;
    }

    if (depth === 1) {
      if (link.sublinks) {
        setActiveL1({ ...link, parentTitle: 'Main Menu' });
        setActiveL2(null);
      } else {
        resetNav();
      }
    } else if (depth === 2) {
      if (link.sublinks) {
        setActiveL2({ ...link, parentTitle: activeL1?.title });
      } else {
        resetNav();
      }
    } else {
      resetNav();
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="top" className="w-full h-full bg-[#292c2f] p-0 text-white overflow-hidden border-0">
        <div className="absolute top-0 left-0 right-0 h-[90px] flex justify-between items-center px-6 z-10">
          <Link href="/" onClick={resetNav} className="inline-block relative">
            <Logo theme="dark" className="h-12 w-[190px]" />
          </Link>
          <SheetClose asChild>
            <Button variant="ghost" size="icon">
              <X className="h-6 w-6 text-white" />
            </Button>
          </SheetClose>
        </div>

        <div className="h-full flex w-full">
          <div className="h-full md:w-[25%] lg:w-[22%] shrink-0 md:border-r border-gray-700 hidden md:block">
            <NavColumn links={navLinks} onLinkClick={handleNavLinkClick} activeItem={activeL1} depth={1} />
          </div>
          <div className={cn("h-full md:w-[35%] lg:w-[32%] shrink-0 md:border-r border-gray-700 absolute md:relative inset-0 bg-[#292c2f] transition-transform duration-300 ease-in-out", activeL1 ? "translate-x-0" : "translate-x-full", "md:translate-x-0")}>
             <div className="md:hidden">
              <NavColumn links={navLinks} onLinkClick={handleNavLinkClick} activeItem={activeL1} depth={1}/>
             </div>
             <div className="hidden md:block">
              {activeL1?.sublinks && <NavColumn links={activeL1.sublinks} onLinkClick={handleNavLinkClick} parentItem={activeL1} activeItem={activeL2} depth={2} />}
             </div>
          </div>
           <div className={cn("h-full grow absolute md:relative inset-0 bg-[#292c2f] transition-transform duration-300 ease-in-out", activeL2 ? "translate-x-0" : "translate-x-full", "md:translate-x-0")}>
            <div className="md:hidden">
              {activeL1?.sublinks && <NavColumn links={activeL1.sublinks} onLinkClick={handleNavLinkClick} parentItem={activeL1} activeItem={activeL2} depth={2} />}
            </div>
            <div className="hidden md:block">
              {activeL2?.sublinks && <NavColumn links={activeL2.sublinks} onLinkClick={handleNavLinkClick} parentItem={activeL2} activeItem={null} depth={3} />}
            </div>
          </div>
          <div className={cn("h-full grow absolute md:relative inset-0 bg-[#292c2f] transition-transform duration-300 ease-in-out", !activeL1 && !activeL2 ? "translate-x-0" : "translate-x-full", "md:hidden")}>
             <NavColumn links={navLinks} onLinkClick={handleNavLinkClick} activeItem={activeL1} depth={1}/>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
