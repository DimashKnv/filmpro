import { useDispatch, useSelector } from "react-redux";
import {
  addFav,
  addSelectedMovie,
  getAllMovies,
  removeFav,
} from "../store/reducer";
import { useState } from "react";

export function AllFilms() {
  let movies = useSelector((state) => state.moviesReducer.moviesArray);
  let dispatch = useDispatch();
  let favArray = useSelector((state) => state.moviesReducer.favMovies);
  // let [isInFav, setIsInFav] = useState(false);

  // function toggleIsinFav(obj) {
  //   setIsInFav(
  //     favArray.some((movie) => {
  //       return obj.Title === movie.Title;
  //     })
  //   );
  // }
  let sortedUp = [...movies].sort((a, b) => {
    return a.Year - b.Year;
  });
  let sortedDown = [...movies].sort((a, b) => {
    return b.Year - a.Year;
  });
  return (
    <div>
      <div className="sortUtil">
        <p
          onClick={() => {
            dispatch(getAllMovies(sortedUp));
          }}
        >
          sort by year ascending
        </p>
        <p
          onClick={() => {
            dispatch(getAllMovies(sortedDown));
          }}
        >
          sort by year descending
        </p>
      </div>
      <div className="allFilms">
        {movies.map((movie) => {
          console.log(movie);
          const isInFav2 = favArray.some((obj) => {
            return obj.Title === movie.Title;
          });
          return (
            <div
              key={movie.imdbID}
              onClick={() => {
                dispatch(addSelectedMovie(movie));
              }}
            >
              <img src={movie.Poster} alt="" />
              <p>{movie.Year}</p>
              <p>{movie.Title}</p>
              <button
                onClick={() => {
                  dispatch(isInFav2 ? removeFav(movie) : addFav(movie));
                  // toggleIsinFav(movie);
                }}
              >
                {isInFav2 ? "Dislike" : "Like"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
