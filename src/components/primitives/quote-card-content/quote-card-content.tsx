import "./quote-card-content.scss";

import { CtaLink } from "design-system/components/primitives/cta-link/cta-link";

interface QuoteLinkProps {
  label: string;
  link?: string;
}

export interface QuoteCardContentProps {
  label: string;
  text: string;
  credit: string;
  creditLink?: QuoteLinkProps;
}

export function QuoteCardContent({
  label,
  text,
  credit,
  creditLink,
}: QuoteCardContentProps) {
  return (
    <div className="quote-card-content">
      <span className="quote-card-content__overline">{label}</span>

      <div className="quote-card-content__text-mod">
        <blockquote>
          <p className="quote-card-content__text">“{text}”</p>
        </blockquote>
        <div className="quote-card-content__credit-mod">
          <span className="quote-card-content__credit">{credit}</span>
          {creditLink?.link && (
            <CtaLink
              isSmall
              className="quote-card-content__credit-link"
              href={creditLink.link}
            >
              {creditLink.label}
            </CtaLink>
          )}
        </div>
      </div>
    </div>
  );
}
