
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
                ease: [0.65, 0, 0.35, 1],
            },
        },
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
                delay: 0.4,
            },
        },
    },
};


export const DesktopLayout = ({ activeL1, activeL2, handleNavLinkClick }: any) => {
  const l2Active = !!activeL1;
  const l3Active = !!activeL2;

  return (
    <div className="h-full w-full relative overflow-hidden flex">
      {/* Level 1 Column */}
      <motion.div
        className={cn(
          "h-full shrink-0 w-full md:w-1/2 lg:w-[37.5%]",
          "transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]",
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
          "h-full shrink-0 w-full md:w-1/2 lg:w-[31.25%]",
          "transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]",
          l3Active ? "md:-translate-x-full lg:translate-x-0" : "md:translate-x-0",
          l2Active ? "flex" : "hidden"
        )}
      >
        <AnimatePresence>
          {l2Active && (
            <motion.div
              {...animationProps}
              className="h-full w-full md:border-l md:border-white/15"
            >
              <MenuColumn
                links={activeL1?.sublinks || []}
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
          "h-full shrink-0 w-full md:w-1/2 lg:w-[31.25%]",
          l3Active ? "flex" : "hidden"
        )}
      >
        <AnimatePresence>
          {l3Active && (
            <motion.div
              {...animationProps}
              className="h-full w-full md:border-l md:border-white/15"
            >
              <MenuColumn
                links={activeL2?.sublinks || []}
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

