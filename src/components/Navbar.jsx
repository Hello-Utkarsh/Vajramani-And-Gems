import React from 'react'

const Navbar = () => {

    return (
        <div className='bg-[#FFD95A]'>
            <div className='flex w-[100vw] bg-[#C07F00] py-6 items-center'>
                <span className="material-symbols-outlined text-[#4C3D3D] ml-7 cursor-pointer" style={{ fontSize: "26px" }}>
                    menu
                </span>
                <h2 className='font-dancin text-5xl m-auto text-[#4C3D3D] font-medium '>Vajramani And Gems</h2>
            </div>
            <div className='flex w-[100vw] bg-[#C07F00] text-[#4C3D3D] item-center justify-center text-lg px-6 pb-3'>

                <nav className='flex list-none w-[83%] justify-between h-12 items-center'>
                    <ul className='cursor-pointer hover-dropdown'>
                        Calcite
                    </ul>
                    <li className='hidden'>hello</li>
                    <ul className='cursor-pointer hover-dropdown'>Chalcedony</ul>
                    <li className='hidden'>hello</li>
                    <ul className='cursor-pointer hover-dropdown'>Corundum</ul>
                    <li className='hidden'>hello</li>
                    <ul className='cursor-pointer hover-dropdown'>Quartz</ul>
                    <li className='hidden'>hello</li>
                    <ul className='cursor-pointer hover-dropdown'>Tourmaline</ul>
                    <li className='hidden'>hello</li>
                    <ul className='cursor-pointer hover-dropdown'>More</ul>
                    <li className='hidden'>hello</li>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
