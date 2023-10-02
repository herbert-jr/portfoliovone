import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./logo.module.scss";

function Logo() {
  return (
    <Link href="/" className={styles.container} title="Pagina Principal">
      <Image
        src="/perfil.png"
        alt="perfil"
        width={48}
        height={48}
        priority={true}
      />
      <span>JR</span>
      <Image
        src="/verificado.png"
        alt="verificado"
        width={22}
        height={22}
        priority={true}
      />
    </Link>
  );
}

export default Logo;
