import React from 'react'

const GemStone = (props) => {
  let data = props.data
  return (
    <div className='bg-black text-[#C07F00] flex justify-around items-center'>
      <div className="flex flex-col w-[50%] my-10">
        <h1 className='text-4xl my-3 font-medium'>{data.name}</h1>
        <p className='my-3'>{data.description}</p>
        <h3 className='text-2xl my-3 font-semibold'>Healing Factors:</h3>
        <p className='my-3'>{data.healing_factor}</p>
      </div>
      <img src={"src/assets/Iceland_Spar.png"} className='w-[25%]' alt="" />
    </div>
  )
}

export default GemStone
