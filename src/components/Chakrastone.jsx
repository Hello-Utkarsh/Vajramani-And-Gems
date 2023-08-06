import React, { useEffect } from 'react'
import gemstone from '../database/db'
import Gemcard from './Gemcard'

const Chakrastone = () => {

    useEffect(()=>{
        window.scrollTo(0,0);
      },[location.href])

    let more = Object.values(gemstone).filter((element) => {
        if (element.chakra) {
            return element
        }
    })
    console.log(more)

    return (
        <div className='bg-black pt-48'>
            <h1 className='text-[#e3874f] text-center m-auto text-4xl max-[600px]:text-3xl'>What are Chakrastones</h1>
            <div className='text-white w-[82%] m-auto my-8 flex justify-between items-center max-[900px]:flex-col'>
                <p className='w-[60%] text-lg max-[900px]:w-[94%] max-[900px]:text-center max-[600px]:text-base'>Birthstones are gemstones associated with each month, believed to hold unique symbolism and significance for individuals born during that period. From January's garnet, symbolizing passion and perseverance, to December's turquoise, representing wisdom and protection, each birthstone is said to possess special qualities and energies. These precious gems have been cherished for centuries, connecting people to their birth month and zodiac signs. Whether worn as jewelry or kept as talismans, birthstones are thought to bring luck, prosperity, and harmony to those who embrace their inherent power, making them cherished and meaningful gifts for birthdays and other special occasions.</p>
                <img className='w-80 max-[900px]:mt-4 max-[900px]:w-72 max-[600px]:w-64 max-[450px]:w-56' src="/static/images/chakra-gemstone.png" alt="" />
            </div>
            <h1 className='text-[#e3874f] text-center m-auto text-4xl my-4 max-[500px]:text-3xl max-[500px]:my-2'>Discover Chakrastones</h1>
            {more ? <div className='my-5 flex flex-col w-[98vw] items-center justify-around max-[500px]:my-2'>
                <div className='grid grid-cols-4 my-10 max-lg:grid-cols-3 max-[700px]:grid-cols-2'>
                    {more.map((element) => {
                        return <Gemcard data={element} />
                    })}

                </div>
            </div> : <div></div>}
        </div>
    )
}

export default Chakrastone
