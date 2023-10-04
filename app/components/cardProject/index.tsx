import Image from "next/image";
import styles from "./card.module.scss";
import React from "react";
import Link from "next/link";
import Reveal from "../reveal";
import ImageReveal from "../imageReveal";

type Projects = {
  [name: string]: string;
};

const projectsImage: Projects = {
  portfolio: "/portfolio.png",
};

type CardProps = {
  name: string;
  description: string;
  technologies: string[];
  link: string;
  codeLink: string;
  title: string;
};

function Card({
  name,
  description,
  technologies,
  link,
  codeLink,
  title,
}: CardProps) {
  return (
    <div className={styles.card}>
      <Link href="/" target="_blank" aria-label="Ir para projeto">
        <ImageReveal>
          <Image
            src={projectsImage[name]}
            alt="Imagem do projeto"
            width={720}
            height={340}
            loading="lazy"
          />
        </ImageReveal>
      </Link>
      <div className={styles.card__content}>
        <Reveal>
          <h5>{title}</h5>
        </Reveal>
        <Reveal>
          <p>{description}</p>
        </Reveal>
        <Reveal>
          <ul>
            {technologies.map((technology, index) => (
              <li key={index}>{`● ${technology}`}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <div className={styles.card__content__links}>
            <Link href={link} target="_blank" aria-label="Ir para projeto">
              Entre
            </Link>
            <Link
              href={codeLink}
              target="_blank"
              aria-label="Ir para código do projeto"
            >
              Código
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default Card;
