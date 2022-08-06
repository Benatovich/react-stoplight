import React, { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [raceMode, setRaceMode] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleRaceMode = () => {
        setRaceMode(!raceMode);
    };
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <Context.Provider value={{raceMode, toggleRaceMode, darkMode, toggleDarkMode}} >
            {children}
        </Context.Provider>
    )
};

export {Context, ContextProvider};