import React, { useContext } from 'react'
import './App.css'

import Stoplight from './components/stoplight'
import Header from './components/header'
import { Context } from './context/Context'

function App() {
  const {darkMode} = useContext(Context);

    return (
        <div className={darkMode ? 'app dark' : 'app light'}>
          <Header />
          <div className='container'>
            <Stoplight id='stoplight1' />
            <Stoplight id='stoplight2' />
          </div>
        </div>
    )
}

export default App
