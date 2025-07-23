import { NavigationLink } from "../../../local-navigation/local-navigation";
import { FC } from "react";
import {
  ExpandedNavigationLinkWithSubItems,
  ExpandedNavigationSubMenuProps,
} from "../../local/expanded-local-navigation";
import { ExpandedMobileHorizontalPageList } from "./expanded-mobile-horizontal-page-list";

interface ExpandedMobileHorizontalPageGroupProps {
  pageGroup: ExpandedNavigationSubMenuProps;
}
export const ExpandedMobileHorizontalPageGroup: FC<
  ExpandedMobileHorizontalPageGroupProps
> = ({ pageGroup }) => {
  const areAllLinks = pageGroup.pageListOrLinks?.every((item) => "url" in item);

  if (areAllLinks) {
    const { pageListOrLinks, title } = pageGroup;

    // Type assertion because we already made sure they are all links above
    const allLinks = pageListOrLinks as Array<NavigationLink>;
    return (
      allLinks &&
      title && (
        <ExpandedMobileHorizontalPageList
          key={title}
          title={title}
          links={allLinks}
          itemIndex={title}
        />
      )
    );
  }

  interface LinkList {
    title?: string;
    links?: Array<NavigationLink>;
  }

  const linkList: Array<LinkList> =
    pageGroup.pageListOrLinks?.map((listOrLinks) => {
      if ("url" in listOrLinks && listOrLinks.title) {
        const link = listOrLinks;
        return {
          links: [
            {
              title: link.title,
              url: link.url,
            },
          ],
        };
      }

      const list = listOrLinks as ExpandedNavigationLinkWithSubItems;

      return {
        title: list.title,
        links: [...(list?.topLinks || []), ...(list?.menu || [])],
      };
    }) || [];

  return linkList.map(({ links, title }) => {
    if (!links || !title) return null;
    return (
      <ExpandedMobileHorizontalPageList
        key={title}
        title={title}
        links={links}
        itemIndex={title}
      />
    );
  });
};
