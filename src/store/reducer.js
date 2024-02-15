import { createSlice } from "@reduxjs/toolkit";

export let moviesSlice = createSlice({
  name: "movies",
  initialState: { moviesArray: [],newMoviesArray:[] },
  reducers: {
    getAllMovies: (state, action) => {
      state.moviesArray = action.payload;
    },
    getNewMovies:(state,action)=>{
        state.newMoviesArray=action.payload;
    }
  },
});
export const { getAllMovies, getNewMovies } = moviesSlice.actions;
