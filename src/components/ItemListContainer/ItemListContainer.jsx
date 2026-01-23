import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./itemlistcontainer.css";
import { getProducts, getProductById, addProduct, deleteProductById, setProductById } from "../../data/api.js"

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    getProducts()
      .then((data) => {
        setProducts(data);
      })

    getProductById(2)
      .then((data) => {
        console.log(data);
      })

  }, []);

  const newProduct = {
    name: "Teclado",
    description: "Teclado inalambrico",
    stock: 2,
    image: "",
    price: 500,
    category: "teclados"
  };

  const clickEvent = () => {
    /*
    addProduct(newProduct)
      .then((data)=> {
        console.log(data)
      })
    
    deleteProductById(1)
      .then((data)=> {
        console.log(data);
      })
    */
    setProductById(4, { price: 5200 })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className="itemlistcontainer">
      <h2>{saludo}</h2>
      <button onClick={clickEvent} >Editar Producto</button>
      <ItemList products={products} />
    </div>
  )
};

export default ItemListContainer;