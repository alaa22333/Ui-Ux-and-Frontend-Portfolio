"use client";
import React from "react";
import upwork from "@/public/assets/new/logos_upwork.svg";
import behance from "@/public/assets/new/devicon-plain_behance-wordmark.svg";
import fiverr from "@/public/assets/new/simple-icons_fiverr.svg";
import dribble from "@/public/assets/new/logos_dribbble.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/constants/motions";
const Sponsors = () => {
  const images = [
    { img: upwork, alt: "upwork" },
    { img: fiverr, alt: "fiverr" },
    { img: behance, alt: "behance" },
    { img: dribble, alt: "dribble" },
  ];
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`md:my-20 my-10  w-full   -skew-y-2 `}
    >
      <div className="flex  md:justify-evenly justify-center gap-2 md:py-2 py-4 items-center bg-main/10 shadow  w-full mx-auto rounded-xl flex-wrap">
        {images.map((ele, i) => {
          const { img, alt } = ele;

          return (
            <motion.div key={i} variants={fadeIn("down", "spring", 0.4 * i, 1)}>
              <Image className="md:w-[150px] w-[60px]" src={img} alt={alt} />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Sponsors;
