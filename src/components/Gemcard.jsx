import React from 'react'
import { Link } from 'react-router-dom'

const Gemcard = (props) => {
  let data = props.data
  

  return (
    <Link to={`/${data.path}`}>
      <div className='flex bg-[#181818] w-[19vw] h-[18vw] justify-center my-7 mx-6 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-110 duration-300   max-lg:h-[26vw] max-lg:w-[26vw] max-[700px]:w-[36vw] max-[700px]:h-[30vw] max-[500px]:h-44 max-[350px]:h-40'>
        <img className='absolute w-[16vw]   max-lg:w-[19vw] mt-9 max-[700px]:w-[20vw] max-[500px]:mt-16' src={data.img} alt="" />
        <h1 className='z-10 text-[#e3874f] text-center font-medium mt-5 text-2xl   max-md:text-xl max-[650px]:text-lg max-[350px]:text-base'>{data.name}</h1>
      </div>
    </Link>
  )
}

export default Gemcard
