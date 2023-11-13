"use client"

import { AnimatePresence, motion } from "framer-motion";

export const Button = () => (
  <AnimatePresence>
    <motion.button>
      hello
    </motion.button>
  </AnimatePresence>
);
