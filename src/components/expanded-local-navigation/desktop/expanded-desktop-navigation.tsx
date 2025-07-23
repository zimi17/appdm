import React, { Fragment, useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { LuChevronDown } from "react-icons/lu";
import { LinkProps } from "../../primitives/link/link";
import { PageGroupProps } from "./page-group";

// Updated interfaces for better type safety
interface ExpandedNavigationItem {
  title: string;
  layoutType: "horizontal" | "vertical";
  pageGroups: PageGroupProps["pageGroup"][];
  cta?: {
    href?: string;
    children?: React.ReactNode;
  };
  singleTopLink?: LinkProps;
}

interface ExpandedLocalNavigationProps {
  expandedNavigationItems?: ExpandedNavigationItem[];
}

interface HorizontalLayoutProps {
  singleTopLink?: LinkProps;
  pageGroups?: PageGroupProps["pageGroup"][];
  cta?: {
    href?: string;
    children?: React.ReactNode;
  };
}

interface VerticalLayoutProps {
  singleTopLink?: LinkProps;
  pageGroups?: PageGroupProps["pageGroup"][];
  cta?: {
    href?: string;
    children?: React.ReactNode;
  };
}

// Placeholder components
const HorizontalLayout: React.FC<HorizontalLayoutProps> = () => {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-700">
      Horizontal Layout Content
    </div>
  );
};

const VerticalLayout: React.FC<VerticalLayoutProps> = () => {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-700">
      Vertical Layout Content
    </div>
  );
};

export function ExpandedDesktopNavigation({
  expandedNavigationItems,
}: ExpandedLocalNavigationProps) {
  const [open, setOpen] = useState("");
  const items = expandedNavigationItems || [];

  return (
    <NavigationMenu.Root
      value={open}
      onValueChange={setOpen}
      className="relative z-10"
    >
      <NavigationMenu.List className="flex space-x-4">
        {items.map(
          ({ title, layoutType, pageGroups, cta, singleTopLink }, index) => (
            <Fragment key={title + index}>
              <NavigationMenu.Item asChild>
                <li className="group relative">
                  <NavigationMenu.Trigger
                    asChild
                    onFocus={() => setOpen("")} // Close on focus out
                  >
                    <button className="flex items-center text-gray-700 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 px-3 py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                      {title}
                      <LuChevronDown
                        className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
                        aria-hidden
                      />
                    </button>
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="absolute top-full left-0 w-auto bg-white dark:bg-gray-800 shadow-lg rounded-md p-4 data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut">
                    {pageGroups &&
                      pageGroups.length > 0 &&
                      (layoutType === "horizontal" ? (
                        <HorizontalLayout
                          singleTopLink={singleTopLink}
                          pageGroups={pageGroups}
                          cta={cta}
                        />
                      ) : (
                        <VerticalLayout
                          singleTopLink={singleTopLink}
                          pageGroups={pageGroups}
                          cta={cta}
                        />
                      ))}
                  </NavigationMenu.Content>
                </li>
              </NavigationMenu.Item>
            </Fragment>
          ),
        )}
      </NavigationMenu.List>
      <div className="absolute top-full left-0 w-full flex justify-center">
        <NavigationMenu.Viewport className="relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] overflow-hidden rounded-md bg-white dark:bg-gray-800 shadow-lg transition-[width,height] duration-300" />
      </div>
    </NavigationMenu.Root>
  );
}