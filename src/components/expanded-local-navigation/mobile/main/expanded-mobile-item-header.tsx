import * as RadixAccordion from "@radix-ui/react-accordion";
import { Icon } from "../../icons/icon";
import { FC } from "react";

interface AccordionHeaderProps {
  accordionValue: Array<string> | undefined;
  itemIndex: string;
  title: string;
}

export const ExpandedMobileItemHeader: FC<AccordionHeaderProps> = ({
  accordionValue,
  itemIndex,
  title,
}) => {
  return (
    <RadixAccordion.Header
      className="hbs-local-navigation__accordion-item-header"
      asChild
    >
      <div>
        <RadixAccordion.Trigger className="hbs-local-navigation__accordion-item-trigger">
          <span className="hbs-local-navigation__accordion-item-trigger-label">
            {title}
          </span>
          <span className="hbs-local-navigation__accordion-item-trigger-icon">
            <Icon
              name={accordionValue?.includes(itemIndex) ? "minus" : "plus"}
            />
          </span>
        </RadixAccordion.Trigger>
      </div>
    </RadixAccordion.Header>
  );
};
