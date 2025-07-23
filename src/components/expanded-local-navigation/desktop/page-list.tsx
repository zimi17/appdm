import React, { FC } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { LinkProps } from "../../primitives/link/link";
import { ExpandedNavigationLinkWithSubItems } from "../local/expanded-local-navigation";
import { FeatureLink } from "./feature-link";
import { MenuLink } from "./menu-link";
import { TopLink } from "./top-link";

interface PageListProps {
  pageList: ExpandedNavigationLinkWithSubItems;
  layout: "vertical" | "horizontal";
  singleTopLink?: LinkProps;
}

export type LinkType = "topLink" | "link" | "featureLink";

export const PageList: FC<PageListProps> = ({
  pageList,
  layout,
  singleTopLink,
}) => {
  const {
    featureLinksTitle,
    featureCard,
    featureDescription,
    featureLinks,
    featureMedia,
    menu,
    topLinks,
  } = pageList;

  const hasTopLinks = !!topLinks?.length;
  const hasMenu = !!menu?.length;
  const hasFeatureLinks = !!featureLinks?.length;

  const featureOptions = {
    featureCard,
    featureDescription,
    featureMedia,
  };

  return (
    <div className={`flex ${layout === "horizontal" ? "flex-row space-x-8" : "flex-col space-y-4"} p-4`}>
      {singleTopLink?.href && singleTopLink.title && (
        <NavigationMenu.Item asChild>
          <div className={`expanded-navigation-top-links--${layout}`}>
            <MenuLink title={singleTopLink.title} url={singleTopLink.href} />
          </div>
        </NavigationMenu.Item>
      )}

      {hasTopLinks && (
        <NavigationMenu.Item asChild>
          <div className={`expanded-navigation-top-links--${layout} flex flex-col`}>
            {topLinks?.map((topLink, index) => (
              <TopLink key={topLink.title + index} {...topLink} />
            ))}
          </div>
        </NavigationMenu.Item>
      )}

      {hasMenu && (
        <NavigationMenu.List asChild>
          <ul className={`expanded-navigation-menu-${layout} flex flex-col space-y-1`}>
            {menu?.map((menuLink, index) => (
              <MenuLink {...menuLink} key={menuLink.title + index} />
            ))}
          </ul>
        </NavigationMenu.List>
      )}

      {hasFeatureLinks && (
        <div className="expanded-navigation-feature-wrapper">
          <div
            className={`flex ${layout === "horizontal" ? "flex-row" : "flex-col"} ${featureCard ? "has-card" : ""}`}
          >
            {featureLinksTitle && (
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {featureLinksTitle}
              </div>
            )}
            <div className="expanded-navigation-feature-items grid grid-cols-1 md:grid-cols-2 gap-4">
              {featureLinks?.map((featureLink, index) => {
                return (
                  <FeatureLink
                    {...featureLink}
                    key={featureLink.title + index}
                    featureOptions={featureOptions}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
