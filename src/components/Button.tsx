"use client"

import { AnimatePresence, motion } from "framer-motion";

const Button = (buttonName: string) => (
  <AnimatePresence>
    <motion.button>
      {buttonName}
    </motion.button>
  </AnimatePresence>
);

export default Button