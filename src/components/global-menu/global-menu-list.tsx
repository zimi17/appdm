import React from "react";
import { GlobalMenuItem, GlobalMenuNavItem } from "./global-menu-item"; // Updated import

export interface GlobalMenuListProps {
  items: GlobalMenuNavItem[];
  isVisible?: boolean; // Changed to optional
}

export const GlobalMenuList: React.FC<GlobalMenuListProps> = ({
  items,
  isVisible,
}) => {
  if (!items || items.length === 0) return null;

  return (
    <ul className="w-full py-2">
      {items.map((item, i) => (
        <GlobalMenuItem
          key={item.id || i} // Use item.id if available, otherwise index
          item={item}
          index={i} // Pass index for transition delay
          level={1} // Top level items
          isVisible={isVisible}
        />
      ))}
    </ul>
  );
};
