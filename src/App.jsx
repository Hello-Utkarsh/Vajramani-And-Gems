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
import NoPage from './components/NoPage'

function App() {

  const GemStone_Data = gemstone

  return (
    <div className='bg-black'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path={'IceLand Spar'} element={<GemStone data={GemStone_Data['Iceland Spar']} />} />
          <Route path={'Marble'} element={<GemStone data={GemStone_Data['Marble']} />} />
          <Route path={'Onyx Marble'} element={<GemStone data={GemStone_Data['Onyx Marble']} />} />
          <Route path={'Black'} element={<GemStone data={GemStone_Data['Black Chalcedony']} />} />
          <Route path={'Carnelian'} element={<GemStone data={GemStone_Data['Carnelian Chalcedony']} />} />
          <Route path={'Chrysocolla'} element={<GemStone data={GemStone_Data['Chrysocolla Chalcedony']} />} />
          <Route path={'Chrysocolla'} element={<GemStone data={GemStone_Data['Chrysoprase Chalcedony']} />} />
          <Route path={'Agate'} element={<GemStone data={GemStone_Data['Agate Chalcedony']} />} />
          <Route path={'Bloodstone'} element={<GemStone data={GemStone_Data['Bloodstone Chalcedony']} />} />
          <Route path={'Dendritic Agate'} element={<GemStone data={GemStone_Data['Dendritic Agate Chalcedony']} />} />
          <Route path={'Blue'} element={<GemStone data={GemStone_Data['Blue Chalcedony']} />} />
          <Route path={'Moss Agate'} element={<GemStone data={GemStone_Data['Moss Agate']} />} />
          <Route path={'Onyx'} element={<GemStone data={GemStone_Data['Onyx']} />} />
          <Route path={'Sardonyx'} element={<GemStone data={GemStone_Data['Sardonyx']} />} />
          <Route path={'Fire Agate'} element={<GemStone data={GemStone_Data['Fire agate']} />} />
          <Route path={'Yellow Sapphires'} element={<GemStone data={GemStone_Data['Yellow sapphires']} />} />
          <Route path={'Sapphire'} element={<GemStone data={GemStone_Data['Sapphire']} />} />
          <Route path={'Ruby'} element={<GemStone data={GemStone_Data['Ruby']} />} />
          <Route path={'Ruby'} element={<GemStone data={GemStone_Data['Ruby']} />} />
          <Route path={'Ruby'} element={<GemStone data={GemStone_Data['Ruby']} />} />
          <Route path={'Onyx'} element={<GemStone data={GemStone_Data['Onyx']} />} />
          <Route path="*" element={<NoPage />} />

        </Routes>
        <Contact />

      </BrowserRouter>
    </div>
  )
}

export default App
