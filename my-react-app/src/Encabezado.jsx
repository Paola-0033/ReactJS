import miLogo from './assets/BMW.svg';
import Facebook from './assets/Logo_de_Facebook.png';
import Instagram from './assets/ig2.jpg';
import Whatsapp from './assets/whatsapp.jpg';
import youtube from './assets/youtube.png';

import './Encabezado.css';

function Encabezado() {
    return (
        <div className="Encabezado">
            <Logo/>
            <Menu/>
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

function Menu(){
    return(
        <div className="menuDiv">
            <ul>
                <li><a href='#'>Inicio</a></li>
                <li><a href='#'>Acerca de</a></li>
                <li><a href='#'>Producto</a></li>
                <li><a href='#'>Contacto</a></li>
                <li><a href='#'>Sucursales</a></li>
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
        </div>
    );

}

export default Encabezado;
