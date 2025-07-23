import * as Collapsible from "@radix-ui/react-collapsible";
import { Link } from "../../../primitives/link/link";
import { FC } from "react";
import { ExpandedLocalNavigationProps } from "../../local/expanded-local-navigation";

type TriggerProps = Pick<
  ExpandedLocalNavigationProps,
  "sectionTitle" | "moreItemsTitle"
> & {
  hasItems?: boolean;
};

export const ExpandedMobileMainTrigger: FC<TriggerProps> = ({
  sectionTitle,
  moreItemsTitle,
  hasItems,
}) => {
  return (
    <div className="hbs-local-navigation__accordion-header">
      {sectionTitle && (
        <div className="hbs-local-navigation__accordion-header-title">
          <Link
            className="hbs-local-navigation__accordion-header-title__link"
            href={sectionTitle.url}
          >
            {sectionTitle.title}
          </Link>
        </div>
      )}
      {hasItems && (
        <Collapsible.Trigger className="hbs-local-navigation__accordion-header-button">
          <span className="hbs-local-navigation__accordion-header-button-label">
            {moreItemsTitle ? moreItemsTitle : "More"}
          </span>
        </Collapsible.Trigger>
      )}
    </div>
  );
};
