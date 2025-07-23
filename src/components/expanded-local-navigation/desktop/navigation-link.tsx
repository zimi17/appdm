import React, { FC } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "../../primitives/link/link";
import { NavigationLink as NavigationLinkType } from "../../local-navigation/local-navigation-item"; // Corrected import path

interface NavigationLinkProps {
  link: NavigationLinkType;
}

export const NavigationLink: FC<NavigationLinkProps> = ({
  link
}) => {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link asChild>
        <Link href={link.url || "#"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
          {link.title}
        </Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};