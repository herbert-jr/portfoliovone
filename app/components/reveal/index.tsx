"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
};

function Reveal({ children }: RevealProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);
  return (
    <div ref={ref} style={{}}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 80,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
            },
          },
        }}
        initial="hidden"
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
