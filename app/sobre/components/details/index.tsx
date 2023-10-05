"use client";

import styles from "./details.module.scss";
import React, { useState } from "react";

type Open = {
  [key: string]: boolean;
};
function Details() {
  const [open, setOpen] = useState<Open>({
    historia: false,
    experiencia: false,
    habilidades: false,
  });

  const handleOpen = (key: string) => {
    setOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <section className={styles.container}>
      <details
        className={styles.details}
        onClick={() => handleOpen("historia")}
      >
        <summary
          className={
            open["historia"]
              ? `${styles.summary} ${styles.open}`
              : styles.summary
          }
        >
          Minha história
        </summary>
        <p className={styles.summary__content}>
          O meu primeiro contato com a programação foi em 2022, quando eu
          comecei a estudar Desenvolvimento Web pela Trybe e entender como
          funciona o desenvolvimento de software e descobri onde eu iria me
          encaixar.
          <br />
          <br />
          Desde então, eu tenho estudado e praticado para me tornar um
          desenvolvedor Front-end, com foco em React e seus ecossistemas. Mas
          também sei a importância de conhecer o Back-end e por isso estou
          estudando em paralelo a construção de APIs e banco de dados.
          <br />
          <br />
          Em 2023, decidi entrar de cabeça no mundo da programação e iniciei a
          minha graduação em Análise e Desenvolvimento de Sistemas na Faculdade
          Descomplica. Com isso, eu tenho me dedicado a aprofundar os meus
          conhecimentos e aprimorar as minhas habilidades.
          <br />
          <br />
          Mas existe vida fora da programação e eu gosto de aproveitar o meu
          tempo livre para assistir filmes e séries, jogar uma partida de volei,
          sair com os amigos, viajar e quem sabe fazer algumas tattoos.
          <br />
          <br />
          Muito obrigado por ter lido até aqui e saiba que neste momento eu
          estou pronto para encarar novos desafios e agarrar as oportunidades
          que surgirem.
        </p>
      </details>
      <details
        className={styles.details}
        onClick={() => handleOpen("experiencia")}
      >
        <summary
          className={
            open["experiencia"]
              ? `${styles.summary} ${styles.open}`
              : styles.summary
          }
        >
          Experiência
        </summary>
        <p className={styles.summary__content}>
          Hoje estou em busca da minha primeira oportunidade como desenvolvedor
          Front-end, atualmente estou estudando e praticando tudo que sei em
          projetos pessoais.
          <br />
          <br />
          Mas fora da programação, eu já trabalhei como corretor de imóveis e
          como professor de matemática. E essas experiências me ensinaram a
          importância de saber se comunicar e trabalhar em equipe, além de
          desenvolver a minha capacidade de resolver problemas.
        </p>
      </details>
      <details
        className={styles.details}
        onClick={() => handleOpen("habilidades")}
      >
        <summary
          className={
            open["habilidades"]
              ? `${styles.summary} ${styles.open}`
              : styles.summary
          }
        >
          Habilidades
        </summary>
        <p className={styles.summary__content}>
          ↦ Tecnologias que tenho mais afinidade:
          <br />● HTML ● CSS ● JavaScript ● React ● TypeScript ● Git ● Sass ●
          Redux ● Bootstrap ● Jest ● React Testing Library ● Node.js
          <br />
          <br />
          ↦ Tecnologias que tenho conhecimentos básicos:
          <br />● MySQL ● Python ● Java ● Express.js ● Docker ● Mocha
          <br />
          <br />
          ↦ Tecnolgias que estou estudando:
          <br />● Vue ● Angular ● Next.js ● React Native ● Java{" avançado"}
          <br />
          <br />
          ↦ Soft Skills:
          <br />● Comunicação ● Trabalho em equipe ● Resolução de problemas ●
          Metodologias ágeis
        </p>
      </details>
    </section>
  );
}

export default Details;
