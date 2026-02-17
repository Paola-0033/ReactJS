// 20.276322938009834, -97.95835026515141 
import { useEffect, useState} from 'react';

function Clima() {
    const [clima, setClima] = useState(null);
    const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
    console.log(API_KEY);
    const lat=20.276322938009834;
    const lng=-97.95835026515141;

    useEffect(() =>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=es`)
        .then((res)=> res.json())
        .then((data) => {
         console.log(data);
         setClima(data);
        })
        .catch((error) => console.error('Error al obtener el clima:', error));

    },[]);

    

        return(
            <div className='divClima'>
                {
                    clima ? (
                        <>
                        <p>{clima.name} Temp: {clima.main.temp}°C / Hum: {clima.main.humidity}%</p>
                        <p>Descripcion : {clima.weather.description}</p>
                        </>
                    ) : (
                        <p>Cargando clima...</p>
                    )
                }

            </div>
        )

    
     
    }

    export default Clima;  