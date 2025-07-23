import React, { Dispatch, FC, SetStateAction } from "react";
import { LinkProps } from "../../primitives/link/link";
import { NavigationLink as NavigationLinkType } from "../../local-navigation/local-navigation-item";
import { ExpandedNavigationLinkWithSubItems } from "../local/expanded-local-navigation";
import { NavigationLink } from "./navigation-link";
import { PageListWrapper } from "./page-list-wrapper";

interface PageListOrLinkProps {
  pageListOrLink: NavigationLinkType | ExpandedNavigationLinkWithSubItems;
  tab: number;
  layout: "vertical" | "horizontal";
  singleTopLink?: LinkProps;
  setTabOpen: Dispatch<SetStateAction<string>>;
  tabOpen: string;
}

export const PageListOrLink: FC<PageListOrLinkProps> = ({
  pageListOrLink,
  tab,
  layout,
  singleTopLink,
  setTabOpen,
  tabOpen,
}) => {
  if ("url" in pageListOrLink) {
    return <NavigationLink link={pageListOrLink} />;
  }

  return (
    <PageListWrapper
      tabOpen={tabOpen}
      setTabOpen={setTabOpen}
      pageList={pageListOrLink}
      tab={tab}
      layout={layout}
      singleTopLink={singleTopLink}
    />
  );
};
