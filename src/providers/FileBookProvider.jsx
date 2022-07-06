import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react"

export const FileBookContext = createContext({});

export const FileBookProvider = ({children})=>{

    const [fileBook,setFileBook] = useState('');

    return(
        <FileBookContext.Provider value={{fileBook,setFileBook}}>
            {children}
        </FileBookContext.Provider>
    );
}

export const useFileBook = () => useContext(FileBookContext);