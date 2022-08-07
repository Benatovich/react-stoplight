import React, { useContext } from 'react'
import Stoplight from './Stoplight'
import { Context } from '../context/Context'
import SquidGame from './SquidGame'

export default function container() {
    const {squidMode} = useContext(Context);

  return (
    <div className='container'>
        {squidMode ? (
            <SquidGame />
            ) : (
            <div>
                <Stoplight id='stoplight1' />
                <Stoplight id='stoplight2' />
            </div>
        )}
    </div>
  )
}