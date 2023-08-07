import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className='bg-black text-[#C07F00]'>

      {/* Hero Section */}
      <div className='bg-black text-[#C07F00] bg-hero  bg-center bg-cover w-[100%]  h-[100vh] bg-no-repeat flex justify-start py-0 items-center max-[900px]:bg-[length:1000px_900px] max-[900px]:bg-left max-[700px]:bg-[length:900px_900px] max-[600px]:bg-center max-[600px]:bg-[length:800px_100%] max-[450px]:h-[80vh] '>
        <div className='w-[45%] ml-8 max-[700px]:w-[50%] max-[600px]:ml-0 max-[600px]:w-[100%] max-[600px]:backdrop-blur-sm max-[500px]:w-[100%] max-[380px]:w-[100%] max-[450px]:mt-20' >
          <h1 className='text-white font-medium font-rubik text-6xl max-[600px]:px-8 max-[450px]:text-[47px]'>
            For the high-class look you always wanted
          </h1>
          <Link to="More">
            <button className='bg-[#e3874f] text-[#37363e] rounded-xl text-center text-xl h-9 w-24  max-[600px]:mx-8  max-[790px]:text-lg mt-5'>Browse</button>
          </Link>
        </div>
        {/* <img className='w-[45%]' src="/static/images/pexels-superlens-photography-13595802.jpg" alt="" /> */}
      </div>
      {/* Hero Section */}

      {/* Gemstone Intro */}
      <div className='flex-col items-center w-[86%] m-auto mt-28'>
        <h1 className='text-5xl text-center max-[450px]:text-[40px]'>What so special about Gemstones</h1>
        <div className=' flex justify-around w-[100%] m-auto mt-20 max-[800px]:flex-col max-[800px]:item-center '>
          <div className='flex-col'>
            <h3 className='w-[70%] text-[#BACCD1] text-lg max-[800px]:text-base max-[800px]:m-auto max-[800px]:text-center max-[800px]:w-[80%] max-[450px]:text-[15px] max-[450px]:w-[90%]'>Gemstones offer a range of benefits, both culturally and spiritually. They adorn jewelry and decorative items, enhancing aesthetics and personal style. Many believe gemstones possess healing properties, promoting physical and emotional well-being. Some stones are thought to balance energies and protect against negativity. Used in meditation and spiritual practices, they aid focus and intuition. Linked to zodiac signs and birth months, they bring good luck and symbolic meanings. Gemstones hold deep cultural significance, offering a source of inspiration, creativity, and spirituality to those who cherish their unique properties.<br />Know more on cleaning and keeping gemstone properly</h3>
            <Link to="More_on_Gemstone">
              <button className='bg-[#e3874f] max-[800px]:ml-[40%] text-[#37363e] rounded-xl text-center text-xl h-9 w-24 max-[790px]:text-lg mt-6'>Browse</button>
            </Link>
          </div>
          <img className='w-80 h-[450px] -mt-20 max-[1300px]:-mt-10 max-[800px]:mx-auto max-[800px]:-mt-0' src="/static/images/gemstone collection.png" alt="" />
        </div>
      </div>
      {/* Gemstone Intro */}


      {/* Available things on store */}
      <div className='flex-col items-center w-[97%] m-auto my-20'>
        <h1 className='text-5xl text-center'>Available on our store</h1>
        <div className='flex flex-wrap w-[97%] justify-between ml-[3%] my-6'>
          <div className=' flex justify-center text-center items-center w-[320px] h-[300px] m-auto mt-24 bg-left-bottom bg-[length:350px_350px] bg-no-repeat bg-ring max-[700px]:w-[280px] max-[700px]:bg-center max-[700px]:bg-[length:250px_280px] max-[700px]:mt-14 max-[600px]:w-[40%] max-[600px]:bg-right max-[600px]:bg-[length:200px_230px] max-[650px]:h-[250px] max-[650px]:text-[13px] max-[450px]:text-[13px] max-[450px]:bg-[length:170px_200px] max-[500px]:w-[70%] max-[500px]:bg-center'>
            <h3 className='w-[100%] h-[100%] text-white pt-10 opacity-0 z-10 hover:opacity-100 backdrop-blur-[1px] max-[700px]:opacity-100'>
            <span className='font-medium text-[18px] max-[500px]:text-[14px]'>Rings</span>: <br /><br />Indulge in the enchanting allure of our gemstone rings collection. Each ring is a masterpiece, showcasing nature's mesmerizing colors and captivating energies. Let these vibrant gems adorn your fingers, reflecting your personality and illuminating your beauty.
            </h3>
          </div>
          <div className=' flex justify-center text-center items-center w-[320px] h-[300px] m-auto mt-24 bg-left bg-[length:350px_350px] bg-no-repeat bg-bracelet max-[700px]:w-[280px] max-[700px]:bg-center max-[700px]:mt-14 max-[600px]:w-[40%] max-[600px]:bg-center max-[650px]:bg-[length:200px_230px] max-[600px]:h-[250px] max-[650px]:text-[13px] max-[450px]:text-[13px] max-[450px]:bg-[length:170px_200px] max-[500px]:w-[70%] max-[500px]:bg-center'>
            <h3 className='w-[100%] h-[100%] text-white pt-4 opacity-0 z-10 hover:opacity-100 backdrop-blur-[1px] max-[700px]:opacity-100'>
              <span className='font-medium text-[18px] max-[500px]:text-[14px]'>Bracelet</span>: <br /><br />Embrace the magic of nature's most enchanting treasures with our exquisite gemstone bracelets. Each bracelet is a symphony of colors and energies, carefully curated to captivate your senses and elevate your style. Adorn your wrist with the alluring charm of sapphires, the passionate glow of rubies, or the calming embrace of emeralds.
            </h3>
          </div>
          <div className=' flex justify-center text-center items-center w-[320px] h-[300px] m-auto mt-24 bg-left-bottom bg-[length:350px_350px] bg-no-repeat bg-necklace max-[700px]:w-[280px] max-[700px]:mt-6 max-[600px]:w-[40%] max-[600px]:bg-center max-[650px]:bg-[length:200px_230px] max-[600px]:h-[250px] max-[650px]:text-[13px] max-[450px]:text-[13px] max-[450px]:bg-[length:160px_210px] max-[500px]:w-[70%] max-[500px]:bg-center'>
            <h3 className='w-[100%] h-[100%] text-white pt-10 opacity-0 z-10 hover:opacity-100 backdrop-blur-[1px] max-[700px]:opacity-100'>
            <span className='font-medium text-[18px] max-[500px]:text-[14px]'>Necklace</span>: <br /><br />"Adorn yourself with our stunning gemstone necklaces, where nature's mesmerizing colors meet expert craftsmanship. Each piece holds a unique story, evoking elegance and enchantment. Elevate your look with these radiant treasures, a symbol of timeless allure and personal significance."
            </h3>
          </div>
          <div className=' flex justify-center text-center items-center w-[320px] h-[300px] m-auto mt-24 bg-left bg-[length:350px_350px] bg-no-repeat bg-earings max-[700px]:w-[280px] max-[700px]:mt-6 max-[570px]:w-[40%] max-[600px]:bg-center max-[570px]:bg-[length:280px_320px] max-[600px]:h-[250px] max-[650px]:text-[13px] max-[450px]:text-[13px] max-[450px]:bg-[length:280px_310px] max-[500px]:w-[70%] max-[500px]:bg-center'>
            <h3 className='w-[100%] h-[100%] text-white pt-10 opacity-0 z-10 hover:opacity-100 backdrop-blur-[1px] max-[700px]:opacity-100'>
            <span className='font-medium text-[18px] max-[500px]:text-[14px]'>Earrings</span>: <br /><br />Illuminate your beauty with our gemstone earrings, an exquisite fusion of nature's brilliance and impeccable artistry. Sparkling gemstones dance with every move, reflecting your inner allure. Elevate any outfit with these timeless treasures, making a statement of elegance and sophistication that leaves a lasting impression."
            </h3>
          </div>
        </div>
      </div>
      {/* Available things on store */}

      {/* Certified Section */}
      <div className='flex-col mx-auto my-10 bg-[#f0efea]'>
        <h1 className='mx-auto text-center text-5xl pt-10 pb-4 text-black max-[450px]:text-4xl'>Certified By</h1>
        <div className='flex justify-around items-center pt-6 pb-14 flex-wrap'>
          <img className='w-52 max-[900px]:w-44 mt-2 max-[400px]:w-32' src="/static/images/GIA.png" alt="" />
          <img className='w-52 max-[900px]:w-44 mt-2 max-[400px]:w-36' src="/static/images/GJEPC.png" alt="" />
          <img className='w-60 h-32 max-[900px]:w-56 mt-4 max-[400px]:w-40 max-[400px]:h-16' src="/static/images/IGI-GTL.png" alt="" />
          <img className='w-52 max-[900px]:w-44 mt-2 max-[400px]:w-36' src="/static/images/IGI.png" alt="" />
        </div>
      </div>
      {/* Certified Section */}


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
