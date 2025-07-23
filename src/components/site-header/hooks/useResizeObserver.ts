import { useEffect, useState, RefObject, MutableRefObject } from "react";

// Simple debounce function
export function debounce<F extends (...args: never[]) => void>(
  fn: F,
  ms = 300,
): (...args: Parameters<F>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: unknown, ...args: Parameters<F>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
}

/**
 * Observes the size of an HTMLElement and provides its width and height.
 */
export function useResizeObserver(
  ref: RefObject<HTMLElement> | MutableRefObject<HTMLElement | undefined>,
  onResize?: ResizeObserverCallback,
) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    let subscribed = true;

    const handleResize: ResizeObserverCallback = (
      entries,
      observerInstance,
    ) => {
      if (!subscribed) {
        return;
      }

      const contentRect = entries[0]?.contentRect;

      if (contentRect) {
        setWidth(contentRect.width);
        setHeight(contentRect.height);
      }

      if (onResize) {
        onResize(entries, observerInstance);
      }
    };

    const debouncedResize = debounce(handleResize, 150);
    const observer = new ResizeObserver(debouncedResize);

    observer.observe(el);

    return () => {
      subscribed = false;
      observer.unobserve(el);
    };
  }, [ref, onResize]); // Added onResize to dependencies

  return { width, height };
}