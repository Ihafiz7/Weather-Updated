import React from "react";

const WeatherContext = React.createContext();

function ContextProvider ({children}) {
    const [weatherData, setWeatherData] = React.useState();
    const [cityInput, setCityInput] = React.useState('');

    const formInput = (event) => {
        setCityInput(event.targate.value)
    }

    const value = { weatherData, setWeatherData, cityInput, setCityInput, formInput };

    return (
        <WeatherContext.Provider value={value}>
            {children}
        </WeatherContext.Provider>
    )
    
}

export {WeatherContext, ContextProvider} ;