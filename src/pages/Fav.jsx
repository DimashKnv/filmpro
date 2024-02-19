import { useDispatch, useSelector } from "react-redux";
import { removeFav } from "../store/reducer";

export function Fav() {
  let favArray = useSelector((state) => state.moviesReducer.favMovies);
  let dispatch = useDispatch();
  return (
    <div className="favBox">
      <h1>Your Favorites</h1>
      <div className="favContentArray">
      {favArray.map((movie) => {
        return (
          <div className="favContent">
            <img src={movie.Poster} alt="" />
            <p>{movie.Title}</p>
            <button
              onClick={() => {
                dispatch(removeFav(movie));
              }}
            >
              Dislike
            </button>
          </div>
        );
      })}
      </div>
      
    </div>
  );
}
