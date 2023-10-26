import Styles from "@/app/styles/styles";
import Image from "next/image";
import React from "react";
import right from "@/public/assets/right.svg";
import left from "@/public/assets/left.svg";
import { motion } from "framer-motion";
import { navVariants, rotateVariants } from "@/constants/motions";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Link from "next/link";
const WebCard = ({
  img,
  url,
  git,
  uses,
  name,
  description,
  direction,
  oppDirection,
}) => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={` w-full `}
    >
      {/* project part */}
      <div className="relative  md:w-full w-full md:h-[18em]  h-[16rem] lg:w-[90%]">
        {/* info */}
        <div className={`main-gradient ${direction}-0 top-1/2   `} />
        <div className={`main-gradient ${oppDirection}-0 top-0 `} />

        <div
          className={`bg-white/70 absolute  flex flex-col justify-evenly py-4  px-6  z-100 w-[90%] lg:w-[70%]    h-full ${
            oppDirection === "left"
              ? "lg:left-[10rem] left-[1rem] "
              : "lg:left-[10rem]  left-[1rem]"
          } lg:top-0 top-32 z-2  rounded-xl   `}
        >
          <h1 className="text-center text-black text-xl font-semibold ">
            {name}
          </h1>
          <div
            className={`${Styles.itemsCenter}  text-center gapX-5 md:w-[60%] mx-auto  flex-wrap`}
          >
            {uses.map((ele, i) => {
              return (
                <p
                  key={i}
                  className="bg-black text-small text-sm md:text-lg  my-0 rounded-lg text-gradient px-2  "
                >
                  {ele}
                </p>
              );
            })}
          </div>
          <h2 className="md:w-[80%] my-3 text-sm md:text-lg  line-clamp-2 hover:line-clamp-none  text-grey500 font-medium text-center  mx-auto">
            {description}
          </h2>
          <div
            className={`${Styles.itemsCenter}  text-center gapX-5 w-[60%] mx-auto  flex-wrap`}
          >
            <div
              className={`${Styles.itemsBetween} text-2xl  text-main  gap-5 `}
            >
              <Link href={`${git}`} className="hover:text-black/70 text-black ">
                <AiFillGithub />
              </Link>
              <Link href={`${url}`} className="hover:text-main/70">
                <BsBoxArrowUpRight />
              </Link>
            </div>
          </div>
        </div>

        <motion.div
          variants={rotateVariants(direction)}
          viewport={{ once: false, amount: 0.25 }}
          initial="hidden"
          whileInView="show"
          className={`absolute ${direction}-0  -top-4 lg:top-0  hover:scale-105 -rotate-6 filter   h-[250px]  md:w-[200px] w-[150px] `}
        >
          {/* image */}
          <Image
            className="  rotate-6 filter    "
            src={img}
            fill={true}
            layout="fill"
            objectFit="contain"
            alt="image"
          />
        </motion.div>
        <div className={`absolute ${direction}-0 lg:top-0 top-10  -z-30`}>
          <Image
            src={direction === "right" ? right : left}
            alt="image"
            className="md:w-[250px] w-[150px]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default WebCard;

{
  /* <Image
src={servicesImg}
className=" absolute w-full h-full top-0 ${direction}-0 z-30"
/> */
}
