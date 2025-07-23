import React, { Dispatch, FC, SetStateAction } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { LinkProps } from "../../primitives/link/link";
import { ExpandedNavigationLinkWithSubItems } from "../local/expanded-local-navigation";
import { PageList } from "./page-list";
import { LuChevronDown } from 'react-icons/lu'; // Import caret icon

interface PageListWrapperProps {
  pageList: ExpandedNavigationLinkWithSubItems;
  tab: number;
  layout: "vertical" | "horizontal";
  singleTopLink?: LinkProps;
  setTabOpen: Dispatch<SetStateAction<string>>;
  tabOpen: string;
}

export const PageListWrapper: FC<PageListWrapperProps> = ({
  layout,
  pageList,
  tab,
  singleTopLink,
  setTabOpen,
  tabOpen,
}) => {
  if (layout === "horizontal") {
    const { title } = pageList;
    const value = `tab-${tab}`;
    return (
      <NavigationMenu.Item key={tab} value={value}>
        {title && (
          <NavigationMenu.Trigger
            onPointerMove={(event) => event.preventDefault()}
            onPointerLeave={(event) => event.preventDefault()}
            value={title}
            onClick={() =>
              tabOpen === value ? setTabOpen("") : setTabOpen(value)
            }
            /*
              When the keyboard navigation leaves the content and
              goes to the next menu, the dropdown closes.
              This is "onFocus" and not "onBlur" because "onBlur"
              triggers when the focus leaves the menu button to the component
            */
            onFocus={() => setTabOpen("")}
            asChild
          >
            <button className="flex items-center text-gray-700 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 px-3 py-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              {title}
              <LuChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" aria-hidden />
            </button>
          </NavigationMenu.Trigger>
        )}

        <NavigationMenu.Content
          className="absolute top-full left-0 w-auto bg-white dark:bg-gray-800 shadow-lg rounded-md p-4 data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut"
        >
          <PageList pageList={pageList} layout={layout} />
        </NavigationMenu.Content>
      </NavigationMenu.Item>
    );
  }

  return (
    <PageList
      pageList={pageList}
      layout={layout}
      singleTopLink={singleTopLink}
    />
  );
};
