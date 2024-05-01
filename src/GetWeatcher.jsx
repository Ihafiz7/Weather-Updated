import React, { useContext } from 'react'
import DisplayWeather from './DisplayWeather';
import NoLocation from './NoLocation';
import { WeatherContext } from './Context';


const GetWeatcher = ({latitude, longitude }) => {

  const {weatherData,setWeatherData} = useContext (WeatherContext);

  React.useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey2 = '5bd9dd6a6a3595d95bd51a79749d1b4d';

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey2}&units=metric`
        );
        
        if(!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`)
        }
        const data = await response.json();
        setWeatherData(data);
      }

      catch(error){
        console.log(`HTTP ERROR: ${error.message}`)
      }
    };
    latitude && longitude && fetchWeatherData();

  },[latitude, longitude]);

  
  

  return (
    <div>
      {weatherData ? <DisplayWeather weatherData={weatherData} /> : <NoLocation /> }
    </div>
  )
}

export default GetWeatcher