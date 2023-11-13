"use client"

import {motion} from 'framer-motion'

const Projects = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center py-100">
      {/* <Button/> */}
      <motion.h1 className="text-6xl" animate={{x: -160}}>Projects</motion.h1>
    </section>
  );
};

export default Projects;
