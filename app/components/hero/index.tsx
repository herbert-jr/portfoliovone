import Link from "next/link";
import styles from "./hero.module.scss";
import React from "react";

function HeroSection() {
  return (
    <section className={styles.hero}>
      <span className={styles.hero__link}>
        <Link href={"/sobre"}>Olá, herbert por aqui!</Link>
      </span>
    </section>
  );
}

export default HeroSection;
