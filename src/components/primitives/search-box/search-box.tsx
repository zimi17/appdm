
"use client";

import { useState, useEffect, forwardRef, ChangeEvent, FormEvent, KeyboardEventHandler } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Search } from 'lucide-react';
import './search-box.scss';


export interface SearchBoxProps {
  searchTerm?: string;
  placeholder?: string;
  isSmall?: boolean;
  handleSearch?: (term: string) => void;
  onReset?: () => void;
}

export const SearchBox = forwardRef<HTMLInputElement, SearchBoxProps>(
  (
    {
      searchTerm = "",
      handleSearch,
      onReset,
      placeholder,
      isSmall = false,
      ...inputProps
    },
    ref,
  ) => {
    const [searchValue, setSearchValue] = useState(searchTerm);
    const router = useRouter();

    useEffect(() => {
      setSearchValue(searchTerm);
    }, [searchTerm]);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setSearchValue(e.target.value);
    }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (handleSearch) {
            handleSearch(searchValue);
        } else {
            router.push(`/search?q=${searchValue}`);
        }
    };

    const handleReset = () => {
      setSearchValue("");
      if (onReset) onReset();
    };

    return (
      <form className={cn("hbs-search-box", isSmall && "hbs-search-box--small")} onSubmit={handleSubmit}>
        <input
          {...inputProps}
          className="hbs-search-box__input"
          type="search"
          placeholder={placeholder}
          value={searchValue}
          aria-label={placeholder || "Search"}
          onChange={handleChange}
          onReset={handleReset}
          ref={ref}
        />
        <button
          className="hbs-search-box__submit"
          type="submit"
          title="Submit your search query."
        >
          <span className="sr-only">Search</span>
          <Search className="h-5 w-5"/>
        </button>
      </form>
    );
  },
);
SearchBox.displayName = 'SearchBox';
