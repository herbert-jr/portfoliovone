import Link from "next/link";
import Title from "../title";
import styles from "./resume.module.scss";
import React from "react";
import SectionButton from "../buttons/sectionButton";
import Reveal from "../reveal";

function Resume() {
  return (
    <section className={styles.resume} id="resume">
      <Reveal>
        <Title
          title="Um pouco sobre mim."
          subtitle="Como cheguei até aqui."
          type="principal"
        />
        <article className={styles.resume__content}>
          <p>
            Prazer, sou o Herbert mas pode me chamar de Junior, se quiser, e é
            aqui que você vai saber um pouco sobre mim.
          </p>
          <p>
            Em 2022, entrei no mundo da programação quando inicei meu curso de
            Desenvolvimento Web. Onde já completei os módulos obrigatórios e
            estou cursando a parte de especialização em <strong>Java</strong>.
          </p>
          <p>
            Atualmente estou cursando a Faculdade de Análise e Desenvolvimento
            de Sistemas na Faculdade Digital Descomplica, afim de me tornar um
            profissional mais completo.
          </p>
          <p>
            Por isso estou em busca de uma oportunidade para colocar em prática
            tudo que aprendi até aqui e mostrar meu potencial. Se você chegou
            até aqui, dá uma olhada no meu{" "}
            <Link
              href="https://github.com/herbert-jr"
              className={styles.resume__link}
              aria-label="Ir para GitHub"
              target="_blank"
            >
              GitHub
            </Link>{" "}
            e no meu{" "}
            <Link
              href="https://www.linkedin.com/in/herbert-marques-963136106/"
              className={styles.resume__link}
              aria-label="Ir para LinkedIn"
              target="_blank"
            >
              LinkedIn
            </Link>
            , e se gostar do que viu, entre em{" "}
            <Link
              href="/certificados"
              className={styles.resume__link}
              aria-label="Ir para comtatos"
            >
              contato
            </Link>{" "}
            comigo.
          </p>
        </article>
      </Reveal>
      <SectionButton
        path="/sobre"
        text="Mais sobre mim"
        arial="Ir para pagina sobre mim"
      />
    </section>
  );
}

export default Resume;
