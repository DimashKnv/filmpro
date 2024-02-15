import logoPng from "../assets/logo.png";

import { Search } from "./Search";

export function Navigation() {
  return (
    <nav>
      <img src={logoPng} alt="" />
      <div className="navSearch">
     <Search/>
      </div>

      <ul>
        <li>Home</li>
        <li>Registr</li>
        <li>Favorite</li>
      </ul>
    </nav>
  );
}
