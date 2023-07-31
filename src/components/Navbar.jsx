import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PathContext } from '../context/PathContext'

const Navbar = () => {

    // DROPDOWN LOGIC
    const dropdown = async () => {

        let window_resol = window.matchMedia("(min-width: 600px)")

        Array.from(document.getElementsByTagName("ul")).forEach(element => {
            element.children[0].style.display = "none"
        })

        Array.from(event.target.children).forEach(element => {
            if (window_resol.matches) {
                if (element.style.display == "" || element.style.display == "none") {
                    element.style.display = "grid"
                    console.log("hello")
                }
                else {
                    element.style.display = "none"
                }
            }
            else{
                if (element.style.display == "" || element.style.display == "none") {
                    element.style.display = "flex"
                }
                else {
                    element.style.display = "none"
                }
            }
            

        })

    }

    // Sidebar Logic
    let show_sidebar = ()=>{
        let sidebar_state = document.getElementsByClassName('sidebar')[0].style.display
        if (sidebar_state == "none" || sidebar_state == "") {
            document.getElementsByClassName('sidebar')[0].style.display = "flex"
        }
        else{
            document.getElementsByClassName('sidebar')[0].style.display = "none"
        }
    }

    let show_more_data = ()=>{
        document.getElementsByClassName('sidebar')[0].style.display = "none"
    }

    // CLOSE DROPDOWN IF CLICKED ANYWHERE ELSE
    window.onclick = async (event) => {
        
        if (!event.target.matches('.hover-dropdown')) {
            Array.from(document.getElementsByClassName("dropdown-content")).forEach(element => {
                if (element.style.display == "grid" || element.style.display == "flex") {
                    element.style.display = "none"
                }
            })
        }
        console.log(document.getElementsByClassName('sidebar')[0].style.display)
        if (!event.target.matches('.sidebar') && !event.target.matches('.menu') && !event.target.matches('.sidebar-content') && !event.target.matches('.hover-dropdown')) {
            if (document.getElementsByClassName('sidebar')[0].style.display == "flex") {
                document.getElementsByClassName('sidebar')[0].style.display = "none"
            }
        }
        
    }


    return (
        <div className='max-[600px]:fixed max-[600px]:w-[100vw] max-[600px]:top-0 max-[600px]:z-50 '>
            <div className='flex bg-[#e3874f] py-8 items-center max-[600px]:h-[20vh]'>
                <span className="material-symbols-outlined hidden text-[#37363d] ml-7 cursor-pointer max-[600px]:block max-[370px]:mx-3 menu"  onClick={show_sidebar} style={{ fontSize: "23px"}}>
                    menu
                </span>
                <Link to='/' className="m-auto">
                    <h2 className='cursor-pointer font-dancin text-5xl text-center m-auto text-[#4C3D3D] font-medium max-[510px]:text-4xl max-[370px]:text-[34px]'>Vajramani And Gems</h2>
                </Link>
            </div>
            <div className='flex bg-[#e3874f] text-[#37363d] item-center justify-center text-lg px-6 pb-3 max-[600px]:h-[100vh] max-[600px]:w-[50vw] max-[600px]:z-30 max-[600px]:hidden sidebar'>

                <nav className='flex list-none w-[83%] justify-between h-12 items-center max-[600px]:flex-col max-[600px]:fixed max-[600px]:justify-around max-[600px]:items-start max-[600px]:w-[50vw] max-[600px]:h-fit max-[600px]:ml-10 max-[600px]:z-40 sidebar-content'>
                    <ul className='cursor-pointer hover-dropdown max-[600px]:my-3' onClick={dropdown}>
                        Chalcedony
                        <div className='rounded-xl hidden grid-cols-3 justify-around px-2 text-[#4C3D3D] bg-[#FFD95A] -ml-32 mt-3 absolute w-fit dropdown-content max-[600px]:flex-col max-[600px]:ml-28 max-[600px]:bg-[#e3874f] max-[600px]:h-[100vh] max-[600px]:rounded-none max-[600px]:fixed max-[600px]:top-[18vh] max-[600px]:w-36 max-[600px]:justify-start'>
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
                    </ul>
                    <ul className='cursor-pointer hover-dropdown max-[600px]:my-3' onClick={dropdown}>
                        Corundum
                        <div className='rounded-xl hidden grid-cols-2 justify-around px-2 text-[#4C3D3D] bg-[#FFD95A] -ml-24 mt-3 absolute w-fit dropdown-content max-[600px]:flex-col max-[600px]:ml-28 max-[600px]:bg-[#e3874f] max-[600px]:h-[100vh] max-[600px]:rounded-none max-[600px]:fixed max-[600px]:top-[18vh] max-[600px]:w-36 max-[600px]:justify-start'>
                            <Link to="/YellowSapphires">
                                <li className='text-center p-1 max-[600px]:my-2'>Yellow Sapphire</li>
                            </Link>
                            <Link to="/Ruby">
                                <li className='text-center p-1 max-[600px]:my-2'>Ruby</li>
                            </Link>
                            <Link to="/Sapphire">
                                <li className='text-center p-1 max-[600px]:my-2'>Sapphire</li>
                            </Link>
                            <Link to="/StarRuby">
                                <li className='text-center p-1 max-[600px]:my-2'>Star Ruby</li>
                            </Link>
                        </div>
                    </ul>
                    <ul className='cursor-pointer hover-dropdown max-[600px]:my-3' onClick={dropdown}>
                        Beryl
                        <div className='rounded-xl hidden grid-cols-2 justify-around px-2 text-[#4C3D3D] bg-[#FFD95A] -ml-24 mt-3 absolute w-fit dropdown-content max-[600px]:flex-col max-[600px]:ml-28 max-[600px]:bg-[#e3874f] max-[600px]:h-[100vh] max-[600px]:rounded-none max-[600px]:fixed max-[600px]:top-[18vh] max-[600px]:w-36 max-[600px]:justify-start'>
                            <Link to="/Aquamarine">
                                <li className='text-center p-1 max-[600px]:my-2'>Aquamarine</li>
                            </Link>
                            <Link to="/Emerald">
                                <li className='text-center p-1 max-[600px]:my-2'>Emerald</li>
                            </Link>
                            <Link to="/LightGreen">
                                <li className='text-center p-1 max-[600px]:my-2'>Light Green</li>
                            </Link>
                            <Link to="/TrapicheEmerald">
                                <li className='text-center p-1 max-[600px]:my-2'>Trapiche Emerald</li>
                            </Link>
                            <Link to="/CatEye">
                                <li className='text-center p-1 max-[600px]:my-2'>Cat's Eye</li>
                            </Link>
                        </div>
                    </ul>
                    <ul className='cursor-pointer hover-dropdown max-[600px]:my-3' onClick={dropdown}>
                        Quartz
                        <div className='rounded-xl hidden grid-cols-3 justify-around px-2 text-[#4C3D3D] bg-[#FFD95A] -ml-32 mt-3 absolute w-fit dropdown-content max-[600px]:flex-col max-[600px]:ml-28 max-[600px]:bg-[#e3874f] max-[600px]:h-[100vh] max-[600px]:rounded-none max-[600px]:fixed max-[600px]:top-[18vh] max-[600px]:w-36 max-[600px]:justify-normal'>
                            <Link to="/Prasiolite">
                                <li className='text-center p-1 max-[600px]:my-2'>Prasiolite</li>
                            </Link>
                            <Link to="/Amethyst">
                                <li className='text-center p-1 max-[600px]:my-2'>Amethyst</li>
                            </Link>
                            <Link to="/Ametrine">
                                <li className='text-center p-1 max-[600px]:my-2'>Ametrine</li>
                            </Link>
                            <Link to="/Citrine">
                                <li className='text-center p-1 max-[600px]:my-2'>Citrine</li>
                            </Link>
                            <Link to="/RockCrystal">
                                <li className='text-center p-1 max-[600px]:my-2'>Rock Crystal</li>
                            </Link>
                            <Link to="/Rose">
                                <li className='text-center p-1 max-[600px]:my-2'>Rose</li>
                            </Link>
                            <Link to="/Smoky">
                                <li className='text-center p-1 max-[600px]:my-2'>Smoky</li>
                            </Link>
                            <Link to="/Aventurine">
                                <li className='text-center p-1 max-[600px]:my-2'>Aventurine</li>
                            </Link>
                        </div>
                    </ul>
                    <Link to="/More">
                        <h4 className='cursor-pointer hover-dropdown max-[600px]:my-3' onClick={show_more_data}>
                            More
                        </h4>
                    </Link>
                </nav >
            </div >
        </div >
    )
}

export default Navbar
