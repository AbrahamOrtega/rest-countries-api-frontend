import Navbar from "@/components/Navbar";
import { IoSearchSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import Dropdown from "@/components/Dropdown";
import Card from "@/components/Card";
import Country from "@/models/Country";

export default function Home() {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [region, setRegion] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  // Filter countries by search
  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, countries]);

  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1${!region ? "/all" : `/region/${region}`}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, [search, region]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col h-full px-6 lg:px-20 pt-8 flex-grow">
        {/* Filter Section */}
        <div className="flex flex-col md:flex-row gap-y-4 w-full h-fit items-start justify-between md:items-center">
          {/* Search Input */}
          <div className="flex w-full max-w-[500px] items-center gap-x-[16px] px-6 py-4 shadow dark:bg-darkBlue text-veryDarkBlue2 dark:text-white rounded-md text-[14px]">
            <IoSearchSharp className="text-[20px]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a country..."
              className="w-full bg-transparent outline-none text-veryDarkBlue2 dark:text-white"
            />
          </div>

          {/* Filter Dropdown */}
          <Dropdown
            region={region}
            setRegion={setRegion}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          />
        </div>
        {/* Card Section */}
        {filteredCountries.length > 0 ? (
          <div className="flex flex-wrap justify-center md:justify-between gap-x-14 gap-y-14 py-12">
            {filteredCountries.map((country) => (
              <Card
                key={country.name.common}
                flag={country.flags.svg}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-grow items-center justify-center h-full">
            <h1 className="text-veryDarkBlue2 dark:text-white text-[24px] font-[700]">
              No countries found
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
