/**
 * Check for breakpoint.
 *
 * @return - whether breakpoint is mobile, tablet, or desktop
 */

import { useEffect, useState } from "react";
import { BREAKPOINTS } from "@/lib/constants";

const { TABLET, DESKTOP } = BREAKPOINTS;

interface UseBreakpointsProps {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export function useBreakpoint(
  initialValue: Partial<UseBreakpointsProps> = {},
): UseBreakpointsProps {
  const [state, setState] = useState<UseBreakpointsProps>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    ...initialValue,
  });

  useEffect(() => {
    const tablet = window.matchMedia(
      `(min-width: ${TABLET}px) and (max-width: ${DESKTOP - 1}px)`,
    );

    const onTabletChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        // TABLET
        setState({ isMobile: false, isTablet: true, isDesktop: false });
      } else {
        if (window.innerWidth < DESKTOP) {
          // MOBILE
          setState({ isMobile: true, isTablet: false, isDesktop: false });
        } else {
          // DESKTOP
          setState({ isMobile: false, isTablet: false, isDesktop: true });
        }
      }
    };

    tablet.addEventListener("change", onTabletChange);

    setState({
      isMobile: !tablet.matches && window.innerWidth < DESKTOP,
      isTablet: tablet.matches,
      isDesktop: !tablet.matches && window.innerWidth > TABLET,
    });

    return () => {
      tablet.removeEventListener("change", onTabletChange);
    };
  }, []);

  return state;
}
