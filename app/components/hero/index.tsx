import Link from "next/link";
import styles from "./hero.module.scss";
import React from "react";

function HeroSection() {
  return (
    <section className={styles.container} id="#welcome">
      <article className={styles.hero__article__title}>
        <Link
          href="/sobre-mim"
          title="Ir para sobre mim"
          className={styles.hero__link}
        >
          <span>Olá, Herbert por aqui!</span>
        </Link>
        <h1 className={styles.hero__title}>Desenvolvedor</h1>
      </article>
      <article className={styles.hero__article__subtitle}>
        <h1 className={styles.hero__title}>
          Front-end<span>.</span>
        </h1>
        <p className={styles.hero__subtitle}>
          Foco em criar experiências digitais para todos.
        </p>
      </article>
      <Link href="#resume" title="Ir para resumo">
        <span className={styles.arrow}></span>
      </Link>
    </section>
  );
}

export default HeroSection;
