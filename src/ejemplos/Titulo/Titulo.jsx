import "./titulo.css";
import banner from "../../img/react-banner.webp";

const Titulo = () => {

  return (
    <div className="titulo">
      <img className="titulo-banner" src={banner} alt="" />
      <h2 className="titulo-h2" >Bienvenidos al curso de React!</h2>
    </div>
  )
};

export default Titulo;