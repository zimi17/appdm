
"use client";

import { MenuHeader } from "./components/menu-header";
import { MenuList } from "./components/menu-list";
import { cn } from "@/lib/utils";

export const MenuColumn = ({
  links,
  onLinkClick,
  parentItem,
  activeItem,
  depth = 1,
  className,
}: {
  links: any[];
  onLinkClick: (link: any, depth: number) => void;
  parentItem?: any;
  activeItem?: any;
  depth?: number;
  className?: string;
}) => {
  const handleBackClick = () => {
    onLinkClick({ parent: true, depth }, depth);
  };

  return (
    <div
      className={cn(
        "h-full overflow-y-auto w-full pt-[90px] px-[1vw] pb-24 [-webkit-overflow-scrolling:touch] after:content-[''] after:block after:h-[50px] after:w-full min-[1260px]:after:h-[88px] md:pt-[137px] min-[1260px]:pt-[146px] nav-scrollbar z-[111]",
        className
      )}
    >
      {depth > 1 && parentItem && (
        <MenuHeader parentItem={parentItem} onBackClick={handleBackClick} />
      )}

      <MenuList
        links={links}
        onLinkClick={onLinkClick}
        activeItem={activeItem}
        depth={depth}
      />
    </div>
  );
};
