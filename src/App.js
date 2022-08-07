import React, { useContext } from 'react'
import './App.css'

import Stoplight from './components/Stoplight'
import Header from './components/Header'
import Container from './components/Container'
import { Context } from './context/Context'



function App() {
  const {darkMode} = useContext(Context);

    return (
        <div className={darkMode ? 'app dark' : 'app light'}>
          <Header />
          <Container />
        </div>
    )
}

export default App
