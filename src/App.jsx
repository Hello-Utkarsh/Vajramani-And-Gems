import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import gemstone from './database/db'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GemStone from './components/GemStone'

function App() {
  const GemStone_Data = gemstone

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element = {
            <div className='bg-black'>
            <Navbar />
            <Home />
            <Contact />
          </div>
          }/>
          <Route path='/Iceland Spar' element = {<GemStone data={GemStone_Data}/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
