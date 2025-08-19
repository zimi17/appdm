
"use client";

import { PropsWithChildren, useRef } from "react";
import { Provider } from "react-redux";
import { createStore, type Store } from "./store";
import { LocationState, locationSlice } from "./slice-location";

// https://redux-toolkit.js.org/usage/nextjs#loading-initial-data

export interface StoreProviderProps {
  location: Partial<LocationState>;
}

export function StoreProvider({
  children,
  ...props
}: PropsWithChildren<StoreProviderProps>) {
  const storeRef = useRef<Store | null>(null);
  // this ensures the store is only created once
  if (!storeRef.current) {
    storeRef.current = createStore();

    if (props.location) {
      storeRef.current.dispatch(
        locationSlice.actions.initializeLocation(props.location),
      );
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
