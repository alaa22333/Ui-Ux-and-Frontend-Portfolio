import { SiGmail } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";

import { FaUserAlt } from "react-icons/fa";
import { IoMdCreate } from "react-icons/io";
import { BiLogoGmail, BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import github from "@/public/assets/github.svg";
import redux from "@/public/assets/redux.svg";
import react2 from "@/public/assets/react2.svg";
import canva2 from "@/public/assets/canva2.svg";
import dash from "@/public/assets/dash.png";
import netflix from "@/public/assets/netflix (4).png";
import art from "@/public/assets/art.png";
import landing from "@/public/assets/landing.png";
import fitness from "@/public/assets/fitnessDesging.png";
import fashion from "@/public/assets/fashion.png";
import caseStudy from "@/public/assets/case.png";

import meta from "@/public/assets/meta.png";
import portfolio from "@/public/assets/portfolioImg.png";
import git from "@/public/assets/git.svg";
import tcss from "@/public/assets/tcss.svg";
import css from "@/public/assets/css.svg";
import html from "@/public/assets/html.svg";
import js from "@/public/assets/js.svg";
import ts from "@/public/assets/ts.svg";
import nextjs from "@/public/assets/nextjs.svg";
import mui2 from "@/public/assets/mui2.svg";
import psd from "@/public/assets/new/psd.svg";
import framer from "@/public/assets/new/framer.svg";
import figma from "@/public/assets/figma.svg";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineGithub,
} from "react-icons/ai";
import { BsBehance, BsDribbble, BsFillTelephoneFill } from "react-icons/bs";

export const links = [
  { title: "Home", hash: "#home", icon: AiOutlineHome },
  { title: "About", hash: "#about", icon: FaUserAlt },
  { title: "Skills", hash: "#skills", icon: IoMdCreate },
  { title: "Services", hash: "#services", icon: AiOutlineFundProjectionScreen },
  { title: "Contact", hash: "#contact", icon: SiGmail },
];

export const socialIcons = [
  { icon: BiLogoGmail, href:"https://alaa.ahmed20022002@gmail.com" },
  {
    icon: BsDribbble,
    href: "https://dribbble.com/alaa22333",
  },
  {
    icon: BsBehance,
    href: "https://www.behance.net/alaaahmed167",
  },
  { icon: AiOutlineGithub, href: "https://github.com/alaa22333" },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/alaa-ahmed-852865214",
  },
];
export const aboutInfo = [
  { icon: MdLocationOn, text: "Alexandria, Egypt" },
  { icon: BsFillTelephoneFill, text: "+201286747743" },
  { icon: HiMail, text: "alaa.ahmed20022002@gmail.com" },
];

export const skills = [
  { skill: "psd", image: psd },
  { skill: "framer", image: framer },
  { skill: "figma", image: figma },
  { skill: "html", image: html },
  { skill: "css", image: css },
  { skill: "js", image: js },
  { skill: "ts", image: ts },
  { skill: "react2", image: react2 },
  { skill: "redux", image: redux },
  { skill: "nextjs", image: nextjs },
  { skill: "tcss", image: tcss },
  { skill: "mui2", image: mui2 },
  { skill: "git", image: git },
  { skill: "github", image: github },
  { skill: "canva2", image: canva2 },
];

export const projects = {
  develop: [
    {
      img: netflix,
      url: "https://react-netflix-app-nine.vercel.app/",
      git: "https://github.com/alaa22333/React-Netflix-Website",
      uses: [
        "Tailwind css",
        "React js",
        "Redux Toolkit",
        "firebase",
        "Rest Api",
      ],
      name: "Netflix Clone Website",
      description:
        "I've managed to build animated Netflix Clone website showing up all Details user needs to know about movie like videos ,trailer and searching about specific movie the user wants.",
    },
    {
      img: art,
      url: "https://ecommerce-artenon-website.vercel.app/",
      git: "https://github.com/alaa22333/Ecommerce-Artenon-Website",
      uses: [
        "Mui",
        "React js",
        "Context",
        "firebase",
        "Rest Api",
        "framer Motion",
      ],
      name: "Artenon E-commerce Website",
      description:
        "A responsive MUI react E-commerce Store with a good experience for user to make him add his specific items to the cart and his wishList or choose his specific products by filtering.",
    },
    {
      img: dash,
      git: "https://github.com/alaa22333/React-Dashboard",
      uses: [
        "Material Tailwind",
        "Mui",
        "full Calendar",
        "React js",
        "firebase",
      ],
      name: "E-commerce Dashboard ",
      description:
        "A Responsive Dashboard with analytic charts like Bar , linear ,..etc. using firebase for Authentication that makes the user Dashboard protected. with light Dark mode and multi color themes",
    },
    {
      img: meta,
      url: "https://metaversus-nextjs-peach.vercel.app/",
      git: "https://github.com/alaa22333/metaversus-nextjs",
      uses: ["Tailwind Css", "Nextjs", "Framer Motion"],
      name: "Next Metaversus landing page",
      description:
        "This is a modern animated NextJs website converted from an inspiring figma file created by most modern tools like :NextJS ,framer motion ,reactjs and tailwind Css for styling.",
    },
    {
      img: portfolio,
      url: "https://alaa22333.github.io/my-portfolio/",
      git: "https://github.com/alaa22333/my-portfolio.git",
      uses: ["Mui", "React js", "Framer Motion", "Email js"],
      name: "My Portfolio",
      description:
        "I made my well-designed portfolio website making it easier for anyone to see me as a frontend Developer.",
    },
  ],
  design: [
    {
      img: caseStudy,
      description:
        "A task management app which can improve users'productivity and keep them focused.",
      name: "To-do list app case study",
      behance: "https://www.behance.net/gallery/181644607/To-do-list-App",
      dribble:
        "https://dribbble.com/shots/22750995-To-do-List-App?utm_source=Clipboard_Shot&utm_campaign=alaa22333&utm_content=To%20do%20List%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=alaa22333&utm_content=To%20do%20List%20App&utm_medium=Social_Share",
    },
    {
      img: fashion,
      name: "Women 's clothing E-commerce app",
      description:
        "A fashion app that helps women to order online and track their orders.",

      behance:
        "https://www.behance.net/gallery/183029825/Womens-Clothing-Ecommerce-App",

      dribble:
        "https://dribbble.com/shots/22902406-Women-s-Clothing-Ecommerce-App?utm_source=Clipboard_Shot&utm_campaign=alaa22333&utm_content=Women's%20Clothing%20Ecommerce%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=alaa22333&utm_content=Women's%20Clothing%20Ecommerce%20App&utm_medium=Social_Share",
    },
    {
      img: landing,
      name: "Digital agency landing page",
      description:
        "An attractive landing page that can help users to attract to the services of the agency.",
      dribble:
        "https://dribbble.com/shots/22848951-Digital-agency-landing-page?utm_source=Clipboard_Shot&utm_campaign=alaa22333&utm_content=Digital%20agency%20landing%20page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=alaa22333&utm_content=Digital%20agency%20landing%20page&utm_medium=Social_Share",
      behance:
        "https://www.behance.net/gallery/182503025/Digital-agency-landing-page",
    },
    {
      img: fitness,
      name: "Fitness landing page",
      description:
        "A fitness landing page that encourages people to be fit and join the community of fitness people.",
      behance: "https://www.behance.net/gallery/183087121/Fitness-landing-page",
      dribble:
        "https://dribbble.com/shots/22434855-fitness-landing-page-with-figma?utm_source=Clipboard_Shot&utm_campaign=alaa22333&utm_content=fitness%20landing%20page%20with%20figma&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=alaa22333&utm_content=fitness%20landing%20page%20with%20figma&utm_medium=Social_Share",
    },
  ],
};

