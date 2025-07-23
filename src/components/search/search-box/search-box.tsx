import "./search-box.scss";

import cn from "clsx";
import {
  useState,
  useEffect,
  forwardRef,
  ChangeEvent,
  InputHTMLAttributes,
  Dispatch,
  SetStateAction,
  MouseEventHandler,
  KeyboardEventHandler,
} from "react";
import { Icon } from "design-system/components/icons/icon";

type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "type" | "value" | "onChange" | "aria-label"
>;

export interface SearchBoxProps extends InputProps {
  searchTerm?: string;
  placeholder?: string;
  hasDropdown?: boolean;
  triggerOverlay?: boolean;
  isSmall?: boolean;
  handleSearch?: (term: string) => void;
  handleKeydownSearch?: KeyboardEventHandler;
  handleMousedownSearch?: MouseEventHandler;
  onReset?: () => void;
  setShowDropdown?: Dispatch<SetStateAction<boolean>>;
}

/**
 * ## See it in use on...
 * - The [archive page](/story/example-pages-archive-pages-story-archive--story)
 *
 * - **`id: P-021-000-00`**
 */
export const SearchBox = forwardRef<HTMLInputElement, SearchBoxProps>(
  (
    {
      searchTerm = "",
      handleSearch,
      handleKeydownSearch,
      handleMousedownSearch,
      onReset,
      hasDropdown = false,
      placeholder,
      setShowDropdown,
      isSmall = false,
      ...inputProps
    },
    ref,
  ) => {
    const [searchValue, setSearchValue] = useState(searchTerm);

    useEffect(() => {
      setSearchValue(searchTerm);
    }, [searchTerm]);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      if (e.currentTarget) {
        setSearchValue(e.currentTarget.value);
        if (hasDropdown) {
          handleSearch?.(e.currentTarget.value);
        }
      }
    }

    const handleReset = () => {
      setSearchValue("");

      if (onReset) {
        onReset();
      }

      if (setShowDropdown) {
        setShowDropdown(false);
      }
    };

    return (
      <div className={cn("hbs-search-box", isSmall && "hbs-search-box--small")}>
        <input
          {...inputProps}
          className="hbs-search-box__input"
          type="search"
          placeholder={placeholder}
          value={searchValue}
          aria-label={placeholder || "Search"}
          onChange={handleChange}
          onKeyDown={handleKeydownSearch}
          onReset={handleReset}
          ref={ref}
        />
        <button
          className="hbs-search-box__submit"
          type="button"
          title="Submit your search query."
          aria-expanded={inputProps["aria-expanded"]}
          aria-controls={inputProps["aria-controls"]}
          onClick={() => {
            setShowDropdown?.((prev) => !prev);
          }}
          onMouseDown={handleMousedownSearch}
          tabIndex={-1}
        >
          <span className="hbs-global-visually-hidden">Search</span>
          <Icon name="search" />
        </button>
      </div>
    );
  },
);
