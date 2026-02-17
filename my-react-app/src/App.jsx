import { useState } from "react";
import ContenedorTarjeta from "./ContenedorTarjeta";
import Encabezado from "./Encabezado";
import PieComponente from "./PieComponente";
import PromosContenido from "./PromosContenidos";


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



export default App;
