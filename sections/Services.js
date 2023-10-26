"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { TitleWithImage } from "@/components/UseableComps";
import Image from "next/image";
import servicesImg from "@/public/assets/servies.png";
import WebCard from "@/components/Services/WebCard";
import DesignCard from "@/components/Services/DesignCard";
import { useMainContext } from "@/context/main-context";
import { staggerContainer } from "@/constants/motions";
import { projects } from "@/constants/data";

const Services = () => {
  const [currProjects, setCurrProjects] = useState(projects.design);
  const [query, setQuery] = useState("design");

  const { setSelectedPage } = useMainContext();

  return (
    <motion.main
      id="services"
      className={`px-x md:px-md    scroll-mt-40  md:my-32 my-12 `}
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        onViewportEnter={() => setSelectedPage("Services")}
      >
        <TitleWithImage
          title={"Services"}
          animation="right"
          img={servicesImg}
          direction={"left"}
        />
      </motion.div>
      <div
        className={`md:w-[280px] w-[200px] gap-3 flex md:text-lg text-sm bg-white  my-10 mt-20 mx-auto  `}
      >
        <button
          className={` text-center p-2  font-semibold duration-500 transition ${
            query === "design" ? "service-btn" : " text-black"
          } `}
          onClick={() => {
            setQuery("design");
            setCurrProjects(projects.design);
          }}
        >
          Ui/Ux Design
        </button>
        <button
          onClick={() => {
            setQuery("develop");
            console.log();

            setCurrProjects(projects.develop);
          }}
          className={`text-center p-2 font-semibold  duration-500 transition   flex-1 
        
 ${query === "develop" ? "service-btn" : " text-black"}`}
        >
          Web Development
        </button>
      </div>
      {/* design and develop projects
       */}
      {query === "develop" ? (
        <div className={` flex  flex-col lg:gap-14 gap-32 my-16`}>
          {currProjects?.map((ele, i) => {
            return (
              <div key={i}>
                {i % 2 !== 0 ? (
                  <WebCard direction={"left"} oppDirection={"right"} {...ele} />
                ) : (
                  <WebCard oppDirection={"left"} direction={"right"} {...ele} />
                )}
              </div>
            );
          })}{" "}
        </div>
      ) : (
        <div
          className="flex justify-center items-center flex-col md:flex-row  md:flex-wrap w-full gap-10 
         my-10"
        >
          {currProjects?.map((ele, i) => {
            console.log("design");

            return <DesignCard key={i} {...ele} />;
          })}
        </div>
      )}
    </motion.main>
  );
};

export default Services;
