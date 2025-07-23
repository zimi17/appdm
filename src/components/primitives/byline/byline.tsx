import "./byline.scss";

import cn from "clsx";
import { format } from "date-fns";
import {
  MediaAssetProps,
  MediaAsset,
} from "design-system/components/primitives/media-asset/media-asset";
import {
  convertToDate,
  reformatDateString,
} from "design-system/utils/date-format";
import { EditAttributes } from "design-system/types/types";
import { Link } from "design-system/components/primitives/link/link";

export interface BylineAuthor {
  name: string;
  link?: string;
  avatar?: MediaAssetProps;

  editAttributes?: {
    name?: EditAttributes;
  };
}

export interface BylineProps {
  authors?: Array<BylineAuthor>;
  featuredAuthors?: Array<BylineAuthor>;

  type?: "Authors" | "Featured" | "PeopleOnly" | "ShowAll" | "DateOnly";
  publicationDate?: string; // "YYYY-MM-DD"
  headshots?: boolean;
  disableLinks?: boolean;

  editAttributes?: {
    publicationDate?: EditAttributes;
  };
}

/**
 * ## See it in use on...
 * - An [article page](/story/example-pages-article-pages-kitchen-sink--story)
 *
 * - **`id: P-008-000-05`**
 */
export function Byline({
  authors,
  featuredAuthors,
  publicationDate,
  type = "Authors",
  headshots,
  disableLinks = false,
  editAttributes,
}: BylineProps) {
  const firstAuthor = authors?.[0];
  const firstFeatured = featuredAuthors?.[0];

  const formattedAuthors =
    firstAuthor &&
    firstAuthor.name?.length < 50 && // TODO: fix temperory if statement to hide really long names coming from legacy queries
    authors.map((person, i) => (
      <span
        className="hbs-byline__author"
        key={i}
        {...person.editAttributes?.name}
      >
        {person.link && !disableLinks ? (
          <Link href={person.link}>{person.name}</Link>
        ) : (
          <span dangerouslySetInnerHTML={{ __html: person.name }} />
        )}
        {i !== authors.length - 1 && (
          <>
            {authors.length !== 2 ? "," : ""}{" "}
            {authors.length > 1 && i === authors.length - 2 && "and"}{" "}
          </>
        )}
      </span>
    ));

  const formattedFeaturedAuthors =
    firstFeatured &&
    firstFeatured.name?.length < 50 && // TODO: fix temperory if statement to hide really long names coming from legacy queries
    featuredAuthors.map((person, i) => (
      <span
        className="hbs-byline__author"
        key={i}
        {...person.editAttributes?.name}
      >
        {" "}
        {person.link && !disableLinks ? (
          <Link href={person.link}>{person.name}</Link>
        ) : (
          person.name
        )}
        {i !== featuredAuthors.length - 1 && (
          <>
            {featuredAuthors.length !== 2 ? "," : ""}{" "}
            {featuredAuthors.length > 1 &&
              i === featuredAuthors.length - 2 &&
              "and"}{" "}
          </>
        )}
      </span>
    ));

  const parsedPublicationDate = convertToDate(
    reformatDateString(publicationDate),
  );

  const formattedDate = parsedPublicationDate ? (
    <time
      dateTime={format(parsedPublicationDate, "yyyy-MM-dd")}
      {...editAttributes?.publicationDate}
    >
      {format(parsedPublicationDate, "LLLL d, yyyy")}
    </time>
  ) : null;

  const componentClass = cn(
    "hbs-byline",
    headshots && featuredAuthors && "hbs-byline--headshots",
  );
  const hasHeadImage = featuredAuthors?.every((person) => person.avatar);

  return (
    <div className={componentClass}>
      {type !== "DateOnly" &&
        headshots &&
        featuredAuthors &&
        featuredAuthors.length > 0 &&
        hasHeadImage && (
          <span className="hbs-byline__thumbnails">
            {featuredAuthors.map((featuredAuthors, index) => (
              <MediaAsset
                className="hbs-byline__asset"
                key={index}
                {...featuredAuthors.avatar}
                hide={{ caption: true }}
              />
            ))}
          </span>
        )}
      <p className="hbs-byline__text">
        {type === "PeopleOnly" ? (
          formattedFeaturedAuthors
        ) : type === "DateOnly" ? (
          <>Published {formattedDate}</>
        ) : (
          <>
            {(type === "ShowAll" || type === "Featured") &&
            formattedFeaturedAuthors ? (
              <>
                Featuring {formattedFeaturedAuthors}
                {formattedAuthors || formattedDate ? ". " : " "}
              </>
            ) : null}
            {type !== "Featured" && formattedAuthors ? (
              <>By {formattedAuthors} </>
            ) : null}
            {formattedDate ? (
              <>
                {type !== "Featured" && formattedAuthors
                  ? " on "
                  : "Published "}{" "}
                {formattedDate}
                {formattedFeaturedAuthors ? "." : ""}
              </>
            ) : null}
          </>
        )}
      </p>
    </div>
  );
}
