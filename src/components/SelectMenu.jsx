import React, { useState } from 'react'

export default function SelectMenu({countries}) {
    const [selectedCountry, setSelectedCountry] = useState(null)
   const handelSectCountry =()=>{
    setSelectedCountry(countries)
   }
    return (
        <>
            <div className="">
                <div className="relative w-64">
                    <label className="block mb-2 text-gray-700 font-medium">
                        Select a Country:
                    </label>
                    <select onChange={handelSectCountry}
                        className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        <option value="" disabled>
                            Choose a country 
                        </option>
                        <option value="India">India</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                    </select>
                </div>
            </div>

        </>
    )
}
