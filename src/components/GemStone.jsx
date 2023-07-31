import React, { useContext } from 'react'
import Gemcard from './Gemcard'
import { PathContext } from '../context/PathContext'
import gemstone from '../database/db'

const GemStone = (props) => {

  let data = props.data

  let more = Object.values(gemstone).filter((element) => {
    if (element.tag == data.tag && element.name != data.name) {
      return element
    }
  })

  return (
    <div className='bg-black max-[600px]:mt-[20vh] text-[#BACCD1] flex-col flex justify-around items-center'>
      <div className='flex justify-around items-center max-[600px]:flex-col'>
        <div className="flex flex-col w-[50%] my-10 max-[900px]:ml-3 max-[600px]:w-[87%] max-[600px]:text-center max-[600px]:ml-0">
          <h1 className='text-3xl my-3 font-medium text-[#e3874f] max-[450px]:text-2xl'>{data.name}</h1>
          <p className='my-3 text-base max-[600px]:w-[100%]'>{data.description}</p>
          <h3 className='text-xl my-3 font-semibold text-[#e3874f] max-[450px]:text-2xl'>Healing Factors:</h3>
          <p className='my-3 text-base max-[600px]:w-[100%] '>{data.healing_factor}</p>
        </div>
        <img src={data.img} className='w-96 rounded-lg max-[800px]:w-64' alt="" />
      </div>

      {/* More Section */}
      {more ? <div className='my-5 flex flex-col w-[98vw] items-center justify-around'>
        <h1 className='text-4xl font-semibold m-auto max-[500px]:text-center'>Discover more of {data.tag}</h1>
        <div className='grid grid-cols-4 my-10 max-lg:grid-cols-3 max-[700px]:grid-cols-2'>
          {more.map((element) => {
            return <Gemcard data={element} />
          })}

        </div>
      </div> : <div></div>}


    </div>
  )
}

export default GemStone
