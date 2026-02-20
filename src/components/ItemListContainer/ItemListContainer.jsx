import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router";
import db from "../../db/db.js";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./itemlistcontainer.css";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  const getProducts = async () => {
    try {
      const productsRef = collection(db, "products");
      const dataDb = await getDocs(productsRef);
      const data = dataDb.docs.map((productDb) => {
        return {
          id: productDb.id,
          ...productDb.data()
        };
      });

      setProducts(data);
    } catch (error) {
      console.log("Error al traer los productos!");
    } finally {
      setLoading(false);
    }
  };

  const getProductsByCategory = async () => {
    try {
      const productsRef = collection(db, "products");
      const q = query(productsRef, where("category", "==", category));
      const dataDb = await getDocs(q);
      const data = dataDb.docs.map((productDb) => {
        return {
          id: productDb.id,
          ...productDb.data()
        };
      });

      setProducts(data);
    } catch (error) {
      console.log("Error al traer los productos por su categoria!");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);

    if (category) {
      //filtrar la data por categoria
      getProductsByCategory();
    } else {
      getProducts();
    }

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