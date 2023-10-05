import Image from "next/image";
import styles from "./card.module.scss";
import React from "react";
import ImageReveal from "@/app/components/imageReveal";
import Reveal from "@/app/components/reveal";
import Link from "next/link";

type CardProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
  skills: string[];
  link: string;
};

function Card({ image, alt, title, description, skills, link }: CardProps) {
  return (
    <div className={styles.card}>
      <ImageReveal>
        <Image src={image} alt={alt} width={360} height={270} loading="eager" />
      </ImageReveal>
      <div className={styles.card__content}>
        <Reveal>
          <h3>{title}</h3>
        </Reveal>
        <Reveal>
          <p>{description}</p>
        </Reveal>
        <Reveal>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{`● ${skill}`}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <Link href={link} target="_blank" aria-label="Ir para certificado">
            Certificado
          </Link>
        </Reveal>
      </div>
    </div>
  );
}

export default Card;
