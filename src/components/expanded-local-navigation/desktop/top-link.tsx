import React, { FC } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "../../primitives/link/link";
import { NavigationLink } from "../../local-navigation/local-navigation-item"; // Corrected import path

type TopLinkProps = NavigationLink;

export const TopLink: FC<TopLinkProps> = ({
  url,
  title,
  description,
}) => {
  return (
    <NavigationMenu.Item>
      <div className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
        <div className="font-bold text-gray-800 dark:text-white">
          <Link href={url || "#"}>{title}</Link>
        </div>
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {description}
          </p>
        )}
      </div>
    </NavigationMenu.Item>
  );
};
