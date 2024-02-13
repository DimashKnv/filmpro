import logoPng from "../assets/logo.png";

export function Navigation() {
  return (
    <nav>
      <img src={logoPng} alt="" />
      <ul>
        <li>Home</li>
        <li>Registr</li>
        <li>Favorite</li>
      </ul>
    </nav>
  );
}
