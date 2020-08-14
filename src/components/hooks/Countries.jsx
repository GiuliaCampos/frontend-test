import React, {createContext, useContext, useState} from 'react';

const CountriesContext = createContext();

export const CountriesProvider = ({children}) => {
    const [countriesAdd, setCountriesAdd] = useState([]);
    return(
        <CountriesContext.Provider value={{countriesAdd, setCountriesAdd}}>
            {children}
        </CountriesContext.Provider>
    )
}

export function useCountries(){
    const context = useContext(CountriesContext);
    return(
        context
    )
}