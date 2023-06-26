import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    // DROPDOWN LOGIC
    const dropdown = async () => {
        Array.from(event.target.children).forEach(element => {
            if (element.style.display == "" || element.style.display == "none") {
                element.style.display = "grid"
            }
            else {
                element.style.display = "none"
            }

        })

    }

    // CLOSE DROPDOWN IF CLICKED ANYWHERE ELSE
    window.onclick = async (event) => {
        if (!event.target.matches('.hover-dropdown')) {
            Array.from(document.getElementsByClassName("dropdown-content")).forEach(element => {
                if (element.style.display == "grid") {
                    element.style.display = "none"
                }
            })
        }
    }


    return (
        <div>
            <div className='flex bg-[#C07F00] py-10 items-center'>
                <span className="material-symbols-outlined text-[#4C3D3D] ml-7 cursor-pointer" style={{ fontSize: "26px" }}>
                    menu
                </span>
                <h2 className='cursor-pointer font-dancin text-5xl m-auto text-[#4C3D3D] font-medium '>Vajramani And Gems</h2>
            </div>
            <div className='flex bg-[#C07F00] text-[#4C3D3D] item-center justify-center text-lg px-6 pb-3'>

                <nav className='flex list-none w-[83%] justify-between h-12 items-center'>
                    <ul className='cursor-pointer hover-dropdown' onClick={dropdown}>
                        Calcite
                        <div className='rounded-xl hidden grid-cols-1 justify-around px-2 text-[#4C3D3D] bg-[#FFD95A] -ml-10 mt-3 absolute w-fit dropdown-content'>
                            <Link to='/Iceland Spar'>
                                <li className='text-center p-1'>Iceland Spar</li>
                            </Link>
                            <li className='text-center p-1'>Marble</li>
                            <li className='text-center p-1'>Onyx Marble</li>
                        </div>
                    </ul>
                    <ul className='cursor-pointer hover-dropdown flex-col' onClick={dropdown}>
                        Chalcedony
                        <div className='rounded-xl hidden grid-cols-3 justify-around px-2 text-[#4C3D3D] bg-[#FFD95A] -ml-32 mt-3 absolute w-fit dropdown-content'>
                            <li className='text-center p-1'>Black</li>
                            <li className='text-center p-1'>Carnelian</li>
                            <li className='text-center p-1'>Chrysocolla</li>
                            <li className='text-center p-1'>Chrysoprase</li>
                            <li className='text-center p-1'>Sard</li>
                            <li className='text-center p-1'>Agate</li>
                            <li className='text-center p-1'>Bloodstone</li>
                            <li className='text-center p-1'>Dentritic Agate</li>
                            <li className='text-center p-1'>Milky</li>
                            <li className='text-center p-1'>Moss Agate</li>
                            <li className='text-center p-1'>Onyx</li>
                            <li className='text-center p-1'>Sardonyx</li>
                            <li className='text-center p-1'>Fire Agate</li>
                        </div>

                    </ul>
                    <ul className='cursor-pointer hover-dropdown' onClick={dropdown}>
                        Corundum
                        <div className='rounded-xl hidden grid-cols-2 justify-around px-2 text-[#4C3D3D] bg-[#FFD95A] -ml-24 mt-3 absolute w-fit dropdown-content'>
                            <li className='text-center p-1'>Yellow Sapphire</li>
                            <li className='text-center p-1'>Ruby</li>
                            <li className='text-center p-1'>Sapphire</li>
                            <li className='text-center p-1'>Star Ruby</li>
                        </div>
                    </ul>
                    <ul className='cursor-pointer hover-dropdown' onClick={dropdown}>
                        Quartz
                        <div className='rounded-xl hidden grid-cols-3 justify-around px-2 text-[#4C3D3D] bg-[#FFD95A] -ml-32 mt-3 absolute w-fit dropdown-content'>
                            <li className='text-center p-1'>Prasiolite</li>
                            <li className='text-center p-1'>Amethyst</li>
                            <li className='text-center p-1'>Ametrine</li>
                            <li className='text-center p-1'>Citrine</li>
                            <li className='text-center p-1'>Rock Crystal</li>
                            <li className='text-center p-1'>Rose</li>
                            <li className='text-center p-1'>Smoky</li>
                            <li className='text-center p-1'>Hawk's Eye</li>
                            <li className='text-center p-1'>Aventurine</li>
                        </div>
                    </ul>
                    <ul className='cursor-pointer hover-dropdown' onClick={dropdown}>
                        Tourmaline
                        <div className='rounded-xl hidden grid-cols-1 justify-around px-2 text-[#4C3D3D] bg-[#FFD95A] -ml-2 mt-3 absolute w-fit dropdown-content'>
                            <li className='text-center p-1'>Rubelite</li>
                            <li className='text-center p-1'>Bi-Coloured</li>
                            <li className='text-center p-1'>Watermelon</li>
                        </div>
                    </ul>
                    <ul className='cursor-pointer hover-dropdown' onClick={dropdown}>
                        More
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
