import { GoogleMap, LoadScript, Marker}from '@react-google-maps/api';
import { defaultFieldResolver } from 'graphql';
const containerStyle = {
    width: '100%',
    height: '360px'
};
function MapaGeoLocalizacion (){
    const [ ubicacion, setUbicacion ]= useState(null);
    useEfect(()=>{
        navigator.geolocation.getCurrentPosition(
            (position)=>{
               setUbicacion({
                 lat: position.coords.latitude,
                 ing: position.coords.longitude
                })

            },
            (error)=> console.error(error),
            {enableHighAccuracy:true}
        
        )   
    },[])
     return(
        <LoadScript GoogleMapsApikey={import.meta.env.VITE.GOOGLE_MAPS_API_KEY}>
            {
                ubicacion&& (
                    <GoogleMap
                    mapaContainerStyle={containerStyle}
                    center={ubicacion}
                    zoom={15}>
                        <marker position={ubicacion}/>
                    </GoogleMap>
                )
            }
        </LoadScript>
     )
}
 export default MapaGeoLocalizacion;
