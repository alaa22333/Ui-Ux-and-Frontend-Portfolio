"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/constants/motions";
import { TitleWithImage } from "@/components/UseableComps";
import Image from "next/image";
import contactImgs from "@/public/assets/contactImgs.svg";
import contactGirl from "@/public/assets/contactGirl.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMainContext } from "@/context/main-context";

const Contact = () => {
  const { setSelectedPage } = useMainContext();
  const handleSubmit = async (e:any) => {
    e.preventDefault();
 let email = String(e.target.email.value);
 let name = String(e.target.userName.value);
 let message = String(e.target.message.value);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const { message: resMessage } = await response.json();

    try {
      if (response.ok) {
        if (!message || !name || !email) {
          toast.warning("Please complete all the fields !", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      }

      if (message && name && email) {
        toast.success(resMessage, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        e.target.email.value = "";
        e.target.userName.value = "";
        e.target.message.value = "";
      }
    } catch (error) {
      toast.error(resMessage, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return (
    <section
      className=" md:px-md px-x  mb-20 scroll-mt-24 "
      id="contact"
    >
      <motion.main
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        onViewportEnter={() => {
          setSelectedPage("Contact");
        }}
      >
        <TitleWithImage title={"Contact"} />
        <motion.div
          variants={fadeIn("up", "spring", 0.6, 1)}
          className={` mx-auto mt-10 flex md:justify-between    justify-center  md:p-10 p-4   items-start md:flex-row flex-col-reverse bg-white/20 rounded-xl   relative `}
        >
          {/* leftSide */}

          <motion.div
            variants={fadeIn("down", "spring", 0.6, 1)}
            className="  md:w-2/4 max-w-[300px]  mx-auto md:-mt-7"
          >
            <Image alt="image" src={contactImgs} />
          </motion.div>

          {/* rightSide */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("up", "spring", 0.6, 1)}
            className="md:w-2/4 w-full  flex flex-col  gap-10"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="useName" className="text-white ">
                User Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input "
                id="useName"
                name="userName"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white  ">
                Email
              </label>
              <input
                placeholder="Enter Your Email"
                className="input "
                type=" email"
                id="email"
                name="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-white  ">
                Message
              </label>
              <textarea
                placeholder="Enter Your Message"
                className="input h-32 resize-none  rounded-xl "
                id="message"
                name="message"
              />
            </div>
            <button className={`  btn rounded-xl w-[140px]  px-3 py-2`}>
             Send
            </button>
          </motion.form>
          <motion.div
            variants={fadeIn("down", "tween", 0.6, 1)}
            className="absolute -top-[7rem] right-0"
          >
            <Image
              className="md:w-[200px] w-[180px]"
              src={contactGirl}
              alt="contact1"
            />
          </motion.div>
        </motion.div>
        <ToastContainer />
      </motion.main>
    </section>
  );
};

export default Contact;
