import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Sucursales.css';

// Icono para los marcadores
const markerIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  shadowSize: [41, 41]
});

function Sucursales() {

  const sucursales = [
    {
      id: 1,
      nombre: 'BMW México City',
      direccion: 'Paseo de la Reforma 505, Cuauhtémoc, CDMX',
      telefono: '+52 (55) 3000-0100',
      lat: 19.4326,
      lng: -99.1332,
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
      lat: 20.6595,
      lng: -103.2494,
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
                <div>
                  <h3>{sucursal.nombre}</h3>
                  <p className="direccion">
                    <strong>📍</strong> {sucursal.direccion}
                  </p>
                  <p className="telefono">
                    <strong>📞</strong> {sucursal.telefono}
                  </p>
                  <div className="sucursal-mapa-container">
                    <MapContainer 
                      center={[sucursal.lat, sucursal.lng]} 
                      zoom={13} 
                      scrollWheelZoom={false}
                      className="map-leaflet"
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={[sucursal.lat, sucursal.lng]} icon={markerIcon}>
                        <Popup>{sucursal.nombre}</Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                </div>
                <button className="btn-contactar">Contactar</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mapa-sucursales">
        <h2>Ubicación de Sucursales</h2>
        <MapContainer 
          center={[center.lat, center.lng]} 
          zoom={5} 
          scrollWheelZoom={true}
          className="map-general"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {sucursales.map((sucursal) => (
            <Marker key={sucursal.id} position={[sucursal.lat, sucursal.lng]} icon={markerIcon}>
              <Popup>{sucursal.nombre}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default Sucursales;