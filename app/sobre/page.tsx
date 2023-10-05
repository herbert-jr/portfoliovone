import React from "react";
import styles from "./page.module.scss";
import Hero from "./components/hero";
import Details from "./components/details";

function Sobre() {
  return (
    <main className={styles.main}>
      <Hero />
      <Details />
    </main>
  );
}

export default Sobre;
