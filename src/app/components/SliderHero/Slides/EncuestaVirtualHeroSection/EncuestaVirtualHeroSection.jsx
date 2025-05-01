import styles from "./EncuestaVirtualHeroSection.module.scss";
import Header from "../../../../components/Header/Header";

function EncuestaVirtualHeroSection({
  hideHeader = false,
  backgroundTransparent = false,
  boton,
}) {
  return (
    <section
      className={`${styles.hero} ${
        backgroundTransparent ? styles.transparent : ""
      }`}
    >
      {!hideHeader && <Header />}
      <div className={styles.hero__content}>
        <img
          className={styles.hero__img}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745506523/7_4x-8_2_a0z5uj.webp"
          alt="Software de encuestas en línea"
        />
        <img
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745243245/Recurso_21_3x-8_1_pkt9h3.webp"
          alt="Software de encuestas en línea"
        />

        <div className={styles.hero__text}>
          <img
            className={styles.hero__img__logo__turnoMaster}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744467470/6-8_xncpdx.webp"
            alt="Logo Opina Master"
          />
          <h1>Encuesta virtual</h1>
          <p>Detecta puntos débiles y mejora tu negocio.</p>
          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default EncuestaVirtualHeroSection;
