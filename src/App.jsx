import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer saludo={"Bienvenidos a Redragon Ecommerce"} />} />
        <Route path="/category/:category" element={<ItemListContainer saludo={"Bienvenidos a Redragon Ecommerce"} />} />
        <Route path="/detail/:productId" element={<ItemDetailContainer />} />

        <Route path="*" element={<div>404 not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
