import { useState } from "react";
import "./itemcount.css";

const ItemCount = ({ stock, addToCart }) => {
  const [count, setCount] = useState(1);

  const subtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="itemcount">
      <div className="controls-itemcount">
        <button className="button-control-itemcount" onClick={subtract} >-</button>
        <p className="value-itemcount">{count}</p>
        <button className="button-control-itemcount" onClick={add} >+</button>
      </div>

      <button className="addcart-itemcount" onClick={() => addToCart(count)} >Agregar al carrito</button>
    </div>
  )
}

export default ItemCount