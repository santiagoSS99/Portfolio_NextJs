"use client";

import React from "react";
import "../app/global.css";
import { motion } from "framer-motion";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <article className="flex bg-hero justify-center h-screen dark:bg-slate-800 shadow-xl relative">
        <div />
        <section className="top-[150px] max-sm:top-[150px] w-[80%] h-auto rounded-xl backdrop-blur bg-softwhite absolute">
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
          <h1 className="text-slate-900 dark:text-white mt-2 text-sm p-3 m-10">
            I am a Systems Engineer with over 1 year of experience in web
            development, focusing on technologies like Javascript, Typescript,
            Angular, NextJs and Node.js. Passionate about self-directed learning
            and always seeking new opportunities to grow professionally.
            Committed to creating innovative and high-quality web solutions,
            maintaining standards of performance and security. Effective
            communicator and a team collaborator. Excited to take on new
            challenges in web development.
          </h1>
        </section>
      <div className="flex justify-center">
        {" "}
        {/* Contenedor del botón */}
        <Button children="Button 1" />
        <Button children="Button 1" />
        <Button children="Button 1" />
      </div>
      </article>
    </>
  );
};

export default Hero;
