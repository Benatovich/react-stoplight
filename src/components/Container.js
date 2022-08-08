import React, { useContext } from 'react'
import Stoplight from './Stoplight'
import { Context } from '../context/Context'
import SquidGame from './SquidGame'
import Custom from './Custom'

export default function container() {
    const {squidMode, customMode} = useContext(Context);

  return (
    <div className='container'>
        {squidMode ? (
            <SquidGame />
            ) : (
            <div>
              {customMode ? (
                <Custom />
              ) : (
                <div>
                  <Stoplight id='stoplight1' />
                  <Stoplight id='stoplight2' />
                </div>
              )}
            </div>
        )}
    </div>
  )
}