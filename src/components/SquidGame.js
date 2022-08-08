import React, { useState, useContext } from 'react'
import greenToRed from '../assets/squid-game-green-to-red.gif'
import redToGreen from '../assets/squid-game-red-to-green.gif'


export default function SquidGame() {
    const [doll, setDoll] = useState(false)

    function toggleDoll() {
        setDoll(!doll)
    }
  return (
    <div className='squid-container'>
        <h3 className='game-announcer'>
            {doll ? 'Red Light!' : 'Green Light!'}
        </h3>
        <img style={{width: 300}} src={doll ? greenToRed : redToGreen} />

        <button onClick={toggleDoll} className="button doll">
            Change
        </button>
    </div>
  )
}
