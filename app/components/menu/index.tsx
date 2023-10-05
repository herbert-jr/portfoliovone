"use client";

import React from "react";
import styles from "./menu.module.scss";
import ThemeButton from "../buttons/themeButton";
import Hamburger from "../buttons/HamburguerButton";
import Link from "next/link";
import { useApi } from "@/app/context/porfolioContext";

function Menu() {
  const { openMenu } = useApi();
  const isOpen = openMenu
    ? `${styles.menu_list} ${styles.open}`
    : styles.menu_list;
  return (
    <div className={styles.container}>
      <ThemeButton />
      <Hamburger />
      <ul className={isOpen}>
        <li className={styles.menu_item}>
          <Link href="/sobre" className={styles.menu_link}>
            Sobre
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link href="/certificados" className={styles.menu_link}>
            Certificados
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link href="/projetos" className={styles.menu_link}>
            Projetos
          </Link>
        </li>
        <li className={styles.menu_contacts}>
          <Link href="/#contatos" className={styles.menu_link}>
            Contatos
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
