import { Icon, IconName } from "../../components/icons/icon";
import { EditAttributes } from "../../types/types";
import { Link } from "../../link/link";

// all social media icon names should be entirely lowercase to match the icon name from Contentful
export type SocialIconName = Extract<
    IconName,
    | "apple"
    | "facebook"
    | "instagram"
    | "linkedin"
    | "youtube"
    | "tiktok"
    | "print"
    | "quicklink"
    | "mail"
    | "x"
>;

export interface SocialMediaIconProps {
    href?: string;
    icon?: SocialIconName;
    title?: string;
    print?: boolean;
    ariaLabel?: string;

    editAttributes?: EditAttributes;
}

export function SocialMediaIcon({
    href,
    icon,
    title,
    print = false,
    ariaLabel,
    editAttributes,
}: SocialMediaIconProps) {
    if (!icon || (!href && !print)) return null;

    return print ? (
        <button className="hbs-social-media-link" onClick={() => window.print()}>
            <Icon name={icon} className="hbs-social-media-link__icon" />
            <span className="hbs-global-visually-hidden">{ariaLabel || title}</span>
        </button>
    ) : (
        <Link
            editAttributes={editAttributes}
            className="hbs-social-media-link"
            href={href}
        >
            <span className="hbs-social-media-link__text">{ariaLabel || title}</span>

            <Icon name={icon} className="hbs-social-media-link__icon" />
        </Link>
    );
}
