import * as RadixAccordion from "@radix-ui/react-accordion";
import { Icon } from "../../icons/icon";
import { FC } from "react";

interface ExpandedMobileHorizontalHeaderProps {
  title: string;
  itemIndex: string;
  submenuAccordionValue: Array<string> | undefined;
}

export const ExpandedMobileHorizontalHeader: FC<
  ExpandedMobileHorizontalHeaderProps
> = ({ title, itemIndex, submenuAccordionValue }) => {
  return (
    <RadixAccordion.Header asChild>
      <div>
        <RadixAccordion.Trigger className="hbs-local-navigation__accordion-item-trigger hbs-local-navigation__accordion-item-trigger--secondary-submenu">
          <span className="hbs-local-navigation__accordion-item-trigger-label">
            {title}
          </span>
          <span className="hbs-local-navigation__accordion-item-trigger-icon">
            <Icon
              name={
                submenuAccordionValue?.includes(itemIndex) ? "minus" : "plus"
              }
            />
          </span>
        </RadixAccordion.Trigger>
      </div>
    </RadixAccordion.Header>
  );
};
