import React, { useEffect, useState } from "react";
import Header from "./Header";
import BackButton from "../BackButton";
import { useParams } from "react-router-dom";
import axios from "axios";

const CountryDetails = () => {
  const [country, setCountry] = useState(null);
  const name = useParams();
  console.log(name.name);
  console.log(country);

  // Fetch country details from API
  const fetchCountryDetails = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${name.name}?fullText=true`
      );
      const finalRes = response.data;
      setCountry(finalRes[0]);
      console.log(finalRes, "country");
    } catch (error) {
      console.error("Error fetching country details:", error);
    }
  };

  // Fetch country details on component mount
  useEffect(() => {
    fetchCountryDetails();
  }, []);

  // Render the country details once data is fetched
  return (
    <>
      <Header />
      {country ? (
        <div className="p-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <BackButton />
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-6">
            {/* Flag */}
            <img
              src={country.flags.svg}
              alt={`Flag of ${country.name.common}`}
              className="w-full lg:w-1/2 object-cover rounded shadow"
            />

            {/* Details */}
            <div className="w-[700px] ">
              <h2 className="text-2xl font-bold mb-4"></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <p>
                  <strong>Native Name:</strong> {country.nativeName ? Object.values(country.nativeName).join(',') : "N/A"}

                </p>
                <p>
                  <strong>Top Level Domain:</strong> {country.tld ? Object.values(country.tld).join(',') : 'N/A'}
                </p>
                <p>
                  <strong>Population:</strong> {country.population?.toLocaleString() || "N/A"}
                </p>
                <p className="flex gap-1">
                  <strong>Curreencies </strong> :<p className="flex-shrink-0">
                    {country.currencies
                      ? Object.values(country.currencies)
                        .map(currency => `${currency.name} (${currency.symbol})`)
                        .join(', ')
                      : "N/A"}
                  </p>
                </p>
                <p>
                  <strong>Region:</strong> {country.region}
                </p>
                <p className="flex gap-1">
                  <strong>Languages:</strong>  <p className="flex-shrink-0">{country.languages ? Object.values(country.languages).join(' , ') : "N/A"} </p>
                </p>
                <p>
                  <strong>Sub Region:</strong> <p className="flex-shrink-0">{country.subregion}</p>
                </p>
                <p>
                  <strong>Capital:</strong>{country.capital.map((capi, i) => {
                    return (<span key={i}>{capi}</span>)
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Border Countries */}
          <div className="mt-6">
            <strong>Border Countries:</strong>
            <div className="flex gap-2 mt-2">
              {country.borders
                ? country.borders.map((border, index) => (
                  <span key={index} className="bg-gray-200 px-3 py-1 rounded cursor-pointer hover:bg-blue-500 hover:text-white">
                    {border}
                  </span>
                ))
                : "No border countries"}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading country details...</p>
      )}
    </>
  );
};

export default CountryDetails;
