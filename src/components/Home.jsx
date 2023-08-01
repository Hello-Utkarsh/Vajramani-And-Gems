import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className='bg-black text-[#C07F00] h-[700px]'>

      <div className='bg-black text-[#C07F00] bg-hero w-[100%] h-[100vh] bg-cover bg-left bg-no-repeat flex justify-start py-0 items-center max-[1000px]:bg-center max-[600px]:bg-hero2 max-[600px]:bg-left-top max-[450px]:bg-hero3'>

        <div className='w-[40%] ml-10 max-[700px]:w-[50%] max-[500px]:w-[65%] max-[380px]:w-[80%]' >
          <h1 className='font-medium font-rubik text-6xl max-[380px]:text-[51px]'>
            For the high-class look you always wanted
          </h1>
          <Link to="More">
            <button className='bg-[#e3874f] text-[#37363e] rounded-xl text-center text-xl h-9 w-24   max-[790px]:text-lg mt-5'>Browse</button>
          </Link>
        </div>

        {/* <img className='w-[100vw] absolute top-0 h-[500px] mr-[4%] pt-5' src={"https://images.unsplash.com/photo-1611955167811-4711904bb9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"} alt="" /> */}
      </div>

      {/* Categories: Birth Stones and Chakras */}

      {/* <div className='flex flex-wrap h-[80vh] my-4 text-white w-[100%] justify-around items-center m-auto p-8'>

        <div className='flex justify-center items-center w-[50%] cursor-pointer h-[100%] hover:opacity-80'>
          <img className='z-0 absolute h-[75%] w-[32vw] opacity-70' src={"src/assets/birthstones3.jpg"} alt="" />
          <div className='z-10 flex h-[42%] flex-col justify-around items-center w-[58%]'>
            <h1 className='text-3xl text-center'>Choose your jewellery according to your birth month</h1>
            <button className='bg-black h-14 w-28 rounded-2xl text-xl transition duration-300 hover:-translate-y-2'>Browse</button>
          </div>
        </div>

        <div className='flex justify-center items-center w-[50%] cursor-pointer h-[100%] hover:opacity-80'>
          <img className='z-0 absolute h-[75%] w-[32vw] opacity-70' src={"src/assets/birthstones3.jpg"} alt="" />
          <div className='z-10 flex h-[42%] flex-col justify-around items-center w-[55%]'>
            <h1 className='text-3xl text-center'>Choose your jewellery according to The Chakras</h1>
            <button className='bg-black h-14 w-28 rounded-2xl text-xl transition duration-300 hover:-translate-y-2'>Browse</button>
          </div>
        </div>
        
      </div> */}

    </div>
  )
}

export default Home
