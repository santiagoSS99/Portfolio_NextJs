// import { motion } from "framer-motion"

// const MyComponent = () => (
//   <motion.button
//     whileHover={{ scale: 1.1 }}
//     whileTap={{ scale: 0.9 }}
//   />
// )

// export default MyComponent

"use client"

import { AnimatePresence, motion } from "framer-motion";

export const Ball = () => (
  <AnimatePresence>
    <motion.div>
      hello
    </motion.div>
  </AnimatePresence>
);
