import React from 'react'

const Home = () => {

  return (
    // 4C3D3D
    <div className='bg-black text-[#C07F00]'>

      <div className='bg-black text-[#C07F00] w-[100%] flex py-8 items-center h-[48vh]'>

        <div className='ml-[8%] text-5xl w-[30%]'>
          <h1 className='font-rubik'>
            For the high-class look you always wanted
          </h1>
        </div>

        <img className='w-[20%] ml-[27%]' src={"src/assets/gemstone2.png"} alt="" />
      </div>

      {/* Categories: Birth Stones and Chakras */}

      <div className='flex flex-wrap h-[80vh] my-4 text-white w-[100%] justify-around items-center m-auto p-8'>

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
        
      </div>

    </div>
  )
}

export default Home
