import React from "react";
import logo from "@/public/assets/logo2.svg";
import { links, socialIcons } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col  gap-10 bg-white/30  py-10 md:px-md px-x">
      {/* above */}
      <div className="flex md:flex-row  items-center w-full flex-col justify-between gap-10 ">
        <div className="flex flex-col   gap-4 ">
          <Image alt="logo" width={140} src={logo} />
          <p className="text-sm md:text-lg text-grey300 w-[80%]">
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
                  className="w-[20px] h-[20px] rounded-full
shadow-sm "
                  target="_blank"
                >
                  <item.icon className="text-grey500 text-3xl  hover:text-grey500/50     " />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-wrap  gap-8  md:w-[70%]">
          {links.map((ele, i) => {
            return (
              <Link
                href={ele.hash}
                key={i}
                className="tracking-widest  hover:text-main/90 text-sm md:text-lg  hover:underline text-white"
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
        <p className="text-small  text-white">
          © 2023
          <span className=" text-main  w-[40%]  ">
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
