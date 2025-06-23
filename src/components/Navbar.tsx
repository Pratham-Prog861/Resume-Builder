"use client"
import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // On mount, check localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-white/80 dark:bg-gray-900/80 shadow-sm dark:shadow-lg backdrop-blur border-b border-gray-200 dark:border-gray-800 transition-all">
      <h1 className="text-2xl font-extrabold tracking-tight text-gray-800 dark:text-gray-100 drop-shadow-sm select-none">
        Modular<span className="text-blue-600 dark:text-yellow-400">Resume</span>
      </h1>
      <div className="space-x-2 flex items-center">
        <a
          href="#features"
          onClick={e => { e.preventDefault(); scrollToSection("features"); }}
          className="px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-yellow-400 font-medium transition-all"
        >
          Features
        </a>
        <a
          href="#why"
          onClick={e => { e.preventDefault(); scrollToSection("why"); }}
          className="px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-yellow-400 font-medium transition-all"
        >
          Why Am I Developing
        </a>
        <a
          href="#get-started"
          className="ml-2 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-yellow-500 dark:to-yellow-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 border-2 border-transparent hover:border-blue-700 dark:hover:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-yellow-400"
        >
          Get Started
        </a>
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors border border-gray-300 dark:border-gray-600 shadow-sm"
        >
          {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
