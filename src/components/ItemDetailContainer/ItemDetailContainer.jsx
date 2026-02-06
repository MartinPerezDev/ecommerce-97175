import { useState, useEffect } from "react"
import { getProductById } from "../../data/data.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import "./itemdetailcontainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
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