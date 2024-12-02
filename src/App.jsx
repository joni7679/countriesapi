import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import SelectMenu from './components/SelectMenu';
import CountriesContainer from './components/CountriesContainer';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch countries data
  const fetchCountriesData = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('Fetched data:', data); 
        setCountries(data); 
      })
      .catch((error) => {
        console.error('Error fetching countries data:', error); 
      });
  };

  useEffect(() => {
    fetchCountriesData();
  }, []);

// filters countries data
const filteredCountries = countries.filter((country) =>
  country.name.common.toLowerCase().includes(searchQuery) ||
  country.region.toLowerCase().includes(searchQuery) ||
  (country.capital?.[0] || '').toLowerCase().includes(searchQuery)
);



  return (
    <>
      <Header />
      <div className="flex items-center justify-between px-5 py-2 flex-wrap">
      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <SelectMenu  countries={countries} />
      </div>
      <CountriesContainer countries={filteredCountries} />
    </>
  );
}

export default App;
