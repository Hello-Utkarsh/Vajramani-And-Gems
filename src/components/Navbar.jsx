import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PathContext } from '../context/PathContext'

const Navbar = () => {

    // DROPDOWN LOGIC
    const dropdown = async () => {

        Array.from(document.getElementsByTagName("ul")).forEach(element => {
            element.children[0].style.display = "none"
        })

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
            <div className='flex bg-[#e3874f] py-10 items-center'>
                <span className="material-symbols-outlined text-[#37363d] ml-7 cursor-pointer" style={{ fontSize: "26px" }}>
                    menu
                </span>
                <Link to='/' className="m-auto">
                    <h2 className='cursor-pointer font-dancin text-5xl m-auto text-[#4C3D3D] font-medium'>Vajramani And Gems</h2>
                </Link>
            </div>
            <div className='flex bg-[#e3874f] text-[#37363d] item-center justify-center text-lg px-6 pb-3'>

                <nav className='flex list-none w-[83%] justify-between h-12 items-center'>
                    {/* <ul className='cursor-pointer hover-dropdown' onClick={dropdown}>
                        Calcite
                        <div className='rounded-xl hidden grid-cols-1 justify-around px-2 text-[#4C3D3D] bg-[#FFD95A] -ml-10 mt-3 absolute w-fit dropdown-content'>
                            <Link to='/IcelandSpar'>
                                <li className='text-center p-1'>Iceland Spar</li>
                            </Link>
                            <Link to='/Marble'>
                                <li className='text-center p-1'>Marble</li>
                            </Link>
                            <Link to="/OnyxMarble">
                                <li className='text-center p-1'>Onyx Marble</li>
                            </Link>
                        </div>
                    </ul> */}
                    <ul className='cursor-pointer hover-dropdown' onClick={dropdown}>
                        Chalcedony
                        <div className='rounded-xl hidden grid-cols-3 justify-around px-2 text-[#4C3D3D] bg-[#FFD95A] -ml-32 mt-3 absolute w-fit dropdown-content'>
                            <Link to="/Black">
                                <li className='text-center p-1'>Black</li>
                            </Link>
                            <Link to="/Carnelian">
                                <li className='text-center p-1'>Carnelian</li>
                            </Link>
                            <Link to="/Chrysocolla">
                                <li className='text-center p-1'>Chrysocolla</li>
                            </Link>
                            <Link to="/Chrysoprase">
                                <li className='text-center p-1'>Chrysoprase</li>
                            </Link>
                            <Link to="/Sard">
                                <li className='text-center p-1'>Sard</li>
                            </Link>
                            <Link to="/Agate">
                                <li className='text-center p-1'>Agate</li>
                            </Link>
                            <Link to="/Bloodstone">
                                <li className='text-center p-1'>Bloodstone</li>
                            </Link>
                            <Link to="/DendriticAgate">
                                <li className='text-center p-1'>Dendritic Agate</li>
                            </Link>
                            <Link to="/Blue">
                                <li className='text-center p-1'>Blue</li>
                            </Link>
                            <Link to="/MossAgate">
                                <li className='text-center p-1'>Moss Agate</li>
                            </Link>
                            <Link to="/Onyx">
                                <li className='text-center p-1'>Onyx</li>
                            </Link>
                            <Link to="/Sardonyx">
                                <li className='text-center p-1'>Sardonyx</li>
                            </Link>
                            <Link to="/FireAgate">
                                <li className='text-center p-1'>Fire Agate</li>
                            </Link>
                        </div>
                        {/* Yellow Sapphires */}
                    </ul>
                    <ul className='cursor-pointer hover-dropdown' onClick={dropdown}>
                        Corundum
                        <div className='rounded-xl hidden grid-cols-2 justify-around px-2 text-[#4C3D3D] bg-[#FFD95A] -ml-24 mt-3 absolute w-fit dropdown-content'>
                            <Link to="/YellowSapphires">
                                <li className='text-center p-1'>Yellow Sapphire</li>
                            </Link>
                            <Link to="/Ruby">
                                <li className='text-center p-1'>Ruby</li>
                            </Link>
                            <Link to="/Sapphire">
                                <li className='text-center p-1'>Sapphire</li>
                            </Link>
                            <Link to="/StarRuby">
                                <li className='text-center p-1'>Star Ruby</li>
                            </Link>
                        </div>
                    </ul>
                    <ul className='cursor-pointer hover-dropdown' onClick={dropdown}>
                        Beryl
                        <div className='rounded-xl hidden grid-cols-2 justify-around px-2 text-[#4C3D3D] bg-[#FFD95A] -ml-24 mt-3 absolute w-fit dropdown-content'>
                            <Link to="/Aquamarine">
                                <li className='text-center p-1'>Aquamarine</li>
                            </Link>
                            <Link to="/Emerald">
                                <li className='text-center p-1'>Emerald</li>
                            </Link>
                            <Link to="/LightGreen">
                                <li className='text-center p-1'>Light Green</li>
                            </Link>
                            <Link to="/TrapicheEmerald">
                                <li className='text-center p-1'>Trapiche Emerald</li>
                            </Link>
                            <Link to="/CatEye">
                                <li className='text-center p-1'>Cat's Eye</li>
                            </Link>
                        </div>
                    </ul>
                    <ul className='cursor-pointer hover-dropdown' onClick={dropdown}>
                        Quartz
                        <div className='rounded-xl hidden grid-cols-3 justify-around px-2 text-[#4C3D3D] bg-[#FFD95A] -ml-32 mt-3 absolute w-fit dropdown-content'>
                            <Link to="/Prasiolite">
                                <li className='text-center p-1'>Prasiolite</li>
                            </Link>
                            <Link to="/Amethyst">
                                <li className='text-center p-1'>Amethyst</li>
                            </Link>
                            <Link to="/Ametrine">
                                <li className='text-center p-1'>Ametrine</li>
                            </Link>
                            <Link to="/Citrine">
                                <li className='text-center p-1'>Citrine</li>
                            </Link>
                            <Link to="/RockCrystal">
                                <li className='text-center p-1'>Rock Crystal</li>
                            </Link>
                            <Link to="/Rose">
                                <li className='text-center p-1'>Rose</li>
                            </Link>
                            <Link to="/Smoky">
                                <li className='text-center p-1'>Smoky</li>
                            </Link>
                            <Link to="/Hawkeye">
                                <li className='text-center p-1'>Hawk's Eye</li>
                            </Link>
                            <Link to="/Aventurine">
                                <li className='text-center p-1'>Aventurine</li>
                            </Link>
                        </div>
                    </ul>
                    <Link to="/More">
                        <h4 className='cursor-pointer hover-dropdown'>
                            More
                        </h4>
                    </Link>
                </nav >
            </div >
        </div >
    )
}

export default Navbar
