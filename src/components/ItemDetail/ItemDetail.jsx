const ItemDetail = ({ product }) => {
  return (
    <div className="itemdetail">
      <img src={product.image} alt="" />
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  )
}

export default ItemDetail