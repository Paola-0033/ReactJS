import miLogo from './assets/BMW.svg';
import Facebook from './assets/Logo_de_Facebook.png';
import Instagram from './assets/instargram.jpg';
import Whatsapp from './assets/whatsapp.jpg';
import youtube from './assets/youtube.png';

import './Encabezado.css';

function Encabezado() {
    return (
        <div className="Encabezado">
            <Logo/>
            <Menu/>
            <RedesSociales/>
        
            <h2> Bienvenido a mi sitio web</h2>

        </div>
    );
}

function Logo(){
    return(
        <div className="Logo">
             <img src={miLogo} alt="React Logo" />
         </div>

    );
}

function Menu(){
    return(
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Producto</li>
                <li>Contacto</li>
                <li>Sucursales</li>
            </ul>
        </nav>
    );
}

function RedesSociales(){
    return(
        <div className="RedesSociales">
            <li><img src={Facebook} alt="Facebook" /></li>
            <li><img src={Instagram} alt="Instagram" /></li>
            <li><img src={Whatsapp} alt="Whatsapp" /></li>
            <li><img src={youtube} alt="youtube" /></li>
        </div>
    );

}

export default Encabezado;
