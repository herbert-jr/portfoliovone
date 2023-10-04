import HeroSection from "./components/hero";
import Projects from "./components/projects";
import Resume from "./components/resume";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <Resume />
      <Projects />
    </main>
  );
}
