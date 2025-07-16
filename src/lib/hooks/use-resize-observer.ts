import { MutableRefObject, RefObject, useEffect, useState } from "react";
import { debounce } from "../utils/debounce";

/**
 * Custom hook to observe the resizing of an HTML element.
 * @param ref A React ref object pointing to the HTML element to observe.
 * @param onResize Optional callback function to be executed on resize.
 * @returns An object containing the current width and height of the observed element.
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
  }, [ref, onResize]); // Added ref and onResize to dependency array

  return { width, height };
}
