import React from 'react'

const DisplayWeather = ({weatherData}) => {
  return (
    <div>
      {weatherData && (
        <div className="flex justify-center items-center">
          <div className="flex items-center justify-center flex-col gap-8 h-[60vh] w-[90vw]" >
            <div className='flex flex-col gap-4 items-center'>
              <div className='flex gap-4 text-xl w-auto h-14 bg-lime-200 text-center p-3 rounded-md hover:bg-white'>
                <img src='location.svg' alt='Lotaction Icon' className='w-6 h-6 animate-bounce' /> {weatherData.name}, {weatherData.sys.country}
              </div>
              <span className='text-6xl'>{weatherData.main.temp}°C</span>
              <p className='text-xl'>Feels Like: {weatherData.main.feels_like}° C.</p>
            </div>
            <div className='flex'>
              <ul className=' list-none flex gap-4'>
                <li className='text-xl w-50 h-auto bg-lime-200 text-center p-3 rounded-md hover:bg-white' >Humidity: {weatherData.main.humidity}.</li>
                <li className='text-xl w-50 h-auto bg-lime-200 text-center p-3 rounded-md hover:bg-white'>Wind Speed: {weatherData.wind.speed}Km/h. </li>
                <li className='text-xl w-50 h-auto bg-lime-200 text-center p-3 rounded-md hover:bg-white'>Weather Type: {weatherData.weather[0].main}.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DisplayWeather