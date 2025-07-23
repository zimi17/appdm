import "design-system/components/universal/local-navigation/local-navigation.scss";

import * as Collapsible from "@radix-ui/react-collapsible";
import { ExpandedLocalNavigationProps } from "../local/expanded-local-navigation";
import { ExpandedMobileMainContent } from "./main/expanded-mobile-main-content";
import { ExpandedMobileMainTrigger } from "./main/expanded-mobile-main-trigger";

export const ExpandedMobileNavigation = ({
  expandedNavigationItems,
  isHomepage,
  sectionTitle,
  moreItemsTitle,
  mobileCta,
  logInOut,
}: ExpandedLocalNavigationProps) => {
  const dataRegion = `uc__local-navigation__${
    isHomepage ? "homepage" : "sitewide"
  }`;

  if (isHomepage || !sectionTitle) return null;

  const items = expandedNavigationItems || [];

  return (
    <Collapsible.Root
      className="hbs-local-navigation--mobile"
      data-region={dataRegion}
    >
      <ExpandedMobileMainTrigger
        hasItems={items.length > 0}
        moreItemsTitle={moreItemsTitle}
        sectionTitle={sectionTitle}
      />
      <ExpandedMobileMainContent
        expandedNavigationItems={items}
        mobileCta={mobileCta}
        logInOut={logInOut}
      />
    </Collapsible.Root>
  );
};
