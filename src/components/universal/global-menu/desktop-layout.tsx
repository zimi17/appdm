
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
      duration: 0.3, 
      ease: [0.65, 0, 0.35, 1],
      opacity: {
        duration: 0.1, 
        ease: [0.65, 0, 0.35, 1],
      },
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.3,
      ease: [0.65, 0, 0.35, 1],
      opacity: {
        duration: 0.1,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  },
};

export const DesktopLayout = ({ activeL1, activeL2, handleNavLinkClick }: any) => {
  const l2Active = !!activeL1?.sublinks;
  const l3Active = !!(activeL2 && activeL2.sublinks && activeL2.sublinks.length > 0);

  return (
    <div className="h-full w-full relative overflow-hidden flex">
      {/* Level 1 Column */}
      <motion.div
        className={cn(
          "h-full shrink-0 w-full md:w-1/2 lg:w-[37.5%] transition-transform duration-500 ease-menu",
          l2Active && "md:border-r md:border-white/15",
          l3Active ? "md:-translate-x-full lg:translate-x-0" : "translate-x-0"
        )}
      >
        <MenuColumn
          links={navLinks}
          onLinkClick={handleNavLinkClick}
          activeItem={activeL1}
          depth={1}
        />
      </motion.div>

      {/* Level 2 Column */}
      <motion.div
        className={cn(
          "h-full shrink-0 w-full md:w-1/2 lg:w-[31.25%] transition-transform duration-500 ease-menu",
          l3Active && "md:border-r md:border-white/15",
          l3Active ? "md:-translate-x-full lg:translate-x-0" : "md:translate-x-0",
          l2Active ? "flex" : "hidden"
        )}
      >
        <AnimatePresence mode="wait">
          {l2Active && (
            <motion.div
              key={activeL1?.id || activeL1?.title || 'level2'} 
              {...animationProps}
              className="h-full w-full"
            >
              <MenuColumn
                links={activeL1.sublinks || []}
                onLinkClick={handleNavLinkClick}
                parentItem={activeL1}
                activeItem={activeL2}
                depth={2}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Level 3 Column */}
      <motion.div
        className={cn(
          "h-full shrink-0 w-full md:w-1/2 lg:w-[31.25%] transition-transform duration-500 ease-menu",
          "md:absolute md:right-0 md:top-0",
          "lg:relative lg:right-auto lg:top-auto",
          l3Active && "z-10",
          l3Active ? "flex" : "hidden"
        )}
      >
        <AnimatePresence mode="wait">
          {l3Active && (
            <motion.div
              key={activeL2?.id || activeL2?.title || 'level3'}
              {...animationProps}
              className="h-full w-full"
              exit={{
                opacity: 0,
                y: 10,
                transition: {
                  duration: 0.1,
                  ease: [0.65, 0, 0.35, 1],
                  opacity: {
                    duration: 0.1,
                    ease: [0.65, 0, 0.35, 1]
                  }
                }
              }}
            >
              <MenuColumn
                links={activeL2.sublinks || []}
                onLinkClick={handleNavLinkClick}
                parentItem={activeL2}
                activeItem={null}
                depth={3}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
