import { useState } from "react";
import searchPng from "../assets/search.png.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllMovies } from "../store/reducer";
export function Search() {
  let dispatch = useDispatch();
  let [searchArray, setSearchArray] = useState("");
  function handleSearch() {
    axios
      .get(`https://www.omdbapi.com/?apikey=919ceac6&s=${searchArray}`)
      .then((resp) => {
        dispatch(getAllMovies(resp.data.Search));
      });
  }
  return (
    <div className="searchContent">
      <input
        onChange={(e) => {
          setSearchArray(e.target.value);
        }}
        type="text"
        placeholder="Search..."
        value={searchArray}
      />
      <button
        onClick={() => {
          handleSearch();
        }}
      >
        <img src={searchPng} alt="" id="searchBtn" />
      </button>
    </div>
  );
}
