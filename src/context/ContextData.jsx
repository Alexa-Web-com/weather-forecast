import { createContext, useState } from "react";

export const ContextData = createContext()

export const ContextDataProvider = (props) => {
    const [data, setData] = useState()

    return (
        <ContextData.Provider value={[data, setData]}>
            {props.children}
        </ContextData.Provider>
    )
}