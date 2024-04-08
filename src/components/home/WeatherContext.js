import {createContext, useState} from 'react'


export const WeatherContext = createContext();


export const WeatherProvider = ({children}) => {
    const [weather, setWeather] = useState(null);
    const contextValue = {
        weather, setWeather
    }
  
    return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherContext
