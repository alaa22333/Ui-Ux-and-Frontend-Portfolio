"use client";
import { ChildrenProps, ComponentProps, Section } from "@/shared/types";

import React, { createContext, useContext, useState } from "react";
 


const MainContext = createContext < ComponentProps | null > (null);


export default function ContextProvider({ children } :ChildrenProps) {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedPage, setSelectedPage] = useState<Section>("Home");

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
