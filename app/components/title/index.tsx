import React from "react";
import styles from "./title.module.scss";

type ColorType = {
  [key: string]: string;
};

type TitleProps = {
  subtitle: string;
  title: string;
  type: string;
};

const colors: ColorType = {
  principal: styles.title__principal,
  alternative: styles.title__alternative,
  primary: styles.title__primary,
};

function Title({ subtitle, title, type }: TitleProps) {
  return (
    <div className={colors[type]}>
      <span>{subtitle}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default Title;
