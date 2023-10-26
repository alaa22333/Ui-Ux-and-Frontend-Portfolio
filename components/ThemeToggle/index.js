'use client'
import React from 'react'
import { useThemeContext } from "@/context/theme-context";
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";


function ThemeToggle() {
    const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className=" fixed bottom-10  right-10 bg-white/10 p-4 hover:backdrop-blur-[.2rem] hover:shadow-none drop-shadow-md backdrop-blur-[4rem] shadow-lg    rounded-full "
    >
      {theme === "dark" ? (
        <BsFillSunFill className="text-white hover:text-main/80  text-2xl md:text-3xl " />
      ) : (
        <MdDarkMode className="text-main hover:text-main/80  text-2xl md:text-3xl " />
      )}
    </button>
  );
}

export default ThemeToggle