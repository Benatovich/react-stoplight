import React, { useContext } from 'react'
import { Context } from '../context/Context'
import '../App.css'

export default function header() {
    const {darkMode, toggleDarkMode, 
      customMode, toggleCustomMode, 
      squidMode, toggleSquidMode} = useContext(Context);

  return (
    <div className={darkMode ? 'header dark' : 'header light'}>
        <div className='title-container'>
            <h1 className='title'>{squidMode ? 'Squidlight' : 'Poplight'}</h1>
            <h3 className='title'>{squidMode ? 'a different stoplight' : 'a better stoplight'}</h3>
        </div>
        <div className='button-container'>
            <button 
              onClick={toggleSquidMode} 
              type='button' 
              className='button squid'>
                Turn Squid Mode {squidMode ? 'off' : 'on'} 
            </button>
            <button 
              onClick={toggleDarkMode} 
              type='button' 
              className='button race'>
                Turn Dark Mode {darkMode ? 'off' : 'on'}
            </button>
            <button 
              style={{ display: squidMode ? 'none' : 'flex'}}
              onClick={toggleCustomMode} 
              type='button' 
              className='button custom'>
                Turn Custom Mode {customMode ? 'off' : 'on'}
            </button>
        </div>
    </div>
  )
}
