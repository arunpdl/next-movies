import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import moviesReducer from "features/Movies/moviesSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      movies: moviesReducer,
    },
    devTools: process.env.NODE_ENV === "development",
  });

export const wrapper = createWrapper(makeStore);
