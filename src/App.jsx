import { useContext, useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import gemstone from './database/db'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GemStone from './components/GemStone'
import PathState from './context/PathState'
import { PathContext } from './context/PathContext'
import NoPage from './components/NoPage'
import More from './components/More'
import GemCare from './components/GemCare'

function App() {

  const GemStone_Data = gemstone

  return (
    <div className='bg-black'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path={'More'} element={<More/>} />
          <Route path={'More_on_Gemstone'} element={<GemCare/>} />

          {/* Chalcedony */}
          <Route path={'Black'} element={<GemStone data={GemStone_Data['Black Chalcedony']} />} />
          <Route path={'Carnelian'} element={<GemStone data={GemStone_Data['Carnelian Chalcedony']} />} />
          <Route path={'Chrysocolla'} element={<GemStone data={GemStone_Data['Chrysocolla Chalcedony']} />} />
          <Route path={'Chrysoprase'} element={<GemStone data={GemStone_Data['Chrysoprase Chalcedony']} />} />
          <Route path={'Agate'} element={<GemStone data={GemStone_Data['Agate Chalcedony']} />} />
          <Route path={'Sard'} element={<GemStone data={GemStone_Data['Sard Chalcedony']} />} />
          <Route path={'Bloodstone'} element={<GemStone data={GemStone_Data['Bloodstone Chalcedony']} />} />
          <Route path={'DendriticAgate'} element={<GemStone data={GemStone_Data['Dendritic Agate Chalcedony']} />} />
          <Route path={'Blue'} element={<GemStone data={GemStone_Data['Blue Chalcedony']} />} />
          <Route path={'MossAgate'} element={<GemStone data={GemStone_Data['Moss Agate']} />} />
          <Route path={'Onyx'} element={<GemStone data={GemStone_Data['Onyx']} />} />
          <Route path={'Sardonyx'} element={<GemStone data={GemStone_Data['Sardonyx']} />} />
          <Route path={'FireAgate'} element={<GemStone data={GemStone_Data['Fire agate']} />} />
          {/* Chalcedony */}

          {/* Corundun */}
          <Route path={'YellowSapphires'} element={<GemStone data={GemStone_Data['Yellow sapphires']} />} />
          <Route path={'Ruby'} element={<GemStone data={GemStone_Data['Ruby']} />} />
          <Route path={'Sapphire'} element={<GemStone data={GemStone_Data['Sapphire']} />} />
          <Route path={'StarRuby'} element={<GemStone data={GemStone_Data['Star Ruby']} />} />
          {/* Corundun */}

          {/* Quartz */}
          <Route path={'Prasiolite'} element={<GemStone data={GemStone_Data['Prasiolite']} />} />
          <Route path={'Amethyst'} element={<GemStone data={GemStone_Data['Amethyst']} />} />
          <Route path={'Ametrine'} element={<GemStone data={GemStone_Data['Ametrine']} />} />
          <Route path={'Citrine'} element={<GemStone data={GemStone_Data['Citrine']} />} />
          <Route path={'Rockcrystal'} element={<GemStone data={GemStone_Data['Rock crystal']} />} />
          <Route path={'Rose'} element={<GemStone data={GemStone_Data['Rose']} />} />
          <Route path={'Smoky'} element={<GemStone data={GemStone_Data['Smoky']} />} />
          <Route path={'Aventurine'} element={<GemStone data={GemStone_Data['Aventurine']} />} />
          {/* Quartz */}

          {/* Beryl */}
          <Route path={'Aquamarine'} element={<GemStone data={GemStone_Data['Aquamarine']} />} />
          <Route path={'Emerald'} element={<GemStone data={GemStone_Data['Emerald']} />} />
          <Route path={'LightGreen'} element={<GemStone data={GemStone_Data['Light Green']} />} />
          <Route path={'TrapicheEmerald'} element={<GemStone data={GemStone_Data['Trapiche Emerald']} />} />
          <Route path={'CatEye'} element={<GemStone data={GemStone_Data['Cat Eye']} />} />
          <Route path="*" element={<NoPage />} />
          {/* Beryl */}

          {/* More */}
          <Route path={'Rubellite'} element={<GemStone data={GemStone_Data['Rubellite']} />} />
          <Route path={'Bi-colored'} element={<GemStone data={GemStone_Data['Bi-colored']} />} />
          <Route path={'Watermelon'} element={<GemStone data={GemStone_Data['Watermelon']} />} />
          <Route path={'Chiastolite'} element={<GemStone data={GemStone_Data['Chiastolite']} />} />
          <Route path={'Marble'} element={<GemStone data={GemStone_Data['Marble']} />} />
          <Route path={'OnyxMarble'} element={<GemStone data={GemStone_Data['Onyx Marble']} />} />
          <Route path={'Syntheticcubiczirconia'} element={<GemStone data={GemStone_Data['Synthetic cubic zirconia']} />} />
          <Route path={'Stardiopside'} element={<GemStone data={GemStone_Data['Star diopside']} />} />
          <Route path={'Labradorite'} element={<GemStone data={GemStone_Data['Labradorite']} />} />
          <Route path={'Amber'} element={<GemStone data={GemStone_Data['Amber']} />} />
          <Route path={'Moonstone'} element={<GemStone data={GemStone_Data['Moonstone']} />} />
          <Route path={'Fluorite'} element={<GemStone data={GemStone_Data['Fluorite']} />} />
          <Route path={'Garnet'} element={<GemStone data={GemStone_Data['Garnet']} />} />
          <Route path={'Idocrase'} element={<GemStone data={GemStone_Data['Idocrase']} />} />
          <Route path={'Hematite'} element={<GemStone data={GemStone_Data['Hematite']} />} />
          <Route path={'Snowflake'} element={<GemStone data={GemStone_Data['Snowflake']} />} />
          <Route path={'Iolite'} element={<GemStone data={GemStone_Data['Iolite']} />} />
          <Route path={'Jadeite'} element={<GemStone data={GemStone_Data['Jadeite']} />} />
          <Route path={'LapisLazuli'} element={<GemStone data={GemStone_Data['Lapis Lazuli']} />} />
          <Route path={'Iolite'} element={<GemStone data={GemStone_Data['Iolite']} />} />

          {/* More */}

        </Routes>
        <Contact />

      </BrowserRouter>
    </div>
  )
}

export default App
