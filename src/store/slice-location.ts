import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface LocationState {
  domain: string;
  path: string;
  query: Record<string, string | undefined>;
}

export const locationSlice = createSlice({
  name: "location",
  initialState: { domain: "www", path: "/", query: {} } satisfies LocationState,
  reducers: {
    initializeLocation: (
      state,
      action: PayloadAction<Partial<LocationState>>,
    ) => {
      // since this is a proxy object keys must be updated individually, `state = ...` doesn't work
      if (action.payload.domain) state.domain = action.payload.domain;
      if (action.payload.query) state.query = action.payload.query;
      if (action.payload.path) state.path = action.payload.path;
    },
  },
});
