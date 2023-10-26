import "./styles/globals.css";
import { Roboto } from "next/font/google";
import ContextProvider from "@/context/main-context";
import NavBar from "@/components/Header";
import ThemeToggle from "@/components/ThemeToggle";
import { Suspense } from "react";
import Loading from "./loading";
import Providers from "./Providers";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Alaa",
  icons: {
    icon: "/icon.svg",
  },
  description: "Ui / Ux designer & frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`   dark:bg-black  overflow-x-hidden   pt-28 ${roboto.className}`}
      >
        <ContextProvider>
          <Providers>
            <Suspense fallback={<Loading />}>
              <div className="main-gradient left-0 top-1/2 opacity-100  dark:opacity-0" />
              <div className="main-gradient left-0 top-0 opacity-100  dark:opacity-0 " />
              <div className="main-gradient right-0 top-10   " />
              <div className="main-gradient left-0 bottom-0   " />
              <NavBar />
              {children}
              <ThemeToggle />{" "}
            </Suspense>
          </Providers>
        </ContextProvider>
      </body>
    </html>
  );
}
