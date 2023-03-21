import { createContext, useState } from "react";

export const ContextWeatherData = createContext()

export const ContextWeatherDataProvider = (props) => {
    const [weatherData, setWeatherData] = useState()

    return (
        <ContextWeatherData.Provider value={[weatherData, setWeatherData]}>
            {props.children}
        </ContextWeatherData.Provider>
    )
}