import { Link } from "react-router-dom";

import MainPagePng from "../assets/MainPageTwo.png";
import AccountPng from "../assets/Account.png";
import LogoPng from "../assets/MainLogo.png";
import FavoritePng from "../assets/FavPng.png";

import { Search } from "./Search";


export function Navigation() {
  return (
    <nav>
      <Link><img src={LogoPng} alt="" /></Link>
      <div className="navSearch">
        <Search />
      </div>
      <div className="navIcons">
        <Link to="/favorites">
          <img src={FavoritePng} alt="" />
        </Link>
        <Link to="/Login">
          <img src={AccountPng} alt="" />
        </Link>
        <Link to="/">
          <img src={MainPagePng} alt="" />
        </Link>
      </div>
    </nav>
  );
}
