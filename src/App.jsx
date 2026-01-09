import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ContadorContainer from './ejemplos/ContadorContainer';

function App() {

  const saludar = () => {
    alert("Hola mundooo!");
  }

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo={"Hola Mundo"} despedida={"Chau Mundo"} saludar={saludar} />
      <ContadorContainer />
    </div>
  )
}

export default App
