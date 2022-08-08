import React, { useState } from 'react'
import { EyeDropper } from 'react-eyedrop'
import colorWheel from '../assets/color-wheel.png'
import poplightCustom from '../assets/poplight-custom.png'

export default function Custom() {
  const [topColor, setTopColor] = useState('')
  const [midColor, setMidColor] = useState('')
  const [bottomColor, setBottomColor] = useState('')
  const [signal, setSignal] = useState('top')

    function handleChange(e) {
      setSignal(e.target.value);
    }

    function changeColor({ rgb, hex }) {
      if (signal === 'top') {
        setTopColor(hex)
      } else
      if (signal === 'mid') {
        setMidColor(hex)
      } else {
        setBottomColor(hex)
      }
    }

  return (
    <div className='stoplight'>
        <EyeDropper 
            buttonClasses='eye-dropper'
            onChange={changeColor}
            once={true} >
            EyeDropper
        </EyeDropper>

        <div className='dropdown'>
          <select value={signal} onChange={handleChange}>
            <option value='top'>Top</option>
            <option value='mid'>Middle</option>
            <option value='bottom'>Bottom</option>
          </select>
        </div>

        <div 
          className='custom-stoplight'>
            <img 
              style={{background: topColor}}
              className='custom-signal' 
              src={poplightCustom}/>
            <img 
              style={{background: midColor}}
              className='custom-signal' 
              src={poplightCustom}/>
            <img 
              style={{background: bottomColor}}
              className='custom-signal' 
              src={poplightCustom}/>
        </div>

        <img style={{width: 300}} src={colorWheel} />
    </div>
  )
}
