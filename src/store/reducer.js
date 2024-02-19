import { createSlice } from "@reduxjs/toolkit";

export let moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesArray: [],
    newMoviesArray: [],
    selectedMovie: {},
    favMovies: [],
  },
  reducers: {
    getAllMovies: (state, action) => {
      state.moviesArray = action.payload;
    },
    getNewMovies: (state, action) => {
      state.newMoviesArray = action.payload;
    },
    addSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },

    addFav: (state, action) => {
      state.favMovies.push(action.payload);
    },
    removeFav: (state, action) => {
      state.favMovies = state.favMovies.filter((movie) => {
        return movie.imdbID !== action.payload.imdbID;
      });
    },
  },
});
export const {
  getAllMovies,
  getNewMovies,
  addSelectedMovie,
  addFav,
  removeFav,
} = moviesSlice.actions;
