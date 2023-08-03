import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className='bg-black text-[#C07F00]'>

      <div className='bg-black text-[#C07F00] bg-hero w-[100%] h-[100vh] bg-cover bg-left bg-no-repeat flex justify-start py-0 items-center max-[1000px]:bg-center max-[600px]:bg-hero2 max-[600px]:bg-left-top max-[450px]:bg-hero3'>

        <div className='w-[40%] ml-10 max-[700px]:w-[50%] max-[500px]:w-[65%] max-[380px]:w-[80%]' >
          <h1 className='font-medium font-rubik text-6xl max-[380px]:text-[51px]'>
            For the high-class look you always wanted
          </h1>
          <Link to="More">
            <button className='bg-[#e3874f] text-[#37363e] rounded-xl text-center text-xl h-9 w-24   max-[790px]:text-lg mt-5'>Browse</button>
          </Link>
        </div>
      </div>

      <div className='flex-col items-center w-[86%] m-auto mt-28'>
        <h1 className='text-5xl text-center'>What so special about Gemstones</h1>
        <div className=' flex justify-around w-[100%] m-auto mt-20 max-[800px]:flex-col max-[800px]:item-center'>
          <div className='flex-col'>
            <h3 className='w-[70%] text-[#BACCD1] text-lg max-[800px]:text-base max-[800px]:m-auto max-[800px]:text-center max-[800px]:w-[80%] '>Gemstones offer a range of benefits, both culturally and spiritually. They adorn jewelry and decorative items, enhancing aesthetics and personal style. Many believe gemstones possess healing properties, promoting physical and emotional well-being. Some stones are thought to balance energies and protect against negativity. Used in meditation and spiritual practices, they aid focus and intuition. Linked to zodiac signs and birth months, they bring good luck and symbolic meanings. Gemstones hold deep cultural significance, offering a source of inspiration, creativity, and spirituality to those who cherish their unique properties.<br />Know more on cleaning and keeping gemstone properly</h3>
            <Link to="More_on_Gemstone">
              <button className='bg-[#e3874f] text-[#37363e] rounded-xl text-center text-xl h-9 w-24   max-[790px]:text-lg mt-5'>Browse</button>
            </Link>
          </div>
          <img className='w-80 h-[450px] -mt-20 max-[1300px]:-mt-10 max-[800px]:mx-auto max-[800px]:-mt-0' src="/static/images/gemstone collection.png" alt="" />
        </div>
      </div>

      <div className='flex-col items-center w-[97%] m-auto my-20'>
        <h1 className='text-5xl text-center'>Available on our store</h1>
        <div className='flex flex-wrap w-[100%] justify-between ml-4 my-6'>
          <div className=' flex justify-center text-center items-center w-[320px] h-[300px] m-auto mt-24 bg-left-bottom bg-[length:350px_350px] bg-no-repeat bg-ring max-[700px]:w-[280px] max-[700px]:mt-14 max-[570px]:w-[40%] max-[570px]:bg-center max-[570px]:bg-[length:200px_230px] max-[570px]:bg-left'>
            <h3 className='w-[100%] h-[100%] text-white pt-10 opacity-0 z-10 hover:opacity-100 backdrop-blur-[2px] max-[700px]:opacity-100 max-[570px]:text-[13px]'>
              Rings: <br /><br />Indulge in the enchanting allure of our gemstone rings collection. Each ring is a masterpiece, showcasing nature's mesmerizing colors and captivating energies. Let these vibrant gems adorn your fingers, reflecting your personality and illuminating your beauty.
            </h3>
          </div>
          <div className=' flex justify-center text-center items-center w-[320px] h-[300px] m-auto mt-24 bg-left bg-[length:350px_350px] bg-no-repeat bg-bracelet max-[700px]:w-[280px] max-[700px]:bg-center max-[700px]:mt-14 max-[570px]:w-[40%] max-[570px]:bg-center max-[570px]:bg-[length:200px_230px]'>
            <h3 className='w-[100%] h-[100%] text-white pt-4 opacity-0 z-10 hover:opacity-100 backdrop-blur-[2px] max-[700px]:opacity-100 max-[570px]:text-[13px]'>
              Bracelet: <br /><br />Embrace the magic of nature's most enchanting treasures with our exquisite gemstone bracelets. Each bracelet is a symphony of colors and energies, carefully curated to captivate your senses and elevate your style. Adorn your wrist with the alluring charm of sapphires, the passionate glow of rubies, or the calming embrace of emeralds.
            </h3>
          </div>
          <div className=' flex justify-center text-center items-center w-[320px] h-[300px] m-auto mt-24 bg-left-bottom bg-[length:350px_350px] bg-no-repeat bg-necklace max-[700px]:w-[280px] max-[700px]:mt-6 max-[570px]:w-[40%] max-[570px]:bg-center max-[570px]:bg-[length:230px_280px] max-[570px]:bg-top'>
            <h3 className='w-[100%] h-[100%] text-white pt-14 opacity-0 z-10 hover:opacity-100 backdrop-blur-[2px] max-[700px]:opacity-100 max-[570px]:text-[13px]'>
              Necklace: <br /><br />Indulge in the enchanting allure of our gemstone rings collection. Each ring is a masterpiece, showcasing nature's mesmerizing colors and captivating energies. Let these vibrant gems adorn your fingers, reflecting your personality and illuminating your beauty.
            </h3>
          </div>
          <div className=' flex justify-center text-center items-center w-[320px] h-[300px] m-auto mt-24 bg-left bg-[length:350px_350px] bg-no-repeat bg-earings max-[700px]:w-[280px] max-[700px]:mt-6 max-[570px]:w-[40%] max-[570px]:bg-center max-[570px]:bg-[length:300px_350px] max-[570px]:bg-top'>
            <h3 className='w-[100%] h-[100%] text-white pt-14 opacity-0 z-10 hover:opacity-100 backdrop-blur-[2px] max-[700px]:opacity-100 max-[570px]:text-[13px]'>
              Earrings: <br /><br />Indulge in the enchanting allure of our gemstone rings collection. Each ring is a masterpiece, showcasing nature's mesmerizing colors and captivating energies. Let these vibrant gems adorn your fingers, reflecting your personality and illuminating your beauty.
            </h3>
          </div>
        </div>
      </div>


      {/* Categories: Birth Stones and Chakras */}

      {/* <div className='flex flex-wrap h-[80vh] my-4 text-white w-[100%] justify-around items-center m-auto p-8'>

        <div className='flex justify-center items-center w-[50%] cursor-pointer h-[100%] hover:opacity-80'>
          <img className='z-0 absolute h-[75%] w-[32vw] opacity-70' src={"src/assets/birthstones3.jpg"} alt="" />
          <div className='z-10 flex h-[42%] flex-col justify-around items-center w-[58%]'>
            <h1 className='text-3xl text-center'>Choose your jewellery according to your birth month</h1>
            <button className='bg-black h-14 w-28 rounded-2xl text-xl transition duration-300 hover:-translate-y-2'>Browse</button>
          </div>
        </div>

        <div className='flex justify-center items-center w-[50%] cursor-pointer h-[100%] hover:opacity-80'>
          <img className='z-0 absolute h-[75%] w-[32vw] opacity-70' src={"src/assets/birthstones3.jpg"} alt="" />
          <div className='z-10 flex h-[42%] flex-col justify-around items-center w-[55%]'>
            <h1 className='text-3xl text-center'>Choose your jewellery according to The Chakras</h1>
            <button className='bg-black h-14 w-28 rounded-2xl text-xl transition duration-300 hover:-translate-y-2'>Browse</button>
          </div>
        </div>
        
      </div> */}

    </div>
  )
}

export default Home
