import React from 'react'
import Header from './Header'
import GetLocation from './GetLocation'
import DisplayWeather from './DisplayWeather'
import { ContextProvider } from './Context'


const App = () => {
  return (
    <div>
      <ContextProvider>
        <Header />
        <GetLocation />
        <DisplayWeather />
      </ContextProvider>
    </div>
  )
}

export default App