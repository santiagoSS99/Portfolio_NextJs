"use client";

import "../app/global.css";
import { motion } from "framer-motion";
import { Button } from "./Button";

import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiAngular, SiReact, SiNestjs } from "react-icons/si";
import { FaNode } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <article className="flex flex-col items-center center justify-center h-screen max-sm:mt-10 mt-4">
        <div />
        <section className="overflow-x-hidden w-[85%] rounded-xl backdrop-blur border bg-softwhite shadow-2xl justify-center max-h-[90vh] max-sm:h-[35%] overflow-auto box-border scroll-m-3">
          <motion.h2
            whileHover={{ scale: 1.2 }}
            transition={{ ease: "easeOut" }}
            className="text-slate-900 dark:text-slate-900 text-4xl flex justify-center max-sm:text-md mt-6 max-sm:flex max-sm:justify-center max-sm:text-[30px]"
          >
            Santiago Sanchez
          </motion.h2>
          <p className="text-slate-900 dark:text-slate-900 mt-2 text-sm flex justify-center max-sm:mt-4 max-sm:flex max-sm:justify-center">
            About Me
          </p>
          <h1 className="text-slate-900 dark:text-slate-900 mt-2 text-sm m-10 max-sm:my-3">
            am a Systems Engineer with over a year of dedicated experience in
            web development, specializing in technologies such as Typescript,
            Angular, NextJs, and Node.js. I possess a great dedication to
            self-directed learning, constantly pursuing avenues for professional
            advancement. My commitment lies in crafting innovative, top-tier web
            solutions while upholding stringent standards of performance and
            security. Proficient in effective communication and adept at
            collaborative teamwork, I am enthusiastic about embracing fresh
            challenges within the realm of web development.
          </h1>
        </section>
        <article className="mt-6 sm:flex">
          <section className="flex items-center justify-center">
            <h1 className="text-2xl uppercase font-bold	flex mx-10 items-center">
              Skills:
            </h1>
          </section>
          <section className="flex justify-center items-center max-sm:flex-wrap">
            <IoLogoJavascript size={25} style={{ margin: "20px" }} />
            <SiTypescript size={25} style={{ margin: "20px" }} />
            <SiAngular size={25} style={{ margin: "20px" }} />
            <SiReact size={25} style={{ margin: "20px" }} />
            <FaNode size={25} style={{ margin: "20px" }} />
            <SiNestjs size={25} style={{ margin: "20px" }} />
          </section>
        </article>
          <section className="w-[80%] top-20 flex justify-center">
            <Button buttonName={"Play BlackJack Game"} />
            <Button buttonName={"Button 2"} />
            <Button buttonName={"Button 3"} />
          </section>
      </article>
    </>
  );
};

export default Hero;
