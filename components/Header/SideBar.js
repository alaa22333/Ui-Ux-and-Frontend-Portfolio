"use client";
import React from "react";
import { motion } from "framer-motion";
import { sideBarVariants } from "@/constants/motions";
import { AiOutlineClose } from "react-icons/ai";
import Links from "./Links";
import Image from "next/image";
import logo from "@/public/assets/logo2.svg";
import styles from "@/app/styles/styles";
import { useMainContext } from "@/context/main-context";
const SideBar = () => {
  const { isOpen, setIsOpen } = useMainContext();

  return (
    <motion.div
      variants={sideBarVariants}
      initial={isOpen ? "hidden" : "show"}
      whileInView={isOpen ? "show" : "hidden"}
      className=" w-[300px] h-[120vh] drop-shadow-lg     rounded-xl  bg-black/60 shadow-black/[0.01]  p-5   absolute  flex flex-col  -right-1 -top-1 shadow "
    >
      <div className={`${styles.itemsBetween}  `}>
        <Image src={logo} className=" text-left  w-[100px]" alt="image"></Image>
        {/* close btn */}
        <button
          title="btn"
          className=" flex text-white  z-20 "
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <AiOutlineClose className=" h-5 w-5 z-20 text-white" />
        </button>
        {/* links */}
      </div>
      <div className={`   mt-10`}>
        <ul className={` flex  flex-col  gap-7`}>
          <Links />
        </ul>
      </div>
    </motion.div>
  );
};

export default SideBar;
