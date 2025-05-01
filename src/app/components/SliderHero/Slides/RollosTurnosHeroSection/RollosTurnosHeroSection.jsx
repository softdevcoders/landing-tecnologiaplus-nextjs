import styles from "./RollosTurnosHeroSection.module.scss";
import Header from "../../../../components/Header/Header";

function RollosTurnosHeroSection({
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
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745506512/10_4x-8_l0ccbu.webp"
          alt="Rollos para impresora térmica personalizados"
        />
        <img
          className={styles.hero__img__mobile}
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744861625/Group_6_gqyr8k.webp"
          alt="Rollos para impresora térmica personalizados"
        />
        <div className={styles.hero__text}>
          <img
            className={styles.hero__img__logo}
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744463735/12-8_qjsewx.webp"
            alt="Logo Turno Express"
          />
          <h1>Rollos de turnos</h1>
          <p>Para dispensador tipo caracol.</p>
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
    </section>
  );
}

export default RollosTurnosHeroSection;
