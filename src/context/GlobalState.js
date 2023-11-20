import { createContext, useState, useContext } from "react";
import data from '../data.json'

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [jsonData, setJsonData] = useState(data);

    const addNewData = (newData) => {
        setJsonData(newData);
    };

    const updateNewData=(updateNewData)=>{
        setJsonData(updateNewData)
    }


    return (
        <GlobalContext.Provider value={{ jsonData, addNewData,updateNewData }}>
            {children}
        </GlobalContext.Provider>
    )
}

export function useData() {
    return useContext(GlobalContext)
}