import { FC } from "react";
import { ExpandedLocalNavigationItemProps } from "../../local/expanded-local-navigation";

import * as RadixAccordion from "@radix-ui/react-accordion";
import { ExpandedMobileItemContent } from "./expanded-mobile-item-content";
import { ExpandedMobileItemHeader } from "./expanded-mobile-item-header";

interface MainMenuItemProps {
  item: ExpandedLocalNavigationItemProps;
  itemIndex: string;
  accordionValue: Array<string> | undefined;
}

export const ExpandedMobileItem: FC<MainMenuItemProps> = ({
  itemIndex,
  accordionValue,
  item,
}) => {
  return (
    <RadixAccordion.Item
      className="hbs-local-navigation__accordion-item"
      value={itemIndex}
    >
      <ExpandedMobileItemHeader
        title={item.title}
        accordionValue={accordionValue}
        itemIndex={itemIndex}
      />
      <ExpandedMobileItemContent item={item} />
    </RadixAccordion.Item>
  );
};
