import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import Login from './pages/Login'
import CreateOtherDiv from './CreateOtherDiv'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
