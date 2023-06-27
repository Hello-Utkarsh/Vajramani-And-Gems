import { useContext, useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import gemstone from './database/db'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GemStone from './components/GemStone'
// import Gem_Path from './context/PathState'
import PathState from './context/PathState'
import { PathContext } from './context/PathContext'

function App() {
  const context = useContext(PathContext)
  const { path, setPath } = context;
  console.log(path)
  const GemStone_Data = gemstone
  const h = "Iceland Spar"

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' index element={
              <div className='bg-black'>
                <Navbar />
                <Home />
                <Contact />
              </div>
            } />
            <Route path={`/${h}`} element={
              <div className='bg-black'>
                <Navbar />
                <GemStone data={GemStone_Data} />
                <Contact />
              </div>
            } />

          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
