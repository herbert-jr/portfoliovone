import Image from "next/image";
import styles from "./hero.module.scss";
import React from "react";

function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/perfil.png"
        width={350}
        height={350}
        alt="Herbert Junior"
        loading="eager"
      />
      <article className={styles.hero__content}>
        <h1>Olá, Herbert Junior aqui 🙂</h1>
        <p>
          Do Rio de Janeiro para o mundo, sou um Desenvolvedor Front-end.
          Atualmente, meu objetivo é criar aplicações com foco em
          responsividade, desempenho e acessibilidade, visando proporcionar
          experiências digitais inclusivas para todos.
        </p>
      </article>
    </section>
  );
}

export default Hero;
