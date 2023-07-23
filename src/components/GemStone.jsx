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
    <div className='bg-black text-[#BACCD1] flex-col flex justify-around items-center'>
      <div className='flex justify-around items-center'>
        <div className="flex flex-col w-[50%] my-10">
          <h1 className='text-3xl my-3 font-medium text-[#e3874f]'>{data.name}</h1>
          <p className='my-3 text-base'>{data.description}</p>
          <h3 className='text-xl my-3 font-semibold text-[#e3874f]'>Healing Factors:</h3>
          <p className='my-3'>{data.healing_factor}</p>
        </div>
        <img src={data.img} className='w-[28%] rounded-lg' alt="" />
      </div>
      {more ? <div className='my-5 flex flex-col w-[98vw] items-center justify-around'>
        <h1 className='text-4xl font-semibold m-auto'>Discover more of {data.tag}</h1>
        <div className='grid grid-cols-4 justify-items-center w-[100%] my-10'>
          {more.map((element) => {
            return <Gemcard data={element} />
          })}

        </div>
      </div> : <div></div>}


    </div>
  )
}

export default GemStone
