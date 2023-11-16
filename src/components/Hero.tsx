"use client";

import React from "react";
import "../app/global.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="flex items-center bg-hero justify-center h-screen bg-cover bg-white dark:bg-slate-800 ring-1 ring-slate-900/5 shadow-xl z-50"
    >
      <div />
      <div className="fixed w-[80%] -mt-36 shadow-xl rounded-xl items-center backdrop-blur bg-softwhite">
        <motion.h2
          whileHover={{ scale: 1.2 }}
          transition={{ ease: "easeOut" }}
          className="text-slate-900 dark:text-white mt-5 text-4xl tracking-tight flex border-spacing-0 m-10 justify-center"
        >
          Santiago Sanchez
        </motion.h2>
        <p className="text-slate-900 dark:text-white mt-2 text-sm flex justify-center">
          About Me
        </p>
        <h1 className="text-slate-900 dark:text-white mt-2 text-sm p-3 border-spacing-0 m-10">
          I am a Systems Engineer with over 1 year of experience in web
          development, focusing on technologies like Javascript, Typescript,
          Angular, and Node.js. Passionate about self-directed learning and
          always seeking new opportunities to grow professionally. Committed to
          creating innovative and high-quality web solutions, maintaining
          standards of performance and security. Effective communicator and a
          team collaborator. Excited to take on new challenges in web
          development.
        </h1>
      </div>
      <div></div>
    </section>
  );
};

export default Hero;
