import React, { useState } from 'react'
import poplightRed from '../assets/poplight-red.png'
import poplightYellow from '../assets/poplight-yellow.png'
import poplightGreen from '../assets/poplight-green.png'
import poplightOff from '../assets/poplight-off.png'

export default function Stoplight({ id }) {
    const [color, setColor] = useState('red')

    function handleClick() {
        if(color === 'red'){
            setColor('yellow')
        } else
        if(color === 'yellow'){
            setColor('green')
        } else
        if(color === 'green'){
            setColor('red')
        }
    }

  return (
    <div className="stoplight" id={id}>
        <img className='red signal' alt='traffic signal light shaped like the Pop Art, Inc. logo' src={ color === 'red' ? poplightRed : poplightOff } />
        <img className='yellow signal' alt='traffic signal light shaped like the Pop Art, Inc. logo' src={ color === 'yellow' ? poplightYellow : poplightOff } />
        <img className='green signal' alt='traffic signal light shaped like the Pop Art, Inc. logo' src={ color === 'green' ? poplightGreen : poplightOff } />

        <input onClick={handleClick} type="button" className="button change" value="Change"></input>
    </div>
  )
}
