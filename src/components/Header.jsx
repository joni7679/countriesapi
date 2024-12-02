import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export default function Header() {
    let [toggle, SetToggle] = useState(false)

    const themToggle = () => {
        alert("hello i am toggle")
        document.body.style.background = "#202C37"
    }

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg h-24 p-2 px-5 flex items-start justify-center">
                    <div className="container flex items-center justify-between w-full h-full">
                        <Link to={`/`} className="navbar-brand" href="#">Logo</Link>

                        <div className='them'>
                            {toggle ? (

                                <div className='flex items-center gap-2'>
                                    <MdDarkMode onClick={themToggle} className='icon' />
                                    <p>Dark Them</p>
                                </div>


                            ) : (
                                <div className='flex items-center gap-2'>
                                    <CiLight onClick={themToggle} className='icon' />
                                    <p>Light Them</p>
                                </div>
                            )}



                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}
