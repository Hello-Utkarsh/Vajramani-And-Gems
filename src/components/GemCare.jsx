import React from 'react'

const GemCare = () => {
    return (
        <div className='bg-black text-[#BACCD1] pt-48'>
            <div className='flex-col items-center justify-center '>

                <h1 className='text-4xl m-auto text-center text-[#C07F00] max-[400px]:text-3xl w-[80%]'>Handle your gemstone with care</h1>
                <div className='flex justify-between w-[84%] m-auto max-[1000px]:flex-col max-[1000px]:items-center'>
                    <p className='w-[55%] my-8 max-[1000px]:w-[95%]'>Many crystals are fragile or friable. Crystals that are layered or clustered can separate. Crystals such as Selenite are water soluble. Polished surfaces or natural points are easily scratched or damaged. Tumbled stones are more durable. Endless hours turning in fine grit gives them a tough surface. You can keep tumbled stones together in a bag but other crystals should be kept apart. <br /><br />When not in use, wrap your crystals in a silk or velvet scarf. This prevents scratching and protects the crystal against absorbing foreign emanations. Crystals need to be cleansed when you buy them and after wearing or using for healing. Always cleanse jewelry that comes to you from someone else, as it can hold their negative vibrations and pass them on to you. <br /><br />A few crystals never need cleansing. Citrine, Kyanite, and Azeztulite are self-cleaning. Clear Quartz and Carnelian cleanse other crystals, and are especially useful for delicate and friable stones, but may need cleaning themselves afterward</p>
                    <img className='h-full w-[40%] -mt-20 max-[600px]:h-64 max-[500px]:w-[60%]' src="/static/images/gemcare.png" alt="" />
                </div>
            </div>
            <div className='flex-col items-center justify-center'>

                <h1 className='text-4xl w-[80%] m-auto text-center text-[#C07F00] max-[400px]:text-3xl'>Crystal Cleansing</h1>
                <div className='flex justify-between w-[84%] m-auto max-[1000px]:flex-col max-[1000px]:items-center'>
                    <img className='h-full w-[40%] mt-20 max-[600px]:h-64 max-[600px]:mt-4 max-[500px]:w-[60%]' src="/static/images/clean-gemstone.png" alt="" />
                    <p className='w-[55%] my-8 max-[1000px]:w-[95%]'>Crystals that are not friable or jointed can be held under running water or immersed in the sea or in salt water. As you do so, hold the intention that all negativity will be washed away and the crystal reenergized. Placing the crystal in the light of the sun or moon for a few hours can also recharge its batteries provided it is not a stone that fades in sunlight and care is taken not to focus the rays where they could start a fire-remember that the light from the sun moves around in an arc as the day progresses. <br /><br />Friable crystals or clusters can be left in sea or rock salt overnight. Gently brush every speck of salt off afterward as they could damage the crystal, especially in a damp atmosphere. <br /><br />Certain crystals have the ability to cleanse other crystals. Keep a Carnelian in a bag of tumbled stones and you will never need to cleanse them using any other method. A small crystal can be placed on a Clear Quartz cluster and left overnight. <br /><br />You can smudge crystals or pass them through the light from a candle. You can also visualize them surrounded by light, which purifies and reenergizes them.<br /><br />One of the easiest ways to purify a crystal is to use a purpose-made cleanser available over the Internet. You only need to put a drop or two on the crystal, or spray it with an atomizer of water to which a few drops of cleanser have been added-this does not damage friable crystals if sprayed lightly.</p>
                </div>
            </div>
        </div>
    )
}

export default GemCare
