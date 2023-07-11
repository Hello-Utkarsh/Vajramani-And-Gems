import React from 'react'

const Gemcard = (props) => {
    let data = props.data
    console.log()
    
  return (
    <div className='flex h-[15vh] justify-center items-center my-8 mx-4 cursor-pointer hover:opacity-70 show'>
      <img className='absolute w-64 mt-2' src="src\assets\aventurine-quartz-40 jewelery.png" alt="" />
      <h1 className='z-10 text-[#C07F00] hidden font-medium mt-2 text-2xl'>Iceland Spar</h1>
    </div>
  )
}

export default Gemcard
