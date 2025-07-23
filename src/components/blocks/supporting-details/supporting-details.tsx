import "./supporting-details.scss";
import { ReactNode } from "react";
import cn from "clsx";
import {
  MediaAsset,
  MediaAssetProps,
} from "design-system/components/primitives/media-asset/media-asset";
import { Alignment, EditAttributes } from "design-system/types/types";

export interface SupportingDetailsListItem {
  title?: ReactNode;
  subtitle?: ReactNode;

  editAttributes?: {
    title?: EditAttributes;
    subtitle?: EditAttributes;
  };
}

export interface SupportingDetailsProps {
  items?: Array<SupportingDetailsListItem>;
  mediaAsset?: MediaAssetProps;
  align?: Alignment;
}

/**
 * ## See it in use on...
 * - The [homepage](/story/example-pages-homepage--homepage)
 *
 * - **`id: CB-016-000-00`**
 * - **`data-region: cb__supporting-details`**
 */
export function SupportingDetails({
  items,
  mediaAsset,
  align = "full",
}: SupportingDetailsProps) {
  if (!Array.isArray(items)) items = [];

  const wrapperClass = cn(
    align && `hbs-global-align-${align}`,
    "hbs-supporting-details",
  );

  return (
    <div className={wrapperClass} data-region="cb__supporting-details">
      <div className="hbs-supporting-details__content">
        <ul className="hbs-supporting-details__list">
          {items.map((item, i) => (
            <li key={i} className="hbs-supporting-details__list-item">
              <div className="hbs-supporting-details__list-item-content">
                {item.title && (
                  <div
                    {...item.editAttributes?.title}
                    className="hbs-supporting-details__item-title"
                  >
                    {item.title}
                  </div>
                )}

                {item.subtitle && (
                  <span
                    {...item.editAttributes?.subtitle}
                    className="hbs-supporting-details__item-subtitle"
                  >
                    {item.subtitle}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>

        {mediaAsset && (
          <div className="hbs-supporting-details__media">
            <MediaAsset {...mediaAsset} />
          </div>
        )}
      </div>
    </div>
  );
}
