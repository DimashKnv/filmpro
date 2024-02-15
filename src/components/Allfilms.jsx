import { useSelector } from "react-redux";

export function AllFilms() {
  let movies = useSelector((state) => state.moviesReducer.moviesArray);
  return (
    <div className="allFilms">
      {movies.map((e) => {
        return (
          <div>
            <img src={e.Poster} alt="" />
            <p>{e.Title}</p>
            <button>Like</button>
          </div>
        );
      })}
    </div>
  );
}
