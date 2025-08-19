
import { configureStore } from "@reduxjs/toolkit";
import { locationSlice } from "./slice-location";

export const createStore = () => {
  return configureStore({
    reducer: {
      [locationSlice.name]: locationSlice.reducer,
    },
  });
};

export type Store = ReturnType<typeof createStore>;
export type RootState = ReturnType<Store["getState"]>;
export type AppDispatch = Store["dispatch"];
