import miLogo from './assets/BMW.svg';
import Facebook from './assets/Logo_de_Facebook.png';
import Instagram from './assets/ig2.jpg';
import Whatsapp from './assets/whatsapp.jpg';
import youtube from './assets/youtube.png';
import PropTypes from 'prop-types';
import './Encabezado.css';
import Clima from './Clima';


function Encabezado({cambiarVista}) {
    return (
        <div className="Encabezado">
            <Logo/>
            <Menu cambiarVista={cambiarVista} />
            <RedesSociales/>
            
    

        </div> 
    );
}

function Logo(){
    return(
        <div className="LogoDiv">
             <img src={miLogo} alt="React Logo" />
         </div>

    );
}

function Menu({cambiarVista}){
    return(
        <div className="menuDiv">
            <ul>
                <li onClick={() => cambiarVista("Inicio")}>Inicio</li>
                <li onClick={() => cambiarVista("Acerca de")}>Acerca de</li>
                <li onClick={() => cambiarVista("Producto")}>Producto</li>
                <li onClick={() => cambiarVista("Galeria")}>Galeria</li>
                <li onClick={() => cambiarVista("Sucursales")}>Sucursales</li>
                <li onClick={() => cambiarVista("Contacto")}>Contacto</li>
                
            </ul>
           
        </div>
    );
}

function RedesSociales(){
    return(
        <div className="RedesDiv">
            <ul>

            <li><a href="#"><img src={Facebook} alt="Facebook" /></a></li>
            <li><a href="#"><img src={Instagram} alt="Instagram" /></a></li>
            <li><a href="#"><img src={Whatsapp} alt="Whatsapp" /></a></li>
            <li><a href="#"><img src={youtube} alt="youtube" /></a></li>

            </ul>
             <Clima/>
        </div>
    );

}
 Menu.propTypes = {
    cambiarVista: PropTypes.func.isRequired
 }
Encabezado.propTypes = {
    cambiarVista: PropTypes.func.isRequired
}

export default Encabezado;
