import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import CreateOtherDiv from './CreateOtherDiv'

function App() {

  return (
    <>
      <Home name="Emanuelly" age={25} visuable={true} />
      <Home name="zé" age={20} visuable={false} />
      <CreateOtherDiv />
    </>
  )
}

export default App
