import React from 'react'

const Gemcard = (props) => {
    let data = props.data
    
  return (
    <div className='flex bg-[#16191E] w-[19vw] h-[18vw] justify-center my-7 mx-6 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-110 duration-300'>
      <img className='absolute w-[16vw] mt-5' src="src\assets\aventurine-quartz-40 jewelery.png" alt="" />
      <h1 className='z-10 text-[#BACCD1] font-medium mt-5 text-2xl'>Iceland Spar</h1>
    </div>
  )
}

export default Gemcard
