import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, totalPrice, deleteCart } = useContext(CartContext);

  return (
    <div>
      {
        cart.map((productCart)=> (
          <div style={{ display: "flex", justifyContent: "space-between" }} >
            <img src={productCart.image} style={{ width: "150px" }} alt="" />
            <p>{productCart.name}</p>
            <p>Precio c/u: ${productCart.price}</p>
            <p>Cantidad: {productCart.quantity}</p>
            <p>Precio parcial: ${productCart.quantity * productCart.price}</p>
          </div>
        ))
      }

      <h2>Precio total: ${totalPrice()}</h2>
      <button onClick={deleteCart} >Vaciar carrito</button>
    </div>
  )
}

export default Cart