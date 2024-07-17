import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers;

export const Store = configureStore({
  reducer: reducers
});
