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
          className={styles.hero__img}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745506512/8_4x-8_1_tpdrqu.webp"
          alt="Turnero caracol rojo con su complemento pantalla de turno y tickets"
        />
        <img
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744861623/Group_8_pkcnqa.webp"
          alt="Turnero caracol rojo con su complemento pantalla de turno y tickets"
        />

        <div className={styles.hero__text}>
          <img
            className={styles.hero__img__logo}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744463735/12-8_qjsewx.webp"
            alt="Logo Turno Express"
          />
          <h1>Turnero digital</h1>
          <p>Orden y agilidad en cada turno.</p>
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
