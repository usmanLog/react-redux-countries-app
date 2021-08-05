import React from "react";
import { showCountry, currentCountry } from "../features/searchSlice";
import { useDispatch } from "react-redux";

export function Country({ flag, name, population, region, capital }) {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(showCountry(true));
    dispatch(currentCountry(name));
  };

  return (
    <>
      <div
        onClick={handleClick}
        value={name}
        className="sm:m-6 my-3 w-64 rounded-md overflow-hidden bg-white cursor-pointer shadow-md h-80 dark:bg-gray-600 dark:text-white"
      >
        <div className=" h-1/2 w-full overflow-hidden mt-0">
          <img
            className="h-full w-full block object-cover"
            src={flag}
            alt={name}
          />
        </div>

        <div className="m-6 ">
          <p className="font-semibold mb-4">{name}</p>
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
            <strong>Capital:</strong> {capital}
          </small>
        </div>
      </div>
    </>
  );
}
