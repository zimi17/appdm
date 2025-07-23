import * as RadixAccordion from "@radix-ui/react-accordion";
import * as Collapsible from "@radix-ui/react-collapsible";
import { FC, useState } from "react";
import { ExpandedLocalNavigationProps } from "../../local/expanded-local-navigation";
import { ExpandedMobileCTA } from "./expanded-mobile-cta";
import { ExpandedMobileItem } from "./expanded-mobile-item";

type ContentProps = Pick<
  ExpandedLocalNavigationProps,
  "expandedNavigationItems" | "mobileCta" | "logInOut"
>;
export const ExpandedMobileMainContent: FC<ContentProps> = ({
  expandedNavigationItems,
  mobileCta,
  logInOut,
}) => {
  const [accordionValue, setRadixAccordionValue] = useState<Array<string>>();

  const onRadixAccordionValueChange = (newValue: Array<string>) => {
    setRadixAccordionValue(newValue);
  };

  return (
    <Collapsible.CollapsibleContent className="hbs-local-navigation__accordion-menu">
      <RadixAccordion.Root
        type="multiple"
        value={accordionValue}
        onValueChange={onRadixAccordionValueChange}
      >
        {expandedNavigationItems
          ?.filter((item) => item.pageGroups?.length)
          ?.map((item, index) => (
            <ExpandedMobileItem
              accordionValue={accordionValue}
              key={item.title + index}
              itemIndex={`accordion-item-${index + 1}`}
              item={item}
            />
          ))}
      </RadixAccordion.Root>
      {mobileCta && <ExpandedMobileCTA {...mobileCta} />}
      {logInOut?.children && <ExpandedMobileCTA {...logInOut} />}
    </Collapsible.CollapsibleContent>
  );
};
