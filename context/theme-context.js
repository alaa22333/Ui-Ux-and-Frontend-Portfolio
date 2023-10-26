"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    (localStorage.getItem("theme")) || "dark"
  );
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", theme);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}