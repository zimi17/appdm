import { filterUndefined } from "design-system/utils/filter-undefined";
import { FC } from "react";
import {
  ExpandedLocalNavigationItemProps,
  ExpandedNavigationLinkWithSubItems,
} from "../../local/expanded-local-navigation";
import { ExpandedMobileLink } from "../common/expanded-mobile-link";

interface VerticalLayoutProps {
  item: ExpandedLocalNavigationItemProps;
}

export const ExpandedMobileVertical: FC<VerticalLayoutProps> = ({ item }) => {
  const { pageGroups, singleTopLink } = item;

  const menuItems = pageGroups
    ?.map((pageGroup) =>
      pageGroup.pageListOrLinks?.map((pageListOrLink) => {
        if ("url" in pageListOrLink) {
          return (
            <ExpandedMobileLink
              {...pageListOrLink}
              key={pageListOrLink.title}
            />
          );
        }
        const pageList: ExpandedNavigationLinkWithSubItems = pageListOrLink;
        return [
          ...(pageList.topLinks ?? []),
          ...(pageList.menu ?? []),
          ...(pageList.featureLinks ?? []),
        ].map((item, index) => (
          <ExpandedMobileLink {...item} key={item.title + index} />
        ));
      }),
    )
    .flat(2)
    .filter(filterUndefined);

  return (
    <>
      {singleTopLink?.title && singleTopLink.href && (
        <ExpandedMobileLink
          title={singleTopLink.title}
          url={singleTopLink.href}
          key={singleTopLink.title}
        />
      )}
      {menuItems}
    </>
  );
};
