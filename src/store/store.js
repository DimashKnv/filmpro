import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "./reducer";

export let Store = configureStore({ reducer: { moviesReducer: moviesSlice.reducer } });

