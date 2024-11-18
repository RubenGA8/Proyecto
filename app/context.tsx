import { Children, createContext, useState } from 'react'

export const ContextEncuesta = createContext(
    {
        encuesta:{},
        setEncuesta:()=>{},
    }
)

export const ContextEncuestaProvider = ({children}) => {
    const [encuesta, setEncuesta] = useState({});

    return (
        <ContextEncuesta.Provider value={{encuesta, setEncuesta}}>
            {children}
        </ContextEncuesta.Provider>
    )
}