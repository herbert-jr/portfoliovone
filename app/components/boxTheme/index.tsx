"use client";

import React from "react";
import styles from "./theme.module.scss";
import { useApi } from "@/app/context/porfolioContext";

type BoxThemeProps = {
  theme: string;
  onClick: () => void;
};

type Themes = {
  [key: string]: string;
};

const themes: Themes = {
  light: "Claro",
  dark: "Escuro",
  sky: "Moderno",
  pastel: "Pastel",
  choco: "Chocolate",
  ocean: "Oceano",
  florest: "Floresta",
  sunset: "Pôr do Sol",
};

function BoxTheme({ theme, onClick }: BoxThemeProps) {
  const { openThemes } = useApi();
  const isOpen = openThemes
    ? `${styles.container} ${styles.open}`
    : styles.container;
  return (
    <button
      className={`${isOpen} ${styles[theme]}`}
      onClick={onClick}
      aria-label={`escolher tema ${theme}`}
    >
      <div className={styles.theme_container}>
        <span className={styles.theme}>{themes[theme]}</span>
        <div className={styles.colors}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </button>
  );
}

export default BoxTheme;
