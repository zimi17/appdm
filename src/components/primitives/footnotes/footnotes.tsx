import "./footnotes.scss";

import { EditAttributes } from "design-system/types/types";
import { ReactNode } from "react";
import { Link } from "../link/link";
import { useTranslations } from "design-system/hooks/use-translations";

export interface FootnoteProps {
  children: ReactNode;
  disclaimer?: boolean;
  editAttributes?: EditAttributes;
}

export interface FootnotesProps {
  footnotes: Array<FootnoteProps>;
}

export function Footnotes({ footnotes }: FootnotesProps) {
  const { t } = useTranslations();
  if (footnotes.length < 1) return null;

  return (
    <div className="footnotes">
      {footnotes[0] && footnotes[0]?.disclaimer && (
        <>
          {footnotes.map(({ children, editAttributes }, index) => (
            <div key={index} id={`footnote-${index + 1}`} {...editAttributes}>
              {children}
            </div>
          ))}
        </>
      )}
      {footnotes[0] && !footnotes[0]?.disclaimer && (
        <ol>
          {footnotes.map(({ children, editAttributes }, index) => (
            <li key={index} id={`footnote-${index + 1}`} {...editAttributes}>
              {children}

              <Link
                target="_self"
                href={`#footnote-marker-${index + 1}`}
                className="footnote__back"
              >
                <span className="footnote__back__text">{t("backToText")}</span>
                {" ↑"}
              </Link>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

interface FootnoteMarkerProps {
  index: number;
  editAttributes?: EditAttributes;
}

export function FootnoteMarker({ index, editAttributes }: FootnoteMarkerProps) {
  return (
    <span
      {...editAttributes}
      className="footnote-marker"
      id={`footnote-marker-${index}`}
    >
      <Link
        target="_self"
        href={`#footnote-${index}`}
        className="footnote-marker__link"
        aria-label={`Scroll to Footnote ${index}`}
      >
        {index}
      </Link>
    </span>
  );
}
