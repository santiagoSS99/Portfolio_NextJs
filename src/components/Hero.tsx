"use client";

import "../app/global.css";
import { motion } from "framer-motion";
import { Button } from "./Button";

import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiAngular } from "react-icons/si";
import { PiAngularLogoFill } from "react-icons/pi";

const Hero = () => {
  return (
    <>
      <article className="flex sticky flex-col items-center center justify-center h-screen bg-softwhite shadow-xl">
        <div />
        <section className="overflow-x-hidden w-[85%] rounded-xl backdrop-blur border bg-gray-100 shadow-2xl justify-center max-h-[90vh] max-sm:h-[35%] overflow-auto box-border scroll-m-3">
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
          <h1 className="text-slate-900 dark:text-slate-900 mt-2 text-sm p-3 m-10 max-sm:my-3">
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
        <section className="flex flex-wrap justify-start w-[80%] top-20 mb-20 m-6 max-sm:flex max-sm:justify-center">
          <Button buttonName={"Play BlackJack Game"} />
          <Button buttonName={"Button 2"} />
          <Button buttonName={"Button 3"} />
        </section>
        {/* <section className="flex justify-start flex-wrap">
          <IoLogoJavascript
            className={"max-sm:text-sm"}
            size={75}
            style={{ margin: "20px" }}
          />
          <SiTypescript size={75} style={{ margin: "20px" }} />
          <SiAngular size={75} style={{ margin: "20px" }} />
          <IoLogoJavascript size={75} style={{ margin: "20px" }} />
        </section> */}
      </article>
    </>
  );
};

export default Hero;
