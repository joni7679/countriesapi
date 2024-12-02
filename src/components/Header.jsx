import React from 'react'
import { Link } from 'react-router-dom'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export default function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg h-24 p-2 px-5 flex items-start justify-center">
                    <div className="container flex items-center justify-between w-full h-full">
                        <Link to={`/`} className="navbar-brand" href="#">Logo</Link>

                        <div className='them'>
                            <CiLight className='icon'/>
                        </div>
                    </div>
                </nav>
            </header>
            
        </>
    )
}
