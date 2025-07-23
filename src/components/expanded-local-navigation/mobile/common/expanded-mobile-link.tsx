import { Link } from "../../../primitives/link/link";
import { NavigationLink } from "../../../local-navigation/local-navigation";
import { FC } from "react";

export const ExpandedMobileLink: FC<NavigationLink> = ({ url, title }) => {
  return (
    <li className="hbs-local-navigation__accordion-submenu-item">
      <Link
        href={url}
        className="hbs-local-navigation__accordion-submenu-item-link"
      >
        {title}
      </Link>
    </li>
  );
};
