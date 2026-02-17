import { useState } from "react";
import ContenedorTarjeta from "./ContenedorTarjeta";
import Encabezado from "./Encabezado";
import PieComponente from "./PieComponente";
import PromosContenido from "./PromosContenidos";
import { useState } from "react";

function App(){
  const [vista, setVista] = useState("Inicio");
  const esInicio = vista === "Inicio";
 
  return(
  <div>
    <Encabezado cambiarVista={setVista}/>
    <ContenedorTarjeta vista={vista}/>
    <PromosContenido/>
     {esInicio && <PromosContenido/>}
    <PieComponente/>
    </div>
  )
   
}

App.propTypes = {
  vista: PropTypes.string.isRequired
};

export default App;
