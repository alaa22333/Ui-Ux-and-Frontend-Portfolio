import React from "react";
import logo from "@/public/assets/logo2.svg";
import Image from "next/image";
const Loading = () => {
  return (
    <div className=" w-full mt-40   h-fit  ">
      <div className="mx-auto  w-full ">
        <div className="relative  ">

          <div className="main-gradient right-0 top-[10rem]   " />
          <div className="main-gradient rleft-0 top-[10rem]   " />
          <div className="main-gradient left-1/2 bottom-0  " />
          <div className="main-gradient left-1/2 bottom-0  " />

          <Image
            alt="logo"
            className="md:w-[200px]  w-[160px]  mx-auto   "
            src={logo}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
