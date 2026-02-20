import { useState } from "react";
import { LoadScript } from "@react-google-maps/api";

import Encabezado from "./Encabezado";
import ContenedorTarjeta from "./ContenedorTarjeta";
import PieComponente from "./PieComponente";
import PromosContenido from "./PromosContenidos";

function App(){
  const [vista, setVista] = useState("Inicio");
  const esInicio = vista === "Inicio";

  return(
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div>
        <Encabezado cambiarVista={setVista}/>
        <ContenedorTarjeta vista={vista}/>
        
        {esInicio && <PromosContenido/>}

        <PieComponente/>
      </div>
    </LoadScript>
  )
}

export default App;