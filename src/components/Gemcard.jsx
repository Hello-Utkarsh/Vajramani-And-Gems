import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Gemcard = (props) => {

  let a = useLocation()
  console.log(a)
  let data = props.data
  console.log(data)

  return (
    <Link to={`/${data.path}`}>
      <div className='flex-col bg-[#181818] w-[19vw] h-[18vw] justify-center my-7 mx-6 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-110 duration-300   max-lg:h-[26vw] max-lg:w-[26vw] max-[700px]:w-[36vw] max-[700px]:h-[32vw] max-[500px]:h-40 max-[400px]:w-[40vw] max-[350px]:h-44'>
        <img className='absolute w-[16vw] ml-[2.5vw] max-[700px]:ml-[8vw] max-lg:w-[19vw] mt-10 max-[700px]:w-[20vw] max-[700px]:mt-14 max-[500px]:mt-[65px] max-[400px]:mt-[70px] max-[350px]:mt-[80px]' src={data.img} alt="" />
        <h1 className='z-10 text-[#e3874f] text-center font-medium pt-2 text-2xl   max-md:text-xl max-[650px]:text-lg max-[350px]:text-base max-[400px]:text-base'>{data.name}</h1>
        {a.pathname == "/Birthstone" ? <h1 className='z-10 text-[#e3874f] text-center font-medium text-xl max-md:text-lg max-[650px]:text-sm max-[350px]:text-sm'>{data.birthmonth}</h1> : <div></div>}
        {a.pathname == "/Chakrastone" ? <h1 className='z-10 text-[#e3874f] text-center font-medium text-xl max-md:text-lg max-[650px]:text-sm max-[350px]:text-sm'>{data.chakra}</h1> : <div></div>}
        
      </div>
    </Link>
  )
}

export default Gemcard
