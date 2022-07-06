import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react"

export const UrlBookContext = createContext({});

export const UrlBookProvider = ({children})=>{

    const [urlBook,setUrlBook] = useState('');

    return(
        <UrlBookContext.Provider value={{urlBook,setUrlBook}}>
            {children}
        </UrlBookContext.Provider>
    );
}

export const useUrlBook = () => useContext(UrlBookContext);