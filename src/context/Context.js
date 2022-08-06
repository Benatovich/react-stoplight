import React, { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [raceMode, setRaceMode] = useState(false);

    const toggleRaceMode = () => {
        setRaceMode(!raceMode);
    };

    return (
        <Context.Provider value={{raceMode, toggleRaceMode}} >
            {children}
        </Context.Provider>
    )
};

export {Context, ContextProvider};