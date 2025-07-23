import React, { FC, useState } from "react";
import { CtaLinkProps } from "../../primitives/cta-link/cta-link";
import { LinkProps } from "../../primitives/link/link";
import { ExpandedNavigationSubMenuProps } from "../local/expanded-local-navigation";
import { ExpandedNavigationCTA } from "./expanded-navigation-cta";
import { PageListOrLink } from "./page-list-or-link";

interface VerticalLayoutProps {
  pageGroups: Array<ExpandedNavigationSubMenuProps>;
  cta?: CtaLinkProps;
  singleTopLink?: LinkProps;
}

export const VerticalLayout: FC<VerticalLayoutProps> = ({
  pageGroups,
  cta,
  singleTopLink,
}) => {
  const [tabOpen, setTabOpen] = useState("");
  return (
    <div
      data-theme="white"
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col space-y-4"
    >
      {pageGroups.map(({ title, pageListOrLinks }, index) => (
        <div key={index} className="flex flex-col">
          {title && (
            <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {title}
            </div>
          )}

          {pageListOrLinks?.map((pageListOrLink, k) => {
            return (
              <PageListOrLink
                key={k}
                pageListOrLink={pageListOrLink}
                tab={k}
                layout="vertical"
                singleTopLink={k === 0 ? singleTopLink : undefined}
                tabOpen={tabOpen}
                setTabOpen={setTabOpen}
              />
            );
          })}

          {cta && <ExpandedNavigationCTA layout="vertical" {...cta} />}
        </div>
      ))}
    </div>
  );
};