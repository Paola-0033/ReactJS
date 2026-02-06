

import AcercaDe from './AcercaDe';
import './ContenedorTarjeta.css';
import PropTypes from 'prop-types';

function ContenedorTarjeta({vista}) {
    const vistas = {
        "Inicio": <Inicio/>,
        "Acerca de": <AcercaDe/>
    }
    return(
        <div className="ContenedorTarjeta">
            {vistas[vista] || <Inicio />}/
            
            
        </div>
    ) 

}

function Inicio(){
    return(
        <>
        <Tarjeta titulo="BMW por Series" descripcion= "Sedanes y coupés elegantes, deportivos y cómodos para el día a día." imagen="https://i0.wp.com/minutomotor.com.ar/wp-content/uploads/2018/10/BMWSerie3-02102018-09.jpg?resize=829%2C548&ssl=1"/>
            <Tarjeta titulo="BMW SUV / X" descripcion="SUVs potentes y versátiles, ideales para ciudad y aventura." imagen="https://acnews.blob.core.windows.net/imgnews/medium/NAZ_602c68e3dbe941c591af36e071cb5e58.jpg"/>
            <Tarjeta titulo="BMW Eléctricos" descripcion="Movilidad eléctrica con diseño moderno y tecnología avanzada." imagen="https://media.wired.com/photos/5ae0d516c6901c5ee08405a9/16:9/w_2400,h_1350,c_limit/BMW_P90301499-highRes.jpg"/>
            <Tarjeta titulo="BMW Deportivos M" descripcion="Máximo rendimiento, potencia extrema y espíritu de competición." imagen="https://acnews.blob.core.windows.net/imgnews/large/NAZ_94f980bc5f164650bca8ff952d137dde.jpg"/>
       </>
    )
}
function Tarjeta(props){
    return(
        <div className="Tarjeta">
            <img src={props.imagen} alt="Imagen de la tarjeta"/>
            <h3>{props.titulo}</h3>
            <p> {props.descripcion}</p>
            <a href='#'>Leer mas...</a>
        </div>
    )
}
ContenedorTarjeta.propTypes = {
    vista: PropTypes.string.isRequired
}
export default ContenedorTarjeta;