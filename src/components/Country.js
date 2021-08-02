import React from "react";

export function Country({ flag, name, population, region, capital }) {
  return (
    <div className="sm:m-6 my-3 w-64 bg-white shadow-md h-80 dark:bg-gray-500 dark:text-white">
      <div className=" h-1/2 w-full overflow-hidden">
        <img className="h-full w-full block" src={flag} alt={name} />
      </div>

      <div className="m-8 ">
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
  );
}
