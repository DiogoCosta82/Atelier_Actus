import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <div className="menuContainer">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Rechercher</Link>
      </nav>
    </div>
  );
}

export default Menu;
