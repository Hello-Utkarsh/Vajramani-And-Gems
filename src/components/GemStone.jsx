import React from 'react'
import Gemcard from './Gemcard'

const GemStone = (props) => {
  let data = props.data["Iceland Spar"]
  let extra_data = Array.from(props.data).map
  console.log(data)
  return (
    <div className='bg-black text-[#C07F00] flex-col flex justify-around items-center'>
      <div className='flex justify-around items-center'>
        <div className="flex flex-col w-[50%] my-10">
          <h1 className='text-3xl my-3 font-medium'>{data.name}</h1>
          <p className='my-3'>{data.description}</p>
          <h3 className='text-xl my-3 font-semibold'>Healing Factors:</h3>
          <p className='my-3'>{data.healing_factor}</p>
        </div>
        <img src={"src/assets/Iceland_Spar.png"} className='w-[25%]' alt="" />
      </div>
      <div className='my-5 flex flex-col w-[98vw] items-center justify-around'>
        <h1 className='text-4xl font-semibold m-auto'>Discover more of Calcite</h1>
        <div className='flex justify-around w-[100%] my-10'>
          <Gemcard data = {extra_data}/>
          <Gemcard data = {extra_data}/>
          <Gemcard data = {extra_data}/>
          <Gemcard data = {extra_data}/>
        </div>
      </div>
    </div>
  )
}

export default GemStone
