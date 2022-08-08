import React, { useContext, useState } from 'react'
import { EyeDropper } from 'react-eyedrop'
import colorWheel from '../assets/color-wheel.png'
import poplightCustom from '../assets/poplight-custom.png'
import poplightOff from '../assets/poplight-off.png'
import { Context } from '../context/Context'

export default function Custom() {
  const [topColor, setTopColor] = useState('')
  const [midColor, setMidColor] = useState('')
  const [bottomColor, setBottomColor] = useState('')
  const [signal, setSignal] = useState('top')
  const [current, setCurrent] = useState('top')
  const [raceMode, setRaceMode] = useState(false)

  const {darkMode} = useContext(Context)

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

    function handleClick() {
      if(raceMode) {
        if(current === 'top'){
          setCurrent('mid')
        } else
        if(current === 'mid'){
          setCurrent('bottom')
        } else
        if(current === 'bottom'){
          setCurrent('top')
        }
      } else {
        if(current === 'top'){
          setCurrent('bottom')
        } else
        if(current === 'mid'){
          setCurrent('top')
        } else
        if(current === 'bottom'){
          setCurrent('mid')
        }
      }
    }

    function toggleRaceMode() {
      setRaceMode(!raceMode)
      setCurrent('top')
    }

  return (
    <div className='playground'>
      
      <div className={darkMode ? 'top dark' : 'top light'}>
          <label className='left'>
            Which signal would you like to customize?
            <select className='dropdown' value={signal} onChange={handleChange}>
              <option value='top'>Top</option>
              <option value='mid'>Middle</option>
              <option value='bottom'>Bottom</option>
            </select>
          </label>

        <div className='right'>
          <EyeDropper
            buttonClasses='eye-dropper'
            onChange={changeColor}
            once={true} >
            Select {signal === 'mid' ? 'middle' : signal} color
          </EyeDropper>
        </div>
      </div>

        <div className='main'>
          <div className='custom-stoplight'>
              <img 
                style={{background: current === 'top' ? topColor : 'black'}}
                className='custom-signal' 
                src={current === 'top' ? poplightCustom : poplightOff}/>
              <img 
                style={{background: current === 'mid' ? midColor : 'black'}}
                className='custom-signal' 
                src={current === 'mid' ? poplightCustom : poplightOff}/>
              <img 
                style={{background: current === 'bottom' ? bottomColor : 'black'}}
                className='custom-signal' 
                src={current === 'bottom' ? poplightCustom : poplightOff}/>
                           
            <button onClick={handleClick} className='button change'>
              Change signal
            </button>
          </div>

          <div className='right-main'>
            <img className='color-wheel' src={colorWheel} />
            <button onClick={toggleRaceMode} className='button racing'>
              Turn Racing Mode {raceMode ? 'Off' : 'On'}
            </button>
          </div>
        </div>

    </div>
  )
}
