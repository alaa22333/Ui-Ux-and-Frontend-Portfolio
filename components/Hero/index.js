"use client";
import React, { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import Styles from "@/app/styles/styles";
import Link from "next/link";
import Image from "next/image";
import arrow from "@/public/assets/arrow.png";
import hero from "@/public/assets/Saly-1.png";
import { socialIcons } from "@/constants/data";
import { fadeIn, rotateVariants, staggerContainer } from "@/constants/motions";
import { TitleText, TypingText } from "../UseableComps";
import { useMainContext } from "@/context/main-context";

const Hero = () => {
  const { setSelectedPage } = useMainContext();

  return (
    <section
      id="home"
      className={`px-x md:px-md 
  pt-10 
     md:scroll-mt-20
    `}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        onViewportEnter={() => setSelectedPage("Home")}
        viewport={{ once: false, amount: 0.25 }}
        className={`   md:${Styles.itemsBetween}   md:flex-row flex flex-col gap-5  `}
      >
        <motion.div
          className={` items-start flex flex-col  text-white/70 md:w-1/2 w-full `}
          variants={fadeIn("left", "tween", 0.4, 1)}
        >
          <h1 className="title py-1 dark:text-dark ">Hello There !</h1>
          <div className="md:text-[32px] text-[20px] py-2 ">
            I’m Alaa Ahmed
            <TypingText
              title={"Frontend Developer"}
              textStyles={
                "text-gradient md:text-[40px] dark:text-dark  text-[28px] md:whitespace-nowrap font-bold"
              }
            />
            <TypingText
              title={" & ui /ux Designer"}
              textStyles={
                "text-gradient md:text-[40px] dark:text-dark  text-[28px] whitespace-nowrap font-bold"
              }
            />
          </div>
          <TitleText
            title={
              " I like building new things and creating impressive designs and develop them into code .I worked on Many projects as a developer using most recent Technologies."
            }
            textStyles={"text-small py-4 text-sm md:text-lg"}
          />

          <div className={`${Styles.itemsCenter} md:gap-9  gap-4 mt-4   `}>
            <div className="flex flex-row md:gap-5 gap-2 items-center">
              {" "}
              <div className="btn rounded-xl text-center  ">
                <Link
                  href={""}
                  target="_blank"
                  className="  text-sm md:text-lg  "
                >
                  Download CV
                </Link>
              </div>
              <div className="  border border-2  btn bg-transparent text-center  ">
                <Link
                  href={""}
                  target="_blank"
                  className=" text-white   text-sm md:text-lg  "
                >
                  Hire Me
                </Link>
              </div>
            </div>
            <Image src={arrow} width={100} className="w-[60px] md:w-[100px]" alt="arrow"></Image>
          </div>
          <div className={`${Styles.itemsBetween}  mt-7 gap-10 `}>
            {socialIcons.map((item, i) => {
              const { icon: Icon, href } = item;

              return (
                <Link
                  href={href}
                  key={i}
                  className="bg-white/10 hover:backdrop-blur-[.2rem] hover:shadow-none drop-shadow-md backdrop-blur-[4rem] shadow-lg    rounded-full p-2"
                >
                  <Icon className="text-main hover:text-main/80  text-2xl md:text-3xl " />
                </Link>
              );
            })}
          </div>
        </motion.div>
        {/* right sec */}
        <motion.div
          variants={fadeIn("right", "tween", 0.6, 1)}
          className=" relative md:mt-0 mt-10"
        >
          <motion.div
            variants={rotateVariants("right")}
            viewport={{ once: false, amount: 0.25 }}
            initial="hidden"
            whileInView="show"
          >
            <Image src={hero} alt="image" width={530}></Image>
          </motion.div>
         
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
