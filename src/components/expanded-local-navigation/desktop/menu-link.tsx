import React, { FC } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "../../primitives/link/link";
import { NavigationLink } from "../../local-navigation/local-navigation-item"; // Corrected import path

type MenuLinkProps = NavigationLink;

export const MenuLink: FC<MenuLinkProps> = ({
  title,
  url,
}) => {
  return (
    <NavigationMenu.Link asChild key={title}>
      <Link href={url || "#"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
        {title}
      </Link>
    </NavigationMenu.Link>
  );
};