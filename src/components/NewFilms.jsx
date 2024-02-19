import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getNewMovies } from "../store/reducer";
import { useEffect } from "react";

export function NewMovies() {
  let NewFilmsArray=useSelector(state=>state.moviesReducer.newMoviesArray)
 let dispatch=useDispatch()
  useEffect(()=>{
    axios.get(`https://www.omdbapi.com/?apikey=919ceac6&s=all&y=2023&type=movie&`).then((resp)=>{
      dispatch(getNewMovies(resp.data.Search))
        })
  },[])
  
  return (
    <div className="newFilms">
      {NewFilmsArray.map((obj) => {
        return (
          <div key={obj.imdbID} className="newFilmsPiece">
            <img src={obj.Poster} alt="filmPoster" />
            <p>{obj.Title}</p>
          </div>
        );
      })}
    </div>
  );
}
