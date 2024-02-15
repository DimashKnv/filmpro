import "../src/styles.scss";
import { Navigation } from "./components/Navigation";
import { FilmInfo } from "./components/FilmInfo";
import {  NewMovies } from "./components/NewFilms";
import { AllFilms } from "./components/Allfilms";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllMovies } from "./store/reducer";

function App() {

  let dispatch=useDispatch()
  
  useEffect(() => {
    axios.get("https://www.omdbapi.com/?apikey=919ceac6&s=all")
      .then((resp) => {
       dispatch(getAllMovies(resp.data.Search))
      });
  },[]);

  return (
    <div className="App">
      <Navigation />
      <FilmInfo />
      <NewMovies />
      <AllFilms/>
    </div>
  );
}

export default App;
