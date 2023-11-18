"use client";

import "../app/global.css";
import { motion } from "framer-motion";
import { Button } from "./Button";

const Hero = () => {
  return (
    <>
      <article className="flex sticky bg-hero flex-col items-center center justify-center h-screen dark:bg-slate-800 shadow-xl ">
        <div />
        <section className="overflow-x-hidden w-[85%] rounded-xl backdrop-blur bg-softwhite justify-center max-h-[90vh] max-sm:h-[35%] overflow-auto box-border scroll-m-3">
          <motion.h2
            whileHover={{ scale: 1.2 }}
            transition={{ ease: "easeOut" }}
            className="text-slate-900 dark:text-white text-4xl flex justify-center max-sm:text-md mt-4"
          >
            Santiago Sanchez
          </motion.h2>
          <p className="text-slate-900 dark:text-white mt-2 text-sm flex justify-center max-sm:mt-4 max-sm:flex max-sm:justify-center">
            About Me
          </p>
          <h1 className="text-slate-900 dark:text-white mt-2 text-sm p-3 m-10 max-sm:my-3">
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
        <section className="flex flex-wrap justify-start w-[80%] top-20 mb-20 m-6 max-sm:flex max-sm:justify-center">
          <div className="">
            <Button buttonName={"Button 1"} />
          </div>
          <div>
            <Button buttonName={"Button 2"} />
          </div>
          <Button buttonName={"Button 3"} />
        </section>
      </article>
    </>
  );
};

export default Hero;
