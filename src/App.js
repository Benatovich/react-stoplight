import React from 'react'
import './App.css'

import Stoplight from './components/stoplight'
import Header from './components/header'

function App() {

    return (
      <div>
        <Header />

        <Stoplight id='stoplight1' />
        <Stoplight id='stoplight2' />
      </div>
    )
}

export default App
