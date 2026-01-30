
import './ContenedorTarjeta.css';
import imgTarjeta from './assets/imgTarjeta.jpg';

function ContenedorTarjeta(){
    return(
        <div className="ContenedorTarjeta">
            <Tarjeta/>
            <Tarjeta/>
            <Tarjeta/> 
            <Tarjeta/>

            
        </div>
    )

}
function Tarjeta(){
    return(
        <div className="Tarjeta">
            <img src={imgTarjeta} alt="Imagen de la tarjeta"/>
            <h3>Apartado de la tarjeta</h3>
            <p> Descripcion del contenido de esta tarjeta :3 </p>
            <a href='#'>Leer mas...</a>
        </div>
    )
}
export default ContenedorTarjeta;