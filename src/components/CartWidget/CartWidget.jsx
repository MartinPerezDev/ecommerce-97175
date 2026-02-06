import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router";
import "./cartwidget.css";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="cartwidget">
      <FaCartShopping size={30} />
      <p className="notification-cartwidget">{ totalQuantity() }</p>
    </Link>
  )
}

export default CartWidget