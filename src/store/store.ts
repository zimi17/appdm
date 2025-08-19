import { configureStore } from "@reduxjs/toolkit";
import { frameworkSlice } from "./slice-framework";
import { locationSlice } from "./slice-location";

export const createStore = () => {
  return configureStore({
    reducer: {
      [locationSlice.name]: locationSlice.reducer,
      [frameworkSlice.name]: frameworkSlice.reducer,
    },
  });
};

export type Store = ReturnType<typeof createStore>;
export type RootState = ReturnType<Store["getState"]>;
export type AppDispatch = Store["dispatch"];
