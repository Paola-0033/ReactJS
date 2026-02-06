
import './ContenedorTarjeta.css';
import imgTarjeta from './assets/imgTarjeta.jpg';

function ContenedorTarjeta(){
    return(
        <div className="ContenedorTarjeta">
            <Tarjeta titulo="Java" descripcion= "Lenguaje de Programacion java muy bueno y facil de comprender :)"/>
            <Tarjeta titulo="Payton" descripcion="Python es un lenguaje de programación ampliamente utilizado en las aplicaciones web, el desarrollo de software, la ciencia de datos y el machine learning "/>
            <Tarjeta titulo="JavaScript" descripcion="JavaScript es un lenguaje de programación interpretado, orientado a objetos y de alto nivel, fundamental para el desarrollo web."/>
            <Tarjeta titulo="php" descripcion="lenguaje de programación de código abierto, interpretado y de propósito general, diseñado específicamente para el desarrollo web backend"/>

            
        </div>
    )

}
function Tarjeta(props){
    return(
        <div className="Tarjeta">
            <img src={imgTarjeta} alt="Imagen de la tarjeta"/>
            <h3>{props.titulo}</h3>
            <p> {props.descripcion}</p>
            <a href='#'>Leer mas...</a>
        </div>
    )
}
export default ContenedorTarjeta;