import { debounce } from "@/lib/utils";
import { useEffect } from "react";

interface UseEventListenerOptions extends AddEventListenerOptions {
  debounceDelay?: number;
}

export function useEventListener<
  E extends HTMLElement | Window,
  EventMap extends E extends Window ? WindowEventMap : HTMLElementEventMap,
  Event extends keyof EventMap,
>(
  event: Event,
  listener: (event: EventMap[Event]) => void,
  element: E | undefined | false | null,
  { debounceDelay, ...options }: UseEventListenerOptions = {},
) {
  const listenerFn = debounceDelay ? debounce(listener, debounceDelay) : listener;

  useEffect(() => {
    if (element) {
      element.addEventListener(
        event as string,
        listenerFn as EventListenerOrEventListenerObject,
        options,
      );
      return () =>
        element.removeEventListener(
          event as string,
          listenerFn as EventListenerOrEventListenerObject,
        );
    }
  }, [element, event, listener, listenerFn, options]);
}
