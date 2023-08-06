import React from 'react'

const Contact = () => {
  return (
    <div className='bg-black text-[#BACCD1] w-[100%] p-4 pb-6'>
      <div className='flex justify-between p-2 flex-wrap max-[790px]:flex-col max-[790px]:items-center'>

        {/* contacts */}

        <div className='flex flex-col w-[30%] justify-around items-center ml-14 max-lg:w-[43%] max-[790px]:w-[90%] max-[790px]:ml-0 max-[500px]:m-auto'>
          <img className='h-[16vh] w-[80%] -mb-8 max-[790px]:w-[80%] max-[790px]:h-36 max-[500px]:w-[100%] max-[500px]:h-32' src={"/static/images/logo.png"} alt="" />
          <div className='flex justify-around w-[80%] max-[790px]:mt-6 max-[790px]:text-xl max-[500px]:w-[100%] max-[380px]:flex-col max-[380px]:items-center'>
            <div className='flex flex-col max-[380px]:items-center max-[380px]:my-3'>
              <h4 className='max-[550px]:text-lg'>Email</h4>
              <p className='max-[380px]:mt-1 max-[550px]:text-base'>hello@gmail.com</p>
            </div>
            <div className='flex flex-col max-[380px]:items-center max-[380px]:my-2' >
              <h4 className='max-[550px]:text-lg'>Phone Number</h4>
              <p className='max-[380px]:mt-1 max-[550px]:text-base'>+91 123456789</p>
            </div>
          </div>
        </div>

        {/* top categories */}

        <div className='mr-24 flex flex-col items-center justify-center font-semibold   max-lg:mr-20 max-[790px]:mr-0'>
          <h4 className='text-2xl mt-6 mb-2 text-center   max-lg:mt-12 max-[550px]:text-xl'>Browse our top categories</h4>
          <div className='grid grid-cols-4 w-[45vw] justify-around place-items-center    max-lg:grid-cols-2 max-lg:w-[35vw] max-[790px]:grid-cols-4 max-[790px]:w-[80vw] max-[600px]:grid-cols-2 max-[600px]:w-64'>
            <button className='bg-[#e3874f] text-[#37363e] rounded-xl text-center text-xl h-10 w-28   max-[790px]:text-lg mt-5 max-[550px]:h-9 max-[550px]:w-24  max-[550px]:text-base'>Categories</button>
            <button className='bg-[#e3874f] text-[#37363e] rounded-xl text-center text-xl h-10 w-28   max-[790px]:text-lg mt-5 max-[550px]:h-9 max-[550px]:w-24  max-[550px]:text-base'>Categories</button>
            <button className='bg-[#e3874f] text-[#37363e] rounded-xl text-center text-xl h-10 w-28   max-[790px]:text-lg mt-5 max-[550px]:h-9 max-[550px]:w-24  max-[550px]:text-base'>Categories</button>
            <button className='bg-[#e3874f] text-[#37363e] rounded-xl text-center text-xl h-10 w-28   max-[790px]:text-lg mt-5 max-[550px]:h-9 max-[550px]:w-24 max-[550px]:text-base'>Categories</button>
          </div>
        </div>
      </div>

      <div className='h-[1.5px] bg-[#C07F00] w-[84%] m-auto mt-6'></div>

      {/* social accounts */}

      <div className='w-[84%] mt-8 m-auto flex justify-around flex-wrap max-[350px]:w-[95%]'>
        <h4 className='text-lg max-[510px]:text-xl'>Also available on</h4>
        <div className='flex w-[55%] justify-around mx-8 max-[575px]:w-[100%] max-[575px]:mt-6 max-[510px]:mx-4'>
          <a href="https://instagram.com/vajramani_and_gems?igshid=MzRlODBiNWFlZA==" target="_blank">
            <img className='rounded-lg h-10 transition ease-in-out bg-[#BACCD1]    hover:bg-gradient-to-b from-[#405DE6] from-10% via-[#833AB4] via-75% to-[#C13584] to-100% duration-500 hover:-translate-y-2 hover:scale-125' src={"/static/images/instagram.png"} alt="nstagram logo icons created by Hight Quality Icons - Flaticon" />
          </a>
          <img className='rounded-lg bg-[#BACCD1] h-10 transition-all ease-in-out  hover:bg-gradient-to-b from-[#405DE6] from-10% via-[#833AB4] via-75% to-[#C13584] to-100% duration-500 hover:-translate-y-2 hover:scale-125' src={"/static/images/instagram.png"} alt="nstagram logo icons created by Hight Quality Icons - Flaticon" />
          <img className='transition ease-in-out duration-500 hover:-translate-y-2 hover:scale-125 h-10 hover:bg-blue-500 rounded-lg bg-[#BACCD1]' src={"/static/images/facebook.png"} alt="" />
          <img className='transition ease-in-out duration-500 hover:-translate-y-2 hover:scale-125 h-10 hover:bg-blue-500 rounded-lg bg-[#BACCD1]' src={"/static/images/facebook.png"} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Contact
