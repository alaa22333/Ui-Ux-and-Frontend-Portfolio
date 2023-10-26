"use client";
import React, { createContext, useContext, useState } from "react";
 


const MainContext = createContext(null );


export default function ContextProvider({ children }) {
  const [showNav, setShowNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState('Home');

  return (
    <MainContext.Provider
      value={{
        selectedPage,
        setSelectedPage,
        showNav,
        setShowNav,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export function useMainContext() {
  return useContext(MainContext);
}
