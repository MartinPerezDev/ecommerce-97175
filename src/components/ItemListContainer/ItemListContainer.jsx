import { getProducts } from "../../data/data.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router";
import "./itemlistcontainer.css";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((response) => {
        if(category){
          //filtrar por esa categoria
          const filteredProducts = response.filter( (product) => product.category === category );
          setProducts(filteredProducts);
        }else{
          //devolver toda la lista de productos
          setProducts(response);
        }
      })
      .catch((error)=> {
        console.log(error);
      })
      .finally(()=> {
        setLoading(false);
      });

  }, [category]);

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