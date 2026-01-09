import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <nav className="nav">
      
      <div className="nav-brand" >
        <img src="" alt="" />        
      </div>

      <ul>
        <li>Teclados</li>
        <li>Mouse</li>
        <li>Microfonos</li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar