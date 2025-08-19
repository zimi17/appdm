
import { debounce } from "@/lib/utils";
import { MutableRefObject, RefObject, useEffect, useState } from "react";

/**
 *
 */
export function useResizeObserver(
  ref: RefObject<HTMLElement> | MutableRefObject<HTMLElement | undefined>,
  onResize?: ResizeObserverCallback,
) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const { current: el } = ref;
    if (!el) {
      return;
    }

    let subscribed = true;

    const handleResize: ResizeObserverCallback = (entries) => {
      if (!subscribed) {
        return;
      }

      const contentRect = entries[0]?.contentRect;

      if (contentRect) {
        setWidth(contentRect.width);
        setHeight(contentRect.height);
      }

      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      onResize && onResize(entries, observer);
    };

    const debouncedResize = debounce(handleResize, 150);
    const observer = new ResizeObserver(debouncedResize);

    observer.observe(el);

    return () => {
      subscribed = false;
      observer.unobserve(el);
    };
  });

  return { width, height };
}
