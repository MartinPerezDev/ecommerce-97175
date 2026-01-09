const Contador = ({ contador, aumentar }) => {
  return (
    <div>
      <button>-</button>
      <p>{contador}</p>
      <button onClick={aumentar} >+</button>
    </div>
  )
}

export default Contador