import React, { useContext } from 'react';
import { GlobalMenuLevelContext } from './global-menu-nav';
import { Link, LinkProps } from '../primitives/link/link'; // Corrected import path
import { styleTransitionDelay } from '../../utils/style-transition-delay'; // Corrected import path

interface GlobalMenuLinkProps extends LinkProps {
  index: number;
  isVisible?: boolean;
  title: string; // Added title prop
}

export const GlobalMenuLink: React.FC<GlobalMenuLinkProps> = ({
  index,
  isVisible,
  title, // Destructure title
  ...props
}) => {
  const { level } = useContext(GlobalMenuLevelContext);

  // Simplified classPrefix, adjust as needed for Tailwind
  const classPrefix = level === 0 ? "" : "submenu-";

  return (
    <Link className={`${classPrefix}link`} {...props}>
      <span
        className={`${classPrefix}link-text`}
        style={styleTransitionDelay({ index, isVisible })}
      >
        {title} {/* Use title as children */}
      </span>
    </Link>
  );
};