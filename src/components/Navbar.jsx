import React from 'react'

const Navbar = () => {

    // DROPDOWN LOGIC
    const dropdown = async () => {
        let target_dropdown = Array.from(event.target.children).forEach(element => {
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
            Array.from(document.getElementsByClassName("dropdown-content")).forEach(element=>{
                if (element.style.display == "grid") {
                    console.log(element)
                    element.style.display = "none"
                }
            })
        }
    }


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
                    <ul className='cursor-pointer hover-dropdown' onClick={dropdown}>
                        Calcite
                        <div className='rounded-xl hidden grid-cols-3 justify-around px-2 text-[#4C3D3D] bg-[#FFD95A] -ml-16 mt-3 absolute w-[28vh] dropdown-content'>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                        </div>
                    </ul>
                    <ul className='cursor-pointer hover-dropdown flex-col' onClick={dropdown}>
                        Chalcedony
                        <div className='rounded-xl hidden grid-cols-3 justify-around px-2 text-[#4C3D3D] bg-[#FFD95A] -ml-16 mt-3 absolute w-[28vh] dropdown-content'>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                        </div>
                    </ul>
                    <ul className='cursor-pointer hover-dropdown' onClick={dropdown}>
                        Corundum
                        <div className='rounded-xl hidden grid-cols-3 justify-around px-2 text-[#4C3D3D] bg-[#FFD95A] -ml-16 mt-3 absolute w-[28vh] dropdown-content'>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                        </div>
                    </ul>
                    <ul className='cursor-pointer hover-dropdown' onClick={dropdown}>
                        Quartz
                        <div className='rounded-xl hidden grid-cols-3 justify-around px-2 text-[#4C3D3D] bg-[#FFD95A] -ml-16 mt-3 absolute w-[28vh] dropdown-content'>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                        </div>
                    </ul>
                    <ul className='cursor-pointer hover-dropdown' onClick={dropdown}>
                        Tourmaline
                        <div className='rounded-xl hidden grid-cols-3 justify-around px-2 text-[#4C3D3D] bg-[#FFD95A] -ml-16 mt-3 absolute w-[28vh] dropdown-content'>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                        </div>
                    </ul>
                    <ul className='cursor-pointer hover-dropdown' onClick={dropdown}>
                        More
                        <div className='rounded-xl hidden grid-cols-3 justify-around px-2 text-[#4C3D3D] bg-[#FFD95A] -ml-16 mt-3 absolute w-[28vh] dropdown-content'>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                            <li className='text-center'>hello</li>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
