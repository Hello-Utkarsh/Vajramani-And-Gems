import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-[100vw] bg-black'>
      <Navbar/>
      <Home/>
      <Contact/>
    </div>
    </>
  )
}

export default App
