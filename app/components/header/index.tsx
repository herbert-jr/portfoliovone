import React from "react";
import styles from "./header.module.scss";
import Themes from "../themes";
import Navigation from "../navigation";

function Header() {
  return (
    <header className={styles.container}>
      <Themes />
      <Navigation />
    </header>
  );
}

export default Header;
