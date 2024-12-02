import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
const BackButton = () => {
  return (
    <>
      <Link to="/">
        <button className="flex items-center px-4 py-2 bg-gray-800 text-white rounded shadow">
          <span className="material-icons-outlined mr-2">
            <IoIosArrowBack className="inline icon" />
          </span>
          Back
        </button>
      </Link>
    </>

  );
};

export default BackButton;
