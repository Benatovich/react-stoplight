import React, { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
    // const [raceModeAll, setRaceModeAll] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    // const toggleRaceModeAll = () => {
    //     setRaceModeAll(!raceModeAll);
    // };
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <Context.Provider value={{darkMode, toggleDarkMode}} >
            {children}
        </Context.Provider>
    )
};

export {Context, ContextProvider};