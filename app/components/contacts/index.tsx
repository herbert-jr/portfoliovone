import Image from "next/image";
import styles from "./contacts.module.scss";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import Title from "../title";
import Form from "../formulario";
import Reveal from "../reveal";

function Contacts() {
  return (
    <section className={styles.contacts} id="contatos">
      <Reveal>
        <Title
          subtitle="Que tal um alo?"
          title="Entre em contato."
          type="principal"
        />
      </Reveal>
      <Form />
    </section>
  );
}

export default Contacts;
