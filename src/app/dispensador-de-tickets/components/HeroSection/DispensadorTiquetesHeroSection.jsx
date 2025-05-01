import styles from "./DispensadorTiquetesHeroSection.module.scss";
import Header from "../../../components/Header/Header";

function DispensadorTiquetesHeroSection({
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
          className={styles.hero__img__desktop}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738424725/Imagen_banner_2x-8_qd3lwx.webp"
          alt="Dispensador de tiquetes rojo"
        />
        <img
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745243187/Recurso_23_3x-8_kplypr.webp"
          alt="Dispensador de tiquetes rojo"
        />

        <div className={styles.hero__text}>
          <img
            className={styles.hero__img__logo}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744463735/12-8_qjsewx.webp"
            alt="Logo Turno Express"
          />
          <h1>
            <span>Dispensador de tickets</span>
            <br />
            Adiós a las filas
          </h1>
          <p>Orden y comodidad en cada turno.</p>
          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : (
            <a
              className={styles.hero__btn}
              href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/dispensador-de-tickets/dispensador-de-tickets-caracol"
            >
              Ver más
            </a>
          )}
        </div>
        <div className={styles.hero__text__mobile}>
          <h1>Dispensador de tickets</h1>
          <p>
            <span>Adiós a las filas</span>
          </p>
          <img
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745196016/linea_2x-8_n80wv9_6a5e17-horizontal_giisl2.webp"
            alt="separador de textos"
            className={styles.separador__text}
          />
          <p>
            Orden y comodidad
            <br />
            en cada turno.
          </p>
          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : (
            <a
              className={styles.hero__btn}
              href="https://landing-tecnologiaplus-nextjs-dev.vercel.app/dispensador-de-tickets/dispensador-de-tickets-caracol"
            >
              Ver más
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default DispensadorTiquetesHeroSection;
