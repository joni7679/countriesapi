import React from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function CountyCard({ countries }) {
    console.log(countries[0],'country')
    return (
        <>
            {countries.map((elem, index) => {
                return (
                    <Link to={`/${elem.name.common}`} className="w-[300px]  rounded-md shadow-md " key={index}>
                        <img src={elem.flags.svg} alt="elem.flag" className="object-cover object-center w-full rounded-t-md h-72" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-semibold tracking-wide">{elem.name.common}</h2>
                                <p className="capitalize"> <span className='text-gray-950'> <span className='font-semibold capitalize'>population </span> :{elem.population}</span> </p>
                                <p><span className='font-semibold capitalize'>region </span>: {elem.region}</p>
                                <p><span className='font-semibold capitalize'>capital</span> : {elem.capital}</p>
                            </div>

                        </div>
                    </Link>
                )
            })}


        </>
    )
}
