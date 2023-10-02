import React from "react";
import styles from "./navigation.module.scss";
import Logo from "../logo";
import Menu from "../menu";

function Navigation() {
  return (
    <nav className={styles.container}>
      <Logo />
      <Menu />
    </nav>
  );
}

export default Navigation;
