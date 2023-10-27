"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/constants/motions";
import { TitleWithImage } from "@/components/UseableComps";
import Image from "next/image";
import skillImage from "@/public/assets/skills.svg";
import Styles from "@/app/styles/styles";
import { skills } from "@/constants/data";
import { useMainContext } from "@/context/main-context";

const Skills = () => {
  const { setSelectedPage } = useMainContext();

  return (
    <motion.main
      id="skills"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      onViewportEnter={() => setSelectedPage("Skills")}
      className={`px-x md:px-md scroll-mt-32 md:my-20 my-12 `}
    >
      <TitleWithImage
        title={"Skills"}
        animation="left"
        img={skillImage}
        direction={"right"}
      />

      <div
        className={`${Styles.itemsCenter} flex-wrap gap-4 md:gap-6  mt-10`}
      >
        {skills.map((ele, i) => {
          const { image, skill } = ele;
          return (
            <motion.div
              key={i}
              variants={fadeIn("down", "spring", i * 0.5, 0.25)}
            >
              <Image
                className="md:w-[120px] w-[60px] rounded-full"
                src={image}
                alt={skill}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.main>
  );
};

export default Skills;
