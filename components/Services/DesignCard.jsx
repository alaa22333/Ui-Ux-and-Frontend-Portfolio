import Styles from "@/app/styles/styles";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsBehance, BsDribbble } from "react-icons/bs";

import Link from "next/link";
import { zoomIn } from "@/constants/motions";

const DesignCard = ({ img, name, behance, dribble, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      variants={zoomIn(0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="md:w-[350px] w-full  shadow-md rounded-lg bg-white/90 pb-5 h-auto"
    >
      <div className=" rounded-xl w-full relative h-[300px]   bg-cover ">

        <Image
          className="w-full rounded-lg bg-cover h-full "
          src={img}
          alt="image"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-3 p-3">
        <h1 className=" text-black  text-center mt-5 text-lg font-bold ">
          {name}
        </h1>
        <p className=" text-sm mx-auto text-center  md:text-lg  text-[#99A2A5] font-medium  ">
          {description}
        </p>
        <hr className="border-grey300  w-[70%] " />

        <div className="flex justify-center gap-5 items-center">
          <Link
            href={`${behance}`}
            className="hover:text-black/50 text-xl text-black"
          >
            <BsBehance className="text-lg md:text-2xl" />
          </Link>

          <Link
            href={`${dribble}`}
            className="hover:text-red-600/50 text-red-600"
          >
            <BsDribbble className="text-lg md:text-2xl" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DesignCard;

    
{
       /*     {showDetails && (
                <div className="bg-black/40 absolute h-full w-full right-0 top-0">
                  <div className="relative h-full w-full ">
                    <div className=" mx-auto  absolute top-1/2  left-[35%] md:left-[20%]">
                      <Link
                      
                        href="/design/11"
                        className="btn  flex gap-[10px] items-center justify-center my-4   text-center text-main "
                      >
                        See Design <BiRightArrowCircle className="text-xl" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div> */
     }