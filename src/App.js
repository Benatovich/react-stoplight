import React from 'react'
import './App.css'

import Stoplight from './components/stoplight'
import Header from './components/header'
import { ContextProvider } from './context/Context'

function App() {

    return (
      <div className='App'>
        <ContextProvider>
          <Header />
          <div className='container'>
            <Stoplight id='stoplight1' />
            <Stoplight id='stoplight2' />
          </div>
        </ContextProvider>
      </div>
    )
}

export default App
