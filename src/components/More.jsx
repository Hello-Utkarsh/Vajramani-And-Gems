import React, { useEffect } from 'react'
import gemstone from '../database/db'
import Gemcard from './Gemcard'

const More = () => {
  let more = Object.values(gemstone).filter((element) => {
    if (element.tag == "Gemstones") {
      return element
    }
  })

  useEffect(()=>{
    window.scrollTo(0,0);
  },[location.href])

  return (
    <div className='bg-black'>

      {more ? <div className='flex z-0 flex-col items-center justify-around'>
        <div className='grid mt-48 max-lg:grid-cols-3 grid-cols-4 justify-items-center flex-wrap w-[100%] my-10 max-md:grid-cols-2'>
          {more.map((element) => {
            return <Gemcard data={element} />
          })}

        </div>
      </div> : <div></div>}

    </div>
  )
}

export default More
