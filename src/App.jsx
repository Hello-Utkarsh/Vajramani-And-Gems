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
          <Route path={'DendriticAgate'} element={<GemStone data={GemStone_Data['Dendritic Agate Chalcedony']} />} />
          <Route path={'MossAgate'} element={<GemStone data={GemStone_Data['Moss Agate']} />} />
          <Route path={'Onyx'} element={<GemStone data={GemStone_Data['Onyx']} />} />
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
          <Route path="*" element={<NoPage />} />
          {/* Beryl */}

          {/* More */}
          <Route path={'Rubellite'} element={<GemStone data={GemStone_Data['Rubellite']} />} />
          <Route path={'Bi-colored'} element={<GemStone data={GemStone_Data['Bi-colored']} />} />
          <Route path={'Watermelon'} element={<GemStone data={GemStone_Data['Watermelon']} />} />
          <Route path={'Labradorite'} element={<GemStone data={GemStone_Data['Labradorite']} />} />
          <Route path={'Moonstone'} element={<GemStone data={GemStone_Data['Moonstone']} />} />
          <Route path={'Flourite'} element={<GemStone data={GemStone_Data['Flourite']} />} />
          <Route path={'Garnet'} element={<GemStone data={GemStone_Data['Garnet']} />} />
          <Route path={'Snowflake'} element={<GemStone data={GemStone_Data['Snowflake']} />} />
          <Route path={'LapisLazuli'} element={<GemStone data={GemStone_Data['Lapis Lazuli']} />} />
          <Route path={'Catseye'} element={<GemStone data={GemStone_Data['Cats eye']} />} />
          <Route path={'Malachite'} element={<GemStone data={GemStone_Data['Malachite']} />} />
          <Route path={'Blackopal'} element={<GemStone data={GemStone_Data['BlackOpal']} />} />
          <Route path={'Fireopal'} element={<GemStone data={GemStone_Data['Fire opal']} />} />
          <Route path={'Peridot'} element={<GemStone data={GemStone_Data['Peridot']} />} />
          <Route path={'Plastic'} element={<GemStone data={GemStone_Data['Plastic']} />} />
          <Route path={'Tigerseye'} element={<GemStone data={GemStone_Data['Tigers eye']} />} />
          <Route path={'Topaz'} element={<GemStone data={GemStone_Data['Topaz']} />} />
          <Route path={'Tourmaline'} element={<GemStone data={GemStone_Data['Tourmaline']} />} />
          <Route path={'Turquoise'} element={<GemStone data={GemStone_Data['Turquoise']} />} />
          <Route path={'Charoite'} element={<GemStone data={GemStone_Data['Charoite']} />} />
          <Route path={'Howlite'} element={<GemStone data={GemStone_Data['Howlite']} />} />
          <Route path={'Unakite'} element={<GemStone data={GemStone_Data['Unakite']} />} />
          <Route path={'Tanzanite'} element={<GemStone data={GemStone_Data['Tanzanite']} />} />
          {/* More */}

        </Routes>
        <Contact />

      </BrowserRouter>
    </div>
  )
}

export default App
