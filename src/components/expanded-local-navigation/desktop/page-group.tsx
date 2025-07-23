import React, { Dispatch, FC, SetStateAction } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { PageListOrLink, PageListOrLinkProps } from "./page-list-or-link";

// Placeholder for ExpandedNavigationSubMenuProps
export interface ExpandedNavigationSubMenuProps {
  title?: string;
  pageListOrLinks?: PageListOrLinkProps["pageListOrLink"][];
}

export interface PageGroupProps {
  pageGroup: ExpandedNavigationSubMenuProps;
  layout: "horizontal" | "vertical";
  setTabOpen: Dispatch<SetStateAction<string>>;
  tabOpen: string;
}

export const PageGroup: FC<PageGroupProps> = ({
  setTabOpen,
  tabOpen,
  pageGroup,
  layout,
}) => {
  const { title, pageListOrLinks } = pageGroup;
  return (
    <>
      {pageListOrLinks && (
        <NavigationMenu.List asChild>
          <div className="p-2">
            {title && (
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {title}
              </div>
            )}
            <ul>
              {pageListOrLinks.map((pageListOrLink, k) => (
                <PageListOrLink
                  layout={layout}
                  pageListOrLink={pageListOrLink}
                  tab={k}
                  key={k}
                  setTabOpen={setTabOpen}
                  tabOpen={tabOpen}
                />
              ))}
            </ul>
          </div>
        </NavigationMenu.List>
      )}
    </>
  );
};
