const Item = ({ product }) => {
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.stock}</p>
    </div>
  )
}

export default Item