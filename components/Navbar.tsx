import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState("light");

  // Initialize dark mode based on user preference on the client side
  useEffect(() => {
    if (localStorage.getItem("darkMode")) {
      const userPrefersDark = localStorage.getItem("darkMode") || "light";
      setDarkMode(userPrefersDark);
    } else {
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(userPrefersDark ? "dark" : "light");
    }
  }, []);

  // Handle dark mode toggle
  const handleDarkMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      localStorage.setItem("darkMode", "dark");
    } else {
      setDarkMode("light");
      localStorage.setItem("darkMode", "light");
    }
  };

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex w-full navbar items-center justify-between px-6 lg:px-20 py-6 shadow bg-white text-veryDarkBlue2 dark:bg-darkBlue dark:text-white z-10">
      <Link href="/" className="text-[16px] md:text-[28px] font-[700]">
        Where in the world?
      </Link>
      <button
        className="flex items-center gap-x-[8px] text-[12px] md:text-[14px]"
        onClick={handleDarkMode}
      >
        <span>{darkMode === "light" ? <FaMoon /> : <FaSun />}</span>
        <span>{darkMode === "dark" ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </div>
  );
}
