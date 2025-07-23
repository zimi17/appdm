import * as RadixAccordion from "@radix-ui/react-accordion";
import { NavigationLink } from "../../../local-navigation/local-navigation";
import { FC, useState } from "react";
import { ExpandedMobileHorizontalContent } from "./expanded-mobile-horizontal-content";
import { ExpandedMobileHorizontalHeader } from "./expanded-mobile-horizontal-header";

interface ExpandedMobileHorizontalPageListProps {
  title: string;
  links: Array<NavigationLink>;
  itemIndex: string;
}
export const ExpandedMobileHorizontalPageList: FC<
  ExpandedMobileHorizontalPageListProps
> = ({ links, title, itemIndex }) => {
  const [submenuAccordionValue, setSubmenuRadixAccordionValue] =
    useState<Array<string>>();

  const onSubmenuRadixAccordionValueChangeSubmenu = (
    newValue: Array<string>,
  ) => {
    setSubmenuRadixAccordionValue(newValue);
  };

  return (
    <RadixAccordion.Root
      type="multiple"
      onValueChange={onSubmenuRadixAccordionValueChangeSubmenu}
    >
      <RadixAccordion.Item value={itemIndex}>
        <ExpandedMobileHorizontalHeader
          itemIndex={itemIndex}
          submenuAccordionValue={submenuAccordionValue}
          title={title}
        />
        <ExpandedMobileHorizontalContent links={links} />
      </RadixAccordion.Item>
    </RadixAccordion.Root>
  );
};
