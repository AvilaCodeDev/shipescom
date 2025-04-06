import React, { createContext, useContext } from "react";

const GeneralContext = createContext({});

export const GeneralContextProvider:React.FC<{ children: React.ReactNode}> = ({ children }) => {
    const datos = {

    };
    
    return(
        <GeneralContext.Provider value={ datos }>{ children }</GeneralContext.Provider>
    )
}

export const useGeneralContext = () => useContext( GeneralContext );