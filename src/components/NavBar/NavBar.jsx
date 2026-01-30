import CartWidget from "../CartWidget/CartWidget"
import logo from "../../img/logo.png";
import { Link, NavLink } from "react-router";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>

      <ul className="categories">
        <NavLink to="/category/streaming" className="category" >Streaming</NavLink>

        <NavLink to="/category/mouse" className="category" >Mouse</NavLink>

        <NavLink to="/category/auriculares" className="category" >Auriculares</NavLink>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar