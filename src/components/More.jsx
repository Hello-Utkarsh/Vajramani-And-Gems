import React from 'react'
import gemstone from '../database/db'
import Gemcard from './Gemcard'

const More = () => {
  let more = Object.values(gemstone).filter((element) => {
    if (element.tag == "Gemstones") {
      return element
    }
  })

  return (
    <div className='bg-black'>

      {more ? <div className='my-5 flex flex-col items-center justify-around'>
        <div className='grid max-lg:grid-cols-3 grid-cols-4 justify-items-center flex-wrap w-[100%] my-10 max-md:grid-cols-2'>
          {more.map((element) => {
            return <Gemcard data={element} />
          })}

        </div>
      </div> : <div></div>}

    </div>
  )
}

export default More
