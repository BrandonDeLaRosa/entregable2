import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import Weather from './Components/Weather'

function App() {
  
  return (
    <div className="App">
      <Weather/>
    </div>
  )
}

export default App
