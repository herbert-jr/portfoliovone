import React from "react";
import styles from "./page.module.scss";
import Title from "../components/title";
import Card from "../components/cardProject";

function Projetos() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <Title
          subtitle="Projetos pessoais."
          title="Todos os meus projetos."
          type="principal"
        />
        <div className={styles.projects}>
          <Card
            name="portfolio"
            description="Essa é a primeira versão do meu portfólio, feito com NextJS,
          Typescript e Sass. Foi um projeto interessante de se fazer pois foi meu
          primeiro contato com NextJS e pude ver o quão poderoso ele é."
            technologies={[
              "React",
              "NextJs",
              "TypeScript",
              "Sass",
              "Frame Motion",
            ]}
            codeLink="https://github.com/herbert-jr/portfoliovone"
            link="/"
            title="Meu Portfólio"
          />
          <Card
            name="portfolio"
            description="Essa é a primeira versão do meu portfólio, feito com NextJS,
          Typescript e Sass. Foi um projeto interessante de se fazer pois foi meu
          primeiro contato com NextJS e pude ver o quão poderoso ele é."
            technologies={[
              "React",
              "NextJs",
              "TypeScript",
              "Sass",
              "Context Api",
            ]}
            codeLink="/"
            link="/"
            title="Meu Portfólio"
          />
          <Card
            name="portfolio"
            description="Essa é a primeira versão do meu portfólio, feito com NextJS,
          Typescript e Sass. Foi um projeto interessante de se fazer pois foi meu
          primeiro contato com NextJS e pude ver o quão poderoso ele é."
            technologies={[
              "React",
              "NextJs",
              "TypeScript",
              "Sass",
              "Context Api",
            ]}
            codeLink="/"
            link="/"
            title="Meu Portfólio"
          />
        </div>
      </section>
    </main>
  );
}

export default Projetos;
