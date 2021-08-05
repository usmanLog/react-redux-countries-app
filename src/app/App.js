import React from "react";
import { Nav } from "../components/Nav";
import { Search } from "../components/Search";
import { Countries } from "../components/Countries";
import { useSelector } from "react-redux";
import { Modal } from "../components/Modal";

function App() {
  const country = useSelector((state) => state.search.selectedCountry);
  const show = useSelector((state) => state.search.show);

  return (
    <div className="min-h-screen relative max-w-full bg-gray-100 dark:bg-gray-700 mix-blend-saturation">
      <header className="sticky top-0 z-30">
        <Nav />
      </header>
      <Search />
      <Countries />
      {show
        ? country.map((country, idx) => (
            <Modal
              key={idx}
              name={country.name}
              region={country.region}
              population={country.population}
              flag={country.flag}
              nativeName={country.nativeName}
              subRegion={country.subRegion}
              capital={country.capital}
              languages={country.languages}
              currency={country.currencies.name}
              topLevelDomain={country.topLevelDomain[0]}
              borderCountries={country.borders}
            />
          ))
        : null}
    </div>
  );
}

export default App;
