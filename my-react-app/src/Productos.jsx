import { useEffect, useState } from 'react';  
import api from './Services/api';
import './Productos.css';
import { formToJSON } from 'axios';

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
      <h2>Nuestros Productos</h2>
      {productos.map((producto)=>(
        <div key={producto.id}>
          <p>{producto.title}</p> 
          <p>{producto.prince}</p>
          <img src={producto.image}/>

        </div>
        //card terminan aqui
        
      ))}

      </div>

  );
}

export default Productos;