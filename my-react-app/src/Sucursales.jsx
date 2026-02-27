import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Sucursales.css';

function Sucursales() {
  const sucursales = [
    {
      id: 1,
      nombre: 'BMW México City',
      direccion: 'Paseo de la Reforma 505, Cuauhtémoc, CDMX',
      telefono: '+52 (55) 3000-0100',
      lat: 25.6866,
      lng: -100.3161,
      img: 'https://motormania.com.mx/wp-content/uploads/2022/06/P90468447_lowRes_cever-santa-fe-in-me.jpg'
    },
    {
      id: 2,
      nombre: 'BMW Monterrey',
      direccion: 'Avenida Paseo de los Leones 3000, Monterrey, NL',
      telefono: '+52 (81) 8888-0100',
      lat: 25.6867,
      lng: -100.3162,
      img: 'https://www.jornada.com.mx/ndjsimg/images/jornada/jornadaimg/bmw-motorrad-estrena-agencia-de-grupo-cever-en-santa-fe-7250/6-18-bmw-motorrad-estrena-agencia-de-grupo-cever-en-santa-fe-7250html-p90468457_highres_cever-santa-fe-in-mejpg-6710html-8aa29ad4-dfb4-471b-9c10-8f869eb62168.jpg'
    },
    {
      id: 3,
      nombre: 'BMW Guadalajara',
      direccion: 'Avenida México 2927, Guadalajara, Jalisco',
      telefono: '+52 (33) 3777-0100',
      lat: 25.6868,
      lng: -100.3163,
      img: 'https://www.wbm.cl/multimarca/site/artic/20211011/imag/foto_0000000420211011003415/Sucursales_-_La_Dehesa_-_IMG_-_731x477.jpg'
    }
  ];

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 23.6345,
    lng: -102.5528
  };

  return (
    <div className="sucursales">
      <h2>Nuestras Sucursales</h2>
      
      <div className="lista-sucursales">
        {sucursales.map((sucursal) => (
          <div key={sucursal.id} className="sucursal">
            <div className="sucursal-card">
              <img src={sucursal.img} alt={sucursal.nombre} />
              <div className="sucursal-info">
                <h3>{sucursal.nombre}</h3>
                <p className="direccion">
                  <strong>📍</strong> {sucursal.direccion}
                </p>
                <p className="telefono">
                  <strong>📞</strong> {sucursal.telefono}
                </p>
                <button className="btn-contactar">Contactar</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mapa-sucursales">
        <h2>Ubicación de Sucursales</h2>
        <LoadScript googleMapsApiKey="AIzaSyDummy">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={6}
          >
            {sucursales.map((sucursal) => (
              <Marker
                key={sucursal.id}
                position={{ lat: sucursal.lat, lng: sucursal.lng }}
                title={sucursal.nombre}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default Sucursales;