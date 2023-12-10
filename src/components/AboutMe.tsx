import { motion } from "framer-motion";

import "../app/global.css";

interface AboutMeComponentProps {
  username: string;
  about: string;
  children: React.ReactNode;
}

export function AboutMeSection({ username, about, children }: AboutMeComponentProps) {
  return (
    <>
      <article className="mx-8 overflow-x-hidden w-[65%] rounded-xl backdrop-blur border bg-softwhite shadow-2xl justify-center max-h-[90vh] max-sm:h-[32%] overflow-auto box-border scroll-m-3">
        <section>
          <motion.h2
            whileHover={{ scale: 1.2 }}
            transition={{ ease: "easeOut" }}
            className="flex justify-center max-sm:text-5xl mt-4 font-black uppercase"
          >
            {username}
          </motion.h2>
        </section>
        <section>
          <p className="text-slate-900 dark:text-slate-900 mt-6 text-sm flex justify-center max-sm:mt-4 max-sm:flex max-sm:justify-center">
            {about}
          </p>
        </section>
        <section>
          <h1 className="text-slate-900 dark:text-slate-900 mt-6 text-sm m-10 max-sm:my-3">
            {children}
          </h1>
        </section>
      </article>
    </>
  );
}
