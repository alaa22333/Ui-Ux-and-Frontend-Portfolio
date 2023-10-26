"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/public/assets/logo2.svg";
import { motion } from "framer-motion";
import { navVariants } from "@/constants/motions";
import useMediaQuery from "@/hooks/useMediaQuery";
import SideBar from "./SideBar";
import { FaBars } from "react-icons/fa";
import Links from "./Links";
import { useMainContext } from "@/context/main-context";
import Link from "next/link";

const NavBar = () => {
  const { showNav, setShowNav, isOpen, setIsOpen } = useMainContext();

  const isMatch = useMediaQuery("(min-width: 600px)");
  useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", () => {
      const height = window.pageYOffset;
      height >= 400 ? setShowNav(true) : setShowNav(false);
    });
    return () => window.removeEventListener("scroll", scrollEvent);
  });
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`md:px-md px-x  w-full  h-20    rounded-2xl     fixed top-0  pt-4   z-40 ${
        showNav &&
        " drop-shadow-md  border  rounded-xl  shadow-lg duration-500 transition  backdrop-blur-[2rem]"
      }    `}
    >
      <div className={`  flex justify-between items-center   `}>
        <Link href="/#home">
          {" "}
          <Image alt="logo" className="w-[100px] md:w-[140px]" src={logo} />
        </Link>
        {isMatch && (
          <div className={`flex justify-center items-center `}>
            <ul
              className={`flex justify-between items-center md:gap-5 lg:gap-9  gap-5`}
            >
              <Links />
            </ul>
          </div>
        )}
        {!isOpen && !isMatch && (
          <button
            type="button"
            title="btn"
            className="text-main  "
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <FaBars className=" h-8 w-8 text-white text-xl inline-block" />
          </button>
        )}
      </div>
      {isOpen && !isMatch && <SideBar />}
    </motion.div>
  );
};

export default NavBar;
