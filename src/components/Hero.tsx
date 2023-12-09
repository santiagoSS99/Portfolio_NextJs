"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
// import { SkillComponent } from "./SkillsComponent";
// import { AboutMeSection } from "./AboutMe";

import { SkillComponent, AboutMeSection } from "./index";

import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiAngular, SiReact, SiNestjs } from "react-icons/si";
import { FaNode, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <article className="sm:hidden flex top flex-col items-center center justify-center h-screen max-sm:mt-10 mt-4">
        <motion.h2
          whileHover={{ scale: 1.2 }}
          transition={{ ease: "easeOut" }}
          className="flex justify-center max-sm:text-5xl center-ultrasm font-black uppercase"
        >
          Santiago Sanchez
        </motion.h2>
        <SeeMoreLink />
      </article>
      <article className="max-sm:hidden flex top flex-col items-center center justify-center h-screen max-sm:mt-10 mt-4">
        <div />
        <AboutMeSection username="Santiago Sanchez" about="About Me">
          I am a Systems Engineer with over a year of dedicated experience in
          web development, specializing in technologies such as Typescript,
          Angular, NextJs, and Node.js. I possess a great dedication to
          self-directed learning, constantly pursuing avenues for professional
          advancement. My commitment lies in crafting innovative, top-tier web
          solutions while upholding stringent standards of performance and
          security. Proficient in effective communication and adept at
          collaborative teamwork, I am enthusiastic about embracing fresh
          challenges within the realm of web development.
        </AboutMeSection>
        <SkillComponent skillTitle="Skills Languages:">
          <IoLogoJavascript size={22} style={{ margin: "20px" }} />
          <SiTypescript size={22} style={{ margin: "20px" }} />
          <FaNode size={22} style={{ margin: "20px" }} />
        </SkillComponent>
        <SkillComponent skillTitle="Frameworks/Libraries:">
          <SiAngular size={22} style={{ margin: "20px" }} />
          <SiReact size={22} style={{ margin: "20px" }} />
          <FaNode size={22} style={{ margin: "20px" }} />
          <SiNestjs size={22} style={{ margin: "20px" }} />
        </SkillComponent>
        <SkillComponent skillTitle="Version Control:">
          <FaGithub size={22} style={{ margin: "20px" }} />
        </SkillComponent>
      </article>
    </>
  );
};

const SeeMoreLink = () => (
  <span className="flex justify-end mt-2">
    <a href="">See More</a>
  </span>
);

export default Hero;
