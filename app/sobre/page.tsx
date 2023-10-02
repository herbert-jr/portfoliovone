"use client";

import React from "react";
import { motion } from "framer-motion";

function Sobre() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      Sobre mim page
    </motion.div>
  );
}

export default Sobre;
