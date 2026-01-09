import { useState } from "react";
import Contador from "./Contador";

const ContadorContainer = () => {
  //let contador = 1;
  //const [ variableEstado, funcionParaActualizar ] = useState(valorInicial);
  const [ contador, setContador ] = useState(1);

  const aumentar = () => {
    //contador = contador + 1;
    setContador( (prevState) => prevState + 1 );
  }

  return (
    <Contador contador={contador} aumentar={aumentar} />
  )
}

export default ContadorContainer