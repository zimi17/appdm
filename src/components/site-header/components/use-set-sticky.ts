import { useState, useEffect, useCallback } from "react";

interface UseSetStickyProps {
  defaultValue: boolean;
  isWorkingKnowledge?: boolean;
}

export const useSetSticky = ({
  defaultValue,
  isWorkingKnowledge,
}: UseSetStickyProps) => {
  const [sticky, setSticky] = useState(defaultValue);

  const isStickyCallback = useCallback(() => {
    const headerHeight = isWorkingKnowledge ? 160 : 100; // Adapt headerHeight logic
    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
    setSticky(window.scrollY >= headerHeight && isDesktop);
  }, [isWorkingKnowledge]); // Include windowWidth in dependencies

  useEffect(() => {
    if (typeof document !== "undefined" && document.readyState === "complete") {
      isStickyCallback();
    }
  }, [isStickyCallback]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("load", isStickyCallback);
      return () => window.removeEventListener("load", isStickyCallback);
    }
  }, [isStickyCallback]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", isStickyCallback);
      return () => {
        window.removeEventListener("scroll", isStickyCallback);
      };
    }
  }, [isStickyCallback]);

  return sticky;
};