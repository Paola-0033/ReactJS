import { useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '350px'
};

function MapaGeolocalizacion(){
  const [ubicacion, setUbicacion] = useState(null);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUbicacion({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      },
      (error)=> console.error(error),
      { enableHighAccuracy: true }
    )
  },[]);

  return (
    ubicacion && (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={ubicacion}
        zoom={15}
      >
        <Marker position={ubicacion}/>
      </GoogleMap>
    )
  );
}

export default MapaGeolocalizacion;