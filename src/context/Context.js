import React, { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [squidMode, setSquidMode] = useState(false);
    const [customMode, setCustomMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleSquidMode = () => {
        setSquidMode(!squidMode);
    };

    const toggleCustomMode = () => {
        setCustomMode(!customMode);
    };


    return (
        <Context.Provider 
            value={{darkMode, toggleDarkMode, 
                squidMode, toggleSquidMode,
                customMode, toggleCustomMode}} >
            {children}
        </Context.Provider>
    )
};

export {Context, ContextProvider};