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
      img: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      nombre: 'BMW Monterrey',
      direccion: 'Avenida Paseo de los Leones 3000, Monterrey, NL',
      telefono: '+52 (81) 8888-0100',
      lat: 25.6867,
      lng: -100.3162,
      img: 'https://images.unsplash.com/photo-1617469767537-b85461a484b7?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      nombre: 'BMW Guadalajara',
      direccion: 'Avenida México 2927, Guadalajara, Jalisco',
      telefono: '+52 (33) 3777-0100',
      lat: 25.6868,
      lng: -100.3163,
      img: 'https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=400&h=300&fit=crop'
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