import React, { useState } from "react";

const Searchbar = ({ searchQuery, setSearchQuery }) => {
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value); 
        console.log(e.target.value)
    };

    

    return (
        <>
            <div className="px-5 py-2">
                <div className="relative w-full max-w-md ">
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Search here..." value={searchQuery} onChange={handleInputChange}
                    />
                    <svg
                        className="absolute top-3 right-3 w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                        />
                    </svg>
                </div>
            </div>

        </>
    );
};

export default Searchbar;
