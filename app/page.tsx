import HeroSection from "./components/hero";
import Resume from "./components/resume";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <Resume />
    </main>
  );
}
