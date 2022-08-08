import React from 'react'
import { EyeDropper } from 'react-eyedrop'
import colorWheel from '../assets/color-wheel.png'

export default function Playground() {
    function getColor({ rgb, hex }) {
        console.log(rgb, hex)
    }

  return (
    <div>
        <h3>Playground</h3>
        <EyeDropper 
            buttonClasses='eye-dropper'
            onChange={getColor}
            once={true} >
            EyeDropper
        </EyeDropper>
        <img src={colorWheel} />
        {/* <span>{rgb} {hex}</span> */}
    </div>
  )
}
