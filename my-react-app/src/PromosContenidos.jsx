import MapaGeoLocalizacion from './MapaGeoLocalizacion';
import './PromosContenido.css';
function PromosContenido(){
    return(
        <div className='promosContenido'> 
        <h2>Promociones</h2>
        <p>Estas son las mejores promociones y descuentos en autos y camionetas 2026 aprobecha </p>
        <MapaGeoLocalizacion/>
        </div>
    )
}
export default PromosContenido;