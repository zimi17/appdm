import { FC } from "react";
import { ExpandedLocalNavigationItemProps } from "../../local/expanded-local-navigation";
import { ExpandedMobileLink } from "../common/expanded-mobile-link";
import { ExpandedMobileHorizontalPageGroup } from "../horizontal/expanded-mobile-horizontal-page-group";

interface HorizontalLayoutProps {
  item: ExpandedLocalNavigationItemProps;
}

export const ExpandedMobileHorizontal: FC<HorizontalLayoutProps> = ({
  item,
}) => {
  const { title, singleTopLink } = item;

  return (
    <>
      {singleTopLink?.href && (
        <>
          <ExpandedMobileLink
            title={singleTopLink?.title || title}
            url={singleTopLink.href}
            key={singleTopLink?.title || title}
          />
        </>
      )}
      {item.pageGroups?.map((pageGroup) => (
        <ExpandedMobileHorizontalPageGroup
          key={pageGroup.title}
          pageGroup={pageGroup}
        />
      ))}
    </>
  );
};
