import Link from "next/link";
import Reveal from "../reveal";
import styles from "./form.module.scss";
import React from "react";

function Form() {
  return (
    <Reveal>
      <article className={styles.form__container}>
        <form action="" className={styles.form}>
          <div className={styles.form__group}>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className={styles.form__group}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className={styles.form__group}>
            <label htmlFor="message">Mensagem</label>
            <textarea name="message" id="message" />
          </div>
          <div className={styles.form__group__social}>
            <button>Enviar</button>
            <Link
              href="https://www.linkedin.com/in/herbert-marques-963136106/"
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link href="https://github.com/herbert-jr" target="_blank">
              GitHub
            </Link>
          </div>
        </form>
      </article>
    </Reveal>
  );
}

export default Form;
