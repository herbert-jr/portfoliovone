import React from "react";
import styles from "./secBtn.module.scss";
import Link from "next/link";

type BtnProps = {
  path: string;
  text: string;
  arial: string;
};

function SectionButton({ path, text, arial }: BtnProps) {
  return (
    <Link className={styles.link} href={path} aria-label={arial}>
      {text}
    </Link>
  );
}

export default SectionButton;
