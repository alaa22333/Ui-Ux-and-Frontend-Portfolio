import React from "react";
import logo from "@/public/assets/logo2.svg";
import { links, socialIcons } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col   gap-7 dark:bg-white/60 bg-white/30  py-7 md:px-md px-x">
      {/* above */}
      <div className="flex md:flex-row  items-center w-full flex-col justify-between  gap-6 md:gap-0  ">
        <div className="flex flex-col    md:gap-7 gap-4 ">
          <Image alt="logo" width={140} src={logo} />
          <p className="text-sm md:text-lg dark:text-white text-grey500 md:w-[80%] w-full">
            I like building new things and creating impressive designs and
            develop them into code .I worked on Many projects as a developer
            using most recent Technologies.
          </p>
          <div className="flex items-center md:mx-0 mx-auto gap-7 ">
            {socialIcons.map((item, i) => {
              return (
                <Link
                  href={item.href}
                  key={i}
                  className="w-[16px] h-[16px] rounded-full
shadow-sm "
                  target="_blank"
                >
                  <item.icon className="text-main text-2xl  hover:text-main/50     " />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-wrap justify-center font-semibold  md:gap-5 w-full gap-y-2 gap-x-4 md:w-[70%]">
          {links.map((ele, i) => {
            return (
              <Link
                href={ele.hash}
                key={i}
                className="tracking-widest my-0  font-medium  hover:text-main text-sm md:text-lg  dark:hover:text-main hover:underline dark:text-white text-grey500"
              >
                {ele.title}
              </Link>
            );
          })}
        </div>
      </div>
      {/* below  */}

      <div className="flex gap-5 items-center mx-auto w-full text-center justify-evenly">
        <hr className="w-[30%] border-white/40  " />
        <p className=" text-sm md:text-lg  text-grey200">
          © 2023
          <span className=" text-main/80 font-semibold  w-[40%]  ">
            {" "}
            Alaa Abdelrasoul.
          </span>{" "}
          All rights reserved.
        </p>
        <hr className="w-[30%]  border-white/40 " />
      </div>
    </div>
  );
};

export default Footer;
