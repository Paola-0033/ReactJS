import './Productos.css';

function Productos() {
  return (
    <section className="productos">
      <h2>Nuestros Productos</h2>

      <div className="grid-productos">
        <div className="card-producto">
          <img src="https://i.pinimg.com/1200x/ae/ab/f3/aeabf3db3cae2d105785a1c3473fedd8.jpg" />
          <h3>BMW Carro </h3>
          <p>Modelo i5 Bmw.</p>
          <span>$299,000,00 MXN</span>
          <button>Comprar</button>
        </div>

        <div className="card-producto">
          <img src="https://mx.pinterest.com/pin/76068681202291129/" />
          <h3> BMW Camioneta</h3>
          <p>XM Modelo M </p>
          <span>$499,000,00 MXN</span>
          <button>Comprar</button>
        </div>

        <div className="card-producto">
          <img src="https://i.pinimg.com/1200x/47/fe/31/47fe31fda7001458b3ea410fcf2506c5.jpg" />
          <h3>BMW Camioneta</h3>
          <p>X5 Modelo M</p>
          <span>$599,000,00 MXN</span>
          <button>Comprar</button>
        </div>
      </div>
    </section>
  );
}

export default Productos;