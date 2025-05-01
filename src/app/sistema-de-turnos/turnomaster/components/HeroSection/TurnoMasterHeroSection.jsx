import styles from "./TurnoMasterHeroSection.module.scss";
import Header from "../../../../components/Header/Header";

function TurnoMasterHeroSection({
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
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738860875/imagen_ppal_2x-8_1_cpkvb2.webp"
          alt="Software de feedback de clientes con pantalla de turnos"
        />
        <img
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745263542/Recurso_20_3x-8_bbrvfp.webp"
          alt="Software de feedback de clientes con pantalla de turnos"
        />

        <div className={styles.hero__text}>
          <h1>
            <span>TurnoMaster:</span>
            <br />
            Sistema de turnos de espera
          </h1>
          <p>Lleva tu sala de espera al siguiente nivel</p>

          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : null}
        </div>
        <div className={styles.hero__text__mobile}>
          <h1>
            Sistema
            <br />
            de turnos
            <br />
            de espera
          </h1>
          <p>
            <span>
              Digitaliza tu sala de
              <br />
              espera fácilmente.
            </span>
          </p>

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

export default TurnoMasterHeroSection;
