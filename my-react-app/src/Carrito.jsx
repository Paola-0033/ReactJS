import { useEffect, useState } from "react";
import "./Carrito.css";

function Carrito() {
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    importarCartsApi();
  }, []);

  const eliminarProducto = (ordenIndex, productIndex) => {
    const nuevasOrdenes = [...ordenes];
    nuevasOrdenes[ordenIndex].products.splice(productIndex, 1);
    setOrdenes(nuevasOrdenes);
  };

  const eliminarOrden = (ordenIndex) => {
    const nuevasOrdenes = ordenes.filter((_, index) => index !== ordenIndex);
    setOrdenes(nuevasOrdenes);
  };

  const importarCartsApi = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/carts");
      const data = await res.json();

      setOrdenes(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="carrito-contenedor">
      <h2>Carrito de compras</h2>

      <div className="cards">
        {ordenes.map((orden, index) => (
          <div className="card" key={orden.id}>
            
            <div className="numero">{index + 1}</div>

            <div className="fecha">
              {orden.date}
            </div>

            <div className="titulo">Productos</div>

            <ul>
              {orden.products.map((prod, i) => (
                <li key={i} className="producto-item">
                  Producto #{prod.productId} — Cantidad {prod.quantity}
                  <button 
                    className="btn-eliminar-producto"
                    onClick={() => eliminarProducto(ordenes.indexOf(orden), i)}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>

            <button className="btn-comprar">
              Comprar
            </button>
            <button 
              className="btn-eliminar"
              onClick={() => eliminarOrden(ordenes.indexOf(orden))}
            >
              Eliminar
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrito;