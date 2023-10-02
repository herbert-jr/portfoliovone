import Link from "next/link";
import styles from "./navBar.module.scss";
import React from "react";

function NavBar() {
  return (
    <nav className={styles.container}>
      <Link href="/">Home</Link>
      <Link href="/sobre">Sobre mim</Link>
      <Link href="/projetos">Projetos</Link>
      <Link href="/certificados">Certificados</Link>
      <Link href="#contato">Contatos</Link>
    </nav>
  );
}

export default NavBar;
