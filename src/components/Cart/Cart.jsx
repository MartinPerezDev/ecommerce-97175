import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsTrash3Fill } from "react-icons/bs";
import { Link } from "react-router";
import "./cart.css";

const Cart = () => {
  const { cart, totalPrice, deleteCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h2>No hay productos en el carrito 😢</h2>
        <Link to="/">Ir al inicio</Link>
      </div>
    )
  }

  return (
    <div className="cart">
      {
        cart.map((productCart) => (
          <div className="list-cart" >
            <img className="image-product-cart" src={productCart.image} alt="" />
            <p>{productCart.name}</p>
            <p>Precio c/u: ${productCart.price}</p>
            <p>Cantidad: {productCart.quantity}</p>
            <p>Precio parcial: ${productCart.quantity * productCart.price}</p>
          </div>
        ))
      }

      <h2>Precio total: ${totalPrice()}</h2>
      <button className="empty-cart" onClick={deleteCart} ><BsTrash3Fill />Vaciar carrito</button>

      <br />
      <Link to="/checkout" >Continuar con mi compra</Link>
    </div>
  )
}

export default Cart