import React, { useEffect, useState } from "react";
import Header from "./Header";
import BackButton from "../BackButton";
import { useParams } from "react-router-dom";
import axios from "axios";

const CountryDetails = () => {
  const [country, setCountry] = useState(null);
  const name = useParams();
  console.log(name)


  const fetchCountryDetails = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
      const finalRes = response.data;
      setCountry(finalRes);
      console.log(finalRes);
    } catch (error) {
      console.error("Error fetching country details:", error);
    }
  };


  useEffect(() => {
    fetchCountryDetails();
  }, [name]);
  return (
    <>
      <Header />
      {country}
      <div className="p-6 max-w-4xl mx-auto">
        <div className="mb-6">
          <BackButton />
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* Flag */}

          <img
            src='https://flagcdn.com/mn.svg'
            alt=''
            className="w-full lg:w-1/2 object-cover rounded shadow"
          />


          {/* Details */}
          <div className="lg:w-1/2">

            <>
              <h2 className="text-2xl font-bold mb-4"></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p>
                  <strong>Native Name:</strong>
                </p>
                <p>
                  <strong>Top Level Domain:</strong>
                </p>
                <p>
                  <strong>Population:</strong>
                </p>
                <p>
                  <strong>Currencies:</strong>
                </p>
                <p>
                  <strong>Region:</strong>
                </p>
                <p>
                  <strong>Languages:</strong>
                </p>
                <p>
                  <strong>Sub Region:</strong>
                </p>
                <p>
                  <strong>Capital:</strong>
                </p>
              </div>
            </>

            {/* Border Countries */}
            <div className="mt-6">
              <strong>Border Countries:</strong>
              <div className="flex gap-2 mt-2">
                {/* Display border countries here if available */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryDetails;
