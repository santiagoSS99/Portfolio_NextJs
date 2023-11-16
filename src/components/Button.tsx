"use client"

import { AnimatePresence, motion } from "framer-motion";

export function Button ({buttonName= 'unknow'}){
  <>
    <button>
      {buttonName}
    </button>
  </>
}