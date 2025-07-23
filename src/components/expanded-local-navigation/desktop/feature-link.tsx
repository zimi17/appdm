import React, { FC } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "../../primitives/link/link";
import { MediaAsset, MediaAssetProps } from "../../primitives/media-asset/media-asset";
import { NavigationLink } from "../../local-navigation/local-navigation-item"; // Re-using NavigationLink from local-navigation

interface FeatureLinkProps extends NavigationLink {
  mediaAsset?: MediaAssetProps;
  featureOptions?: {
    featureCard?: boolean;
    featureMedia?: boolean;
    featureDescription?: boolean;
  };
}

export const FeatureLink: FC<FeatureLinkProps> = ({
  title,
  description,
  url,
  featureOptions,
  mediaAsset,
}) => {
  if (!url) return null;

  const className = "expanded-navigation-feature-item"; // Base class for styling

  const { featureCard, featureDescription, featureMedia } =
    featureOptions || {};

  const descriptionComponent =
    featureDescription && description ? (
      <p className={`${className}-description text-sm text-gray-600 dark:text-gray-400`}>{description}</p>
    ) : null;

  if (featureCard) {
    return (
      <NavigationMenu.Item asChild>
        <NavigationMenu.Link asChild>
          <div className={`${className}-card p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md`}>
            <Link href={url} className="block text-lg font-semibold text-blue-600 hover:underline dark:text-blue-400">
              {title}
            </Link>
            {descriptionComponent}
          </div>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    );
  }

  if (featureMedia && mediaAsset) {
    return (
      <NavigationMenu.Item asChild>
        <NavigationMenu.Link asChild>
          <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className={`${className}-media__media w-full h-48 object-cover`}>
              <MediaAsset {...mediaAsset} />
            </div>
            <div className={`${className}-media__content p-4`}>
              <Link href={url} className="block text-lg font-semibold text-blue-600 hover:underline dark:text-blue-400">
                {title}
              </Link>
              {descriptionComponent}
            </div>
          </div>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    );
  }

  return (
    <NavigationMenu.Item asChild>
      <NavigationMenu.Link asChild>
        <>
          <Link href={url} className="block text-lg font-semibold text-gray-800 hover:underline dark:text-white">
            {title}
          </Link>
          {descriptionComponent}
        </>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};