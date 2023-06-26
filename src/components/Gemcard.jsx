import React from 'react'

const Gemcard = (props) => {
    let data = props.data
    console.log(data)
  return (
    <div className='flex h-[15vh] justify-center items-center my-8 mx-4 cursor-pointer hover:opacity-70'>
      <img className='absolute w-64 mt-10' src="src/assets/Iceland_Spar.png" alt="" />
      <h1 className='z-10 text-gray-300 font-medium mt-2 text-2xl'>Iceland Spar</h1>
    </div>
  )
}

export default Gemcard
