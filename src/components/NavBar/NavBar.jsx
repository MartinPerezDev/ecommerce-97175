import CartWidget from "../CartWidget/CartWidget"
import logo from "../../img/logo.png";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>

      <ul className="categories">
        <li to="/category/teclados" className="category" >Teclados</li>

        <li to="/category/mouse" className="category" >Mouse</li>

        <li to="/category/auriculares" className="category" >Auriculares</li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar