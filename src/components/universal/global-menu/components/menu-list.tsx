
"use client";

import { cn } from "@/lib/utils";
import { MenuItem } from "./menu-item";

interface MenuListProps {
    links: any[];
    onLinkClick: (link: any, depth: number) => void;
    activeItem: any;
    depth: number;
    hasBorder?: boolean;
}

export const MenuList = ({ links, onLinkClick, activeItem, depth, hasBorder }: MenuListProps) => {
    return (
        <ol className={cn(hasBorder && "border-t border-gray-700")}>
            {links.map((link) => (
                <MenuItem
                    key={link.title}
                    link={link}
                    onLinkClick={onLinkClick}
                    activeItem={activeItem}
                    depth={depth}
                    hasBorder={hasBorder}
                />
            ))}
        </ol>
    )
}
