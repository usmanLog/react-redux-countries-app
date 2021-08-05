import React from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { searchCountry, searchByCategory } from "../features/searchSlice";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "Americas", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

export function Search() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.search.show);

  const handleChange = ({ target }) => {
    dispatch(
      searchCountry({
        name: target.value,
      })
    );
  };

  const handleType = ({ value }) => {
    dispatch(
      searchByCategory({
        word: value,
      })
    );
  };

  return !show ? (
    <div className="flex flex-row flex-wrap justify-between w-11/12 my-6 sm:staticitems-center mx-auto">
      <div>
        <input
          onChange={handleChange}
          placeholder="Search for a Country..."
          className=" w-3/4 sm:w-64 p-2 border border-gray-400 dark:border-white shadow-md"
          type="text"
        />
      </div>

      <div className="">
        <Select
          onChange={handleType}
          options={options}
          defaultValue={{
            value: "Filter By Region",
            label: "Filter By Region",
          }}
          className="sm:w-60 mt-1 w-44 sm:mt-0 shadow-md"
        />
      </div>
    </div>
  ) : null;
}
