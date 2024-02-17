import { createSlice } from "@reduxjs/toolkit";

export let moviesSlice = createSlice({
  name: "movies",
  initialState: { moviesArray: [],newMoviesArray:[],selectedMovie:{} },
  reducers: {
    getAllMovies: (state, action) => {
      state.moviesArray = action.payload;
    },
    getNewMovies:(state,action)=>{
        state.newMoviesArray=action.payload;
    },
    addSelectedMovie:(state,action)=>{
      state.selectedMovie=action.payload;
    }
  },
});
export const { getAllMovies, getNewMovies,addSelectedMovie } = moviesSlice.actions;
