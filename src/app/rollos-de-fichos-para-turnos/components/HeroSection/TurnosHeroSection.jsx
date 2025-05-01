import styles from "./TurnosHeroSection.module.scss";
import Header from "../../../components/Header/Header";

function TurnosHeroSection({
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
        <div className={styles.central__container}>
          <img
            className={styles.hero__img__desktop}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744458412/Nueva_imagen_2x-8_xi5zmr.webp"
            alt="Rollos para impresora térmica personalizados"
          />
          <img
            className={styles.hero__img__mobile}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745243187/Recurso_25_3x-8_hwimpu.webp"
            alt="Rollos para impresora térmica personalizados"
          />
          <div className={styles.hero__text}>
            <img
              className={styles.hero__img__logo}
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744463735/12-8_qjsewx.webp"
              alt="Logo Turno Express"
            />
            <h1>Numeración clara y corte preciso</h1>
            <p>para agilizar la atención de turnos.</p>
            {boton ? (
              <a className={styles.hero__btn} href={boton.href}>
                {boton.text}
              </a>
            ) : (
              <a
                className={styles.hero__btn}
                href="http://landing-tecnologiaplus-nextjs-dev.vercel.app/ver-mas/rollos-de-turnos"
              >
                Ver más
              </a>
            )}
          </div>
          <div className={styles.hero__text__mobile}>
            <h1>
              Rollos
              <br />
              de turnos
            </h1>
            <p>
              <span>
                Numeración clara
                <br />y corte preciso para
              </span>
            </p>
            <p>agilizar la atención de turnos.</p>
            {boton ? (
              <a className={styles.hero__btn} href={boton.href}>
                {boton.text}
              </a>
            ) : (
              <a
                className={styles.hero__btn}
                href="http://landing-tecnologiaplus-nextjs-dev.vercel.app/ver-mas/rollos-de-turnos"
              >
                Ver más
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TurnosHeroSection;
