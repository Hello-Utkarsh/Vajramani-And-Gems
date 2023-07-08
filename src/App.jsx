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
          <Route path={'IceLandSpar'} element={<GemStone data={GemStone_Data['Iceland Spar']} />} />
          <Route path={'Marble'} element={<GemStone data={GemStone_Data['Marble']} />} />
          <Route path={'OnyxMarble'} element={<GemStone data={GemStone_Data['Onyx Marble']} />} />
          <Route path={'Black'} element={<GemStone data={GemStone_Data['Black Chalcedony']} />} />
          <Route path={'Carnelian'} element={<GemStone data={GemStone_Data['Carnelian Chalcedony']} />} />
          <Route path={'Chrysocolla'} element={<GemStone data={GemStone_Data['Chrysocolla Chalcedony']} />} />
          <Route path={'Chrysocolla'} element={<GemStone data={GemStone_Data['Chrysoprase Chalcedony']} />} />
          <Route path={'Agate'} element={<GemStone data={GemStone_Data['Agate Chalcedony']} />} />
          <Route path={'Bloodstone'} element={<GemStone data={GemStone_Data['Bloodstone Chalcedony']} />} />
          <Route path={'DendriticAgate'} element={<GemStone data={GemStone_Data['Dendritic Agate Chalcedony']} />} />
          <Route path={'Blue'} element={<GemStone data={GemStone_Data['Blue Chalcedony']} />} />
          <Route path={'MossAgate'} element={<GemStone data={GemStone_Data['Moss Agate']} />} />
          <Route path={'Onyx'} element={<GemStone data={GemStone_Data['Onyx']} />} />
          <Route path={'Sardonyx'} element={<GemStone data={GemStone_Data['Sardonyx']} />} />
          <Route path={'FireAgate'} element={<GemStone data={GemStone_Data['Fire agate']} />} />
          <Route path={'Yellow Sapphires'} element={<GemStone data={GemStone_Data['Yellow sapphires']} />} />
          <Route path={'Sapphire'} element={<GemStone data={GemStone_Data['Sapphire']} />} />
          <Route path={'StarRuby'} element={<GemStone data={GemStone_Data['Star Ruby']} />} />
          <Route path={'Prasiolite'} element={<GemStone data={GemStone_Data['Prasiolite']} />} />
          <Route path={'Amethyst'} element={<GemStone data={GemStone_Data['Amethyst']} />} />
          <Route path={'Ametrine'} element={<GemStone data={GemStone_Data['Ametrine']} />} />
          <Route path={'Citrine'} element={<GemStone data={GemStone_Data['Citrine']} />} />
          <Route path={'Rose'} element={<GemStone data={GemStone_Data['Rose']} />} />
          <Route path={'Rockcrystal'} element={<GemStone data={GemStone_Data['Rock crystal']} />} />
          <Route path={'Smoky'} element={<GemStone data={GemStone_Data['Smoky']} />} />
          <Route path={'Hawkeye'} element={<GemStone data={GemStone_Data["Hawk's eye"]} />} />
          <Route path={'Aventurine'} element={<GemStone data={GemStone_Data['Aventurine']} />} />
          <Route path={'Rockcrystal'} element={<GemStone data={GemStone_Data['Rock crystal']} />} />
          <Route path={'Rockcrystal'} element={<GemStone data={GemStone_Data['Rock crystal']} />} />
          <Route path="*" element={<NoPage />} />

        </Routes>
        <Contact />

      </BrowserRouter>
    </div>
  )
}

export default App
