import React from 'react'
import { useContext } from 'react';
import { WeatherContext } from './Context';

const From = () => {
    const [placeholder, setPlaceholder] = React.useState('');
    const {cityInput, setCityInput} = useContext(WeatherContext);
    const { setWeatherData } = useContext(WeatherContext);

    const CityName = async(event) => {
        event.preventDefault();
        const apiKey2 = '5bd9dd6a6a3595d95bd51a79749d1b4d';
        try {
            const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey2}&units=metric`
            );
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
    
            const data = await response.json();
            setWeatherData(data);
        }
        catch(error) {
            console.log(error.message);
        }
        setCityInput('');
        document.getElementById('input').blur();
      }
  return (
    <>
        <div className='flex items-center sm:gap-2 md:gap-3 xl:gap-4 overflow-hidden'>
        <form onSubmit={CityName} className='flex items-center justify-center gap-4'>
          <div className='flex items-center justify-center border-2 p-2 rounded-md'>
            <input  
            type='text'
            id='input'
            placeholder={placeholder}
            value={cityInput}
            onChange={(event) => setCityInput(event.target.value)}
            onFocus={() => setPlaceholder('')}
            onBlur={() => setPlaceholder('Enter Location')}
            className= 'rounded focus:outline-none'></input>
            <img src='search.svg' alt='Location Icon' className='w-8 h-8' />
          </div>
          <button type='submit' className='border-2 sm:p-1 md:p-2 xl:p-3 rounded-md bg-blue-400 text-center sm:font-normal md:font-medium xl:font-semibold hover:bg-lime-200'>Get Weather</button>
        </form>
      </div>
    </>
  )
}

export default From