"use client";

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState("dark");

  /// handle dark mode
  const handleDarkMode = () => {
    setDarkMode(darkMode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (darkMode === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex w-full navbar items-center justify-between px-6 lg:px-20 py-6 shadow bg-white text-veryDarkBlue2 dark:bg-darkBlue dark:text-white z-10">
      <h1 className="text-[28px] font-[700]">Where in the world?</h1>
      <button
        className="flex items-center gap-x-[8px]"
        onClick={handleDarkMode}
      >
        <span>{darkMode === "light" ? <FaMoon /> : <FaSun />}</span>
        <span>{darkMode === "dark" ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </div>
  );
}
