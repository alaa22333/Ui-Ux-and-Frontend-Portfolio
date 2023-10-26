import Link from "next/link";
import React from "react";
import { links } from "@/constants/data";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useMainContext } from "@/context/main-context";

const Links = () => {
  const { selectedPage, setSelectedPage, isOpen, setIsOpen } = useMainContext();
  const isMatch = useMediaQuery("(min-width:1000)");
  return links.map((item, i) => {
    const { title, icon: Icon,hash } = item;
    return (
      <Link
        key={i}
        onClick={(e) => {
          if (!isMatch && isOpen) {
            setIsOpen(!isOpen);
          }
          setSelectedPage(e.target.textContent);
          console.log(e.target.textContent);
        }}
        href={hash}
      >
        <li
          className={` font-semibold px-4 rounded-lg   transition duration-300 ${
            selectedPage === title
              ? "bg-white/90 text-main  shadow-white/50 font-bold hover:backdrop-blur-[.2rem] hover:shadow-sm drop-shadow-md backdrop-blur-[4rem] shadow-lg    py-1 "
              : "glob "
          }  
       
           ${
             isOpen && !isMatch && "flex gap-3 items-center  px-3"
           } tracking-widest  md:text-[16px] hover:text-main/90  `}
        >
          {isOpen && !isMatch && <Icon className="text-main text-lg" />}
          {title}
        </li>
      </Link>
    );
  });
};

export default Links;
