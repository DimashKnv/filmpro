import "../src/styles.scss";
import { Navigation } from "./components/Navigation";
import { FilmInfo } from "./components/FilmInfo";
import { NewMovies } from "./components/NewFilms";
import { AllFilms } from "./components/Allfilms";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllMovies } from "./store/reducer";
import { Route, Routes } from "react-router-dom";
import { Fav } from "./pages/Fav";
import { Login } from "./pages/Login";
import { Registr } from "./pages/Registr";

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://www.omdbapi.com/?apikey=919ceac6&s=all").then((resp) => {
      dispatch(getAllMovies(resp.data.Search));
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div className="mainBox">
              {" "}
              <Navigation />
              <FilmInfo />
              <NewMovies />
              <AllFilms />
            </div>
          }
        ></Route>
        <Route
          path="/favorites"
          element={
            <div className="mainBox">
              <Navigation></Navigation>
              <Fav></Fav>
            </div>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registration" element={<Registr></Registr>}></Route>
      </Routes>
    </div>
  );
}

export default App;

//TODO:поменять нав ul на link +img; filminfo доделать; лого,иконки; подумать над favorite.
