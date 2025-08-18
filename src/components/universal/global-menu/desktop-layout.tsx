
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MenuColumn } from "./menu-column";
import { navLinks } from "@/lib/data/nav";

export const DesktopLayout = ({ activeL1, activeL2, handleNavLinkClick }: any) => {
  const l2Active = !!activeL1;
  const l3Active = !!activeL2;

  return (
    <div className="h-full flex w-full relative overflow-hidden">
        <motion.div
            className={cn(
                "h-full shrink-0 transition-transform duration-300 ease-in-out",
                "w-full md:w-1/2 lg:w-[37.5%]", 
                l3Active ? "md:-translate-x-full lg:translate-x-0" : "md:translate-x-0"
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
