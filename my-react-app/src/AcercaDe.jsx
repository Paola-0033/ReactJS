import "./AcercaDe.css";

function AcercaDe() {
    return(
       <section className="acercaDeDiv">
            <header className="acercaDeHero">
                <p className="acercaDeEtiqueta">Sobre la tienda</p>
                <h2>Acerca de Nosotros</h2>
                <p className="acercaDeLead">
                    Somos la sucursal mas grande de la ciudad con los mejores modelos de BMW que puedas imaginar.
                </p>
            </header>

            <div className="acercaDeGrid">
                <article className="acercaDeCard">
                    <h3>Mision</h3>
                    <p>
                        Ofrecer prendas modelos de gran calidad y comodidad y te hagan sentir comodo y seguro.
                    </p>
                </article>

                <article className="acercaDeCard">
                    <h3>Vision</h3>
                    <p>
                        Ser tu primera opcion en comodidad y seguridad para tu familia asi como en estilos y los mejores modelos , con las mejores colecciones y una mejor experiencia.
                    </p>
                </article>

                <article className="acercaDeCard">
                    <h3>Valores</h3>
                    <ul>
                        <li>Seguridad en todo momento .</li>
                        <li>Atencion cercana.</li>
                        <li>Estilos accesible.</li>
                        <li>Responsabilidad en procesos.</li>
                    </ul>
                </article>
            </div>

            <div className="acercaDeGrid secundaria">
                <article className="acercaDeCard">
                    <h3>Lo que nos inspira</h3>
                    <p>
                        Nos inspira la precisión que se siente al conducir, pasión por el diseño, potencia y perfección.
                    </p>
                </article>

                <article className="acercaDeCard">
                    <h3>Colecciones</h3>
                    <p>
                       Colecciones inspiradas en la perfección del movimiento.
                    </p>
                </article>

                <article className="acercaDeCard">
                    <h3>Equipo</h3>
                    <p>
                        Nuestro equipo está formado por personas apasionadas por la excelencia, el diseño y la innovación, comprometidas en ofrecer una experiencia BMW única en cada detalle.
                    </p>
                </article>
            </div>
        </section>
    );


}
export default AcercaDe;