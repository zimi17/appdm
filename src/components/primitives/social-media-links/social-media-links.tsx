import "./social-media-links.scss";

import { SocialMediaIcon, SocialMediaIconProps } from "./social-media-icon/social-media-icon";

export interface SocialMediaLinksProps {
  links?: Array<SocialMediaIconProps>;
}

/**
 *
 * - **`id: P-023-000-00`**
 */
export function SocialMediaLinks({ links }: SocialMediaLinksProps) {
  if (!links || links.length < 1) {
    return null;
  }

  return (
    <div className="hbs-social-media-links">
      {links.map((link, i) => (
        <SocialMediaIcon key={i} {...link} />
      ))}
    </div>
  );
}
