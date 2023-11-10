"use client";

import { ChildrenProps } from "@/shared/types";
import { ThemeProvider } from "next-themes";



function Providers({ children }:ChildrenProps) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

export default Providers