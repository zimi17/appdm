import React, { FC, useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link, LinkProps } from "../../primitives/link/link";
import { ExpandedNavigationCTA } from "./expanded-navigation-cta";
import { PageGroup, PageGroupProps } from "./page-group";

interface HorizontalLayoutProps {
  pageGroups: PageGroupProps["pageGroup"][];
  cta?: {
    href?: string;
    children?: React.ReactNode;
  };
  singleTopLink?: LinkProps;
}

export const HorizontalLayout: FC<HorizontalLayoutProps> = ({
  pageGroups,
  cta,
  singleTopLink,
}) => {
  const [tabOpen, setTabOpen] = useState("");

  return (
    <div
      data-theme="white"
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
    >
      <NavigationMenu.Sub
        value={tabOpen}
        onValueChange={setTabOpen}
      >
        <div className="flex">
          <div className="flex-1">
            {singleTopLink?.href && singleTopLink?.children && (
              <div className="mb-4">
                <Link
                  href={singleTopLink.href}
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  {singleTopLink.children}
                </Link>
              </div>
            )}
            {pageGroups?.map((pageGroup, j) => (
              <PageGroup
                key={j}
                pageGroup={pageGroup}
                setTabOpen={setTabOpen}
                tabOpen={tabOpen}
                layout="horizontal"
              />
            ))}
          </div>
          {cta && <ExpandedNavigationCTA layout="horizontal" {...cta} />}
        </div>
        <NavigationMenu.Viewport className="relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] overflow-hidden rounded-md bg-white dark:bg-gray-800 shadow-lg transition-[width,height] duration-300" />
      </NavigationMenu.Sub>
    </div>
  );
};