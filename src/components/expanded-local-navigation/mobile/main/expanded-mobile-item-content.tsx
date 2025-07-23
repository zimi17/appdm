import * as RadixAccordion from "@radix-ui/react-accordion";
import { FC } from "react";
import { ExpandedLocalNavigationItemProps } from "../../local/expanded-local-navigation";
import { ExpandedMobileHorizontal } from "../horizontal/expanded-mobile-horizontal";
import { ExpandedMobileVertical } from "../vertical/expanded-mobile-vertical";

interface AccordionContentProps {
  item: ExpandedLocalNavigationItemProps;
}
export const ExpandedMobileItemContent: FC<AccordionContentProps> = ({
  item,
}) => {
  return (
    <RadixAccordion.Content
      className="hbs-local-navigation__accordion-submenu"
      asChild
    >
      <div>
        <ul>
          {item.layoutType === "horizontal" ? (
            <ExpandedMobileHorizontal item={item} />
          ) : (
            <ExpandedMobileVertical item={item} />
          )}
        </ul>
      </div>
    </RadixAccordion.Content>
  );
};
