import styles from "./styles/hero-inicio.module.scss";

export default function HeroBackground({ children }) {
  return (
    <div className={styles.slider__container}>
      <div className={styles.background__mobile}></div>
      <div className={styles.background__desktop}></div>
      {children}
    </div>
  );
}