
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { MenuColumn } from "./menu-column";
import { navLinks } from "@/lib/data/nav";

const l2Variants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
};

const l3Variants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
};


export const DesktopLayout = ({ activeL1, activeL2, handleNavLinkClick }: any) => {
  const l2Active = !!activeL1;
  const l3Active = !!activeL2;

  const animationProps = {
    transition:{
        duration: 0.6,
        ease: [0.65, 0, 0.35, 1],
        opacity: {
        duration: 0.2,
        ease: [0.65, 0, 0.35, 1]
        }
    }
  }

  const exitAnimationProps = {
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


  return (
    <div className="h-full flex w-full relative overflow-hidden">
        <motion.div
            className={cn(
                "h-full shrink-0 transition-transform duration-300 ease-in-out",
                "w-full md:w-1/2 lg:w-[37.5%]", 
                l3Active && "md:-translate-x-full lg:translate-x-0"
            )}
        >
            <MenuColumn
                links={navLinks}
                onLinkClick={handleNavLinkClick}
                activeItem={activeL1}
                depth={1}
            />
        </motion.div>
       
        <motion.div
             className={cn(
                "h-full shrink-0 absolute md:relative inset-0 bg-[#292c2f] transition-transform duration-300 ease-in-out",
                "w-full md:w-1/2 lg:w-[31.25%]",
                l2Active ? "translate-x-0" : "translate-x-full"
            )}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: l2Active ? 1 : 0, y: l2Active ? 0 : -10, ...animationProps }}
            exit={{ opacity: 0, y: -10, ...exitAnimationProps }}
        >
             <div className={cn(!l2Active && "hidden", "w-full h-full")}>
                {activeL1?.sublinks && (
                    <MenuColumn
                        links={activeL1.sublinks}
                        onLinkClick={handleNavLinkClick}
                        parentItem={activeL1}
                        activeItem={activeL2}
                        depth={2}
                    />
                )}
            </div>
        </motion.div>
        
        <motion.div
            className={cn(
                "h-full shrink-0 absolute md:relative inset-0 bg-[#292c2f] transition-transform duration-300 ease-in-out",
                "w-full md:w-1/2 lg:w-[31.25%]",
                l3Active ? "translate-x-0" : "translate-x-full"
            )}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: l3Active ? 1 : 0, y: l3Active ? 0 : -10, ...animationProps }}
            exit={{ opacity: 0, y: -10, ...exitAnimationProps}}
        >
            <div className={cn(!l3Active && "hidden", "w-full h-full")}>
             {activeL2?.sublinks && (
                 <MenuColumn
                    links={activeL2.sublinks}
                    onLinkClick={handleNavLinkClick}
                    parentItem={activeL2}
                    activeItem={null}
                    depth={3}
                />
             )}
             </div>
        </motion.div>
    </div>
  );
};
