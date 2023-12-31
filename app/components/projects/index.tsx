import Link from "next/link";
import Card from "../cardProject";
import styles from "./projects.module.scss";
import React from "react";
import Title from "../title";
import SectionButton from "../buttons/sectionButton";
import Reveal from "../reveal";

function Projects() {
  return (
    <section className={styles.projects}>
      <article className={styles.article}>
        <Reveal>
          <Title
            title="Meus projetos"
            subtitle="Alguns projetos pessoais"
            type="alternative"
          />
        </Reveal>
        <div className={styles.projects_container}>
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
      </article>
      <SectionButton
        arial="Ir para projetos"
        path="/projetos"
        text="Ver mais"
      />
    </section>
  );
}

export default Projects;
