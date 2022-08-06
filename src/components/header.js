import React, { useState } from 'react'

export default function header() {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className='header'>
        <h1>Poplight</h1>
        <h3>a better stoplight</h3>
    </div>
  )
}
