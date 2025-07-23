import "./search-dropdown.scss";

import cn from "clsx";
import {
  useState,
  useRef,
  KeyboardEventHandler,
  MouseEventHandler,
  useId,
} from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "../../primitives/link/link";
import {
  CtaLink,
  CtaLinkProps,
} from "../../primitives/cta-link/cta-link";
import { SearchBox } from "../search-box/search-box";
import { Icon } from "../../icons/icon";
import { EditAttributes } from "../../types/types";
import { Suggestions, ModernSearchHit } from "../types";
import { Display } from "../lib/es/es-types";
import { DataLayerEvent, useDataLayer } from "../hooks/use-data-layer";
import { SiteEntry } from "../contentful/schema/universal";
import { stripHtml } from "../contentful/components/utils/strip-html";

export interface SearchBoxDropdownProps {
  searchTerm?: string;
  handleSearch?: (term: string) => void;
  onReset?: () => void;
  placeholder?: string;
  hasDropdown?: boolean;
  dropdownItems?: Array<ModernSearchHit>;
  dropdownSuggestions?: Suggestions["updatedSuggestions"];
  dropdownCta?: CtaLinkProps;
  dropdownFooterLabel?: string;
  isOverlay?: boolean;
  searchLink?: string;
  onOpenCallback?: () => void;
  site?: SiteEntry;
  editAttributes?: {
    dropdownFooterLabel?: EditAttributes;
  };
}

/**
 * ## See it in use on...
 * - The [archive page](/story/example-pages-archive-pages-story-archive--story)
 *
 * - **`id: P-021-000-00`**
 */
export function SearchBoxDropdown({
  searchTerm = "",
  handleSearch,
  hasDropdown = false,
  onReset,
  placeholder,
  dropdownItems,
  dropdownSuggestions,
  dropdownCta,
  dropdownFooterLabel,
  isOverlay = false,
  searchLink,
  onOpenCallback,
  editAttributes,
  site,
}: SearchBoxDropdownProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null,
  );
  const selectedItem =
    selectedItemIndex !== null ? dropdownItems?.[selectedItemIndex] : null;

  if (!showDropdown && selectedItemIndex !== null) {
    setSelectedItemIndex(null);
  }
  const inputRef = useRef<HTMLInputElement>(null);

  const dropdownId = useId();
  const dropdownListLabelId = useId();
  const dropdownFooterLabelId = useId();
  const { pushDataLayer } = useDataLayer();
  const dataLayerEvent: DataLayerEvent = {
    event: "search_results",
    /* eslint-disable camelcase */
    event_data: {
      search_numresults: dropdownItems?.length,
      search_type: "search-primary",
      search_type_ahead: false,
      top_search: true,
      search_result_page_url:
        typeof window !== "undefined" ? window.location.href : "",
      explore_search: site?.fields.title?.includes("Knowledge") ? true : false,
    },
    /* eslint-enable camelcase */
  };

  const numberOfItems = (dropdownItems?.length || 0) + 1;

  const hasResults = dropdownItems && dropdownItems.length > 0;

  const hasSuggestions =
    dropdownSuggestions?.total && dropdownSuggestions.total > 0;

  function blurHandler() {
    if (!hasSuggestions && !hasResults) {
      setTimeout(function () {
        setShowDropdown(false);
      }, 300);
    }
  }

  function handleChange(term: string) {
    if (term) {
      handleSearch?.(term);
      setShowDropdown(true);
    } else if (term === "" && !isOverlay) {
      setShowDropdown(false);
    }
  }

  function focusHandler(term?: string) {
    if (
      inputRef?.current?.value &&
      inputRef?.current?.value !== "" &&
      hasResults
    ) {
      setShowDropdown(true);
    } else if (term === "") {
      setShowDropdown(false);
    }
  }

  const redirectToSearch = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current?.value
        ? encodeURIComponent(inputRef.current?.value)
        : undefined;
      const href = searchLink || "https://www.hbs.edu/search";
      window.location.href = inputValue ? `${href}?q=${inputValue}` : href;
    }
  };

  const redirectQuerySearch = (searchQuery: string | undefined) => {
    if (inputRef.current || searchQuery) {
      const inputValue = inputRef.current?.value
        ? encodeURIComponent(inputRef.current?.value)
        : undefined;
      const q = inputValue || searchQuery;
      const href = searchLink || "https://www.hbs.edu/search";
      window.location.href = `${href}?q=${q}`;
    }
  };

  const redirectMouseQueryToSearch:
    | MouseEventHandler<HTMLFormElement>
    | undefined = (e) => {
    const input = e.currentTarget?.previousElementSibling as HTMLInputElement;
    if (
      !e.currentTarget?.previousElementSibling?.classList.contains(
        "hbs-search-box__input",
      )
    ) {
      return;
    }
    e.preventDefault();
    redirectQuerySearch(input.value);
  };

  const redirectQueryToSearch: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const inputValue = inputRef?.current?.value;
      if (inputValue) redirectQuerySearch(inputValue);
    }
  };

  const handleInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    switch (e.key) {
      case "ArrowDown":
        if (!hasResults && !hasSuggestions) {
          return;
        }

        setShowDropdown(true);

        setSelectedItemIndex((prev) => {
          if (prev === null) return 0;
          return prev === numberOfItems - 1 ? 0 : prev + 1;
        });

        e.stopPropagation();
        e.preventDefault();
        break;
      case "ArrowUp":
        if (!hasResults && !hasSuggestions) {
          return;
        }

        setShowDropdown(true);

        setSelectedItemIndex((prev) => {
          if (prev === null) return numberOfItems - 1;
          return prev === 0 ? numberOfItems - 1 : prev - 1;
        });

        e.stopPropagation();
        e.preventDefault();
        break;
      case "Escape":
        if (showDropdown && !isOverlay) {
          e.stopPropagation();
          e.preventDefault();

          setShowDropdown(false);
        }

        break;
      case "Enter":
        if (selectedItem?.url) {
          window.location.href = selectedItem.url;
        } else {
          setShowDropdown(false);
        }
        break;
      default:
        if (e.key !== "Home" && e.key !== "End") {
          setSelectedItemIndex(null);
        }
        break;
    }
  };

  const footerCtaComboboxProps = {
    id: `${dropdownId}-${dropdownItems?.length || 0}`,
    "aria-selected":
      selectedItemIndex !== null && selectedItemIndex === dropdownItems?.length,
    tabIndex: -1,
  };

  const isDropdownVisible = showDropdown || isOverlay;

  let display: Display = {};
  let handleOnClick: (() => void) | undefined;

  const searchBoxDropdown = (
    <div
      className={cn(
        "hbs-search-box__dropdown",
        isDropdownVisible && "hbs-search-box__dropdown--open",
        isOverlay && "hbs-search-box__dropdown--overlay",
      )}
    >
      <SearchBox
        hasDropdown={hasDropdown}
        searchTerm={searchTerm}
        handleSearch={handleChange}
        placeholder={placeholder}
        onReset={onReset}
        setShowDropdown={setShowDropdown}
        onKeyDown={handleInputKeyDown}
        handleKeydownSearch={redirectQueryToSearch}
        handleMousedownSearch={redirectMouseQueryToSearch}
        onFocus={() => focusHandler()}
        onBlur={() => blurHandler()}
        ref={inputRef}
        autoFocus={isOverlay}
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={isDropdownVisible}
        aria-controls={dropdownId}
        aria-activedescendant={
          selectedItemIndex !== null
            ? `${dropdownId}-${selectedItemIndex}`
            : undefined
        }
      />
      <div id={dropdownId} tabIndex={-1}>
        {isDropdownVisible && (
          <div
            className={cn(
              "hbs-search-box__dropdown-content",
              dropdownSuggestions?.total &&
                dropdownSuggestions.total > 0 &&
                "suggestions",
            )}
          >
            <div className="hbs-search-box__dropdown-content-inner">
              <div className="hbs-search-box__dropdown-results-container">
                {hasResults && (
                  <p
                    className="hbs-search-box__dropdown-results-label"
                    id={dropdownListLabelId}
                  >
                    Top {searchTerm === "" ? "Searches" : "Results"}
                  </p>
                )}
                {dropdownItems && dropdownItems.length > 0 && (
                  <ul
                    className="hbs-search-box__dropdown-results"
                    aria-labelledby={dropdownListLabelId}
                  >
                    {dropdownItems.map(
                      (item, i) => (
                        (display = item.display || {}),
                        /* eslint-disable camelcase */
                        inputRef.current?.value &&
                          (handleOnClick = () => {
                            dataLayerEvent.event_data.search_term =
                              inputRef.current?.value;
                            dataLayerEvent.event_data.search_result_title =
                              item.title;
                            dataLayerEvent.event_data.search_result_url =
                              item.url;
                            dataLayerEvent.event_data.search_result_position =
                              i + 1;
                            dataLayerEvent.event_data.search_numresults =
                              undefined;
                            pushDataLayer(dataLayerEvent);
                          }),
                        (
                          /* eslint-enable camelcase */
                          <li
                            className="hbs-search-box__dropdown-result"
                            key={i}
                          >
                            <Link
                              href={item.url}
                              className="hbs-search-box__dropdown-result-link"
                              tabIndex={-1}
                              id={`${dropdownId}-${i}`}
                              onClick={handleOnClick}
                              aria-selected={selectedItemIndex === i}
                            >
                              <p
                                className="hbs-search-box__dropdown-result-text"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    item.highlight?.autocomplete ||
                                    item.autocomplete ||
                                    item.highlight?.title ||
                                    item.title,
                                }}
                              />
                              {display.category?.label && (
                                <p className="hbs-search-box__dropdown-contentType">
                                  {display.category?.label}
                                </p>
                              )}
                            </Link>
                          </li>
                        )
                      ),
                    )}
                  </ul>
                )}

                {dropdownSuggestions?.suggestions?.map(
                  (type, i) =>
                    type.group &&
                    type.group?.length > 0 && (
                      <ul
                        key={i}
                        aria-label={type.groupName}
                        className="hbs-search-box__dropdown-results group"
                        aria-labelledby={dropdownListLabelId}
                      >
                        {type?.group?.map((suggestion, i) => {
                          handleOnClick = () => {
                            /* eslint-disable camelcase */
                            dataLayerEvent.event_data.search_term =
                              inputRef.current?.value;
                            dataLayerEvent.event_data.search_result_title =
                              suggestion.suggestion
                                ? stripHtml(suggestion.suggestion)
                                : suggestion.suggestion;
                            dataLayerEvent.event_data.search_result_url =
                              suggestion.conceptUri;
                            dataLayerEvent.event_data.search_result_position =
                              i + 1;
                            dataLayerEvent.event_data.explore_search_category =
                              type.groupName;
                            dataLayerEvent.event_data.search_type =
                              "search-secondary";
                            dataLayerEvent.event_data.search_numresults =
                              undefined;
                            pushDataLayer(dataLayerEvent);
                            /* eslint-enable camelcase */
                          };

                          return (
                            suggestion.suggestion && (
                              <li
                                className="hbs-search-box__dropdown-result"
                                key={i}
                              >
                                <Link
                                  href={suggestion.conceptUri}
                                  className="hbs-search-box__dropdown-result-link"
                                  key={i}
                                  onClick={handleOnClick}
                                >
                                  <p
                                    className="hbs-search-box__dropdown-result-text"
                                    dangerouslySetInnerHTML={{
                                      __html: suggestion.suggestion
                                        .replaceAll("<b>", "<mark>")
                                        .replaceAll("</b>", "</mark>"),
                                    }}
                                  />
                                </Link>
                              </li>
                            )
                          );
                        })}
                      </ul>
                    ),
                )}
              </div>
              <div className="hbs-search-box__dropdown-footer">
                {dropdownCta &&
                  (hasResults || hasSuggestions ? (
                    <CtaLink
                      {...dropdownCta}
                      {...footerCtaComboboxProps}
                      type="primary-button"
                      isSmall
                      onClick={redirectToSearch}
                      aria-describedby={dropdownFooterLabelId}
                      className="dropdown"
                    />
                  ) : (
                    <CtaLink
                      {...dropdownCta}
                      {...footerCtaComboboxProps}
                      type="secondary-button"
                      isSmall
                      onClick={redirectToSearch}
                      aria-describedby={dropdownFooterLabelId}
                      className="dropdown"
                    >
                      View Results
                    </CtaLink>
                  ))}
                <p
                  {...editAttributes?.dropdownFooterLabel}
                  className="hbs-search-box__dropdown-footer-label"
                  id={dropdownFooterLabelId}
                >
                  {dropdownFooterLabel}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  if (isOverlay) {
    return (
      <Dialog.Root
        onOpenChange={(open) => {
          if (open && onOpenCallback) {
            onOpenCallback();
          }
        }}
      >
        <Dialog.Trigger
          className="hbs-search-box__overlay-trigger"
          aria-label="Search"
        >
          <Icon name="search" />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="hbs-search-box__overlay">
            <Dialog.Content className="hbs-search-box__overlay-content">
              {searchBoxDropdown}

              <Dialog.Close className="hbs-search-box__overlay-close">
                Close
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    );
  } else {
    return searchBoxDropdown;
  }
}
