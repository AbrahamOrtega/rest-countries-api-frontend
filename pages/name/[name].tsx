import Navbar from "@/components/Navbar";
import { FaArrowLeftLong } from "react-icons/fa6";
import Image from "next/image";
import { useState, useEffect } from "react";
import Country from "@/models/Country";
import { useParams, useRouter } from "next/navigation";

export default function CountryView() {
  const router = useRouter();
  const [country, setCountry] = useState<Country | null>(null);
  const [borders, setBorders] = useState<Country[] | null>(null);
  const params = useParams();

  useEffect(() => {
    if (!country?.borders) return;

    Promise.all(
      country.borders.map(
        (border) =>
          fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => res.json())
            .catch(() => null) // Handle fetch error by returning null
      )
    ).then((data) => {
      // Filter out any null or undefined responses
      const validBorders = data.filter((item) => item && item[0]?.name);
      setBorders(validBorders.map((item) => item[0])); // Extract the first item in the array
    });
  }, [country]);

  useEffect(() => {
    if (!params) return;
    fetch(`https://restcountries.com/v3.1/name/${params.name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data[0]);
      });
  }, [params]);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar />
      <div className="flex flex-col h-full px-6 lg:px-20 pt-8 flex-grow mb-10">
        <button
          onClick={() => router.back()}
          className="flex w-fit items-center px-6 py-2 shadow-md rounded dark:bg-darkBlue dark:text-white"
        >
          <FaArrowLeftLong className="text-[16px] mr-2" />
          Back
        </button>
        {country && (
          <div className="flex flex-col lg:flex-row w-full mt-12 gap-x-16 gap-y-8 items-center">
            <div className="flex w-full lg:w-1/2 pb-[65%] lg:pb-[30%] relative lg:mr-8">
              <Image
                src={country.flags.svg}
                alt={country.name.common}
                width={1000}
                height={1000}
                className="absolute w-full h-full object-cover"
              />
            </div>
            <div className="flex w-full lg:w-1/2 flex-col dark:text-white">
              <h3 className="text-[28px] font-[800]">{country.name.common}</h3>
              <div className="flex flex-col lg:flex-row gap-y-8 mt-6">
                <div className="flex flex-col lg:w-1/2 gap-y-2">
                  <p>
                    <span className="font-[600]">Native Name: </span>
                    {country.name.official}
                  </p>
                  <p>
                    <span className="font-[600]">Population: </span>
                    {country.population}
                  </p>
                  <p>
                    <span className="font-[600]">Region: </span>
                    {country.region}
                  </p>
                  <p>
                    <span className="font-[600]">Sub Region: </span>
                    {country.subregion}
                  </p>
                  <p>
                    <span className="font-[600]">Capital: </span>
                    {country.capital}
                  </p>
                </div>
                <div className="flex flex-col lg:w-1/2 gap-y-2">
                  <p>
                    <span className="font-[600]">Top Level Domain: </span>
                    {country.tld[0]}
                  </p>
                  <p>
                    <span className="font-[600]">Currencies: </span>
                    {
                      (
                        country.currencies[
                          Object.keys(
                            country.currencies
                          )[0] as keyof typeof country.currencies
                        ] as { name: string }
                      ).name
                    }
                  </p>
                  <p>
                    <span className="font-[600]">Languages: </span>
                    {Object.values(country.languages).map(
                      (language, index) => (
                        console.log(
                          Object.values(country.languages).length,
                          index
                        ),
                        (
                          <span key={index}>
                            {index < Object.values(country.languages).length - 1
                              ? language + ", "
                              : language}
                          </span>
                        )
                      )
                    )}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center mt-12 dark:text-white gap-y-2">
                <p>Border Countries: </p>
                {borders ? (
                  borders.map((border: Country, index) => (
                    <button
                      key={index}
                      onClick={() => router.push(`/name/${border.name.common}`)}
                      className="ml-2 px-4 py-1 rounded text-[14px] bg-white dark:bg-darkBlue shadow"
                    >
                      {border.name.common ?? "N/A"}
                    </button>
                  ))
                ) : (
                  <span>N/A</span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
