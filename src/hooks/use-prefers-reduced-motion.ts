
import { useEffect, useState } from "react";

/**
 * Access user's reduced motion preference.
 *
 * @return {boolean} - User's motion preference
 */
export function usePrefersReducedMotion(): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion)");

    const motionQueryOnChange = (e: MediaQueryListEvent) =>
      setMatches(e.matches);

    motionQuery.addEventListener("change", motionQueryOnChange);

    // set initial value
    setMatches(motionQuery.matches);

    return () => motionQuery.removeEventListener("change", motionQueryOnChange);
  }, []);

  return matches;
}
