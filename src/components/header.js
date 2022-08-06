import React, { useState, useContext } from 'react'
import { Context } from '../context/Context'

export default function header() {
    const {raceMode, toggleRaceMode, 
        darkMode, toggleDarkMode} = useContext(Context);

  return (
    <div className={darkMode ? 'header dark' : 'header light'}>
        <div className='title-container'>
            <h1 className='title'>Poplight</h1>
            <h3 className='title'>a better stoplight</h3>
        </div>
        <div className='button-container'>
            <button onClick={toggleRaceMode} type='button' className='button race'>Turn Racing Mode {raceMode ? 'off' : 'on'} 🏁</button>
            <button onClick={toggleDarkMode} type='button' className='button race'>Turn Dark Mode {darkMode ? 'off' : 'on'}</button>
        </div>
    </div>
  )
}
