import { useDispatch, useSelector } from "react-redux";
import { addSelectedMovie } from "../store/reducer";

export function AllFilms() {
  let movies = useSelector((state) => state.moviesReducer.moviesArray);
  let dispatch=useDispatch()
  return (
    <div className="allFilms">
      {movies.map((e) => {
        return (
          <div onClick={()=>{dispatch(addSelectedMovie(e))}}>
            <img src={e.Poster} alt="" />
            <p>{e.Title}</p>
            <button>Like</button>
          </div>
        );
      })}
    </div>
  );
}
