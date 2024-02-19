import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function FilmInfo() {
  let obj = {
    Title: "All Quiet on the Western Front",
    Year: "2022",
    Rated: "R",
    Released: "28 Oct 2022",
    Runtime: "148 min",
    Genre: "Action, Drama, War",
    Director: "Edward Berger",
    Writer: "Edward Berger, Lesley Paterson, Ian Stokell",
    Actors: "Felix Kammerer, Albrecht Schuch, Aaron Hilmer",
    Plot: "A young German soldier's terrifying experiences and distress on the western front during World War I.",
    Language: "German, French",
    Country: "Germany, United States, United Kingdom",
    Awards: "Won 4 Oscars. 58 wins & 84 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzM4ZDJhYjYtZGY5Ny00NTk0LWI4ZTYtNjczZDFiMGI2ZjEzXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.8/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "90%",
      },
      {
        Source: "Metacritic",
        Value: "76/100",
      },
    ],
    Metascore: "76",
    imdbRating: "7.8",
    imdbVotes: "237,762",
    imdbID: "tt1016150",
    Type: "movie",
    DVD: "28 Oct 2022",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  };
  let SelectedFilm = useSelector((state) => state.moviesReducer.selectedMovie);
  let [selectedF, setSelectedF] = useState(obj);
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${SelectedFilm.imdbID}&apikey=919ceac6`)
      .then((resp) => {
        setSelectedF(resp.data);
      });
  }, [SelectedFilm]);

  return (
    <div className="filmInfo">
      <div className="infoBox">
        <img src={selectedF && selectedF.Poster} alt="filmPoster" />
        <div className="descript">
          <h3>{selectedF && selectedF.Title}</h3>
          <p>{selectedF && selectedF.Year}</p>
          <p>{selectedF && selectedF.Runtime}</p>
          <p>{selectedF && selectedF.Genre}</p>
          <p>{selectedF && selectedF.Director}</p>
          <p>{selectedF && selectedF.Actors}</p>
          <p>{selectedF && selectedF.Plot}</p>
        </div>
      </div>
      <div className="ratingBox">
        {selectedF &&
          selectedF.Ratings &&
          selectedF.Ratings.map((rate) => {
            return (
              <div key={rate.Source}>
                <h3>{rate.Source}</h3>
                <p>{rate.Value}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
