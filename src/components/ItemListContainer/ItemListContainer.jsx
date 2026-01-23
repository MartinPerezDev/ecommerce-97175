import { getProducts } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./itemlistcontainer.css";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error)=> {
        console.log(error);
      })
      .finally(()=> {
        setLoading(false)
      });

  }, []);

  return (
    <div className="itemlistcontainer">
      <h2>{saludo}</h2>
      {
        loading === true ? <div>Cargando...</div> : <ItemList products={products} />
      }
    </div>
  )
};

export default ItemListContainer;