import React from 'react'

const Contact = () => {
  return (
    <div className='bg-black text-[#BACCD1] w-[100%] p-4 pb-6'>
      <div className='flex justify-between p-2 flex-wrap max-md:flex-col max-md:items-center'>

        {/* contacts */}

        <div className='flex flex-col w-[30%] justify-around items-center ml-14 max-lg:w-[43%] max-md:w-[90%] max-md:ml-0 max-[500px]:m-auto'>
          <img className='h-[16vh] w-[80%] -mb-8 max-md:w-[80%] max-md:h-36 max-[500px]:w-[100%] max-[500px]:h-32' src={"src/assets/logo.png"} alt="" />
          <div className='flex justify-around w-[80%] max-md:mt-6 max-md:text-xl max-[500px]:w-[100%] max-[380px]:flex-col max-[380px]:items-center'>
            <div className='flex flex-col max-[380px]:items-center max-[380px]:my-3'>
              <h4>Email</h4>
              <p className='max-[380px]:mt-1'>hello@gmail.com</p>
            </div>
            <div className='flex flex-col max-[380px]:items-center max-[380px]:my-2' >
              <h4>Phone Number</h4>
              <p className='max-[380px]:mt-1'>+91 123456789</p>
            </div>
          </div>
        </div>

        {/* top categories */}

        <div className='mr-24 flex flex-col items-center justify-center font-semibold   max-lg:mr-20 max-md:mr-0'>
          <h4 className='text-2xl mt-6 mb-2 text-center   max-lg:mt-12'>Browse our top categories</h4>
          <div className='grid grid-cols-4 w-[45vw] justify-around place-items-center    max-lg:grid-cols-2 max-lg:w-[35vw] max-md:grid-cols-4 max-md:w-[80vw] max-[600px]:grid-cols-2 max-[600px]:w-64'>
            <button className='bg-[#e3874f] text-[#37363e] rounded-xl text-center text-xl h-10 w-28   max-md:text-lg mt-5'>Categories</button>
            <button className='bg-[#e3874f] text-[#37363e] rounded-xl text-center text-xl h-10 w-28   max-md:text-lg mt-5'>Categories</button>
            <button className='bg-[#e3874f] text-[#37363e] rounded-xl text-center text-xl h-10 w-28   max-md:text-lg mt-5'>Categories</button>
            <button className='bg-[#e3874f] text-[#37363e] rounded-xl text-center text-xl h-10 w-28   max-md:text-lg mt-5'>Categories</button>
          </div>
        </div>
      </div>

      <div className='h-[1.5px] bg-[#C07F00] w-[84%] m-auto mt-6'></div>

      {/* social accounts */}

      <div className='w-[84%] mt-8 m-auto flex justify-around flex-wrap'>
        <h4 className='text-lg max-[510px]:text-xl'>Also available on</h4>
        <div className='flex w-[50%] justify-around mx-8 max-[510px]:w-[100%] max-[510px]:mt-6'>
        <img className='mx-2 rounded-lg h-10 transition ease-in-out bg-[#BACCD1]    hover:bg-gradient-to-b from-[#405DE6] from-10% via-[#833AB4] via-75% to-[#C13584] to-100% duration-500 hover:-translate-y-2 hover:scale-125' src={"src/assets/instagram.png"} alt="nstagram logo icons created by Hight Quality Icons - Flaticon" />
        <img className='mx-2 rounded-lg bg-[#BACCD1] h-10 transition-all ease-in-out  hover:bg-gradient-to-b from-[#405DE6] from-10% via-[#833AB4] via-75% to-[#C13584] to-100% duration-500 hover:-translate-y-2 hover:scale-125' src={"src/assets/instagram.png"} alt="nstagram logo icons created by Hight Quality Icons - Flaticon" />
        <img className='mx-2 transition ease-in-out duration-500 hover:-translate-y-2 hover:scale-125 h-10 hover:bg-blue-500 rounded-lg bg-[#BACCD1]' src={"src/assets/facebook.png"} alt="" />
        <img className='mx-2 transition ease-in-out duration-500 hover:-translate-y-2 hover:scale-125 h-10 hover:bg-blue-500 rounded-lg bg-[#BACCD1]' src={"src/assets/facebook.png"} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Contact
