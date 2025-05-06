import styles from "./TurnoExpressHeroSection.module.scss";
import Header from "../../../../components/Header/Header";

function TurnoExpressHeroSection({
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
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431726/Imagen_bannerprincipal_2x-8_daisi3.webp"
          alt="Turnero caracol rojo con su complemento pantalla de turno y tickets"
        />
        <img
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745243183/Recurso_22_3x-8_ofq0yg.webp"
          alt="Turnero caracol rojo con su complemento pantalla de turno y tickets"
        />

        <div className={styles.hero__text}>
          <h1>
            <span>Turnero digital:</span>
            <br />
            Adiós a las filas
          </h1>
          <p>Agilidad y orden en cada turno.</p>
          {boton ? (
            <a className={styles.hero__btn} href={boton.href}>
              {boton.text}
            </a>
          ) : null}
        </div>

        <div className={styles.hero__text__mobile}>
          <h1>Turnero digital</h1>
          <p>
            <span>Adiós a las filas</span>
          </p>
          <img
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745196016/linea_2x-8_n80wv9_6a5e17-horizontal_giisl2.webp"
            alt="separador de textos"
            className={styles.separador__text}
          />
          <p>
            Orden y agilidad
            <br />
            en cada turno.
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

export default TurnoExpressHeroSection;
