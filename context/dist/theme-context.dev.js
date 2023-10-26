"use strict";
"use client"; // import React, { createContext, useContext, useEffect, useState } from "react";
// const ThemeContext = createContext(null);
// export default function ThemeProvider({ children }) {
//  /*  if (typeof window !== "undefined") {
//     // Perform localStorage action
//      item = localStorage.getItem("theme");
//   }
//   const [theme, setTheme] = useState(
//  item||   "dark"
//   );
//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };
//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//       window.localStorage.setItem("theme", theme);
//     } else {
//       document.documentElement.classList.remove("dark");
//        window.localStorage.setItem("theme", theme);
//     }
//   }, [theme]);
//   useEffect(() => {
//     if (
//       window.localStorage.theme === "dark" ||
//       (!("theme" in localStorage) &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches)
//     ) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, []); */
//   return (
//     <ThemeContext.Provider
//       value={{
//         theme,
//         toggleTheme,
//       }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// }
// export function useThemeContext() {
//   return useContext(ThemeContext);
// }