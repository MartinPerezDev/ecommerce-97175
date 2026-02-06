import { createContext, useState } from "react";

const CartContext = createContext(null);


const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (newProduct) => {
    //evaluar si el producto esta en el carrito
    //si esta, solo sumar cantidades
    
    //si no esta, agregarlo como nuevo
    setCart([ ...cart, newProduct ]);
  };

  const totalQuantity = () => {
    const quantity = cart.reduce((total, productCart)=> total + productCart.quantity , 0);
    return quantity;
  }

  const totalPrice = () => {
    const price = cart.reduce((total, productCart)=> total + ( productCart.quantity * productCart.price ) , 0);
    return price;
  }

  const deleteCart = () => {
    setCart([]);
  }

  console.log(cart);

  return (
    <CartContext.Provider value={ { cart, addProduct, totalQuantity, totalPrice, deleteCart } } >
      { children }
    </CartContext.Provider>
  )
};

export { CartProvider, CartContext }