import { getProducts } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    getProducts()
      .then((response) => {
        setProducts(response);
      });

  }, []);

  return (
    <div>
      <h2>{saludo}</h2>
      <ItemList products={products} />
    </div>
  )
};

export default ItemListContainer;