'use client'
import React, { useEffect, useState } from 'react'
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from 'next-themes'

function ThemeToggle() {
   
  const { theme, systemTheme, resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  console.log(theme);
  const currentTheme = theme===  'system' ? systemTheme :theme 
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      value={theme}
      className=" fixed bottom-10   right-10 bg-white/10 p-4 hover:backdrop-blur-[.2rem] hover:shadow-none drop-shadow-md backdrop-blur-[4rem] shadow-lg    rounded-full "
    >
      {currentTheme === "dark" ? (
        <BsFillSunFill className="text-white  hover:text-main/80  text-2xl md:text-3xl " />
      ) : (
        <MdDarkMode className="text-main hover:text-main/80  text-2xl md:text-3xl " />
      )}
    </button>
  );
}

export default ThemeToggle