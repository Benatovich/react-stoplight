import React, { useState } from 'react'

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
        <div style={{ background: color === 'red' ? 'red' : 'grey' }} className="red signal off"></div>
        <div style={{ background: color === 'yellow' ? 'yellow' : 'grey' }}className="yellow signal off"></div>
        <div style={{ background: color === 'green' ? 'green' : 'grey' }}className="green signal off"></div>
        <input onClick={handleClick} type="button" className="button change" value="Change"></input>
    </div>
  )
}
