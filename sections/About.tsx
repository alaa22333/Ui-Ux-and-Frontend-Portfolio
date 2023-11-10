"use client";
import {
  TitleText,
  TitleWithImage,
  TypingText,
} from "@/components/UseableComps";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import aboutGirl from "@/public/assets/abouttt.png";
import { fadeIn, staggerContainer, zoomIn } from "@/constants/motions";
import Styles from "@/app/styles/styles";
import { aboutInfo } from "@/constants/data";
import Link from "next/link";
import { useMainContext } from "@/context/main-context";
const About = () => {
  const { setSelectedPage } = useMainContext();
  return (
    <motion.main
      className={`px-x md:px-md md:my-24 my-12  scroll-mt-20 `}
      id="about"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      onViewportEnter={() => setSelectedPage("About")}
      viewport={{ once: true }}
    >
      <div className={`${Styles.itemsCenter} `}>
        <TitleWithImage title="About" />
      </div>

      {/* left */}
      <div
        className={` ${Styles.itemsBetween}  md:gap-20 md:flex-row flex-col md:mt-16  mt-7   `}
      >
        <motion.div
          variants={zoomIn(0.4, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Image
            loading="eager"
            priority={true}
            alt="image"
            src={aboutGirl}
            width={400}
            height={300}
          />
        </motion.div>

        {/* right */}
        <motion.div
          variants={fadeIn("up", "spring", 1, 1.3)}
          className="flex flex-col md:w-1/2 w-full md:gap-6 gap-4 "
        >
          <p className="md:text-xl dark:text-grey400  text-grey500/70 text-lg  md:w-[90%] w-full  font-medium">
            I am skilled in all aspects of the{" "}
            <span className=" font-semibold"> design process </span>, from{" "}
            <span className=" font-semibold"> user research </span>
            and wireframing to
            <span className=" font-semibold"> prototyping </span> and
            implementation. I am also proficient in a variety of front-end
            development technologies, using Modern frameworks.
          </p>

          <hr className="text-main w-[70%] " />
          {/* info*/}
          <div className="flex flex-col md:gap-5 gap-2 items-start">
            {aboutInfo.map((ele, i) => {
              const { icon: Icon, text } = ele;
              return (
                <div key={i} className={`${Styles.itemsBetween} gap-3 `}>
                  <Icon className="text-xl text-secondary" />
                  <p
                    className={`md:text-lg text-sm dark:text-grey400  text-grey500/70 text-grey400 `}
                  >
                    {text}
                  </p>
                </div>
              );
            })}
          </div>

          <Link
            target="_blank"
            href="https://www.upwork.com/freelancers/~0188ad3869bf99649f"
            className="btn  my-4  text-center text-main "
          >
            Hire Me
          </Link>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default About;
