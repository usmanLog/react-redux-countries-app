import React, { useState } from "react";
import Switch from "react-switch";

export function Nav() {
  const [checked, setChecked] = useState(false);
  const root = window.document.documentElement;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;
  if (localStorage) {
    theme = localStorage.getItem("theme");
  }
  if (theme === lightTheme || theme === darkTheme) {
    root.classList.add(theme);
  } else {
    root.classList.add(lightTheme);
  }

  const handleChange = () => {
    if (theme === darkTheme) {
      root.classList.replace(darkTheme, lightTheme);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
      setChecked(false);
    } else {
      root.classList.replace(lightTheme, darkTheme);
      localStorage.setItem("theme", "dark");
      setChecked(true);
    }
  };

  return (
    <nav className=" bg-white h-16 flex flex-row justify-between items-center p-6 dark:bg-gray-600 dark:text-white">
      <h1 className="text-lg font-semibold">Where in the World?</h1>
      <Switch
        onChange={handleChange}
        checked={localStorage.getItem("theme") === "dark" ? true : false}
      />
    </nav>
  );
}
