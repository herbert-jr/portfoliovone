"use client";

import React from "react";
import styles from "./themes.module.scss";
import BoxTheme from "../boxTheme";
import { useApi } from "@/app/context/porfolioContext";

function Themes() {
  const { handleClickSetTime, openThemes } = useApi();
  const themes = [
    "light",
    "dark",
    "sky",
    "pastel",
    "choco",
    "ocean",
    "florest",
    "sunset",
  ];
  const isOpen = openThemes
    ? `${styles.container} ${styles.open}`
    : styles.container;

  return (
    <div className={isOpen}>
      {themes.map((theme) => (
        <BoxTheme
          key={theme}
          theme={theme}
          onClick={() => handleClickSetTime(theme)}
        />
      ))}
    </div>
  );
}

export default Themes;
