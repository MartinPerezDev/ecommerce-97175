import { FaCartShopping } from "react-icons/fa6";
import "./cartwidget.css";

const CartWidget = () => {
  return (
    <div className="cartwidget">
      <FaCartShopping size={30} />
      <p>1</p>
    </div>
  )
}

export default CartWidget