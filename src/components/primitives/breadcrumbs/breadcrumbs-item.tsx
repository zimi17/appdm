import "./breadcrumbs-item.scss";

import { Icon } from "design-system/components/icons/icon";
import { Link } from "../link/link";

export interface BreadcrumbsItemProps {
  link?: string;
  title?: string;
  isCurrent?: boolean;
}

export function BreadcrumbsItem({
  title,
  link,
  isCurrent = false,
}: BreadcrumbsItemProps) {
  if (!title) return null;

  return (
    <li className="hbs-breadcrumbs-item">
      {isCurrent ? (
        <span className="hbs-breadcrumbs-item__link" aria-current="true">
          {title}
        </span>
      ) : (
        <Link
          className="hbs-breadcrumbs-item__link"
          target="_self"
          title={title}
          href={link}
        >
          {title}
        </Link>
      )}

      <Icon name="caret" />
    </li>
  );
}
