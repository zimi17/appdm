import * as RadixAccordion from "@radix-ui/react-accordion";
import { NavigationLink } from "../../../local-navigation/local-navigation";
import { FC } from "react";
import { ExpandedMobileLink } from "../common/expanded-mobile-link";

interface ExpandedMobileHorizontalContent {
  links: Array<NavigationLink>;
}
export const ExpandedMobileHorizontalContent: FC<
  ExpandedMobileHorizontalContent
> = ({ links }) => {
  return (
    <RadixAccordion.Content className="hbs-local-navigation__accordion-submenu hbs-local-navigation__accordion-submenu--secondary-submenu">
      <ul>
        {links.map((link) => (
          <ExpandedMobileLink key={link.title} {...link} />
        ))}
      </ul>
    </RadixAccordion.Content>
  );
};
