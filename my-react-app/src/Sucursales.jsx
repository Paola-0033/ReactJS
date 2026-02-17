import './Sucursales.css';

function Sucursales() {
  return (
    <section className="sucursales">
      <h2>Nuestras Sucursales BMW</h2>

      <div className="lista-sucursales">
        <div className="sucursal">
          <img src="https://i.pinimg.com/736x/e5/9e/48/e59e483f6e4023b7ff594aa176c3d73a.jpg" />
          <h3>Sucursal Centro</h3>
          <p>Av. Principal #123</p>
        </div>

        <div className="sucursal">
          <img src="https://i.pinimg.com/736x/2e/c2/46/2ec2469bf336996f7a687af5db764626.jpg" />
          <h3>Sucursal sur</h3>
          <p>Calle Comercial #456</p>
        </div>
      </div>
    </section>
  );
}

function TarjetaSucursal({ nombre, direccion, telefono, imagen, latitud, longitud }) {
  return (
    <article className="sucursal">
      {imagen ? <img src={imagen} alt={`Logo de ${nombre}`} /> : null}
      <h3>{nombre}</h3>
      <p className="direccion">{direccion}</p>
      <Mapa lat={latitud} lng={longitud} nombre_sucursal={nombre} />
      <p>{telefono}</p>
      <a href="#">Ver mas</a>
    </article>
  );
}

export default Sucursales;