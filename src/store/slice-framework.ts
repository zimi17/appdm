import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FC, Fragment, ReactNode } from "react";

export interface FrameworkState {
  Head: FC<{ children: ReactNode }>;
}

export const frameworkSlice = createSlice({
  name: "framework",
  initialState: {
    Head: Fragment as FrameworkState["Head"],
  } satisfies FrameworkState,
  reducers: {
    initializeFramework: (
      state,
      action: PayloadAction<Partial<FrameworkState>>,
    ) => {
      if (action.payload.Head) state.Head = action.payload.Head;
    },
  },
});
