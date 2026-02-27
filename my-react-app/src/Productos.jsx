import { useEffect, useState } from 'react';
import api from './Services/api';
import './Productos.css';
import { formToJSON } from 'axios';
import Registrarroducto from './resgistrarProducto';

function Productos() {
  const [productos, setProductos]= useState([]);
  const[cargando,setCargando] = useState(true);

  useEffect(()=>{
    const obtenerProductos = async ()=> {
      try{
        const response = await api.get('/products');
        setProductos(response.data);
      }catch(error){
         console.error('error al obtener productos:',error);
      } finally{
        setCargando(false);
      }
         

    };
    obtenerProductos();
    
    
  },[]);

 if(cargando)return<p>Cargando productos...</p>
  return (
    <div className="productos">
      {/* R  nuevos productos */}
      <Registrarroducto />
   
      <h2>Nuestros Productos</h2>
      <div className="grid-productos">
        {productos.map((producto)=>(
          <div key={producto.id} className="card-producto">
            <img src={producto.image} alt={producto.title}/>
            <h3>{producto.title}</h3> 
            <p>{producto.description}</p>
            <span>${producto.prince}</span>
            <div className="card-actions">
              <button className="btn-agregar">Agregar al carrito</button>
              <button
                className="btn-eliminar"
                onClick={() => {
                  
                  setProductos((prev) => prev.filter((p) => p.id !== producto.id));
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;