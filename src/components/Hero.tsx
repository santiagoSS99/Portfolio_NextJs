"use client";

import React from "react";
import "../app/global.css";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
// import Button from "./Button";

const Hero = () => {
  return (
    <section className="flex bg-hero justify-center h-screen bg-white dark:bg-slate-800 ring-1 ring-slate-900/5 shadow-xl z-1">
      <div />
      <div
        className="top-[150px] max-sm:top-[150px] w-[80%] inline-block shadow-xl rounded-xl items-center backdrop-blur bg-softwhite absolute"
        style={{ zIndex:"99" }}
      >
        <motion.h2
          whileHover={{ scale: 1.2 }}
          transition={{ ease: "easeOut" }}
          className="text-slate-900 dark:text-white text-4xl m-5 flex justify-center "
        >
          Santiago Sanchez
        </motion.h2>
        <p className="text-slate-900 dark:text-white mt-2 text-sm flex justify-center">
          About Me
        </p>
        <h1 className="text-slate-900 dark:text-white mt-2 text-sm p-3 border-spacing-0 m-10">
          I am a Systems Engineer with over 1 year of experience in web
          development, focusing on technologies like Javascript, Typescript,
          Angular, NextJs and Node.js. Passionate about self-directed learning
          and always seeking new opportunities to grow professionally. Committed
          to creating innovative and high-quality web solutions, maintaining
          standards of performance and security. Effective communicator and a
          team collaborator. Excited to take on new challenges in web
          development.
        </h1>
      <div className="absolute  mt-8 m-6 ">
        <button className="p-3 bg-slate-50 mx-2">
            Button 1
        </button>
        <button className="p-3 bg-slate-50 mx-2">
            Button 2
        </button>
        <button className="p-3 bg-slate-50 mx-2">
            Button 3
        </button>
      </div>
      </div>
    </section>
  );
};

export default Hero;
