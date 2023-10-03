"use client";

import React from "react";
import styles from "./header.module.scss";
import Themes from "../themes";
import Navigation from "../navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (y: number) => {
    const previus = scrollY.getPrevious();
    if (y > previus && y > 150) setHidden(true);
    else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      className={styles.container}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Themes />
      <Navigation />
    </motion.header>
  );
}

export default Header;
