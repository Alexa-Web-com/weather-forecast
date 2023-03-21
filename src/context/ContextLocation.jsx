import { createContext, useEffect, useState } from "react";

export const ContextLocation = createContext()

export const ContextLocationProvider = (props) => {
    const [location, setLocation] = useState(JSON.parse(localStorage.getItem('location'))
        ||
    {
        city: '',
        latitude: '',
        longitude: '',
        countryCode: '',
    })

    return (
        <ContextLocation.Provider value={[location, setLocation]}>
            {props.children}
        </ContextLocation.Provider>
    )

}