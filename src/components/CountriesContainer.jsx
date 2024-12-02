import React from 'react'
import CountyCard from './CountryCard'
export default function CountriesContainer({countries}) {
   
    return (

        <>
            <div className="container mx-auto">
                <div className="flex items-center justify-around flex-wrap px-6 py-2 gap-2 ">
                    <CountyCard  countries={countries}/>
                </div>
            </div>

        </>
    )
}
