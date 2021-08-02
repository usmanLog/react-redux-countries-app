import React from "react";
import { Nav } from "../components/Nav";
import { Search } from "../components/Search";
import { Countries } from "../components/Countries";

function App() {
  return (
    <div className="min-h-screen h-auto max-w-full bg-gray-100 dark:bg-gray-700 mix-blend-saturation">
      <header>
        <Nav />
      </header>
      <Search />
      <Countries />
    </div>
  );
}

export default App;
