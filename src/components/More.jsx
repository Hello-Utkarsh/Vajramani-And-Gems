import React from 'react'
import gemstone from '../database/db'
import Gemcard from './Gemcard'

const More = () => {
  let more = Object.values(gemstone).filter((element) => {
    if (element.tag == "morecategory") {
      return element
    }
  })

  return (
    <div className='bg-black'>

      {more ? <div className='my-5 flex flex-col w-[98vw] items-center justify-around'>
        <div className='grid grid-cols-4 justify-items-center flex-wrap w-[100%] my-10'>
          {more.map((element) => {
            return <Gemcard data={element} />
          })}

        </div>
      </div> : <div></div>}

    </div>
  )
}

export default More
