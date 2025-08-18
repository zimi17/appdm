
"use client";

import { motion, AnimatePresence } from "framer-motion";
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

export const MobileLayout = ({ activeL1, activeL2, handleNavLinkClick }: any) => (
    <div className="h-full w-full relative overflow-hidden">
        <motion.div
            key="l1"
            className="w-full h-full absolute inset-0 bg-[#292c2f]"
            initial={{x: 0}}
            animate={{x: activeL1 ? '-100%' : '0'}}
            transition={{duration: 0.3, ease: 'easeInOut'}}
        >
             <MenuColumn
                links={navLinks}
                onLinkClick={handleNavLinkClick}
                activeItem={activeL1}
                depth={1}
            />
        </motion.div>
        
        <AnimatePresence>
            {activeL1 && (
                <motion.div
                    key="l2"
                    className="w-full h-full absolute inset-0 bg-[#292c2f]"
                    initial={{x: '100%'}}
                    animate={{x: activeL2 ? '-100%' : '0'}}
                    exit={{x: '100%'}}
                    transition={{duration: 0.3, ease: 'easeInOut'}}
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

        <AnimatePresence>
            {activeL2 && (
                 <motion.div
                    key="l3"
                    className="w-full h-full absolute inset-0 bg-[#292c2f]"
                    initial={{x: '100%'}}
                    animate={{x: 0}}
                    exit={{x: '100%'}}
                    transition={{duration: 0.3, ease: 'easeInOut'}}
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
    </div>
);
