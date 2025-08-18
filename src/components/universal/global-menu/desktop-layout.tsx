
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { MenuColumn } from "./menu-column";
import { navLinks } from "@/lib/data/nav";

const animationProps = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.65, 0, 0.35, 1],
        opacity: {
          duration: 0.2,
          ease: [0.65, 0, 0.35, 1]
        }
      }
    },
    exit: { 
      opacity: 0, 
      y: 10,
      transition: {
        duration: 0.6,
        ease: [0.65, 0, 0.35, 1],
        opacity: {
          duration: 0.2,
          ease: [0.65, 0, 0.35, 1],
          delay: 0.4
        }
      }
    }
}


export const DesktopLayout = ({ activeL1, activeL2, handleNavLinkClick }: any) => {
  const l2Active = !!activeL1;
  const l3Active = !!activeL2;

  return (
    <div className="h-full w-full relative overflow-hidden">
        <motion.div 
            className={cn(
                "h-full flex w-[300%] md:w-[200%] lg:w-full",
                "transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]",
                l3Active ? "md:-translate-x-1/2 lg:translate-x-0" : "translate-x-0"
            )}
        >
            {/* Level 1 Column */}
            <div
                className={cn(
                "h-full shrink-0",
                "w-1/3 md:w-1/2 lg:w-[37.5%]",
                )}
            >
                <MenuColumn
                links={navLinks}
                onLinkClick={handleNavLinkClick}
                activeItem={activeL1}
                depth={1}
                />
            </div>

            {/* Level 2 Column */}
            <div
                className={cn(
                    "h-full shrink-0 bg-[#292c2f]",
                    "w-1/3 md:w-1/2 lg:w-[31.25%]",
                    "md:border-l md:border-white/15",
                    l2Active ? "flex" : "hidden"
                )}
            >
                <AnimatePresence>
                {l2Active && (
                    <motion.div className="h-full w-full" {...animationProps}>
                        <MenuColumn
                            links={activeL1.sublinks}
                            onLinkClick={handleNavLinkClick}
                            parentItem={activeL1}
                            activeItem={activeL2}
                            depth={2}
                        />
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
            
            {/* Level 3 Column */}
            <div
                className={cn(
                    "h-full shrink-0 bg-[#292c2f]",
                    "w-1/3 md:w-1/2 lg:w-[31.25%]",
                    "md:border-l md:border-white/15",
                     l3Active ? "flex" : "hidden"
                )}
            >
                 <AnimatePresence>
                {l3Active && (
                    <motion.div className="h-full w-full" {...animationProps}>
                        <MenuColumn
                            links={activeL2.sublinks}
                            onLinkClick={handleNavLinkClick}
                            parentItem={activeL2}
                            activeItem={null}
                            depth={3}
                        />
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
        </motion.div>
    </div>
  );
};
