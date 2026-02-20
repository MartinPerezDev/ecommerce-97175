import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import db from "../../db/db.js";
import { doc, getDoc } from "firebase/firestore";
import "./itemdetailcontainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  const getProduct = async () => {
    try {
      const docRef = doc(db, "products", productId);
      const dataDb = await getDoc(docRef);
      const data = { id: dataDb.id, ...dataDb.data() };

      setProduct(data);
    } catch (error) {
      console.log("Error al traer el producto por id!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [productId]);

  return (
    <div className="itemdetailcontainer">
      {
        loading === true ? <div>Cargando...</div> : <ItemDetail product={product} />
      }
    </div>
  )
}

export default ItemDetailContainer