import React from 'react'
import { Link } from 'react-router-dom'

const Gemcard = (props) => {
  let data = props.data
  

  return (
    <Link to={`/${data.path}`}>
      <div className='flex bg-gradient-to-b from-[#02001d] via-[#020027] to-[#02002d] w-[19vw] h-[18vw] justify-center my-7 mx-6 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-110 duration-300'>
        <img className='absolute z-20 w-[16vw] mt-9' src={data.img} alt="" />
        <h1 className='z-10 text-[#e3874f] text-center font-medium mt-5 text-2xl'>{data.name}</h1>
      </div>
    </Link>
  )
}

export default Gemcard
