import React from 'react'

const Contact = () => {
  return (
    <div className='bg-black text-[#C07F00] w-[100vw] border-2 h-[50vh]'>
      <div className='flex justify-between p-6 '>

        {/* contacts */}

        <div className='flex flex-col w-[30%] justify-between items-center ml-14'>
          <img className='h-[15vh] w-[80%]' src={"src/assets/logo.png"} alt="" />
          <div className='flex justify-around w-[80%]'>
            <div className='flex flex-col'>
              <h4>Email</h4>
              <p>hello@gmail.com</p>
            </div>
            <div className='flex flex-col' >
              <h4>Phone Number</h4>
              <p>+91 123456789</p>
            </div>
          </div>
        </div>

        {/* top categories */}

        <div className='mr-32 flex flex-col items-center justify-center font-semibold'>
          <h4 className='text-2xl mb-8'>Browse our top categories</h4>
          <div className='flex w-[100%] justify-around'>
            <button className='bg-[#C07F00] text-[#4C3D3D] rounded-xl text-center text-xl w-28'>Categories</button>
            <button className='bg-[#C07F00] text-[#4C3D3D] rounded-xl text-center text-xl h-10 w-28'>Categories</button>
          </div>
        </div>
      </div>

      <div className='h-[1.5px] bg-[#C07F00] w-[80%] m-auto mt-6'></div>

      {/* social accounts */}

      <div className='w-[80%] mt-8 m-auto flex justify-around'>
        <h4 className='text-lg'>Also available on</h4>
        <div className='flex w-[50%] justify-around'>
        <img className='rounded-lg bg-[#C07F00] h-10 transition-all ease-in-out  hover:bg-gradient-to-b from-[#405DE6] from-10% via-[#833AB4] via-75% to-[#C13584] to-100% duration-500 hover:-translate-y-2 hover:scale-125' src={"src/assets/instagram.png"} alt="nstagram logo icons created by Hight Quality Icons - Flaticon" />
        <img className='rounded-lg bg-[#C07F00] h-10 transition-all ease-in-out  hover:bg-gradient-to-b from-[#405DE6] from-10% via-[#833AB4] via-75% to-[#C13584] to-100% duration-500 hover:-translate-y-2 hover:scale-125' src={"src/assets/instagram.png"} alt="nstagram logo icons created by Hight Quality Icons - Flaticon" />
        <img className='transition ease-in-out duration-500 hover:-translate-y-2 hover:scale-125 h-10 hover:bg-blue-500 rounded-lg bg-[#C07F00]' src={"src/assets/facebook.png"} alt="" />
        <img className='transition ease-in-out duration-500 hover:-translate-y-2 hover:scale-125 h-10 hover:bg-blue-500 rounded-lg bg-[#C07F00]' src={"src/assets/facebook.png"} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Contact
