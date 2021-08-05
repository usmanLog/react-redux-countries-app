import React from "react";
import { useDispatch } from "react-redux";
import { showCountry } from "../features/searchSlice";

export function Modal({
  name,
  region,
  population,
  flag,
  nativeName,
  subRegion,
  capital,
  languages,
  currency,
  topLevelDomain,
  borderCountries,
}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showCountry(false));
  };

  return (
    <div className="absolute h-5/6 top-20 left-4 sm:left-14 trans w-11/12 dark:text-white">
      <button
        onClick={handleClick}
        className="bg-white dark:bg-gray-500 dark:text-white px-4 shadow-md"
      >
        {"<--"} back
      </button>

      <div className="flex flex-col md:flex-row  h-4/5 mt-6 md:justify-evenly">
        <div className=" h-2/5 md:h-4/5 w-4/5 md:w-1/2 overflow-hidden">
          <img
            className="block max-w-full h-full object-cover"
            src={flag}
            alt={name}
          />
        </div>

        <div className="mt-3 md:w-2/5  h-1/5">
          <p className="font-semibold text-xl mb-5">{name}</p>

          <small>
            <strong>Native Name: </strong>
            {nativeName}
          </small>
          <br />
          <small>
            <strong>Population:</strong>{" "}
            {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </small>
          <br />
          <small>
            <strong>Region:</strong> {region}
          </small>
          <br />
          <small>
            <strong>Sub Region:</strong> {subRegion}
          </small>
          <br />
          <small>
            <strong>Capital:</strong> {capital}
          </small>

          <div className="mt-4">
            <small>
              <strong>Top Level Domain:</strong> {topLevelDomain}
            </small>
            <br />
            <small>
              <strong>Currencies:</strong> {currency}
            </small>
            <br />
            <small>
              <strong>Languages:</strong>{" "}
              {languages.map((language, idx) => (
                <span key={idx}>{language.name}, </span>
              ))}
            </small>
          </div>

          <div className="mt-4">
            <p className="font-semibold">Border Countries:</p>
            {borderCountries.map((bc, idx) => (
              <span
                key={idx}
                className="mr-2 dark:bg-gray-500 px-2 bg-white shadow-md"
              >
                {bc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
